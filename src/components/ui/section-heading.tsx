import { cn } from "@/lib/cn";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "subheading" | "display";
}

function SectionHeading({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {children}
    </div>
  );
}

function Title({ size = "subheading", className, children }: TitleProps) {
  const sizeClasses =
    size === "display"
      ? "text-[32px] font-bold leading-9 tracking-[-0.8px] sm:text-[45px] sm:leading-[49px] sm:tracking-[-1.2px]"
      : "text-(length:--text-h2) font-medium leading-(--text-h2--line-height) tracking-(--text-h2--letter-spacing)";
  return <h2 className={cn(sizeClasses, "text-ink", className)}>{children}</h2>;
}

function Description({
  className,
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-3 text-base leading-relaxed text-ink", className)}>
      {children}
    </p>
  );
}

function Action({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4", className)}>{children}</div>;
}

SectionHeading.Title = Title;
SectionHeading.Description = Description;
SectionHeading.Action = Action;

export { SectionHeading };
