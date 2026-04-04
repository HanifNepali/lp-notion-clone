"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ViewTab } from "@/types/landing";

interface ViewSwitcherProps {
  tabs: ViewTab[];
}

export function ViewSwitcher({ tabs }: ViewSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeTab = tabs[activeIndex];

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  }
  return (
    <div>
      <div
        id="view-switcher-panel"
        role="tabpanel"
        aria-labelledby={`view-switcher-tab-${activeIndex}`}
        style={{ maxWidth: `${activeTab.screenshot.width}px` }}
        className="w-full mx-auto overflow-hidden rounded-xl border border-black/10 shadow-showcase"
      >
        <Image
          key={activeTab.screenshot.src}
          src={activeTab.screenshot.src}
          alt={activeTab.screenshot.alt}
          width={activeTab.screenshot.width}
          height={activeTab.screenshot.height}
          className="h-auto"
        />
      </div>
      <div
        role="tablist"
        aria-label="Notion view types"
        className="mt-6 flex flex-wrap justify-center gap-2"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab.label}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`view-switcher-tab-${index}`}
              aria-controls="view-switcher-panel"
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                "cursor-pointer rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                isActive ? "bg-black/6" : "hover:bg-black/4",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
