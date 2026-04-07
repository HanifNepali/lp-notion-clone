import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { customerWallContent } from "@/data/landing";

export function CustomerWall() {
  return (
    <section className="py-12 xl:py-20">
      <Container variant="page">
        <SectionHeading>
          <SectionHeading.Title size="display">
            {customerWallContent.heading}
          </SectionHeading.Title>
          <SectionHeading.Description className="max-w-123">
            {customerWallContent.description}
          </SectionHeading.Description>
          <SectionHeading.Action>
            <Button
              variant="link-accent"
              href={customerWallContent.cta.href}
              showArrow
            >
              {customerWallContent.cta.label}
            </Button>
          </SectionHeading.Action>
        </SectionHeading>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:mt-16 lg:max-w-4xl lg:grid-cols-5 lg:gap-x-12">
          {customerWallContent.logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                sizes="140px"
                className="h-6 w-auto object-contain sm:h-7"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
