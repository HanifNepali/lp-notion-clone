import { projectContent } from "@/data/project";
import { ProjectSection } from "../ui/project-section";
import Image from "next/image";
import { getStartedContent } from "@/data/landing";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="lg:max-w-2xl">
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
        <div className="flex items-center max-w-110 mx-auto lg-mx-0">
          <Image
            src={getStartedContent.illustration.src}
            alt={getStartedContent.illustration.alt}
            width={getStartedContent.illustration.width}
            height={getStartedContent.illustration.height}
            aria-hidden="true"
            className="h-auto w-full"
          />
        </div>
      </div>
    </ProjectSection>
  );
}
