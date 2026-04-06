import { Button } from "@/components/ui/button";
import { projectContent } from "@/data/project";
import { ProjectSection } from "../ui/project-section";

export function ProjectCta() {
  return (
    <ProjectSection>
      <div className="flex flex-col items-center rounded-3xl bg-surface px-6 py-16 text-center">
        <ProjectSection.Title>
          {projectContent.finalCta.heading}
        </ProjectSection.Title>
        <ProjectSection.Description>
          {projectContent.finalCta.description}
        </ProjectSection.Description>
        <ProjectSection.Content>
          <div className="mt-4">
            <Button
              href={projectContent.finalCta.cta.href}
              variant="primary"
              showArrow
            >
              {projectContent.finalCta.cta.label}
            </Button>
          </div>
        </ProjectSection.Content>
      </div>
    </ProjectSection>
  );
}
