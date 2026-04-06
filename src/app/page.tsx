import type { Metadata } from "next";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectOverview } from "@/components/project/project-overview";
import { TechStack } from "@/components/project/tech-stack";
import { KeyDecisions } from "@/components/project/key-decisions";
import { ResponsiveApproach } from "@/components/project/responsive-approach";
import { AccessibilityOverview } from "@/components/project/accessibility-overview";
import { ProjectCta } from "@/components/project/project-cta";
import { DisclaimerBanner } from "@/components/layout/disclaimer-banner";

export const metadata: Metadata = {
  title: "Portfolio Project - Notion Landing Page Rebuild",
  description:
    "A production-quality Next.js 16 rebuild of the Notion homepage from Figma, built with TypeScript, Tailwind CSS, and Motion.",
  openGraph: {
    title: "Portfolio Project - Notion Landing Page Rebuild",
    description:
      "A production-quality Next.js 16 rebuild of the Notion homepage from Figma, built with TypeScript, Tailwind CSS, and Motion.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Project - Notion Landing Page Rebuild",
    description:
      "A production-quality Next.js 16 rebuild of the Notion homepage from Figma, built with TypeScript, Tailwind CSS, and Motion.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <DisclaimerBanner />
      <ProjectHero />
      <ProjectOverview />
      <TechStack />
      <KeyDecisions />
      <ResponsiveApproach />
      <AccessibilityOverview />
      <ProjectCta />
    </main>
  );
}
