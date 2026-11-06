import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const queuePath = join(root, "data", "queue.json");
const insightsPath = join(root, "data", "insights.ts");

const today = new Date().toISOString().slice(0, 10);

function serialize(obj, indent = 0) {
  const sp = " ".repeat(indent);
  const isp = " ".repeat(indent + 2);
  if (obj === null) return "null";
  if (typeof obj === "boolean") return String(obj);
  if (typeof obj === "number") return String(obj);
  if (typeof obj === "string") return JSON.stringify(obj);
  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]";
    const items = obj.map((item) => isp + serialize(item, indent + 2));
    return `[\n${items.join(",\n")},\n${sp}]`;
  }
  const entries = Object.entries(obj)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${isp}${k}: ${serialize(v, indent + 2)}`);
  if (entries.length === 0) return "{}";
  return `{\n${entries.join(",\n")},\n${sp}}`;
}

let queue;
try {
  queue = JSON.parse(readFileSync(queuePath, "utf8"));
} catch {
  console.log("no-posts");
  process.exit(0);
}

const due = queue.filter(
  (p) => p.queueStatus === "pending" && p.scheduledDate <= today
);

if (due.length === 0) {
  console.log("no-posts");
  process.exit(0);
}

// Publish the earliest scheduled post
due.sort((a, b) => a.scheduledDate.localeCompare(b.scheduledDate));
const post = due[0];

// Strip queue-only fields before serializing into the TS file
const { scheduledDate, queueStatus, ...insightData } = post;

const insightsContent = readFileSync(insightsPath, "utf8");
const marker = "];";
const insertIdx = insightsContent.lastIndexOf(marker);
if (insertIdx === -1) {
  console.error("Could not find closing ]; in insights.ts");
  process.exit(1);
}

const serialized = "  " + serialize(insightData, 2).replace(/^\{/, "{").trimStart();
const newContent =
  insightsContent.slice(0, insertIdx) +
  serialized +
  ",\n" +
  insightsContent.slice(insertIdx);

writeFileSync(insightsPath, newContent, "utf8");

// Mark as published in queue
const updated = queue.map((p) =>
  p.slug === post.slug ? { ...p, queueStatus: "published" } : p
);
writeFileSync(queuePath, JSON.stringify(updated, null, 2), "utf8");

console.log(post.slug);
