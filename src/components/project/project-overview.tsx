import { projectContent } from "@/data/project";
import { ProjectSection } from "@/components/ui/project-section";
import { heroContent } from "@/data/landing";
import Image from "next/image";

export function ProjectOverview() {
  return (
    <ProjectSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="lg:max-w-2xl">
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
        <div className="w-full max-w-110 mx-auto lg:max-w-125 lg-mx-0 flex items-center">
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            width={heroContent.image.width}
            height={heroContent.image.height}
            className="h-auto w-full rounded-xl"
            priority
          />
        </div>
      </div>
    </ProjectSection>
  );
}
