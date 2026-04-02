import type { NavLink, CtaLink, HeroContent } from "@/types/landing";

export const primaryNavLinks: NavLink[] = [
  {
    label: "Product",
    href: "#",
    dropdownItems: [
      { label: "AI", href: "#" },
      { label: "Wikis", href: "#" },
      { label: "Docs", href: "#" },
      { label: "Projects", href: "#" },
    ],
  },
  {
    label: "Download",
    href: "#",
    dropdownItems: [
      { label: "Mac & Windows", href: "#" },
      { label: "iOS & Android", href: "#" },
      { label: "Web Clipper", href: "#" },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    dropdownItems: [
      { label: "Enterprise", href: "#" },
      { label: "Small business", href: "#" },
      { label: "Personal use", href: "#" },
      { label: "Startups", href: "#" },
      { label: "Engineering", href: "#" },
      { label: "Design", href: "#" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    dropdownItems: [
      { label: "Help center", href: "#" },
      { label: "Templates", href: "#" },
      { label: "API docs", href: "#" },
      { label: "Community", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  { label: "Pricing", href: "#" },
];

export const headerActions: {
  requestDemo: CtaLink;
  login: CtaLink;
  primaryCta: CtaLink;
} = {
  requestDemo: { label: "Request a demo", href: "#" },
  login: { label: "Log in", href: "#" },
  primaryCta: { label: "Get Notion free", href: "/landing" },
};

export const heroContent: HeroContent = {
  segmentTop: [
    { type: "text", value: "Your" },
    { type: "keyword", value: "wiki,", icon: "/icons/wiki-icon.png", alt: "" },
    { type: "keyword", value: "docs,", icon: "/icons/docs-icon.png", alt: "" },
  ],
  segmentBottom: [
    { type: "text", value: "&" },
    {
      type: "keyword",
      value: "projects.",
      icon: "/icons/projects-icon.png",
      alt: "",
    },
    { type: "text", value: "Together." },
  ],
  subheading:
    "Notion is the connected workspace where better, faster work happens. Now with AI",
  cta: { label: "Get Notion free", href: "/signup" },
  image: {
    src: "/images/home-hero.png",
    alt: "Notion workspace showing a wiki, docs, and project board",
    width: 852,
    height: 260,
  },
};
