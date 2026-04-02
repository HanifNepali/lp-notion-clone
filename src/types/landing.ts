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
