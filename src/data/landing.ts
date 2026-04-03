import type {
  NavLink,
  CtaLink,
  HeroContent,
  SidekickContent,
  CustomerWallContent,
} from "@/types/landing";

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

export const sidekickContent: SidekickContent = {
  desktopImage: {
    src: "/images/sidekick-desktop-app.png",
    alt: "Notion AI sidekick panel next to a project workspace on desktop",
    width: 1022,
    height: 636,
  },
  mobileImage: {
    src: "/images/sidekick-mobile-app.png",
    alt: "Notion AI sidekick on a mobile device",
    width: 216,
    height: 468,
  },
};

export const customerWallContent: CustomerWallContent = {
  heading: "Millions run on Notion every day",
  description:
    "Powering the world's best teams, from next-generation startups to established enterprises.",
  cta: { label: "Read customer stories", href: "#" },
  logos: [
    { name: "Figma", src: "/images/logos/figma.png", width: 87, height: 29 },
    { name: "Pixar", src: "/images/logos/pixar.png", width: 109, height: 23 },
    {
      name: "Instacart",
      src: "/images/logos/instacart.png",
      width: 112,
      height: 23,
    },
    {
      name: "DoorDash",
      src: "/images/logos/doordash.png",
      width: 135,
      height: 19,
    },
    { name: "Nike", src: "/images/logos/nike.png", width: 83, height: 30 },
    { name: "Amazon", src: "/images/logos/amazon.png", width: 90, height: 28 },
    {
      name: "Pinterest",
      src: "/images/logos/pinterest.png",
      width: 98,
      height: 25,
    },
    {
      name: "General Electric",
      src: "/images/logos/general-electric.png",
      width: 50,
      height: 50,
    },
    { name: "Uber", src: "/images/logos/uber.png", width: 84, height: 30 },
    { name: "Plaid", src: "/images/logos/plaid.png", width: 82, height: 31 },
    {
      name: "Salesforce",
      src: "/images/logos/salesforce.png",
      width: 96,
      height: 26,
    },
    {
      name: "Snowflake",
      src: "/images/logos/snowflake.png",
      width: 101,
      height: 25,
    },
    {
      name: "Headspace",
      src: "/images/logos/headspace.png",
      width: 106,
      height: 24,
    },
    {
      name: "AngelList",
      src: "/images/logos/angel-list.png",
      width: 104,
      height: 24,
    },
  ],
};
