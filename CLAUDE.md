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
All data lives in `data/profile.ts` — credibilityOrgs, testimonials, speakingEngagements.
Raymond's LinkedIn: https://www.linkedin.com/in/raymond-cheung-erm/

## Section order
01 Hero → 02 Credibility Strip → 03 Quote → 04 Impact → 05 Themes → 06 Programmes → 07 Speaking → 08 Testimonials → 09 Insights → CTA

## Pending improvements
- Replace public/raymond-cheung-portrait.jpg with 800×800px+ version (current is 400×400, looks soft at 520px)
- Confirm HTTPS certificate issued on raymondcheungwm.com (GitHub Pages Settings → Enforce HTTPS)
