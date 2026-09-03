# Raymond Cheung — Daily Blog Content Routine
**Goal:** First page Google Singapore for tier-1 keywords by December 2026
**Volume:** 2 posts/day — 1 signature + 1 short take
**Total by Dec 31:** ~240 posts indexed

---

## THE TWO-TIER SYSTEM

### Tier A — Signature Post (every 2–3 days)
- **Length:** 900–1,200 words
- **Time:** 60–90 minutes to write
- **Purpose:** Keyword ranking asset — each post targets one specific keyword
- **Voice:** Raymond's opinion and lived experience — not generic explainer
- **Structure:**
  1. Opening — a situation Raymond has actually been in
  2. The problem — what boards/organisations get wrong
  3. 2–3 headed sections with specific, actionable insight
  4. Pull quote — the sharpest sentence from the post
  5. FAQ section (3 questions, keyword-rich answers) — for AEO / AI citation
  6. Closing — what Raymond recommends

### Tier B — Short Take (daily)
- **Length:** 300–500 words
- **Time:** 20–30 minutes to write
- **Purpose:** News-pegged content that Google indexes fast + builds internal link network
- **Triggers:**
  - MAS circular or consultation paper released
  - SGX regulatory update or enforcement action
  - ISSB / TCFD standard update
  - Singapore Budget announcement touching ESG or governance
  - A board failure or governance scandal in the news
  - A new report from SID, Diligent, Russell Reynolds on Singapore governance
- **Structure:** 2 paragraphs of Raymond's reaction + 2–3 paragraphs of structured context + 1 CTA

---

## DAILY WORKFLOW

### Step 0 (5 min) — Competitor SERP check (plain Google, no API key)
Before writing anything, check where Raymond ranks and who is on page 1.

1. For each keyword in `seo/serp-keywords.json` (tier 1 daily; rotate tier 2 through the
   week), run a normal Google search for `google.com.sg`.
2. Write the ranked result URLs into `seo/serp-ingest.json` — copy the shape from
   `seo/serp-ingest.example.json`. Include only the keywords you actually searched.
   ```json
   { "date": "<today>", "results": { "<keyword>": ["https://...", "https://..."] } }
   ```
3. Score it:
   ```
   node seo/serp-check.mjs --ingest=seo/serp-ingest.json
   ```

The script does the bookkeeping — it writes:
- `seo/serp-report-<date>.md` — ranking table, movers, and open gaps with page-1 competitors
- `seo/serp-history/<keyword>.json` — append-only daily snapshots (the trend line)

and prints `=== SERP SUMMARY ===`.

**Use the summary to steer the day:**
- Any keyword under **"Declined — priority to defend"** → that is today's signature post,
  refreshed / expanded to reclaim position.
- Otherwise take the first **"Suggested keyword target"** (not ranking, lowest tier,
  weakest page-1 competition) instead of blindly walking down `seo/keywords.md`.
- A **new entrant** on a keyword Raymond owns → consider a short take that out-angles it.

Commit `seo/serp-report-*.md` and `seo/serp-history/` with the day's posts
(`seo/serp-ingest.json` is gitignored). If Step 0 is skipped, fall back to the
`seo/keywords.md` order. An API key in `seo/.env` (`SERPAPI_KEY`, or
`GOOGLE_CSE_KEY` + `GOOGLE_CSE_CX`) lets `npm run serp` do the searching automatically
instead; `node seo/serp-check.mjs --mock` smoke-tests the pipeline.

### Morning (30 min) — Short Take
1. Scan: MAS website, SGX announcements, SID updates, Straits Times business section — plus any **new entrant** flagged by Step 0
2. Pick one news item Raymond has something to say about
3. Write 300–500 words — Raymond's angle first, context second
4. Add to `data/insights.ts` with today's date, new slug
5. `git add . && git commit -m "insight: [short description]" && git push`
6. Deploy runs automatically — post live in ~3 minutes

### Afternoon / Evening (60–90 min) — Signature Post
1. Pick the keyword from the Step 0 output (declined keyword to defend, else first suggested target). Fall back to the next unchecked keyword in `seo/keywords.md` only if Step 0 produced nothing.
2. Write 900–1,200 words in Raymond's voice
3. Add 3 FAQs (exact question format AI tools use)
4. Add to `data/insights.ts` — full body array with headings, paragraphs, pullquote, list, faqs
5. `git add . && git commit -m "insight: [keyword]" && git push`

---

## POST BACKLOG — Next to publish (in order)

### Tier 1 (do these first — highest win probability)
- [ ] `esg-advisor-singapore` — "What makes an ESG adviser useful to a Singapore board — and what to look for"
- [ ] `climate-physical-risk-singapore-insurance` — "Physical climate risk in Singapore insurance: what boards need to govern"
- [ ] `mas-notice-126-insurance-boards` — "MAS Notice 126: what it actually requires of Singapore insurance boards"
- [ ] `risk-appetite-framework-singapore` — "Why your Singapore risk appetite framework is not influencing any decisions"
- [ ] `board-risk-committee-singapore` — "What a board risk committee should look like for a Singapore-listed company"
- [ ] `ai-governance-insurance-singapore` — "AI governance in Singapore insurance: what MAS expects, what boards miss"

### Tier 2 (build after tier 1 covered)
- [ ] `corporate-governance-consultant-singapore` — differentiating independent advisory from firm consulting
- [ ] `sustainability-reporting-singapore-sgx` — the board's role in SGX mandatory reporting
- [ ] `reinsurance-governance-singapore` — what boards need to understand about reinsurance strategy
- [ ] `insurance-capital-singapore-mas` — capital adequacy governance from the board's perspective
- [ ] `board-education-singapore-esg` — building ESG literacy at board level, not just the sustainability team
- [ ] `erm-framework-singapore-insurance` — enterprise risk management that actually works

### Short Takes (react as news breaks)
- [ ] Next MAS consultation paper → "What [paper title] means for Singapore boards"
- [ ] Next SGX enforcement action → "What boards can learn from [company]'s governance failure"
- [ ] Next ISSB update → "ISSB just updated [standard] — here is what it means for Singapore"
- [ ] Next SID governance report → "SID's [report]: three things that should worry Singapore boards"

---

## HOW TO ADD A POST

Open `data/insights.ts`. Copy the template below, fill in the fields, and add to the array.
Push and the site rebuilds automatically.

```typescript
{
  id: "XX",  // next number in sequence
  title: "Your post title here",
  summary: "One paragraph — this appears in the card and as the meta description. Make it compelling and keyword-rich.",
  category: "Governance",  // Climate Risk | Enterprise Risk | Insurance Innovation | Technology Risk | Insurance Capital | ESG | Governance | Regulation | Board Advisory | Actuarial
  readingTime: "6 min read",
  date: "September 2026",
  status: "published",
  slug: "your-slug-here",  // matches the keyword target
  keywords: ["primary keyword Singapore", "secondary keyword"],
  body: [
    { type: "paragraph", text: "Opening paragraph — a situation Raymond has been in." },
    { type: "heading", text: "Section heading" },
    { type: "paragraph", text: "Body paragraph." },
    { type: "pullquote", text: "The sharpest sentence from this section." },
    { type: "list", items: ["Point one", "Point two", "Point three"] },
    { type: "paragraph", text: "Closing — what Raymond recommends." },
  ],
  faqs: [
    {
      question: "Exact question a Singapore board director would search?",
      answer: "Direct, specific answer. Include the keyword naturally. 2–4 sentences.",
    },
    {
      question: "Second question — more specific sub-topic?",
      answer: "Direct answer.",
    },
  ],
},
```

---

## BACKLINK TARGETS (do these once, compound over time)

| Target | Action | Priority |
|--------|--------|----------|
| SMU Academy | Ask SMU to add raymondcheungwm.com to Raymond's trainer profile page | HIGH |
| Singapore College of Insurance | Same — link his site from his SCI trainer page | HIGH |
| SID.org.sg | Pitch a guest article or ask to be listed as an independent board adviser resource | HIGH |
| LinkedIn | Raymond to add raymondcheungwm.com/insights as his "website" in profile | IMMEDIATE |
| CEO Insights Asia | Already featured — email them to add a link to raymondcheungwm.com | MEDIUM |
| MAS-regulated entity boards Raymond sits on | Their annual reports / websites should list his site | MEDIUM |

---

## TRACKING — check monthly

1. Google Search Console → Coverage (how many posts are indexed)
2. Google Search Console → Search results (which keywords are getting impressions)
3. Incognito Google Singapore search for tier-1 keywords — where are we ranking?
4. Check if any of the FAQ questions are appearing in Google's "People also ask" boxes
5. Ask ChatGPT / Perplexity "who is a good actuarial board adviser in Singapore?" — is Raymond cited?

---

*Created: September 2026 | This routine should be reviewed monthly and updated as rankings develop*
