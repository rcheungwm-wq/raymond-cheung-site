# Raymond Cheung — Personal Authority Website

**Concept Preview** — Professional proposal prepared for Raymond Cheung's review and approval.

A premium personal-brand and professional-authority website for Raymond Cheung, Chartered Actuary, C-suite executive, board adviser and ESG specialist.

---

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + custom CSS variables
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans (headings), Inter (body), IBM Plex Mono (labels/mono)
- **Animation**: Canvas API (hero background), CSS transitions

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
raymond-cheung-site/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with navbar and footer
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles and CSS variables
│   ├── sitemap.ts                # XML sitemap
│   ├── robots.ts                 # Robots.txt (noindex in preview mode)
│   ├── not-found.tsx             # Custom 404 page
│   ├── about/page.tsx
│   ├── expertise/page.tsx
│   ├── advisory/page.tsx
│   ├── training-speaking/page.tsx
│   ├── insights/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx       # Individual article template
│   ├── contact/page.tsx
│   └── privacy/page.tsx
│
├── components/                   # Reusable components
│   ├── ExecutiveNavbar.tsx       # Sticky transparent-to-navy navbar
│   ├── ExecutiveFooter.tsx       # Footer with concept preview notice
│   ├── HeroAuthoritySection.tsx  # Full-screen hero with portrait
│   ├── CredibilityStrip.tsx      # Organisation reference strip
│   ├── IntroductionSection.tsx   # Philosophy and principles
│   ├── ExpertiseGrid.tsx         # Interactive expertise cards
│   ├── CareerJourney.tsx         # Vertical timeline
│   ├── ImpactMetrics.tsx         # Animated statistics
│   ├── CurrentThemes.tsx         # 4 editorial theme panels
│   ├── FeaturedProgrammes.tsx    # Filterable programme cards
│   ├── SpeakingSection.tsx       # Speaking formats and themes
│   ├── QuoteSection.tsx          # Signature quote
│   ├── InsightCards.tsx          # Article preview cards
│   └── FinalCTA.tsx              # Call-to-action section
│
├── data/                         # Centralised editable content
│   ├── profile.ts                # Name, bio, credentials, metrics
│   ├── expertise.ts              # Expertise areas and themes
│   ├── experience.ts             # Career journey and roles
│   ├── programmes.ts             # Training programmes and speaking
│   └── insights.ts               # Article concepts
│
└── public/
    └── raymond-cheung-portrait.jpg
```

---

## Colour System

| Variable | Hex | Usage |
|---|---|---|
| `--midnight-navy` | `#071A2B` | Primary dark backgrounds |
| `--executive-navy` | `#102E46` | Secondary dark sections |
| `--deep-teal` | `#0D6666` | Hover states |
| `--strategic-teal` | `#159A92` | Primary accent, CTAs |
| `--warm-ivory` | `#F5F3EC` | Light backgrounds |
| `--soft-mist` | `#EDF3F2` | Card backgrounds |
| `--graphite` | `#202A33` | Body text |
| `--gold` | `#C1A269` | Dividers, emphasis |

---

## Content Editing

All editable content is centralised in `/data/`:

- **`/data/profile.ts`** — Name, bio, credentials, quote, philosophy
- **`/data/expertise.ts`** — Expertise areas, current themes
- **`/data/experience.ts`** — Career timeline, selected roles
- **`/data/programmes.ts`** — Training programmes, speaking formats
- **`/data/insights.ts`** — Article concepts

Look for `// VERIFY BEFORE PUBLICATION` comments throughout the codebase for all facts requiring Raymond's confirmation.

---

## Deployment — Vercel

### Method 1: Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Method 2: GitHub Integration

1. Push to a GitHub repository
2. Connect the repository to Vercel at vercel.com
3. Set the root directory to `raymond-cheung-site` if deploying from the parent folder
4. Deploy

### Environment Variables

No environment variables are required for the current preview build.

---

## Preview Mode Safeguards

The following safeguards are active until Raymond approves publication:

- `robots.ts` — `Disallow: /` blocks all search engine crawling
- `layout.tsx` — `robots: { index: false, follow: false }` metadata
- Footer — "CONCEPT PREVIEW" notice on every page
- Contact form — Disabled; displays preview notice; no data is transmitted or stored
- Downloads — Biography and speaker profile buttons are disabled pending approval

**Before going live, remove or update:**
1. `robots.ts` — change to allow crawling and uncomment sitemap URL
2. `layout.tsx` — remove robots noindex/nofollow from metadata
3. Footer — update or remove "CONCEPT PREVIEW" notice
4. Contact form — activate with a form handler (e.g. Resend, Formspree, or a custom API route)
5. All `// VERIFY BEFORE PUBLICATION` comments — confirm or update the facts

---

## Facts Requiring Raymond's Approval

See content-verification-checklist.md for the full list.

---

## Assets Needed from Raymond

1. **Portrait photograph** — High-resolution professional portrait (replace `/public/raymond-cheung-portrait.jpg`)
2. **Biography** — Approved professional biography text
3. **Speaker profile** — PDF or Word document
4. **LinkedIn URL** — Confirm the correct profile URL
5. **CER Consultancy URL** — Confirm the official website address
6. **Professional email address** — For the contact page
7. **Logo usage permissions** — Confirm which organisations permit logo display
8. **Article content** — Written or approved article text for the Insights section
9. **CPD hours** — Confirm accredited CPD hours for each programme
10. **Programme host organisations** — Confirm names for each programme listing
11. **Event dates** — Any upcoming programmes with confirmed dates

---

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
- Mobile: iOS Safari 14+, Chrome for Android 90+
