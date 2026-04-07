import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { heroContent } from "@/data/landing";
import { Reveal } from "@/components/ui/reveal";

const KeywordUnderline = () => {
  return (
    <svg
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-x-0 -bottom-2.75 h-2 w-full text-ink"
    >
      <path
        d="M0 4 L100 4"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export function Hero() {
  return (
    <section className="pt-16 lg:pt-22">
      <Container
        variant="page"
        className="flex flex-col items-center text-center"
      >
        <Reveal>
          <h1 className="text-center text-[40px] font-bold leading-11 tracking-[-1.2px] text-ink sm:text-[56px] sm:leading-15 sm:tracking-[-1.8px] lg:text-(length:--text-hero) lg:leading-(--text-hero--line-height) lg:tracking-(--text-hero--letter-spacing)">
            <div className="mb-3">
              {heroContent.segmentTop.map((segment, index) =>
                segment.type === "keyword" ? (
                  <span
                    key={`${segment.value}-${index}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2"
                  >
                    {segment.icon && (
                      <Image
                        src={segment.icon}
                        alt={segment.alt ?? ""}
                        width={56}
                        height={56}
                        className="size-8 object-contain sm:size-10 lg:size-14"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative inline-block">
                      {segment.value}
                      <KeywordUnderline />
                    </span>
                  </span>
                ) : (
                  <span key={`${segment.value}-${index}`} className="mr-1">
                    {segment.value}
                  </span>
                ),
              )}
            </div>
            <div>
              {heroContent.segmentBottom.map((segment, index) =>
                segment.type === "keyword" ? (
                  <span
                    key={`${segment.value}-${index}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2"
                  >
                    {segment.icon && (
                      <Image
                        src={segment.icon}
                        alt={segment.alt ?? ""}
                        width={48}
                        height={48}
                        className="size-8 object-contain sm:size-10 lg:size-12"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative inline-block">
                      {segment.value}
                      <KeywordUnderline />
                    </span>
                  </span>
                ) : (
                  <span key={`${segment.value}-${index}`} className="mr-1">
                    {segment.value}
                  </span>
                ),
              )}
            </div>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-130 text-lg font-medium leading-8 tracking-[-0.3px] text-ink lg:text-(length:--text-display) lg:leading-(--text-display--line-height) lg:tracking-(--text-display--letter-spacing)">
            {heroContent.subheading}
            <Image
              src="/icons/ai-sparkle.svg"
              alt="Icon"
              width={24}
              height={23}
              aria-hidden="true"
              className="inline-block align-middle ml-2 h-6 w-auto"
            />
          </p>

          <div className="mt-8">
            <Button href={heroContent.cta.href} variant="primary" showArrow>
              {heroContent.cta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3} y={40}>
          <div className="mt-14 w-full max-w-213 lg:mt-16">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              width={heroContent.image.width}
              height={heroContent.image.height}
              sizes="(min-width: 1024px) 852px, 100vw"
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
