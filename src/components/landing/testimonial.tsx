import Image from "next/image";
import type { TestimonialContent } from "@/types/landing";

interface TestimonialProps {
  content: TestimonialContent;
}

export function Testimonial({ content }: TestimonialProps) {
  return (
    <figure className="flex flex-col items-center text-center">
      <blockquote className="max-w-2xl font-serif text-2xl tracking-[-0.6px] text-ink leading-(--text-quote--line-height) sm:text-(length:--text-quote)">
        {content.quote}
      </blockquote>
      <figcaption className="mt-4 min-[480px]:flex flex-wrap items-center justify-center gap-3">
        {content.logo && (
          <Image
            src={content.logo.src}
            alt={content.logo.alt}
            width={content.logo.width}
            height={content.logo.height}
            style={{ height: content.logo.height }}
            className="h-auto object-contain mb-2 sm:mb-0"
          />
        )}
        <div className="text-left text-(length:--text-caption) leading-(--text-caption--line-height) text-ink">
          <p className="font-bold">{content.author}</p>
          <p>{content.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
