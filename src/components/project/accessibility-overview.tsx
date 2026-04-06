import { Check } from "lucide-react";
import { projectContent } from "@/data/project";
import { ProjectSection } from "../ui/project-section";

export function AccessibilityOverview() {
  return (
    <ProjectSection>
      <ProjectSection.Title>
        {projectContent.accessibility.heading}
      </ProjectSection.Title>
      <ProjectSection.Content>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div>
            {projectContent.accessibility.itemsLeft.map((item) => (
              <li key={item} className="flex items-start gap-3 mb-4">
                <Check
                  className="mt-1 size-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-base leading-7 text-ink/85">{item}</span>
              </li>
            ))}
          </div>
          <div>
            {projectContent.accessibility.itemsRight.map((item) => (
              <li key={item} className="flex items-start gap-3 mb-4">
                <Check
                  className="mt-1 size-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-base leading-7 text-ink/85">{item}</span>
              </li>
            ))}
          </div>
        </div>
      </ProjectSection.Content>
    </ProjectSection>
  );
}
