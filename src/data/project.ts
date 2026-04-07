import type { ProjectContent } from "@/types/project";

export const projectContent: ProjectContent = {
  hero: {
    eyebrow: "Notion Clone - Portoflio Project",
    title: "A pixel-accurate Notion homepage, rebuilt in Next.js",
    description:
      "This project takes a Figma design of the Notion.com homepage and reconstructs it as a production-quality, accessible, responsive Next.js landing page — built incrementally, section by section, with content kept separate from markup throughout.",
    primaryCta: { label: "View the landing page", href: "/landing" },
  },
  overview: {
    heading: "Project overview",
    paragraph:
      'The landing page at "/landing" is a from-scratch reconstruction of a real, densely detailed marketing site: a hero, customer logos, feature blocks, testimonials, an interactive view-switcher, a team tab-switcher, a community section with a carousel, a templates grid, and a full footer.',
  },
  techStack: {
    heading: "Technologies used",
    items: [
      {
        name: "Next.js 16",
        description:
          "App Router, Server Components by default, next/image and next/font for optimized assets.",
      },
      {
        name: "TypeScript",
        description:
          "Strict typing throughout, including typed page content and component props.",
      },
      {
        name: "Tailwind CSS v4",
        description:
          "CSS-first theme configuration via @theme, with design tokens for color, type scale, and shadows.",
      },
      {
        name: "Motion",
        description:
          "Powers the mobile drawer, dropdown menus, the swipeable community carousel and section level decorative elements",
      },
      {
        name: "lucide-react",
        description:
          "Generic UI iconography (tabs, footer socials, template categories) where exact Figma assets weren't needed.",
      },
    ],
  },
  decisions: {
    heading: "Key implementation decisions",
    items: [
      {
        title: "Content lives in data files, not markup",
        description:
          "Every section's copy, links, and image references live in file:\'src/data/landing.ts\', typed via \'src/types/landing.ts\'. Components consume this data rather than embedding text in JSX, so content can be edited without touching component code.",
      },
      {
        title: "Composition over duplication",
        description:
          "Repeating visual patterns — cards, section headings, testimonials, became compound components (Card.Header, Card.Media, SectionHeading.Title) instead of being rebuilt per section, following a shadcn-style composition pattern.",
      },
      {
        title: "Client components stay isolated",
        description:
          "Interactive pieces (mobile drawer, dropdown nav, tab switchers, carousel) are the only Client Components in the tree. Everything else including the page shells renders on the server.",
      },
      {
        title: "Shared design tokens over one-off values",
        description:
          "Repeated values (the layered shadow, the type scale, the accent color) were extracted into named Tailwind utilities and CSS variables, not left as duplicated arbitrary values.",
      },
    ],
  },
  responsive: {
    heading: "Responsive approach",
    paragraphs: [
      "The design was mobile-first throughout: every section was implemented for small screens first, then extended upward with Tailwind's sm/lg breakpoint prefixes, rather than starting from the desktop Figma layout and shrinking it down.",
      "The mobile behavior was designed deliberately — stacking multi-column sections, hiding decorative overflow elements (illustrations, doodles) below the point where they'd have room to breathe, and converting hover-adjacent desktop interactions into tap-friendly mobile equivalents like the drawer and accordion nav.",
    ],
    breakpoints: ["Mobile (base)", "sm — 640px", "lg — 1024px", "xl — 1280px"],
    containers: ["sm — 1024px", "page — 1240px", "xl — 1440px"],
  },
  accessibility: {
    heading: "Accessibility considerations",
    itemsLeft: [
      "Semantic landmarks throughout: header, nav, main, footer, section, figure/blockquote — no div-as-button or div-as-link patterns.",
      "A single h1 per page, with section headings and card titles nested correctly beneath it.",
      "Every interactive element is keyboard-operable: the mobile drawer traps focus and restores it on close, dropdown menus return focus to their trigger, and tab-style controls support arrow-key navigation per the ARIA tabs pattern.",
    ],
    itemsRight: [
      "Visible focus rings on every interactive element, no hover-only interactions.",
      "All text and meaningful-icon colors were checked against WCAG AA contrast requirements and corrected where they fell short.",
      "Decorative images use empty alt text; meaningful images (screenshots, logos, photos) have descriptive alt text.",
      "prefers-reduced-motion is respected globally, disabling animation for users who request it.",
    ],
  },
  finalCta: {
    heading: "See it in action",
    description: "The full landing page is live at /landing.",
    cta: { label: "View the landing page", href: "/landing" },
  },
  disclaimer:
    'This project is an unofficial, non-commercial recreation built for educational purposes as part of a Portoflio Project. It is not affiliated with, endorsed by, or sponsored by Notion Labs, Inc. "Notion" and related trademarks belong to their respective owners.',
};
