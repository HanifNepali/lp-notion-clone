import { projectContent } from "@/data/project";
import { ProjectSection } from "../ui/project-section";

export function TechStack() {
  return (
    <ProjectSection>
      <ProjectSection.Title>
        {projectContent.techStack.heading}
      </ProjectSection.Title>
      <ProjectSection.Content>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectContent.techStack.items.map((item) => (
            <div key={item.name} className="rounded-2xl bg-surface p-6">
              <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
              <p className="mt-2 text-sm text-ink/85">{item.description}</p>
            </div>
          ))}
        </div>
      </ProjectSection.Content>
    </ProjectSection>
  );
}
