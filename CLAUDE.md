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
