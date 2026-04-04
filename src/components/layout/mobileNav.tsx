"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import type { NavLink, CtaLink } from "@/types/landing";
import Image from "next/image";

interface MobileNavProps {
  navLinks: NavLink[];
  actions: {
    requestDemo: CtaLink;
    login: CtaLink;
    primaryCta: CtaLink;
  };
}

export function MobileNav({ navLinks, actions }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);
  const drawerId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function getFocusable(): HTMLElement[] {
      if (!drawerRef.current) return [];

      return Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      // focus trap within the drawer nav
      if (e.key === "Tab") {
        const focusable = getFocusable();

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function closeDrawer() {
    setOpen(false);
    setExpandedLabel(null);
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={drawerId}
        aria-label="Open menu"
        className="flex size-10 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:hidden cursor-pointer"
      >
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 1H20" stroke="#050505" strokeWidth="2" />
          <path d="M0 8H20" stroke="#050505" strokeWidth="2" />
          <path d="M0 15H20" stroke="#050505" strokeWidth="2" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-60 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
              aria-hidden="true"
            />
            <motion.div
              id={drawerId}
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-y-0 left-0 z-70 flex w-[85vw] max-w-sm flex-col bg-white shadow-xl lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-(length:--text-nav) font-semibold text-ink">
                  Menu
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => {
                    closeDrawer();
                    triggerRef.current?.focus();
                  }}
                  aria-label="Close menu"
                  className="flex size-10 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L15 15M15 1L1 15"
                      stroke="#050505"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="flex flex-1 flex-col px-4 border-t border-border"
              >
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const hasDropdown = !!link.dropdownItems?.length;
                    const isExpanded = expandedLabel === link.label;

                    if (!hasDropdown) {
                      return (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={closeDrawer}
                            className="block rounded-md px-3 py-3 text-[17px] font-medium text-ink hover:bg-black/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li key={link.label}>
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() =>
                            setExpandedLabel(isExpanded ? null : link.label)
                          }
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-[16px] font-medium text-ink hover:bg-black/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                        >
                          {link.label}

                          <Image
                            src="/icons/nav-caret.svg"
                            alt=""
                            width={8}
                            height={6}
                            aria-hidden="true"
                            className={isExpanded ? "rotate-180" : ""}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="pl-3"
                            >
                              {link.dropdownItems!.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    onClick={closeDrawer}
                                    className="block rounded-md px-3 py-2 text-[15px] text-ink-soft hover:bg-black/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      href={actions.requestDemo.href}
                      onClick={closeDrawer}
                      className="block rounded-md px-3 py-3 text-[17px] font-medium text-ink hover:bg-black/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      {actions.requestDemo.label}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={actions.login.href}
                      onClick={closeDrawer}
                      className="block rounded-md px-3 py-3 text-[17px] font-medium text-ink hover:bg-black/4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      {actions.login.label}
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="border-t border-border p-4">
                <Button
                  href={actions.primaryCta.href}
                  variant="primary"
                  className="w-full justify-center"
                  onClick={closeDrawer}
                >
                  {actions.primaryCta.label}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
