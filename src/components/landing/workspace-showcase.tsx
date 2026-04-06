import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { workspaceShowcaseContent } from "@/data/landing";

export function WorkspaceShowcase() {
  return (
    <section className="py-16 lg:py-20">
      <Container variant="page">
        <SectionHeading>
          <SectionHeading.Title size="display">
            {workspaceShowcaseContent.heading}
          </SectionHeading.Title>
        </SectionHeading>

        <div className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-32">
          {workspaceShowcaseContent.blocks.map((block) => (
            <article
              key={block.id}
              className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-6"
            >
              <div className="shrink-0 lg:w-60 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-normal gap-3.5">
                  <Image
                    src={block.icon}
                    alt="Icon"
                    width={31}
                    height={31}
                    aria-hidden="true"
                    className="w-auto"
                  />
                  <h3 className="text-[26px] font-bold leading-8 tracking-[-0.6px] text-ink sm:text-[30px] sm:leading-8.5">
                    {block.title}
                  </h3>
                </div>

                <p className="mt-4 max-w-100 mx-auto lg:max-w-60 text-base leading-6 text-ink">
                  {block.description}
                </p>

                <a
                  href={block.exploreHref}
                  style={{ color: block.accentColor }}
                  className="mt-4 inline-flex items-center gap-1 text-base hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  Explore <span aria-hidden="true">→</span>
                </a>

                <div className="pointer-events-none absolute -bottom-10 left-20 hidden w-50 overflow-hidden rounded-2xl lg:block">
                  <Image
                    src={block.illustration.src}
                    alt={block.illustration.alt}
                    width={block.illustration.width}
                    height={block.illustration.height}
                    aria-hidden="true"
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="relative flex-1">
                {block.doodle && (
                  <Image
                    src={block.doodle}
                    alt="Icon"
                    width={225}
                    height={50}
                    aria-hidden="true"
                    className={`hidden xl:block pointer-events-none absolute -left-6 ${block.doodlePositionTop}`}
                  />
                )}

                <div className="overflow-hidden max-w-160 mx-auto lg:mx-0 lg:max-w-none rounded-xl border border-black/10 bg-white shadow-showcase">
                  <Image
                    src={block.screenshot.src}
                    alt={block.screenshot.alt}
                    width={block.screenshot.width}
                    height={block.screenshot.height}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
