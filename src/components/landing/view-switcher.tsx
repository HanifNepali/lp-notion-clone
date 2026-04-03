"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ViewTab } from "@/types/landing";

interface ViewSwitcherProps {
  tabs: ViewTab[];
}

export function ViewSwitcher({ tabs }: ViewSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <div>
      <div
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
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
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
