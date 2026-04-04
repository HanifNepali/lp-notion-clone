"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { teamShowcaseContent } from "@/data/landing";

export function TeamShowcase() {
  const [activeIndex, setActiveIndex] = useState(
    teamShowcaseContent.defaultIndex,
  );
  const activeTeam = teamShowcaseContent.teams[activeIndex];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    const count = teamShowcaseContent.teams.length;
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % count;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + count) % count;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = count - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <section className="py-16 xl:py-20">
      <Container variant="page">
        <SectionHeading>
          <SectionHeading.Title size="display">
            {teamShowcaseContent.heading}
          </SectionHeading.Title>
        </SectionHeading>

        <div
          role="tablist"
          aria-label="Teams"
          className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:mt-16 lg:gap-4"
        >
          {teamShowcaseContent.teams.map((team, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={team.label}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`team-tab-${index}`}
                aria-controls="team-panel"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={cn(
                  "flex flex-col items-center gap-3 cursor-pointer rounded-xl border p-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                  isActive
                    ? "border-black/10 bg-white shadow-sm"
                    : "border-transparent bg-surface hover:bg-black/4",
                )}
              >
                <Image
                  src={team.icon.src}
                  alt=""
                  width={team.icon.width}
                  height={team.icon.height}
                  aria-hidden="true"
                />
                <span className="text-sm lg:text-base font-semibold text-ink">
                  {team.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="team-panel"
          role="tabpanel"
          aria-labelledby={`team-tab-${activeIndex}`}
          className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white shadow-showcase lg:mt-10"
        >
          <Image
            key={activeTeam.screenshot.src + activeTeam.label}
            src={activeTeam.screenshot.src}
            alt={activeTeam.screenshot.alt}
            width={activeTeam.screenshot.width}
            height={activeTeam.screenshot.height}
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
