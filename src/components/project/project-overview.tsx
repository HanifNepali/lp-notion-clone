import { Container } from "@/components/layout/container";
import { projectContent } from "@/data/project";
import { ProjectSection } from "@/components/ui/project-section";

export function ProjectOverview() {
  return (
    <ProjectSection>
      <div className="max-w-3xl">
        <ProjectSection.Title>
          {projectContent.overview.heading}
        </ProjectSection.Title>
        <ProjectSection.Description>
          {projectContent.overview.paragraph}
        </ProjectSection.Description>
        <ProjectSection.Description>
          {projectContent.disclaimer}
        </ProjectSection.Description>
      </div>
    </ProjectSection>
  );
}
