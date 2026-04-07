# Figma to Next.js — Notion Landing Page Rebuild

**Live demo:** [Homepage](https://lp-notion-clone.vercel.app/),
[Landing Page](https://lp-notion-clone.vercel.app/landing)

> **Unofficial, non-commercial clone.** This project recreates the visual design of Notion's public homepage for portfolio project purposes. It is not affiliated with, endorsed by, or sponsored by Notion Labs, Inc. "Notion" and related trademarks belong to their respective owners.

## 1. Project Overview

A portfolio project: the Notion homepage rebuilt as a landing page, built section-by-section from a Figma design into a production-quality Next.js application — used to demonstrate a complete Figma-to-code workflow: incremental development, accessibility, responsive design, and content/presentation separation.

<!-- **Figma reference:** [Notion Landing Page Design](https://www.figma.com/design/PGDHYihTNr0nKOCssoKWSj/Designs?node-id=1-2) -->

## 2. Features

- Distinct landing-page sections: hero, feature showcases, testimonials, an interactive view-switcher, a team tab-switcher, a community carousel etc.
- Mobile-first responsive layout throughout
- Interactive elements: mobile drawer nav, desktop dropdown menus, click-to-swap view/team tabs (keyboard arrow-key navigable), a swipeable community carousel
- Scroll-triggered and click-triggered animations via Motion, applied selectively
- WCAG 2.2 AA-targeted accessibility, audited and corrected for contrast, keyboard operability, and ARIA correctness

## 3. Tech Stack

- **Next.js 16** — App Router, Server Components by default
- **TypeScript** — strict typing across components and content
- **Tailwind CSS v4** — CSS-first `@theme` design tokens
- **Motion** — animations and gestures
- **lucide-react** — generic UI iconography
- **Vitest + React Testing Library** — component tests

## 4. Pages

| Route      | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`        | Project introduction — overview, tech stack, key implementation decisions, responsive/accessibility approach, and a link through to the landing page |
| `/landing` | The actual Notion homepage rebuild (`noindex`d — see [Assets & Content](#8-assets--content))                                                         |

## 5. Project Structure

```
src/
├── app/            # Routes, layouts, metadata, robots/sitemap, OG image
├── components/
│   ├── layout/     # Header, footer, nav, container (shared across pages)
│   ├── landing/     # /landing sections
│   ├── project/     # / sections
│   └── ui/          # Reusable primitives (Button, Card, SectionHeading, Reveal)
├── data/           # All editable page copy, typed
├── lib/            # Utilities
├── types/          # Shared TypeScript types for content
└── public/         # Images, icons
```

## 6. Design & Implementation

- **Mobile-first**: every section implemented mobile-first, then extended with `sm:`/`lg:`/`xl:` breakpoints
- **Component architecture**: shared visual patterns became compound components (`Card.Header`/`Card.Media`, `SectionHeading.Title`/`.Description`) instead of being rebuilt per section.
- **Content/presentation separation**: all copy, links, and image references live in `src/data/`, typed via `src/types/`. Components consume this data rather than embedding text in JSX.
- **Animation**: a shared `Reveal` primitive (fade/slide on scroll-into-view) applied selectively to sections where motion adds value, plus click-triggered transitions on the view-switcher. Reduced motion is handled via a global CSS media query (see [Accessibility](#10-accessibility)).

## 7. Getting Started

**Prerequisites:** Node.js 20+, npm

```bash
# Install dependencies
npm install

# Copy env template and adjust if needed
cp .env.example .env.local

# Run the dev server
npm run dev

# Production build
npm run build
npm run start
```

## 8. Assets & Content

- **Images/icons**: `public/images/`, `public/icons/` (exported from Figma; brand/social icons sourced from `lucide-react` where noted in code)
- **Landing page content**: `src/data/landing.ts` / `src/types/landing.ts`
- **Project page content**: `src/data/project.ts` / `src/types/project.ts`
- **`/landing` is intentionally excluded from search indexing** (`robots: noindex`, omitted from `sitemap.ts`) given its purpose is demonstrating a rebuild, not ranking as a Notion competitor

## 9. Testing

**Framework:** Vitest + React Testing Library

```bash
npm run test        # run once
npm run test:watch  # watch mode
```

**Coverage** is intentionally minimal for a landing page — focused on the two most interaction-heavy components:

- Mobile drawer: open, close via button, close via `Escape` (+ focus returns to trigger)
- View-switcher: default tab state, click-to-switch, arrow-key navigation, wraparound

## 10. Accessibility

- **Target**: WCAG 2.2 AA
- **Keyboard navigation**: every interactive element is fully keyboard-operable — mobile drawer, dropdown nav, tab switchers, carousel (via dot controls)
- **Focus management**: mobile drawer traps focus and restores it to its trigger on close; desktop dropdowns return focus to their trigger on `Escape`
- **Accessible components**:
  - ARIA tabs pattern (roving `tabindex`, arrow-key nav, `tabpanel` linkage) on the view/team switchers
  - Disclosure pattern (`aria-expanded`) on nav dropdowns
  - Semantic landmarks throughout (`header`, `nav`, `main`, `footer`, `figure`/`blockquote`)
- **Color contrast**: all text and meaningful-icon colors checked against computed WCAG ratios and corrected where they fell short
- **Reduced motion**: a global `prefers-reduced-motion` media query in `globals.css` disables standard CSS transitions/animations site-wide and zeroes out the `Reveal` component's scroll-in effect. **Known limitation**: this does not cover Motion's JS-driven animations (mobile drawer slide, desktop dropdown fade, carousel transitions) — those currently still animate regardless of the OS setting.

## 11. License

Code is licensed under MIT (see `LICENSE`). This license covers the source code only — it does not extend to Notion's trademarks, branding, copy, or product screenshots recreated here for demonstration purposes.
