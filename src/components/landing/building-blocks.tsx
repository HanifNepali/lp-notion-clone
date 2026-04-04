import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Testimonial } from "@/components/landing/testimonial";
import { ViewSwitcher } from "@/components/landing/view-switcher";
import {
  buildingBlocksContent,
  customizeInfoCard,
  buildAnyPageCard,
  matchgroupTestimonial,
} from "@/data/landing";
import { Eye, Palette, Shuffle } from "lucide-react";

export function BuildingBlocks() {
  return (
    <section className="py-16 lg:py-20">
      <Container variant="page">
        <div className="relative flex justify-center lg:justify-normal items-center">
          <Image
            src={buildingBlocksContent.peekImage.src}
            alt={buildingBlocksContent.peekImage.alt}
            width={buildingBlocksContent.peekImage.width}
            height={buildingBlocksContent.peekImage.height}
            aria-hidden="true"
            className="pointer-events-none static hidden lg:block"
          />
          <SectionHeading className="ml-4">
            <SectionHeading.Title size="display">
              {buildingBlocksContent.heading}
            </SectionHeading.Title>
          </SectionHeading>
        </div>

        <div className="mt-8 lg:mt-[-10]">
          <Card className="border-0">
            <Card.Header>
              <Card.Icon>
                <Shuffle className="size-6 text-accent" aria-hidden="true" />
              </Card.Icon>
              <Card.Title className="font-bold! text-lg!">
                {buildingBlocksContent.featureTitle}
              </Card.Title>
              <Card.Description className="max-w-lg mt-1! text-base! text-ink!">
                {buildingBlocksContent.featureDescription}
              </Card.Description>

              <div className="mt-9">
                <ViewSwitcher tabs={buildingBlocksContent.tabs} />
              </div>
            </Card.Header>
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card className="border-0 shadow">
            <Card.Header>
              <Card.Icon>
                <Eye className="size-6 text-accent" aria-hidden="true" />
              </Card.Icon>
              <Card.Title className="font-bold! text-lg!">
                {customizeInfoCard.title}
              </Card.Title>
              <Card.Description className="max-w-md mt-1! text-base! text-ink! leading-5.5!">
                {customizeInfoCard.description}
              </Card.Description>
            </Card.Header>
            <Card.Media>
              <Image
                src={customizeInfoCard.image.src}
                alt={customizeInfoCard.image.alt}
                width={customizeInfoCard.image.width}
                height={customizeInfoCard.image.height}
                className="h-auto w-full"
              />
            </Card.Media>
          </Card>

          <Card className="border-0 shadow">
            <Card.Header>
              <Card.Icon>
                <Palette className="size-6 text-accent" aria-hidden="true" />
              </Card.Icon>
              <Card.Title className="font-bold! text-lg!">
                {buildAnyPageCard.title}
              </Card.Title>
              <Card.Description className="max-w-sm mt-1! text-base! text-ink! leading-5.5!">
                {buildAnyPageCard.description}
              </Card.Description>
            </Card.Header>
            <Card.Media>
              <Image
                src={buildAnyPageCard.image.src}
                alt={buildAnyPageCard.image.alt}
                width={buildAnyPageCard.image.width}
                height={buildAnyPageCard.image.height}
                className="h-auto w-full"
              />
            </Card.Media>
          </Card>
        </div>

        <div className="mt-20 lg:mt-24">
          <Testimonial content={matchgroupTestimonial} />
        </div>
      </Container>
    </section>
  );
}
