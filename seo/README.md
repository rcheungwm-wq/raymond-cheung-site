# SEO tooling

## Files
| File | Purpose |
|---|---|
| `keywords.md` | Master keyword strategy — tiers, intent scores, competitor notes |
| `serp-analysis.md` | One-off deep SERP analysis notes |
| `daily-routine.md` | The daily 2-post content routine (Step 0 = the SERP check below) |
| `serp-keywords.json` | Keywords the tracker checks each day — keep in sync with `keywords.md` |
| `serp-check.mjs` | Rank / competitor scorer — diffs today vs history, writes the report (no deps) |
| `serp-ingest.example.json` | Template for the daily Google-search dump |
| `serp-history/<keyword>.json` | Append-only daily snapshots per keyword — the trend line |
| `serp-report-<date>.md` | Human-readable diff written on each run |
| `.env` | Optional API key (gitignored) — only for the automated path |

## Daily SERP check — plain Google, no API key

The script does the **bookkeeping** (position, day-over-day delta, new entrants,
"which keyword to attack"). You do the **searching** with a normal Google search.

1. For each keyword in `serp-keywords.json`, run a Google search (google.com.sg).
   The daily agent uses its WebSearch tool; a person can just search in a browser.
2. Put the ranked result URLs into `seo/serp-ingest.json` (copy
   `serp-ingest.example.json`). You don't need every keyword — missing ones are skipped.
   ```json
   {
     "date": "2026-09-03",
     "results": {
       "actuarial board advisor Singapore": [
         "https://competitor.sg/...",
         "https://raymondcheungwm.com/insights/actuarial-board-advisor-singapore"
       ]
     }
   }
   ```
3. Score it:
   ```
   node seo/serp-check.mjs --ingest=seo/serp-ingest.json
   ```

It updates `serp-history/<keyword>.json` (one snapshot per day; a same-day re-run
overwrites that day), writes `serp-report-<date>.md`, and prints
`=== SERP SUMMARY ===`. `serp-ingest.json` itself is gitignored; the report and
history are committed with the day's posts.

### How the content routine uses the output
1. Keyword under **"Declined — priority to defend"** → today's signature post reclaims it.
2. Else the first **"Suggested keyword target"** (not ranking · lowest tier · weakest page 1).
3. Else fall back to the `keywords.md` / CLAUDE.md backlog order.
4. A **new entrant** on a keyword Raymond ranks for → candidate peg for the short take.

## Optional: automated (API key)

Skip the manual dump by giving the script a provider. Copy `seo/.env.example` to
`seo/.env` and set **one**:

- **SerpAPI** — `SERPAPI_KEY`. 100 free searches/month. Closest to a real SERP.
- **Google Custom Search JSON API** — `GOOGLE_CSE_KEY` + `GOOGLE_CSE_CX`. 100 free/day.

Then:
```
npm run serp            # every tracked keyword
npm run serp:tier1      # tier-1 only
```

## Flags
```
node seo/serp-check.mjs --ingest=FILE   score a manual Google-search dump (no key)
node seo/serp-check.mjs --tier=1,2      restrict by tier
node seo/serp-check.mjs --limit=5       first N keywords
node seo/serp-check.mjs --provider=serpapi | google_cse
node seo/serp-check.mjs --dry-run       validate config + provider, no calls
node seo/serp-check.mjs --mock          synthetic data — smoke-test the pipeline
```
