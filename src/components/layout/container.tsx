import { cn } from "@/lib/cn";

type ContainerVariant = "sm" | "page" | "xl";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  variant?: ContainerVariant;
}

const variantClasses: Record<ContainerVariant, string> = {
  sm: "container-sm",
  page: "container-page",
  xl: "container-xl",
};

export function Container({
  as: Tag = "div",
  className,
  variant = "page",
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Tag>
  );
}
