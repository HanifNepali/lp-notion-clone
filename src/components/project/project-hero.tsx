import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { projectContent } from "@/data/project";

export function ProjectHero() {
  return (
    <section className="py-20">
      <Container variant="page" className="flex flex-col items-start">
        <span className="rounded-full bg-surface px-3 py-1 text-sm font-medium text-ink/70">
          {projectContent.hero.eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-[40px] font-bold leading-11 tracking-[-1px] text-ink sm:text-[56px] sm:leading-15">
          {projectContent.hero.title}
        </h1>
        <p className="mt-6 lg:max-w-2xl text-lg leading-7 text-ink/85">
          {projectContent.hero.description}
        </p>
        <div className="mt-8">
          <Button
            href={projectContent.hero.primaryCta.href}
            variant="primary"
            showArrow
          >
            {projectContent.hero.primaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
