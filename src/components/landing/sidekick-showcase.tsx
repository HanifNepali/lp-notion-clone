import Image from "next/image";
import { Container } from "@/components/layout/container";
import { sidekickContent } from "@/data/landing";

export function SidekickShowcase() {
  return (
    <section className="pb-16 lg:pb-20">
      <Container variant="page">
        <div className="flex flex-col items-center gap-8 lg:relative lg:block">
          <div className="w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-showcase">
            <Image
              src={sidekickContent.desktopImage.src}
              alt={sidekickContent.desktopImage.alt}
              width={sidekickContent.desktopImage.width}
              height={sidekickContent.desktopImage.height}
              className="h-auto w-full"
            />
          </div>

          <div className="w-40 shrink-0 rounded-3xl bg-black p-1.5 shadow-showcase-sm sm:w-48 lg:absolute lg:-right-14 lg:bottom-0 lg:w-56">
            <div className="overflow-hidden rounded-[20px]">
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
