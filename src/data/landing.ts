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
  TeamShowcaseContent,
  CommunityContent,
  TemplatesContent,
  GetStartedContent,
  FooterContent,
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

const productRoadmapScreenshot = {
  src: "/images/team-product-page.png",
  alt: "A product roadmap page in Notion with a sidebar showing team spaces",
  width: 958,
  height: 640,
};

export const teamShowcaseContent: TeamShowcaseContent = {
  heading: "Every team, side-by-side",
  defaultIndex: 2,
  teams: [
    {
      label: "Engineering",
      icon: {
        src: "/icons/team-engineering.svg",
        alt: "",
        width: 70,
        height: 70,
      },
      screenshot: {
        src: "/images/view-board.png",
        alt: "Timeline view in Notion",
        width: 958,
        height: 599,
      },
    },
    {
      label: "Design",
      icon: { src: "/icons/team-design.svg", alt: "", width: 70, height: 70 },
      screenshot: {
        src: "/images/meeting-notes.png",
        alt: "Timeline view in Notion",
        width: 958,
        height: 599,
      },
    },
    {
      label: "Product",
      icon: { src: "/icons/team-product.svg", alt: "", width: 70, height: 70 },
      screenshot: {
        src: "/images/team-product-page.png",
        alt: "Kanban board view in Notion",
        width: 958,
        height: 599,
      },
    },
    {
      label: "Marketing",
      icon: {
        src: "/icons/team-marketing.svg",
        alt: "",
        width: 70,
        height: 70,
      },
      screenshot: {
        src: "/images/engineering-wiki.png",
        alt: "Table view in Notion",
        width: 958,
        height: 599,
      },
    },
    {
      label: "Operations",
      icon: {
        src: "/icons/team-operations.svg",
        alt: "",
        width: 70,
        height: 70,
      },
      screenshot: {
        src: "/images/team-product-page.png",
        alt: "Timeline view in Notion",
        width: 958,
        height: 599,
      },
    },
    {
      label: "HR",
      icon: { src: "/icons/team-hr.svg", alt: "", width: 70, height: 70 },
      screenshot: {
        src: "/images/meeting-notes.png",
        alt: "Timeline view in Notion",
        width: 958,
        height: 599,
      },
    },
  ],
};

export const communityContent: CommunityContent = {
  heading: "Join a global movement.\nUnleash your creativity.",
  description:
    "Our vibrant community produces content, teaches courses, and leads events all over the world.",
  learnMoreHref: "#",
  avatar: {
    src: `/images/avatars/avatars.svg`,
    alt: "",
    width: 1024,
    height: 160,
  },
  stats: [
    { value: "1M", label: "community members" },
    { value: "150", label: "community groups" },
    { value: "50", label: "countries represented" },
  ],
  supportNetwork: {
    title: "An always-on support network",
    description: "Swap setups and share tips in over 149 online communities.",
    icon: {
      src: "/icons/community-icons.png",
      alt: "Social Networking Apps",
      width: 288,
      height: 273,
    },
  },
  languageCard: {
    title: "Choose your language",
    description:
      "Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!",
    image: {
      src: "/images/meetup.png",
      alt: "Variet of Languages Supported",
      width: 464,
      height: 235,
    },
  },
  carouselSlides: [
    {
      src: "/images/community-slide-1.png",
      alt: "Community meet-up in Tokyo",
      caption: "Community meet-up in Tokyo",
    },
    {
      src: "/images/community-slide-1.png",
      alt: "Community meet-up in Tokyo",
      caption: "Community meet-up in Tokyo",
    },
    {
      src: "/images/community-slide-1.png",
      alt: "Community meet-up in Tokyo",
      caption: "Community meet-up in Tokyo",
    },
  ],
  tweets: [
    {
      name: "André Blackman",
      handle: "@mindofandre",
      avatar: {
        src: "/images/avatars/avatar-2.png",
        alt: "Tweeter User",
        width: 40,
        height: 40,
      },
      quote:
        "One of the most incredible things about @NotionHQ is the dynamic community being built - creating and sharing at its best.",
    },
    {
      name: "Deborah Mecca",
      handle: "@DebMecca",
      avatar: {
        src: "/images/avatars/avatar-1.png",
        alt: "Tweeter User",
        width: 40,
        height: 40,
      },
      quote:
        "I used to HATE documenting things. And then I started using @NotionHQ and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs.",
    },
    {
      name: "Oliver Peyre",
      handle: "@opeyre",
      avatar: {
        src: "/images/avatars/avatar-3.png",
        alt: "Tweeter User",
        width: 40,
        height: 40,
      },
      quote:
        "@NotionHQ Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!",
    },
  ],
};

export const templatesContent: TemplatesContent = {
  heading: "Endless ways to use it",
  browseAllHref: "#",
  illustration: {
    src: "/images/templates-illustration.png",
    alt: "Templates section illustration, People peeking at the templates",
    width: 207,
    height: 202,
  },
  items: [
    {
      title: "Product roadmap",
      icon: {
        src: "/icons/flag.svg",
        alt: "Flag Icon",
        width: 26,
        height: 26,
      },
      href: "#",
    },
    {
      title: "OKRs",
      icon: {
        src: "/icons/checkmark.svg",
        alt: "Checkmark Icon",
        width: 26,
        height: 26,
      },
      href: "#",
    },
    {
      title: "Meeting notes",
      icon: {
        src: "/icons/clipboard.svg",
        alt: "Clipboard Icon",
        width: 26,
        height: 26,
      },
      href: "#",
    },
    {
      title: "Vacation planner",
      icon: {
        src: "/icons/aeroplane.svg",
        alt: "Aeroplane Icon",
        width: 26,
        height: 26,
      },
      href: "#",
    },
    {
      title: "Editorial calendar",
      icon: {
        src: "/icons/calendar.svg",
        alt: "calendar Icon",
        width: 26,
        height: 26,
      },
      href: "#",
    },
    {
      title: "Habit tracker",
      icon: {
        src: "/icons/tracker.svg",
        alt: "Tracker Icon",
        width: 26,
        height: 26,
      },
      href: "#",
    },
  ],
};

export const getStartedContent: GetStartedContent = {
  heading: "Get started for free",
  description: "Play around with it first. Pay and add your team later.",
  primaryCta: { label: "Try Notion free", href: "/signup" },
  secondaryCta: { label: "Request a demo", href: "#" },
  illustration: {
    src: "/images/notion-parade.png",
    alt: "Get Started section illustration, Notion Parade",
    width: 700,
    height: 400,
  },
};

export const footerContent: FooterContent = {
  social: [
    {
      label: "Instagram",
      href: "#",
      icon: {
        src: "/icons/instagram.svg",
        alt: "Instrgram Logo",
        width: 18,
        height: 18,
      },
    },
    {
      label: "X",
      href: "#",
      icon: {
        src: "/icons/x.svg",
        alt: "X Logo",
        width: 18,
        height: 18,
      },
    },
    {
      label: "Linkedin",
      href: "#",
      icon: {
        src: "/icons/linkedin.svg",
        alt: "Linkedin Logo",
        width: 19.3,
        height: 18,
      },
    },
    {
      label: "Facebook",
      href: "#",
      icon: {
        src: "/icons/facebook.svg",
        alt: "Facebook Logo",
        width: 18,
        height: 18,
      },
    },
  ],
  columns: [
    [
      {
        heading: "Product",
        links: [
          { label: "Wikis", href: "#" },
          { label: "Projects", href: "#" },
          { label: "Docs", href: "#" },
          { label: "Notion AI", href: "#" },
          { label: "What's new", href: "#" },
        ],
      },
      {
        heading: "Solutions",
        links: [
          { label: "Enterprise", href: "#" },
          { label: "Small business", href: "#" },
          { label: "Personal use", href: "#" },
          { label: "Startups", href: "#" },
          { label: "Education", href: "#" },
          { label: "Product", href: "#" },
          { label: "Design", href: "#" },
          { label: "Managers", href: "#" },
        ],
      },
    ],
    [
      {
        heading: "Download",
        links: [
          { label: "iOS", href: "#" },
          { label: "Android", href: "#" },
          { label: "Mac", href: "#" },
          { label: "Windows", href: "#" },
          { label: "Web Clipper", href: "#" },
        ],
      },
      {
        heading: "Build",
        links: [
          { label: "API docs", href: "#" },
          { label: "Templates", href: "#" },
          { label: "Guides", href: "#" },
          { label: "Tutorials", href: "#" },
        ],
      },
      {
        heading: "Learn",
        links: [
          { label: "Customer stories", href: "#" },
          { label: "Help center", href: "#" },
          { label: "Webinars", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Community", href: "#" },
        ],
      },
    ],
    [
      {
        heading: "Get started",
        links: [
          { label: "Request a demo", href: "#" },
          { label: "Switch from Evernote", href: "#" },
          { label: "Sign up", href: "#" },
          { label: "Log in", href: "#" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Pricing", href: "#" },
          { label: "About us", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Media kit", href: "#" },
          { label: "Contact support", href: "#" },
          { label: "Security", href: "#" },
          { label: "Terms & privacy", href: "#" },
        ],
      },
    ],
  ],
  copyright: "© 2026 Notion Labs, Inc.",
};
