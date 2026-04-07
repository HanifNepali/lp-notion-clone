import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { templatesContent } from "@/data/landing";
import type { TemplateItem } from "@/types/landing";

function TemplateCard({ item }: { item: TemplateItem }) {
  return (
    <div className="flex gap-3 lg:block rounded-2xl bg-surface p-6">
      <Image
        src={item.icon.src}
        alt={item.icon.alt}
        width={item.icon.width}
        height={item.icon.height}
        className="h-auto -mt-3 lg:mt-0"
      />

      <div>
        <h3 className="lg:mt-4 lg:text-lg font-bold text-ink">{item.title}</h3>
        <a
          href={item.href}
          className="mt-1 inline-flex items-center gap-1 text-sm text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Get template <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export function Templates() {
  return (
    <section className="py-12 lg:py-16 xl:py-20">
      <Container variant="sm">
        <div className="relative flex flex-col items-center text-center">
          <h2 className="text-[32px] font-bold leading-9 tracking-[-0.7px] text-ink sm:text-4xl">
            {templatesContent.heading}
          </h2>
          <Button
            href={templatesContent.browseAllHref}
            variant="link-accent"
            showArrow
            className="mt-2"
          >
            Browse all templates
          </Button>

          <Image
            src={templatesContent.illustration.src}
            alt={templatesContent.illustration.alt}
            width={templatesContent.illustration.width}
            height={templatesContent.illustration.height}
            aria-hidden="true"
            className="absolute -top-4 right-0 hidden lg:block z-[-1] h-auto"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templatesContent.items.map((item) => (
            <TemplateCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
