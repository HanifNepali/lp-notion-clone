import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "link" | "link-accent";

interface BaseProps {
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-(--radius-button) bg-ink px-[14px] py-[6.5px] text-[13.5px] font-semibold text-white shadow-button transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
  link: "inline-flex items-center gap-1 text-[16px] leading-6 text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
  "link-accent":
    "inline-flex items-center gap-1 text-[16px] leading-6 text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
};

export function Button({
  variant = "primary",
  showArrow = false,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const content = (
    <>
      {children}
      {showArrow && (
        <span aria-hidden="true" className="inline-block">
          →
        </span>
      )}
    </>
  );

  const classes = cn(variantClasses[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
