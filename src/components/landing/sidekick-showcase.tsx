import Image from "next/image";
import { Container } from "@/components/layout/container";
import { sidekickContent } from "@/data/landing";

export function SidekickShowcase() {
  return (
    <section className="pb-16 lg:pb-20">
      <Container variant="page">
        <div className="flex flex-col items-center gap-8 relative lg:block">
          <div className="w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-showcase">
            <Image
              src={sidekickContent.desktopImage.src}
              alt={sidekickContent.desktopImage.alt}
              width={sidekickContent.desktopImage.width}
              height={sidekickContent.desktopImage.height}
              className="h-auto w-full"
            />
          </div>

          <div className="shrink-0 rounded-3xl bg-black p-1.5 shadow-showcase-sm hidden sm:block sm:w-35 sm:absolute -right-4 -bottom-15 md:w-45 xl:bottom-0 min-[1400px]:-right-14  min-[1400px]:w-56!">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={sidekickContent.mobileImage.src}
                alt={sidekickContent.mobileImage.alt}
                width={sidekickContent.mobileImage.width}
                height={sidekickContent.mobileImage.height}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
