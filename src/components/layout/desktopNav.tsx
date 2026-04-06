"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { NavLink } from "@/types/landing";

interface DesktopNavProps {
  navLinks: NavLink[];
}

export function DesktopNav({ navLinks }: DesktopNavProps) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenLabel(null);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenLabel(null);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="hidden items-center lg:flex"
    >
      <ul className="flex items-center">
        {navLinks.map((link) => {
          const hasDropdown = !!link.dropdownItems?.length;
          const isOpen = openLabel === link.label;

          if (!hasDropdown) {
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 rounded-md px-2.5 py-2 text-(length:--text-nav) font-medium text-ink-soft hover:bg-black/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {link.label}
                </Link>
              </li>
            );
          }

          return (
            <li key={link.label} className="relative">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="menu"
                onClick={() => setOpenLabel(isOpen ? null : link.label)}
                className="flex items-center gap-2 cursor-pointer rounded-md px-2.5 py-2 text-(length:--text-nav) font-medium text-ink-soft hover:bg-black/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {link.label}
                <Image
                  src="/icons/nav-caret.svg"
                  alt="Nav Caret Icon"
                  width={8}
                  height={6}
                  aria-hidden="true"
                  className={isOpen ? "rotate-180" : ""}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    role="menu"
                    aria-label={link.label}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-2 min-w-50 rounded-xl border border-border bg-white p-2 shadow-[0px_1.541px_1.433px_rgba(0,0,0,0.07),0px_4px_4.5px_rgba(0,0,0,0.05)]"
                  >
                    {link.dropdownItems!.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setOpenLabel(null)}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-ink-soft hover:bg-black/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
