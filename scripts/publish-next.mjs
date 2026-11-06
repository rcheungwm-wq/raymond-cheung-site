import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const queuePath = join(root, "data", "queue.json");
const insightsPath = join(root, "data", "insights.json");

const today = new Date().toISOString().slice(0, 10);

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

// Strip queue-only fields before inserting into insights.json
const { scheduledDate, queueStatus, ...insightData } = post;

const insights = JSON.parse(readFileSync(insightsPath, "utf8"));
insights.push(insightData);
writeFileSync(insightsPath, JSON.stringify(insights, null, 2), "utf8");

// Mark as published in queue
const updated = queue.map((p) =>
  p.slug === post.slug ? { ...p, queueStatus: "published" } : p
);
writeFileSync(queuePath, JSON.stringify(updated, null, 2), "utf8");

console.log(post.slug);
