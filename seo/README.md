# SEO tooling

## Files
| File | Purpose |
|---|---|
| `keywords.md` | Master keyword strategy — tiers, intent scores, competitor notes |
| `serp-analysis.md` | One-off deep SERP analysis notes |
| `daily-routine.md` | The daily 2-post content routine (Step 0 = the SERP check below) |
| `serp-keywords.json` | Keywords the tracker checks each day — keep in sync with `keywords.md` |
| `serp-check.mjs` | Daily rank / competitor tracker (no dependencies) |
| `serp-history/<keyword>.json` | Append-only daily snapshots per keyword — the trend line |
| `serp-report-<date>.md` | Human-readable diff written on each run |
| `.env` | Provider API key (gitignored) — copy from `.env.example` |

## Daily SERP check

```
npm run serp            # every tracked keyword
npm run serp:tier1      # tier-1 keywords only (fewer API calls)
```

For each keyword in `serp-keywords.json` it pulls Google Singapore page-1 organic
results, finds `raymondcheungwm.com`'s position, diffs against the previous run, and:

- updates `serp-history/<keyword>.json` (one snapshot per day; a same-day re-run
  overwrites that day)
- writes `serp-report-<date>.md` — ranking table, movers, and **open gaps** listing the
  page-1 competitors and any new entrants
- prints `=== SERP SUMMARY ===` to stdout for the content routine to act on

### Setup (one time)
Copy `seo/.env.example` to `seo/.env` and set **one** provider:

- **SerpAPI** — `SERPAPI_KEY`. 100 free searches/month. Closest to a real SERP.
- **Google Custom Search JSON API** — `GOOGLE_CSE_KEY` + `GOOGLE_CSE_CX`. 100 free/day.
  Create a Programmable Search Engine set to "Search the entire web".

With 20 tracked keywords, a full daily `npm run serp` uses 20 calls — within the Google
free tier daily, or ~5 days/month of the SerpAPI free tier (use `serp:tier1`, or upgrade,
if running on SerpAPI daily).

No key configured → the script prints setup instructions and exits; the daily routine
then falls back to the `keywords.md` order.

### Flags
```
node seo/serp-check.mjs --tier=1,2     # restrict by tier
node seo/serp-check.mjs --limit=5      # first N keywords
node seo/serp-check.mjs --provider=serpapi | google_cse
node seo/serp-check.mjs --dry-run      # validate config + provider, no API calls
node seo/serp-check.mjs --mock         # synthetic data — smoke-test the pipeline
```

### How the content routine uses it
1. Keyword under **"Declined — priority to defend"** → today's signature post reclaims it.
2. Else the first **"Suggested keyword target"** (not ranking · lowest tier · weakest page 1).
3. Else fall back to the `keywords.md` / CLAUDE.md backlog order.
4. A **new entrant** on a keyword Raymond owns → candidate peg for the short take.
