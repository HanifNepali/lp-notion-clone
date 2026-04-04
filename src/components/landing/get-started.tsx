import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { getStartedContent } from "@/data/landing";

export function GetStarted() {
  return (
    <section className="py-12 lg:py-16 xl:py-20">
      <Container
        variant="page"
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-[40px] font-bold leading-11 tracking-[-2px] text-ink sm:text-[56px] sm:leading-15 lg:text-[64px] lg:leading-20">
          {getStartedContent.heading}
        </h2>
        <p className="mt-2 text-ink">{getStartedContent.description}</p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <Button href={getStartedContent.primaryCta.href} variant="primary">
            {getStartedContent.primaryCta.label}
          </Button>
          <Button
            href={getStartedContent.secondaryCta.href}
            variant="link-accent"
            showArrow
          >
            {getStartedContent.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-8 w-full max-w-2xl">
          <Image
            src={getStartedContent.illustration.src}
            alt={getStartedContent.illustration.alt}
            width={getStartedContent.illustration.width}
            height={getStartedContent.illustration.height}
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
