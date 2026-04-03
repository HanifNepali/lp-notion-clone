import { BuildingBlocks } from "@/components/landing/building-blocks";
import { ConsolidateTools } from "@/components/landing/consolidate-tools";
import { CustomerWall } from "@/components/landing/customer-wall";
import { Hero } from "@/components/landing/hero";
import { SidekickShowcase } from "@/components/landing/sidekick-showcase";
import { TeamShowcase } from "@/components/landing/team-showcase";
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
    </main>
  );
}
