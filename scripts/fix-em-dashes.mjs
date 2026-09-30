#!/usr/bin/env node
/**
 * scripts/fix-em-dashes.mjs
 *
 * Replaces every em dash (—) in content files with natural punctuation:
 *   - double-em-dash parenthetical  " — inner content — "  →  ", inner content,"
 *   - "— it/this/they/these/there"  (new sentence following)  →  ". It/This/…"
 *   - all other " — "               →  ", "
 *
 * Run once to fix existing content.  The pre-commit hook then prevents new ones.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(import.meta.url), "..", "..");

const INCLUDE_DIRS = ["data", "app", "components"];
const INCLUDE_EXT = new Set([".ts", ".tsx", ".md"]);

// ── replacement rules, applied in order ─────────────────────────────────────

function fix(text) {
  // 1. Double em-dash parenthetical: " — inner — "  →  ", inner,"
  //    Greedy-match the inner span (no nested em dashes).
  text = text.replace(/ — ([^—\n]{1,120}?) — /g, (_, inner) => `, ${inner.trim()},`);

  // 2. Em dash before sentence-starter pronouns/demonstratives → full stop + cap
  const newSentenceWords = [
    "It ", "This ", "They ", "These ", "Those ", "There ", "That ",
    "He ", "She ", "We ", "You ", "Most ", "Many ", "Few ",
  ];
  for (const w of newSentenceWords) {
    // Only when the em dash follows an end-of-clause word (not mid-compound).
    // Simple heuristic: previous char is a letter or closing quote/paren.
    const re = new RegExp(` — ${w}`, "g");
    text = text.replace(re, `. ${w}`);
  }

  // 3. Remaining " — " → ", "
  text = text.replace(/ — /g, ", ");

  // 4. Lone em dash with no spaces (e.g. in attribution strings "Name—Title")
  text = text.replace(/—/g, ", ");

  // 5. Post-clean: ". and " / ". or " / ". but " at sentence start is wrong.
  text = text.replace(/\. (and |or |but |nor )/g, (_, conj) => `, ${conj}`);

  // 6. Double-comma artifacts from nested replacements ", ," → ","
  text = text.replace(/, ,/g, ",");

  // 7. Comma before closing quote that was just added ", " → strip extra space
  //    (no-op if no issue, safe to run)

  return text;
}

// ── walk and rewrite ─────────────────────────────────────────────────────────

function walk(dir) {
  let files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory() && !entry.startsWith(".") && entry !== "node_modules") {
      files = files.concat(walk(full));
    } else if (stat.isFile() && INCLUDE_EXT.has(extname(full))) {
      files.push(full);
    }
  }
  return files;
}

let totalFixed = 0;

for (const dir of INCLUDE_DIRS) {
  const abs = join(ROOT, dir);
  for (const file of walk(abs)) {
    const original = readFileSync(file, "utf8");
    if (!original.includes("—")) continue;
    const fixed = fix(original);
    const count = (original.match(/—/g) || []).length;
    writeFileSync(file, fixed, "utf8");
    console.log(`  fixed ${count.toString().padStart(3)} em-dashes  ${file.replace(ROOT, "")}`);
    totalFixed += count;
  }
}

console.log(`\nTotal em-dashes replaced: ${totalFixed}`);
