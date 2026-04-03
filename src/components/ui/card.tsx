import { cn } from "@/lib/cn";

function Card({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border--color-border bg-surface",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-8", className)}>{children}</div>;
}

function CardIcon({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-4 flex size-6.5 items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardTitle({
  className,
  children,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-xl font-semibold leading-6 text-ink", className)}>
      {children}
    </h3>
  );
}

function CardDescription({
  className,
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-3 text-base leading-relaxed text-ink/70", className)}>
      {children}
    </p>
  );
}

function CardLink({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4", className)}>{children}</div>;
}

function CardMedia({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative", className)}>{children}</div>;
}

Card.Header = CardHeader;
Card.Icon = CardIcon;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Link = CardLink;
Card.Media = CardMedia;

export { Card };
