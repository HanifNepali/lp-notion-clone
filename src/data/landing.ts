import type {
  NavLink,
  CtaLink,
  HeroContent,
  SidekickContent,
  CustomerWallContent,
  WorkspaceShowcaseContent,
  ConsolidateToolsContent,
  TestimonialContent,
  BuildingBlocksContent,
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

export const workspaceShowcaseContent: WorkspaceShowcaseContent = {
  heading: "Finally, all your work in one place",
  blocks: [
    {
      id: "wikis",
      icon: "/icons/feature-wikis.svg",
      title: "Wikis",
      description:
        "It's hard to move fast if you can't find anything. Centralize all your knowledge in Notion.",
      accentColor: "#ea4e43",
      exploreHref: "#",
      screenshot: {
        src: "/images/engineering-wiki.png",
        alt: "An engineering wiki page in Notion",
        width: 958,
        height: 599,
      },
      illustration: {
        src: "/images/wiki-illustration.png",
        alt: "",
        width: 222,
        height: 359,
      },
      doodle: "/icons/doodle-wikis.svg",
      doodlePositionTop: "top-16",
    },
    {
      id: "docs",
      icon: "/icons/feature-docs.svg",
      title: "Docs",
      description:
        "Simple. Powerful. Beautiful. Communicate more efficiently with next generation docs.",
      accentColor: "#996600",
      exploreHref: "#",
      screenshot: {
        src: "/images/meeting-notes.png",
        alt: "A meeting notes document in Notion",
        width: 958,
        height: 599,
      },
      illustration: {
        src: "/images/docs-illustration.png",
        alt: "",
        width: 222,
        height: 359,
      },
      doodle: "/icons/doodle-docs.svg",
      doodlePositionTop: "top-73",
    },
    {
      id: "projects",
      icon: "/icons/feature-projects.svg",
      title: "Projects",
      description:
        "Manage any type of project more efficiently. No separate, clunky system.",
      accentColor: "#0a85d1",
      exploreHref: "#",
      screenshot: {
        src: "/images/projects-board.png",
        alt: "A project board in Notion",
        width: 958,
        height: 599,
      },
      illustration: {
        src: "/images/projects-illustration.png",
        alt: "",
        width: 222,
        height: 359,
      },
      doodle: "/icons/doodle-projects.svg",
      doodlePositionTop: "top-79",
    },
    {
      id: "notion-ai",
      icon: "/icons/ai-sparkle.svg",
      title: "Notion AI",
      description: "Access the limitless power of AI, right inside Notion.",
      accentColor: "#9d34da",
      exploreHref: "#",
      screenshot: {
        src: "/images/notion-ai.png",
        alt: "Notion AI assisting inside a Notion page",
        width: 958,
        height: 599,
      },
      illustration: {
        src: "/images/ai-illustration.png",
        alt: "",
        width: 222,
        height: 359,
      },
    },
  ],
};

export const consolidateToolsContent: ConsolidateToolsContent = {
  toolsRow: {
    src: "/images/tools-before-notion.png",
    alt: "A row of separate tool logos teams typically juggle before switching to Notion",
    width: 568,
    height: 78,
  },
  strikethrough: {
    src: "/images/tools-strikethrough.png",
    alt: "",
    width: 613,
    height: 50,
  },
  pencilIllustration: {
    src: "/images/giant-pencil-illustration.png",
    alt: "",
    width: 217,
    height: 183,
  },
};

export const metalabTestimonial: TestimonialContent = {
  quote:
    "We got rid of nearly a dozen different tools because of what Notion does for us.",
  author: "Justin Watt",
  role: "Director of Ops & Marketing, MetaLab",
  logo: {
    src: "/images/logos/metalab.png",
    alt: "MetaLab",
    width: 127,
    height: 35,
  },
};

export const buildingBlocksContent: BuildingBlocksContent = {
  heading: "Powerful building blocks",
  peekImage: {
    src: "/images/building-blocks-peek.png",
    alt: "",
    width: 221,
    height: 150,
  },
  featureTitle: "Visualize, filter & sort any way you want",
  featureDescription:
    "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that's most helpful to you.",
  tabs: [
    {
      label: "Board",
      screenshot: {
        src: "/images/view-board.png",
        alt: "Kanban board view in Notion",
        width: 958,
        height: 599,
      },
    },
    {
      label: "Table",
      screenshot: {
        src: "/images/engineering-wiki.png",
        alt: "Table view in Notion",
        width: 958,
        height: 599,
      },
    },
    {
      label: "Timeline",
      screenshot: {
        src: "/images/meeting-notes.png",
        alt: "Timeline view in Notion",
        width: 958,
        height: 599,
      },
    },
  ],
};

export const customizeInfoCard = {
  title: "Customize the info you track",
  description:
    "Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.",
  image: {
    src: "/images/customize-info.png",
    alt: "Custom labels and tags in a Notion database",
    width: 480,
    height: 320,
  },
};

export const buildAnyPageCard = {
  title: "Build any page, communicate any idea",
  description:
    "Everything is drag and drop in Notion — images, toggles, to-do's, even embedded databases.",
  image: {
    src: "/images/build-any-page.png",
    alt: "A flexible drag-and-drop Notion page layout",
    width: 480,
    height: 320,
  },
};

export const matchgroupTestimonial: TestimonialContent = {
  quote:
    "Notion adapts to your needs. It's as minimal or as powerful as you need it to be.",
  author: "Rahim Makani",
  role: "Director of Product, Matchgroup",
  logo: {
    src: "/images/logos/match-group.png",
    alt: "MetaLab",
    width: 33,
    height: 36,
  },
};
