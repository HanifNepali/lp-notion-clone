import { projectContent } from "@/data/project";
import { ProjectSection } from "../ui/project-section";

function BadgeTitle({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <h4 className="text-base font-semibold text-ink/85 mb-3">{children}</h4>
  );
}
function BadgeContent({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <span className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink/85">
      {children}
    </span>
  );
}

export function ResponsiveApproach() {
  return (
    <ProjectSection>
      <div className="max-w-3xl">
        <ProjectSection.Title>
          {projectContent.responsive.heading}
        </ProjectSection.Title>
        {projectContent.responsive.paragraphs.map((paragraph, i) => (
          <ProjectSection.Description key={i}>
            {paragraph}
          </ProjectSection.Description>
        ))}

        <ProjectSection.Content className="mt-8">
          <BadgeTitle>Breakpoints:</BadgeTitle>
          {projectContent.responsive.breakpoints.map((bp) => (
            <BadgeContent key={bp}>{bp}</BadgeContent>
          ))}
        </ProjectSection.Content>
        <ProjectSection.Content className="mt-6">
          <BadgeTitle>Containers:</BadgeTitle>
          {projectContent.responsive.containers.map((c) => (
            <BadgeContent key={c}>{c}</BadgeContent>
          ))}
        </ProjectSection.Content>
      </div>
    </ProjectSection>
  );
}
