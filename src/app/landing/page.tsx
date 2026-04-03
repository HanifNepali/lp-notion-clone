import { CustomerWall } from "@/components/landing/customer-wall";
import { Hero } from "@/components/landing/hero";
import { SidekickShowcase } from "@/components/landing/sidekick-showcase";
import { WorkspaceShowcase } from "@/components/landing/workspace-showcase";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <SidekickShowcase />
      <CustomerWall />
      <WorkspaceShowcase />
    </main>
  );
}
