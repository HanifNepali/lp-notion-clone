import { cn } from "@/lib/cn";

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

function Title({
  className,
  children,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-length:(--text-h2) font-medium leading-(--text-h2--line-height) tracking-(--text-h2--letter-spacing) text-ink",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function Description({
  className,
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-3 text-base leading-relaxed text-ink/70", className)}>
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
