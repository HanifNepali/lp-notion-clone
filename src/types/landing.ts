export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

export interface CtaLink {
  label: string;
  href: string;
  showArrow?: boolean;
}

export interface HeroSegment {
  type: "text" | "keyword";
  value: string;
  icon?: string;
  alt?: string;
}

export interface HeroContent {
  segmentTop: HeroSegment[];
  segmentBottom: HeroSegment[];
  subheading: string;
  cta: CtaLink;
  image: { src: string; alt: string; width: number; height: number };
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SidekickContent {
  desktopImage: ImageAsset;
  mobileImage: ImageAsset;
}

export interface CustomerLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface CustomerWallContent {
  heading: string;
  description: string;
  cta: CtaLink;
  logos: CustomerLogo[];
}

export interface FeatureBlock {
  id: string;
  icon: string;
  title: string;
  description: string;
  accentColor: string;
  exploreHref: string;
  screenshot: ImageAsset;
  illustration: ImageAsset;
  doodle?: string;
  doodlePositionTop?: string;
}

export interface WorkspaceShowcaseContent {
  heading: string;
  blocks: FeatureBlock[];
}

export interface ConsolidateToolsContent {
  toolsRow: ImageAsset;
  strikethrough: ImageAsset;
  pencilIllustration: ImageAsset;
}

export interface TestimonialContent {
  quote: string;
  author: string;
  role: string;
  logo: ImageAsset;
}

export interface ViewTab {
  label: string;
  screenshot: ImageAsset;
}

export interface BuildingBlocksContent {
  heading: string;
  peekImage: ImageAsset;
  featureTitle: string;
  featureDescription: string;
  tabs: ViewTab[];
}

export interface TeamTab extends ViewTab {
  icon: ImageAsset;
}

export interface TeamShowcaseContent {
  heading: string;
  defaultIndex: number;
  teams: TeamTab[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SupportNetworkContent {
  title: string;
  description: string;
  icon: ImageAsset;
}

export interface GreetingLine {
  text: string;
  textColor: string;
  bgColor: string;
}

export interface LanguageCardContent {
  title: string;
  description: string;
  image: ImageAsset;
}

export interface CarouselSlide {
  src: string;
  alt: string;
  caption: string;
}

export interface Tweet {
  name: string;
  handle: string;
  avatar: ImageAsset;
  quote: string;
}

export interface CommunityContent {
  heading: string;
  description: string;
  learnMoreHref: string;
  avatar: ImageAsset;
  stats: StatItem[];
  supportNetwork: SupportNetworkContent;
  languageCard: LanguageCardContent;
  carouselSlides: CarouselSlide[];
  tweets: Tweet[];
}

export interface TemplateItem {
  title: string;
  icon: ImageAsset;
  href: string;
}

export interface FeaturedTemplateColumn {
  heading: string;
  items: string[];
}

export interface TemplatesContent {
  heading: string;
  browseAllHref: string;
  illustration: ImageAsset;
  items: TemplateItem[];
}

export interface GetStartedContent {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  illustration: ImageAsset;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ImageAsset;
}

export interface FooterContent {
  social: SocialLink[];
  columns: FooterLinkGroup[][];
  copyright: string;
  disclaimer: string;
}
