@AGENTS.md

# Raymond Cheung Website — Project Context

## What this is
Raymond Cheung's professional website. Next.js 14+ static export deployed to GitHub Pages with custom domain.

## Live site
- https://raymondcheungwm.com
- GitHub Pages: https://rcheungwm-wq.github.io/raymond-cheung-site/

## GitHub
- Repo: rcheungwm-wq/raymond-cheung-site (Raymond owns it)
- Contributor account: zaddyjohn-cyber (Johno manages the site)
- Always switch before pushing: `gh auth switch --user zaddyjohn-cyber`

## Tech
- `output: "export"` static site, `basePath: ""` (custom domain = root)
- `images: { unoptimized: true }` — no Next.js image optimization
- CSS-in-JS inline styles + CSS custom properties
- Fonts: Plus Jakarta Sans, IBM Plex Mono, Cormorant (Google Fonts)

## Content source
- `data/profile.ts` — credibilityGroups (4 categorised groups), credibilityOrgs (flat legacy list), testimonials (6), speakingEngagements (11)
- `data/experience.ts` — careerJourney (8 stages, real dates 2002→present), selectedRoles (13)
- `data/publications.ts` — publications (13 papers), proprietaryCourses (10 authored curricula)
- `data/insights.ts` — 6 published articles
- Raymond's LinkedIn: https://www.linkedin.com/in/raymond-cheung-erm/

## Homepage section order
Hero → Credibility Strip → **Audience Router** → Introduction → Impact → Career Journey → Expertise → Themes → Programmes → Speaking → Quote → Testimonials → Insights → CTA

## SEO setup
- `metadataBase` + canonical on every route (https://raymondcheungwm.com)
- JSON-LD in `app/layout.tsx`: Person schema + WebSite schema
- JSON-LD in `app/insights/[slug]/page.tsx`: Article + BreadcrumbList schema
- `app/sitemap.ts` and `app/robots.ts` (both `dynamic = "force-static"` for static export)
- H1 on homepage contains the name "Raymond Cheung" + role keywords (SEO-critical — do not replace with a bare tagline)
- **Metadata lives in `page.tsx` for server pages** (expertise, advisory, training-speaking, insights) and in `layout.tsx` for client pages (about, contact). Page metadata overrides layout metadata — don't add a layout for a route whose page already exports metadata.

## Pending improvements
- Replace public/raymond-cheung-portrait.jpg with 800×800px+ version (current is 400×400, looks soft at 520px)
- Add a dedicated 1200×630 OG image (currently reusing the square portrait)
- Confirm HTTPS certificate issued on raymondcheungwm.com (GitHub Pages Settings → Enforce HTTPS)
- Submit sitemap to Google Search Console once DNS/HTTPS confirmed
- Wire in Calendly / scheduling link (hero + contact + speaking pages) — waiting on Raymond's URL
- Alpha Millennia Technology (CEO, founded 2021) — confirm whether to add to career timeline

---

## Blog / SEO — Daily Content Routine

**Goal:** Page 1 Google Singapore for tier-1 keywords by December 2026
**Full playbook:** `seo/keywords.md`, `seo/serp-analysis.md`, `seo/daily-routine.md`, `seo/README.md`

### Step 0 — SERP / competitor check (run before writing)
```
npm run serp            # all tracked keywords
npm run serp:tier1      # tier-1 only (fewer API calls)
```
- Script: `seo/serp-check.mjs` (no deps). Keywords: `seo/serp-keywords.json` — keep in sync with `seo/keywords.md`.
- Writes `seo/serp-report-<date>.md` (ranking table, movers, open gaps + page-1 competitors) and appends `seo/serp-history/<keyword>.json` (trend line). Both are committed with the daily posts.
- Prints `=== SERP SUMMARY ===` → **signature-post keyword = first "Declined – priority to defend", else first "Suggested keyword target", else fall back to the backlog below.** A flagged **new entrant** on a keyword Raymond ranks for = candidate short-take peg.
- Needs a provider key in `seo/.env` (gitignored — see `seo/.env.example`): `SERPAPI_KEY` (100/mo) **or** `GOOGLE_CSE_KEY` + `GOOGLE_CSE_CX` (100/day). No key → script prints setup steps and the routine falls back to the backlog order. `node seo/serp-check.mjs --mock` smoke-tests with synthetic data.

### Two posts per day
- **Morning — Short take (300–500 words, 20–30 min):** React to a Singapore news event — MAS circular, SGX announcement, ESG regulation update, SID report. Raymond's angle first, context second.
- **Afternoon — Signature post (900–1,200 words, 60–90 min):** Keyword-targeted, Raymond's lived experience. Keyword chosen from Step 0 output; otherwise next unchecked item in the backlog.

### How to add a post
Open `data/insights.ts`. Copy the template from `seo/daily-routine.md`. Fill in the fields. Push — site rebuilds automatically in ~3 minutes.

### Post backlog (next to publish, in order)
- [x] `esg-advisor-singapore` — "What makes an ESG adviser useful to a Singapore board"
- [x] `climate-physical-risk-singapore-insurance` — "Physical climate risk in Singapore insurance: what boards need to govern"
- [x] `mas-notice-126-insurance-boards` — "MAS Notice 126: what it actually requires of Singapore insurance boards"
- [ ] `risk-appetite-framework-singapore` — "Why your Singapore risk appetite framework is not influencing any decisions"
- [ ] `board-risk-committee-singapore` — "What a board risk committee should look like for a Singapore-listed company"
- [ ] `ai-governance-insurance-singapore` — "AI governance in Singapore insurance: what MAS expects, what boards miss"
- [ ] `corporate-governance-consultant-singapore` — independent advisory vs. firm consulting
- [ ] `sustainability-reporting-singapore-sgx` — the board's role in SGX mandatory reporting
- [ ] `reinsurance-governance-singapore` — what boards need to understand about reinsurance strategy
- [ ] `insurance-capital-singapore-mas` — capital adequacy governance from the board's perspective

### Published (24 posts, September 2026)
- ✅ Climate transition governance
- ✅ Risk appetite decisions
- ✅ Next-generation insurance
- ✅ AI insurance governance
- ✅ Capital strategy boardroom
- ✅ ESG compliance readiness
- ✅ Actuarial board adviser Singapore (`actuarial board advisor Singapore`)
- ✅ SGX audit committee CRO questions (`SGX board director advisory`)
- ✅ ESG governance training Singapore boards (`ESG governance training Singapore`)
- ✅ Climate risk board director Singapore (`climate risk board director Singapore`)
- ✅ CRO advisory Singapore insurance (`CRO advisory Singapore insurance`)
- ✅ InsurTech board adviser Asia (`InsurTech board advisor Asia`)
- ✅ Independent board director Singapore (`independent board director Singapore`)
- ✅ MAS regulatory advisor Singapore (`MAS regulatory advisor Singapore`)
- ✅ Nasdaq listing governance (`Nasdaq CEO governance Singapore`)
- ✅ Risk governance speaker Singapore (`risk governance speaker Singapore`)
- ✅ Scope 3 emissions Singapore boards (`scope 3 emissions Singapore boards`)
- ✅ ORSA strategic tool Singapore insurance (`ORSA Singapore insurance`)
- ✅ SGX FY2026 sustainability mandate for boards (`SGX sustainability reporting 2026`)
- ✅ ESG adviser Singapore boards (`ESG advisor Singapore`)
- ✅ MAS transition planning halfway point (`MAS transition planning guidelines`)
- ✅ Physical climate risk Singapore insurance (`physical climate risk Singapore insurance`)
- ✅ Split sustainability disclosure standards for boards (`Singapore Sustainability Disclosure Standards`)
- ✅ MAS Notice 126 insurance board requirements (`MAS Notice 126`)

### Backlink actions (one-time, compound over time)
- [ ] Ask SMU Academy to link raymondcheungwm.com on Raymond's trainer profile
- [ ] Ask Singapore College of Insurance to do the same
- [ ] Raymond to add raymondcheungwm.com/insights as "website" on LinkedIn profile
- [ ] Email CEO Insights Asia to add a link to the site from their feature on Raymond
- [ ] Pitch SID.org.sg for a guest article or resource listing

### Monthly tracking
1. Google Search Console → Coverage (how many posts indexed)
2. Google Search Console → Search results (keyword impressions appearing)
3. `seo/serp-history/` — review the trend per keyword (populated daily by Step 0); incognito Google Singapore spot-check for tier-1 keywords
4. Ask ChatGPT / Perplexity "who is a good actuarial board adviser in Singapore?" — is Raymond cited?
