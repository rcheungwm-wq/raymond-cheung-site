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

### Step 0 — SERP / competitor check (run before writing; plain Google, no key)
1. For each keyword in `seo/serp-keywords.json` (tier 1 daily + rotate tier 2), run a normal Google search (`google.com.sg`) — the daily agent uses its WebSearch tool.
2. Save the ranked result URLs to `seo/serp-ingest.json` (shape in `seo/serp-ingest.example.json`; only the keywords you searched — missing ones are skipped).
3. `node seo/serp-check.mjs --ingest=seo/serp-ingest.json`
- Script: `seo/serp-check.mjs` (no deps). It writes `seo/serp-report-<date>.md` (ranking table, movers, open gaps + page-1 competitors), appends `seo/serp-history/<keyword>.json` (trend line), prints `=== SERP SUMMARY ===`. Report + history are committed with the daily posts; `serp-ingest.json` is gitignored.
- **Signature-post keyword = first "Declined – priority to defend", else first "Suggested keyword target", else fall back to the backlog below.** A **new entrant** on a keyword Raymond ranks for = candidate short-take peg.
- Optional automated path: put `SERPAPI_KEY` (100/mo) **or** `GOOGLE_CSE_KEY` + `GOOGLE_CSE_CX` (100/day) in `seo/.env` (gitignored — see `seo/.env.example`), then `npm run serp` / `npm run serp:tier1` does the searching itself. `node seo/serp-check.mjs --mock` smoke-tests. Step 0 skipped → use the backlog order.

### Two posts per day
- **Morning — Short take (300–500 words, 20–30 min):** React to a Singapore news event — MAS circular, SGX announcement, ESG regulation update, SID report. Raymond's angle first, context second.
- **Afternoon — Signature post (900–1,200 words, 60–90 min):** Keyword-targeted, Raymond's lived experience. Keyword chosen from Step 0 output; otherwise next unchecked item in the backlog.

### How to add a post
Open `data/insights.ts`. Copy the template from `seo/daily-routine.md`. Fill in the fields. Push — site rebuilds automatically in ~3 minutes.

### Post backlog — Round 1 (complete)
- [x] `esg-advisor-singapore` — "What makes an ESG adviser useful to a Singapore board"
- [x] `climate-physical-risk-singapore-insurance` — "Physical climate risk in Singapore insurance: what boards need to govern"
- [x] `mas-notice-126-insurance-boards` — "MAS Notice 126: what it actually requires of Singapore insurance boards"
- [x] `risk-appetite-framework-singapore` — "Why your Singapore risk appetite framework is not influencing any decisions"
- [x] `board-risk-committee-singapore` — "What a board risk committee should look like for a Singapore-listed company"
- [x] `ai-governance-insurance-singapore` — "AI governance in Singapore insurance: what MAS expects, what boards miss"
- [x] `corporate-governance-consultant-singapore` — independent advisory vs. firm consulting
- [x] `sustainability-reporting-singapore-sgx` — the board's role in SGX mandatory reporting
- [x] `reinsurance-governance-singapore` — what boards need to understand about reinsurance strategy
- [x] `insurance-capital-singapore-mas` — capital adequacy governance from the board's perspective

### Post backlog — Round 2 (added 2026-09-14, ~1 month of signature posts)
Sourced from live regulatory/trend research (MAS consultations, SGX RegCo rule changes, ISSB/SGX
reporting timeline, cybersecurity/family-office/actuarial-market news as of Sept 2026), not just
static keywords — cross-check each against that day's Step 0 SERP output before writing: if Step 0
surfaces a "Declined – priority to defend" keyword or a genuinely fresher trending angle that day,
use that instead and slot the skipped backlog item back in later. Each entry's regulatory anchor
should be re-verified (dates/effective terms can move) before publishing.
- [ ] `mas-corporate-governance-guidelines-insurers-singapore` — MAS's consultation on revised Corporate Governance Guidelines for insurers (board matters, remuneration, related-party oversight) — what it actually changes for boards
- [ ] `related-party-transactions-governance-singapore-insurers` — the related-party-transaction oversight duty buried inside MAS's governance guidelines
- [ ] `global-listing-board-resident-director-singapore` — the Singapore-resident independent director / compliance-adviser requirement for Global Listing Board issuers
- [ ] `issb-scope3-sti-companies-singapore` — Scope 3 is now mandatory for STI-constituent companies from FY2026 — what boards need before year-end
- [ ] `sustainability-assurance-scope-1-2-singapore-fy2027` — external limited assurance over Scope 1/2 emissions becomes mandatory FY2027 — boards aren't ready
- [ ] `issb-reporting-large-non-listed-companies-singapore` — ISSB-aligned reporting is being phased onto large non-listed companies from FY2027, not just listed ones
- [ ] `cyber-risk-governance-singapore-boards` — Cybersecurity Act 2026 update: cyber risk is now a board duty, not a CISO problem
- [ ] `director-liability-cyber-incident-singapore` — when a cyber incident becomes a director's personal legal exposure under Singapore law
- [ ] `cyber-trust-mark-level-5-board-oversight` — what Cyber Trust Mark Level 5 (mandatory for critical infrastructure owners) actually requires the board to own
- [ ] `single-family-office-governance-singapore` — MAS's new SFO class-exemption (effective 15 June 2026) still needs real governance behind it
- [ ] `family-office-investment-committee-governance-singapore` — what a Singapore family office investment committee should actually look like
- [ ] `actuarial-talent-shortage-singapore-boards` — the actuarial talent shortage is a board risk, not an HR problem
- [ ] `appointed-actuary-succession-planning-singapore` — why every Singapore insurer board needs an appointed-actuary succession plan
- [ ] `mas-outsourcing-guidelines-insurer-board-oversight` — what MAS's outsourcing guidelines actually require the board to own, not just procurement
- [ ] `technology-risk-management-guidelines-singapore-insurers` — MAS's Technology Risk Management guidelines: what the board signs off on
- [ ] `data-breach-notification-governance-singapore-insurers` — faster breach notification expectations — is the board actually ready to respond that fast
- [ ] `director-remuneration-disclosure-singapore-sgx` — exact director/CEO remuneration disclosure is now mandatory — what to do before the next AGM
- [ ] `board-diversity-singapore-listed-companies` — board diversity in Singapore beyond the compliance statement
- [ ] `board-effectiveness-evaluation-singapore` — most Singapore board evaluations are theatre — what an honest one looks like
- [ ] `nominating-committee-succession-planning-singapore` — the nominating committee job most Singapore boards are quietly skipping
- [ ] `whistleblowing-governance-sgx-listed-companies` — whistleblowing policies on paper vs. whistleblowing governance that actually works
- [ ] `ceo-succession-planning-singapore-boards` — the CEO succession conversation Singapore boards avoid until it's too late
- [ ] `environmental-risk-stress-testing-insurers-singapore` — what MAS's climate stress test actually tests about the board, not just the balance sheet
- [ ] `ai-model-risk-governance-insurance-singapore` — AI model risk is different from AI governance — boards are conflating the two
- [ ] `embedded-insurance-governance-singapore` — embedded insurance is growing fast in Singapore — whose board actually owns the risk
- [ ] `reinsurance-capacity-climate-risk-singapore-boards` — climate risk is tightening reinsurance capacity — is the board watching the renewal early enough
- [ ] `insurance-ma-due-diligence-governance-singapore` — what a Singapore insurance board should actually diligence in M&A, not just what the bankers show it
- [ ] `fit-and-proper-criteria-mas-directors` — what MAS's fit-and-proper criteria actually test for in a director
- [ ] `esg-greenwashing-litigation-risk-singapore-boards` — greenwashing risk is now a board liability question, not just a marketing one
- [ ] `operational-resilience-mas-guidelines-insurer-boards` — operational resilience is the MAS guideline boards keep delegating to IT

### Published (38 posts, September 2026)
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
- ✅ ACRA–SID director training partnership (`director training Singapore`)
- ✅ Singapore risk appetite framework not influencing decisions (`risk appetite framework Singapore`)
- ✅ SGX own board tenure clock (`SGX board director independent advisory`)
- ✅ Board risk committee Singapore-listed company (`board-risk-committee-singapore`)
- ✅ Emissions disclosure accuracy Singapore boards (`Scope 1 Scope 2 emissions disclosure Singapore`)
- ✅ AI governance in Singapore insurance (`ai-governance-insurance-singapore`)
- ✅ MAS stablecoin reserve governance for boards (`MAS stablecoin framework Singapore`)
- ✅ Corporate governance consultant vs independent board adviser (`corporate-governance-consultant-singapore`)
- ✅ SGTI market-centric model reaction (`sgti-market-centric-model-singapore-boards`)
- ✅ Board's role in SGX mandatory sustainability reporting (`sustainability-reporting-singapore-sgx`)
- ✅ SGX-Nasdaq Global Listing Board reaction (`sgx-nasdaq-global-listing-board-singapore`)
- ✅ Reinsurance strategy governance for Singapore boards (`reinsurance-governance-singapore`)
- ✅ SGX self-application of nine-year director tenure rule (`sgx-board-nine-year-tenure-self-application`)
- ✅ Insurance capital adequacy as a board decision (`insurance-capital-singapore-mas`)

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
