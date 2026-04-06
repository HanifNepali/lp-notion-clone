import { projectContent } from "@/data/project";
import { ProjectSection } from "../ui/project-section";

export function KeyDecisions() {
  return (
    <ProjectSection>
      <ProjectSection.Title>
        {projectContent.decisions.heading}
      </ProjectSection.Title>
      <ProjectSection.Content className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projectContent.decisions.items.map((item, i) => (
            <div key={item.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-sm font-semibold text-ink"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-base leading-7 text-ink/85">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ProjectSection.Content>
    </ProjectSection>
  );
}
