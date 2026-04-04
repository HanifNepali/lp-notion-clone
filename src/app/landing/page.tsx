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

export default function LandingPage() {
  return (
    <main>
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
    </main>
  );
}
