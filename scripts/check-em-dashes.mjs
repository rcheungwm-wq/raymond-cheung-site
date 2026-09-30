#!/usr/bin/env node
/**
 * scripts/check-em-dashes.mjs
 *
 * Fails with exit code 1 if any em dash (—) appears in a staged .ts/.tsx/.md file.
 * Run by the pre-commit hook; also available as `npm run lint:em`.
 *
 * Usage:
 *   node scripts/check-em-dashes.mjs          # checks staged files (pre-commit)
 *   node scripts/check-em-dashes.mjs --all    # checks all content files
 */

import { execSync } from "node:child_process";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(import.meta.url), "..", "..");
const ALL_MODE = process.argv.includes("--all");
const INCLUDE_EXT = new Set([".ts", ".tsx", ".md"]);
const CONTENT_DIRS = ["data", "app", "components"];

function walk(dir) {
  let files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory() && !entry.startsWith(".") && entry !== "node_modules") {
      files = files.concat(walk(full));
    } else if (INCLUDE_EXT.has(extname(full))) {
      files.push(full);
    }
  }
  return files;
}

function getStagedFiles() {
  try {
    const out = execSync("git diff --cached --name-only --diff-filter=ACM", {
      encoding: "utf8",
      cwd: ROOT,
    });
    return out
      .trim()
      .split("\n")
      .filter(Boolean)
      .filter((f) => INCLUDE_EXT.has(extname(f)))
      .map((f) => join(ROOT, f));
  } catch {
    return [];
  }
}

const files = ALL_MODE
  ? CONTENT_DIRS.flatMap((d) => walk(join(ROOT, d)))
  : getStagedFiles();

let violations = 0;

for (const file of files) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  if (!text.includes("—")) continue;

  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("—")) {
      const rel = file.replace(ROOT, "").replace(/\\/g, "/");
      console.error(`  ✗ em dash  ${rel}:${i + 1}  →  ${lines[i].slice(0, 100).trim()}`);
      violations++;
    }
  }
}

if (violations > 0) {
  console.error(`\n${violations} em dash(es) found. Run: node scripts/fix-em-dashes.mjs\n`);
  process.exit(1);
} else {
  if (ALL_MODE) console.log("No em dashes found.");
  process.exit(0);
}
