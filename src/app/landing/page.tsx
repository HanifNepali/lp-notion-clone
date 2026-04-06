import { BuildingBlocks } from "@/components/landing/building-blocks";
import { Community } from "@/components/landing/community";
import { ConsolidateTools } from "@/components/landing/consolidate-tools";
import { CustomerWall } from "@/components/landing/customer-wall";
import { GetStarted } from "@/components/landing/get-started";
import { Hero } from "@/components/landing/hero";
import { SidekickShowcase } from "@/components/landing/sidekick-showcase";
import { TeamShowcase } from "@/components/landing/team-showcase";
import { Templates } from "@/components/landing/templates";
import { WorkspaceShowcase } from "@/components/landing/workspace-showcase";
import { DisclaimerBanner } from "@/components/layout/disclaimer-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Project - Notion Landing Page Rebuild",
  description:
    "An unofficial, non-commercial recreation of the Notion.com homepage, built to demonstrate a Figma-to-Next.js development workflow. Not affiliated with Notion Labs, Inc.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/landing",
  },
};

export default function LandingPage() {
  return (
    <main>
      <DisclaimerBanner />
      <Header />
      <Hero />
      <SidekickShowcase />
      <CustomerWall />
      <WorkspaceShowcase />
      <ConsolidateTools />
      <BuildingBlocks />
      <TeamShowcase />
      <Community />
      <Templates />
      <GetStarted />
      <Footer />
    </main>
  );
}
