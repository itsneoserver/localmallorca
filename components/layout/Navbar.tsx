"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/book", label: "Book" },
  { href: "/private-services", label: "Private services" },
  { href: "/world-cup", label: "World Cup" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between h-[64px] md:h-[72px]">
        <Link
          href="/"
          aria-label={`${siteConfig.brand} home`}
          className="flex items-center gap-2"
        >
          <span className="serif text-[20px] md:text-[22px] tracking-tight">
            Mallorcas<span className="text-gold">Local</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-[13px] text-text2 hover:text-text transition-colors rounded-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/book" className="btn-gold">
            Book now
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-line2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="relative block w-4 h-3" aria-hidden>
            <span
              className={cn(
                "absolute left-0 right-0 h-px bg-text transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 right-0 h-px bg-text transition-opacity duration-200 top-1.5",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 right-0 h-px bg-text transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3"
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-bg/95 backdrop-blur-xl transition-all duration-300 overflow-y-auto",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="container-x py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="serif text-[28px] py-3 border-b border-line"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-6 flex gap-3">
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="btn-gold flex-1"
            >
              Book now
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-ghost flex-1"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
