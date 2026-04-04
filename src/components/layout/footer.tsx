import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { footerContent } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 xl:py-16">
      <Container variant="page">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Logo and social nav */}
          <div className="col-span-2 mb-6 lg:mb-0 lg:col-span-1">
            <Link
              href="/"
              aria-label="Notion – Home"
              className="flex justify-center lg:block"
            >
              <Image
                src="/icons/notion-logo.svg"
                alt="Notion"
                width={93}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <div className="mt-6 flex items-center justify-center lg:justify-normal gap-4">
              {footerContent.social.map((item) => {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="text-ink/70 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <Image
                      src={item.icon.src}
                      alt={item.icon.alt}
                      width={item.icon.width}
                      height={item.icon.height}
                      className="w-auto"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="col-span-2 lg:col-span-3 grid sm:grid-cols-3 lg:gap-8">
            {footerContent.columns.map((column, colIndex) => (
              <div key={colIndex} className="flex sm:block">
                {column.map((group) => (
                  <div key={group.heading} className="mb-8 flex-1">
                    <h2 className="text-sm font-semibold text-ink">
                      {group.heading}
                    </h2>
                    <ul className="mt-4 ">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-ink/80 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 text-center lg:text-left">
          <p className="text-sm text-ink/70">{footerContent.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
