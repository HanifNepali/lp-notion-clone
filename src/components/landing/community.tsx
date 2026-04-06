import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CommunityCarousel } from "@/components/landing/community-carousel";
import { cn } from "@/lib/cn";
import { communityContent } from "@/data/landing";
import { Card } from "../ui/card";
import { Reveal } from "../ui/reveal";

function highlightMentions(text: string) {
  return text.split(/(@\w+)/g).map((part, i) =>
    part.startsWith("@") ? (
      <span key={i} className="text-accent">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function Community() {
  return (
    <section className="py-12 lg:py-16 xl:py-20">
      <Container variant="sm">
        <SectionHeading>
          <SectionHeading.Title size="display" className="whitespace-pre-line">
            {communityContent.heading}
          </SectionHeading.Title>
          <SectionHeading.Description className="max-w-138 mt-4!">
            {communityContent.description}
          </SectionHeading.Description>
          <SectionHeading.Action>
            <Button
              variant="link-accent"
              href={communityContent.learnMoreHref}
              showArrow
            >
              Learn more
            </Button>
          </SectionHeading.Action>
        </SectionHeading>

        <div className="mt-8">
          <Reveal y={60} delay={0.25}>
            <Image
              src={communityContent.avatar.src}
              alt={communityContent.avatar.alt}
              width={communityContent.avatar.width}
              height={communityContent.avatar.height}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {communityContent.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-surface p-8 shadow">
              <p className="text-5xl lg:text-6xl font-bold text-accent tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-ink font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-0 shadow flex flex-col">
            <Card.Header>
              <Card.Title className="font-bold! text-lg!">
                {communityContent.supportNetwork.title}
              </Card.Title>
              <Card.Description className="max-w-md mt-1! text-base! text-ink! leading-5.5!">
                {communityContent.supportNetwork.description}
              </Card.Description>
            </Card.Header>
            <Card.Media className="px-8 pt-8 pb-2 self-end">
              <Image
                key={communityContent.supportNetwork.icon.src}
                src={communityContent.supportNetwork.icon.src}
                alt={communityContent.supportNetwork.icon.alt}
                width={communityContent.supportNetwork.icon.width}
                height={communityContent.supportNetwork.icon.height}
                className="object-cover w-auto"
              />
            </Card.Media>
          </Card>

          <Card className="border-0 shadow flex flex-col">
            <Card.Header>
              <Card.Title className="font-bold! text-lg!">
                {communityContent.languageCard.title}
              </Card.Title>
              <Card.Description className="max-w-md mt-1! text-base! text-ink! leading-5.5!">
                {communityContent.languageCard.description}
              </Card.Description>
            </Card.Header>
            <Card.Media className="pt-8 pl-8 self-end">
              <Image
                key={communityContent.languageCard.image.src}
                src={communityContent.languageCard.image.src}
                alt={communityContent.languageCard.image.alt}
                width={communityContent.languageCard.image.width}
                height={communityContent.languageCard.image.height}
                className="object-cover w-auto"
              />
            </Card.Media>
          </Card>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="max-w-125 mx-auto lg:max-w-none lg:col-span-2 lg-mx-none px-8 py-10 bg-surface rounded-2xl shadow">
            <CommunityCarousel slides={communityContent.carouselSlides} />
          </div>

          <div className="flex flex-col gap-4">
            {communityContent.tweets.map((tweet) => (
              <div
                key={tweet.handle}
                className="rounded-2xl bg-surface p-6 shadow"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={tweet.avatar.src}
                    alt={tweet.avatar.alt}
                    width={tweet.avatar.width}
                    height={tweet.avatar.height}
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {tweet.name}
                    </p>
                    <p className="text-sm text-ink/70">{tweet.handle}</p>
                  </div>
                </div>
                <p className="mt-5 text-base leading-6 text-ink lg:mb-5">
                  {highlightMentions(tweet.quote)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
