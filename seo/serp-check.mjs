#!/usr/bin/env node
/**
 * seo/serp-check.mjs — daily competitor / rank tracker for raymondcheungwm.com
 *
 * For each tracked keyword (seo/serp-keywords.json) it pulls Google Singapore
 * page-1 organic results, records who ranks, works out Raymond's position and how
 * it moved since the last run, and writes:
 *
 *   seo/serp-history/<keyword-slug>.json   append-only daily snapshots
 *   seo/serp-report-<YYYY-MM-DD>.md         human-readable diff for today
 *
 * It also prints a compact summary to stdout so the daily blog routine can read
 * it and pick which keyword to attack.
 *
 * Providers (auto-detected from env, or force with --provider):
 *   SerpAPI          SERPAPI_KEY                     (accurate, 100 free/mo)
 *   Google CSE JSON  GOOGLE_CSE_KEY + GOOGLE_CSE_CX  (rough, 100 free/day)
 *
 * Put keys in seo/.env (gitignored) or the real environment:
 *   SERPAPI_KEY=xxxx
 *   # or
 *   GOOGLE_CSE_KEY=xxxx
 *   GOOGLE_CSE_CX=xxxx
 *
 * Usage:
 *   node seo/serp-check.mjs                 all tracked keywords
 *   node seo/serp-check.mjs --tier=1        only tier-1 keywords
 *   node seo/serp-check.mjs --limit=5       first 5 tracked keywords
 *   node seo/serp-check.mjs --provider=serpapi
 *   node seo/serp-check.mjs --dry-run       resolve config + provider, no API calls
 *   node seo/serp-check.mjs --mock          synthetic results, no keys — smoke-test the pipeline
 *
 * Exit codes: 0 ok, 1 config/provider error, 2 every keyword lookup failed.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SEO_DIR = dirname(fileURLToPath(import.meta.url));
const HISTORY_DIR = join(SEO_DIR, "serp-history");
const CONFIG_PATH = join(SEO_DIR, "serp-keywords.json");
const ENV_PATH = join(SEO_DIR, ".env");

// ----------------------------------------------------------------------------
// args + env
// ----------------------------------------------------------------------------
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] ?? true] : [a, true];
  })
);
const DRY_RUN = Boolean(args["dry-run"]);
const MOCK = Boolean(args.mock);
const TIER_FILTER = args.tier
  ? String(args.tier).split(",").map((n) => Number(n.trim()))
  : null;
const LIMIT = args.limit ? Number(args.limit) : null;
const FORCED_PROVIDER = args.provider ? String(args.provider) : null;

function loadEnv() {
  if (!existsSync(ENV_PATH)) return;
  for (const raw of readFileSync(ENV_PATH, "utf8").split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadEnv();

// ----------------------------------------------------------------------------
// helpers
// ----------------------------------------------------------------------------
const todayISO = () => new Date().toISOString().slice(0, 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function normaliseHost(urlOrHost) {
  let h = String(urlOrHost || "");
  try {
    h = new URL(h.includes("://") ? h : `https://${h}`).hostname;
  } catch {
    /* keep raw */
  }
  return h.replace(/^www\./, "").toLowerCase();
}

function isTarget(host, targetDomain) {
  const h = normaliseHost(host);
  const t = normaliseHost(targetDomain);
  return h === t || h.endsWith(`.${t}`);
}

// ----------------------------------------------------------------------------
// providers — each returns [{ position, url, domain, title }]
// ----------------------------------------------------------------------------
async function fetchSerpApi(query, market) {
  const u = new URL("https://serpapi.com/search.json");
  u.searchParams.set("engine", "google");
  u.searchParams.set("q", query);
  u.searchParams.set("google_domain", market.google_domain || "google.com.sg");
  u.searchParams.set("gl", market.gl || "sg");
  u.searchParams.set("hl", market.hl || "en");
  if (market.location) u.searchParams.set("location", market.location);
  u.searchParams.set("num", "10");
  u.searchParams.set("api_key", process.env.SERPAPI_KEY);

  const res = await fetch(u, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`SerpAPI HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const json = await res.json();
  if (json.error) throw new Error(`SerpAPI: ${json.error}`);
  return (json.organic_results || []).slice(0, 10).map((r, i) => ({
    position: r.position ?? i + 1,
    url: r.link,
    domain: normaliseHost(r.link || r.displayed_link || ""),
    title: r.title || "",
  }));
}

async function fetchGoogleCse(query, market) {
  const u = new URL("https://www.googleapis.com/customsearch/v1");
  u.searchParams.set("key", process.env.GOOGLE_CSE_KEY);
  u.searchParams.set("cx", process.env.GOOGLE_CSE_CX);
  u.searchParams.set("q", query);
  u.searchParams.set("num", "10");
  u.searchParams.set("gl", market.gl || "sg");
  u.searchParams.set("hl", market.hl || "en");
  u.searchParams.set("cr", "countrySG");

  const res = await fetch(u, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`Google CSE HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const json = await res.json();
  return (json.items || []).slice(0, 10).map((r, i) => ({
    position: i + 1,
    url: r.link,
    domain: normaliseHost(r.link || r.displayLink || ""),
    title: r.title || "",
  }));
}

// Deterministic synthetic SERP for smoke-testing without API keys.
async function fetchMock(query, _market) {
  const seed = [...query].reduce((a, c) => a + c.charCodeAt(0), 0);
  const pool = [
    "sid.org.sg",
    "incorp.asia",
    "grantthornton.sg",
    "russellreynolds.com",
    "estes.sg",
    "shkoh.com.sg",
    "raymondcheungwm.com",
    "linkedin.com",
    "mas.gov.sg",
    "sgx.com",
  ];
  const rotated = pool.slice(seed % pool.length).concat(pool.slice(0, seed % pool.length));
  await sleep(50);
  return rotated.slice(0, 10).map((domain, i) => ({
    position: i + 1,
    url: `https://${domain}/${slugify(query)}`,
    domain,
    title: `${query} — ${domain}`,
  }));
}

function resolveProvider() {
  if (MOCK) return { name: "mock", fetch: fetchMock };
  const wanted = FORCED_PROVIDER;
  const haveSerp = Boolean(process.env.SERPAPI_KEY);
  const haveCse = Boolean(process.env.GOOGLE_CSE_KEY && process.env.GOOGLE_CSE_CX);

  if (wanted === "serpapi") {
    if (!haveSerp) throw new Error("--provider=serpapi but SERPAPI_KEY is not set");
    return { name: "serpapi", fetch: fetchSerpApi };
  }
  if (wanted === "google_cse") {
    if (!haveCse) throw new Error("--provider=google_cse but GOOGLE_CSE_KEY / GOOGLE_CSE_CX are not set");
    return { name: "google_cse", fetch: fetchGoogleCse };
  }
  if (haveSerp) return { name: "serpapi", fetch: fetchSerpApi };
  if (haveCse) return { name: "google_cse", fetch: fetchGoogleCse };
  return null;
}

// ----------------------------------------------------------------------------
// history
// ----------------------------------------------------------------------------
function readHistory(slug) {
  const p = join(HISTORY_DIR, `${slug}.json`);
  if (!existsSync(p)) return [];
  try {
    const parsed = JSON.parse(readFileSync(p, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeHistory(slug, snapshots) {
  writeFileSync(join(HISTORY_DIR, `${slug}.json`), JSON.stringify(snapshots, null, 2) + "\n");
}

const posLabel = (p) => (p == null ? "not in top 10" : `#${p}`);

function deltaLabel(prev, curr) {
  if (prev == null && curr == null) return "—";
  if (prev == null && curr != null) return `NEW at #${curr}`;
  if (prev != null && curr == null) return `dropped out (was #${prev})`;
  if (prev === curr) return "no change";
  const diff = prev - curr; // positive = improved (smaller number)
  return diff > 0 ? `▲ +${diff} (was #${prev})` : `▼ ${diff} (was #${prev})`;
}

// ----------------------------------------------------------------------------
// main
// ----------------------------------------------------------------------------
async function main() {
  if (!existsSync(CONFIG_PATH)) {
    console.error(`Missing ${CONFIG_PATH}`);
    process.exit(1);
  }
  const config = JSON.parse(readFileSync(CONFIG_PATH, "utf8"));
  const targetDomain = config.targetDomain;
  const market = config.market || {};

  let keywords = (config.keywords || []).filter((k) => k.track !== false);
  if (TIER_FILTER) keywords = keywords.filter((k) => TIER_FILTER.includes(k.tier));
  if (LIMIT) keywords = keywords.slice(0, LIMIT);

  if (!keywords.length) {
    console.error("No keywords selected after filters.");
    process.exit(1);
  }

  let provider = null;
  try {
    provider = resolveProvider();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const noProviderHelp = [
    "No SERP provider configured.",
    "",
    "Add ONE of these to seo/.env (gitignored) or the environment:",
    "  SERPAPI_KEY=xxxx                         # https://serpapi.com  (100 free/mo)",
    "  GOOGLE_CSE_KEY=xxxx  GOOGLE_CSE_CX=xxxx  # https://developers.google.com/custom-search  (100 free/day)",
    "",
    "Then re-run: npm run serp",
  ].join("\n");

  if (DRY_RUN) {
    console.log(`SERP check (dry run) · ${todayISO()} · provider=${provider ? provider.name : "NONE"} · ${keywords.length} keyword(s)`);
    for (const k of keywords) console.log(`  [tier ${k.tier}] ${k.q}`);
    if (!provider) console.log(`\n${noProviderHelp}`);
    else console.log("\nConfig + provider OK. Remove --dry-run to run live.");
    process.exit(0);
  }

  if (!provider) {
    console.error(noProviderHelp);
    process.exit(1);
  }

  console.log(`SERP check · ${todayISO()} · provider=${provider.name} · ${keywords.length} keyword(s)`);

  if (!existsSync(HISTORY_DIR)) mkdirSync(HISTORY_DIR, { recursive: true });

  const date = todayISO();
  const rows = [];
  let failures = 0;
  const gap = MOCK ? 0 : 1500; // ms between lookups — be gentle on rate limits

  for (const [i, k] of keywords.entries()) {
    const slug = slugify(k.q);
    process.stdout.write(`  (${i + 1}/${keywords.length}) ${k.q} … `);
    let results;
    try {
      results = await provider.fetch(k.q, market);
    } catch (err) {
      failures++;
      console.log(`FAILED — ${err.message}`);
      rows.push({ keyword: k.q, tier: k.tier, slug, error: err.message });
      await sleep(gap);
      continue;
    }

    const hit = results.find((r) => isTarget(r.domain, targetDomain));
    const targetPosition = hit ? hit.position : null;

    const history = readHistory(slug);
    const last = history.length ? history[history.length - 1] : null;
    const prevPosition = last ? last.targetPosition ?? null : null;
    // "new entrant" only makes sense once there's a prior snapshot to compare to
    const prevDomains = new Set((last?.results || []).map((r) => r.domain));
    const newEntrants = last
      ? results
          .filter((r) => !prevDomains.has(r.domain) && !isTarget(r.domain, targetDomain))
          .map((r) => `${r.domain} (#${r.position})`)
      : [];

    // de-dupe history for same date (re-runs overwrite the day)
    const snapshots = history.filter((s) => s.date !== date);
    snapshots.push({
      date,
      provider: provider.name,
      targetPosition,
      results: results.map((r) => ({ position: r.position, domain: r.domain, url: r.url, title: r.title })),
    });
    writeHistory(slug, snapshots);

    console.log(`${posLabel(targetPosition)}  ${deltaLabel(prevPosition, targetPosition)}`);
    rows.push({
      keyword: k.q,
      tier: k.tier,
      slug,
      targetPosition,
      prevPosition,
      delta: deltaLabel(prevPosition, targetPosition),
      competitors: results
        .filter((r) => !isTarget(r.domain, targetDomain))
        .slice(0, 5)
        .map((r) => `${r.domain} (#${r.position})`),
      newEntrants,
    });

    await sleep(gap);
  }

  writeReport(date, provider.name, targetDomain, rows);
  printSummary(rows);

  if (failures === keywords.length) process.exit(2);
  process.exit(0);
}

// ----------------------------------------------------------------------------
// report + summary
// ----------------------------------------------------------------------------
function writeReport(date, providerName, targetDomain, rows) {
  const ok = rows.filter((r) => !r.error);
  const ranked = ok.filter((r) => r.targetPosition != null).sort((a, b) => a.targetPosition - b.targetPosition);
  const movers = ok.filter((r) => r.delta && !/no change|^—$|^NEW/.test(r.delta));
  const gaps = ok.filter((r) => r.targetPosition == null);

  const lines = [];
  lines.push(`# SERP report — ${date}`);
  lines.push("");
  lines.push(`Target: **${targetDomain}** · provider: ${providerName} · keywords checked: ${rows.length}`);
  lines.push("");

  lines.push("## Where Raymond ranks (page 1)");
  lines.push("");
  if (ranked.length) {
    lines.push("| Keyword | Position | Change vs last run |");
    lines.push("|---|---|---|");
    for (const r of ranked) lines.push(`| ${r.keyword} | #${r.targetPosition} | ${r.delta} |`);
  } else {
    lines.push("_Not in the top 10 for any tracked keyword yet._");
  }
  lines.push("");

  lines.push("## Movers since last run");
  lines.push("");
  if (movers.length) {
    lines.push("| Keyword | Now | Change |");
    lines.push("|---|---|---|");
    for (const r of movers) lines.push(`| ${r.keyword} | ${r.targetPosition == null ? "—" : "#" + r.targetPosition} | ${r.delta} |`);
  } else {
    lines.push("_No position changes since the last run._");
  }
  lines.push("");

  lines.push("## Open gaps — not ranking, worth attacking");
  lines.push("");
  if (gaps.length) {
    lines.push("| Keyword | Tier | Page-1 competitors (top 5) | New entrants since last run |");
    lines.push("|---|---|---|---|");
    for (const r of gaps) {
      lines.push(
        `| ${r.keyword} | ${r.tier} | ${r.competitors.join(", ") || "—"} | ${r.newEntrants.join(", ") || "—"} |`
      );
    }
  } else {
    lines.push("_Ranking somewhere in the top 10 for every tracked keyword._");
  }
  lines.push("");

  lines.push("## Full page-1 competitor picture");
  lines.push("");
  for (const r of ok) {
    lines.push(`### ${r.keyword} — Raymond ${r.targetPosition == null ? "not in top 10" : "#" + r.targetPosition}`);
    lines.push(r.competitors.length ? r.competitors.map((c) => `- ${c}`).join("\n") : "- (no competitors captured)");
    if (r.newEntrants.length) lines.push(`- _new since last run:_ ${r.newEntrants.join(", ")}`);
    lines.push("");
  }

  const errs = rows.filter((r) => r.error);
  if (errs.length) {
    lines.push("## Lookup failures");
    lines.push("");
    for (const r of errs) lines.push(`- ${r.keyword}: ${r.error}`);
    lines.push("");
  }

  const p = join(SEO_DIR, `serp-report-${date}.md`);
  writeFileSync(p, lines.join("\n") + "\n");
  console.log(`\nReport written: seo/serp-report-${date}.md`);
}

function printSummary(rows) {
  const ok = rows.filter((r) => !r.error);
  const ranked = ok.filter((r) => r.targetPosition != null);
  const gaps = ok.filter((r) => r.targetPosition == null);
  const declines = ok.filter((r) => /▼|dropped out/.test(r.delta || ""));
  const gains = ok.filter((r) => /▲|NEW at/.test(r.delta || ""));

  console.log("\n=== SERP SUMMARY ===");
  console.log(`Ranking page 1: ${ranked.length}/${ok.length}`);
  if (ranked.length) {
    for (const r of ranked.sort((a, b) => a.targetPosition - b.targetPosition)) {
      console.log(`  #${r.targetPosition}  ${r.keyword}  (${r.delta})`);
    }
  }
  if (gains.length) {
    console.log("Improved / new:");
    for (const r of gains) console.log(`  ${r.keyword} — ${r.delta}`);
  }
  if (declines.length) {
    console.log("Declined — priority to defend:");
    for (const r of declines) console.log(`  ${r.keyword} — ${r.delta}`);
  }
  console.log("Suggested keyword targets (not ranking, tier then weakest competition):");
  for (const r of gaps.sort((a, b) => a.tier - b.tier).slice(0, 5)) {
    console.log(`  [tier ${r.tier}] ${r.keyword} — page 1: ${r.competitors.slice(0, 3).join(", ") || "unknown"}`);
  }
  console.log("====================");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
