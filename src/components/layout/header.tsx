import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/layout/desktopNav";
import { MobileNav } from "@/components/layout/mobileNav";
import { primaryNavLinks, headerActions } from "@/data/landing";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-15.5 w-full border-b border-border bg-white">
      <Container
        variant="xl"
        className="flex h-full items-center justify-between"
      >
        <Link
          href="/"
          className="shrink-0 mr-5 xl:mr-10"
          aria-label="Notion - Home"
        >
          <Image
            src="/icons/notion-logo.svg"
            alt="Notion"
            width={93}
            height={32}
            priority
          />
        </Link>

        <DesktopNav navLinks={primaryNavLinks} />

        <div className="hidden items-center gap-5 lg:flex ml-auto">
          <Link
            href={headerActions.requestDemo.href}
            className="text-(length:--text-nav) font-medium text-ink-soft hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {headerActions.requestDemo.label}
          </Link>
          <span className="h-5 w-px bg-border" aria-hidden="true" />
          <Link
            href={headerActions.login.href}
            className="text-(length:--text-nav) font-medium text-ink-soft hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {headerActions.login.label}
          </Link>
          <Button href={headerActions.primaryCta.href} variant="primary">
            {headerActions.primaryCta.label}
          </Button>
        </div>

        <MobileNav navLinks={primaryNavLinks} actions={headerActions} />
      </Container>
    </header>
  );
}
