import type { CtaLink } from "@/types/landing";

export interface TechItem {
  name: string;
  description: string;
}

export interface DecisionItem {
  title: string;
  description: string;
}

export interface ProjectContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaLink;
  };
  overview: {
    heading: string;
    paragraph: string;
  };
  techStack: {
    heading: string;
    items: TechItem[];
  };
  decisions: {
    heading: string;
    items: DecisionItem[];
  };
  responsive: {
    heading: string;
    paragraphs: string[];
    breakpoints: string[];
    containers: string[];
  };
  accessibility: {
    heading: string;
    itemsLeft: string[];
    itemsRight: string[];
  };
  finalCta: {
    heading: string;
    description: string;
    cta: CtaLink;
  };
  disclaimer: string;
}
