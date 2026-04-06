import { cn } from "@/lib/cn";
import { Container } from "../layout/container";

function ProjectSection({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("py-10", className)}>
      <Container variant="page">{children}</Container>
    </section>
  );
}

function Title({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <h2
      className={cn(
        "text-2xl font-bold text-ink sm:text-[32px]  tracking-tight",
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
    <p className={cn("mt-4 text-base leading-7 text-ink/85", className)}>
      {children}
    </p>
  );
}
function Content({
  className,
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <div className={cn("mt-6", className)}>{children}</div>;
}

ProjectSection.Title = Title;
ProjectSection.Description = Description;
ProjectSection.Content = Content;

export { ProjectSection };
