"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import type { CarouselSlide } from "@/types/landing";

interface CommunityCarouselProps {
  slides: CarouselSlide[];
}

export function CommunityCarousel({ slides }: CommunityCarouselProps) {
  const [index, setIndex] = useState(0);

  function handleDragEnd(_: unknown, info: { offset: { x: number } }) {
    if (info.offset.x < -50 && index < slides.length - 1) {
      setIndex(index + 1);
    } else if (info.offset.x > 50 && index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <div className="overflow-hidden ">
        <motion.div
          className="flex"
          drag={slides.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
        >
          {slides.map((slide, i) => (
            <div key={slide.src + i} className="w-full shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={480}
                height={320}
                className="w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-ink">{slides[index].caption}</p>

        {slides.length > 1 && (
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src + i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "cursor-pointer size-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                  i === index ? "bg-ink" : "bg-black/20",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
