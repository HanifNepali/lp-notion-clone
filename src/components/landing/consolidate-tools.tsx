import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { consolidateToolsContent, metalabTestimonial } from "@/data/landing";
import { Testimonial } from "./testimonial";

export function ConsolidateTools() {
  return (
    <section className="py-16 lg:py-24">
      <Container variant="page" className="flex flex-col items-center">
        <div className="lg:max-w-105 lg:mr-auto lg:ml-75">
          <SectionHeading>
            <SectionHeading.Title size="display">
              Consolidate tools. <br /> Cut costs.
            </SectionHeading.Title>
          </SectionHeading>
        </div>

        <div
          className="relative mt-16 w-full max-w-142 lg:mt-20"
          style={{ aspectRatio: "568 / 78" }}
        >
          <Image
            src={consolidateToolsContent.toolsRow.src}
            alt={consolidateToolsContent.toolsRow.alt}
            fill
            sizes="(min-width: 1024px) 568px, 90vw"
            className="object-contain"
          />

          <div
            className="absolute w-full sm:w-[108%]"
            style={{
              left: "-4.5%",
              top: "10.8%",
              height: "64.1%",
            }}
          >
            <Image
              src={consolidateToolsContent.strikethrough.src}
              alt="Line Decoration"
              fill
              aria-hidden="true"
              sizes="(min-width: 1024px) 613px, 96vw"
              className="object-contain"
            />
          </div>

          <div
            className="absolute hidden md:block md:left-[75%] lg:left-[83%]"
            style={{
              top: "-214.6%",
              width: "38.2%",
              height: "234.6%",
            }}
          >
            <Image
              src={consolidateToolsContent.pencilIllustration.src}
              alt="Illustration Art"
              fill
              aria-hidden="true"
              sizes="217px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-10 lg:mt-14">
          <Testimonial content={metalabTestimonial} />
        </div>
      </Container>
    </section>
  );
}
