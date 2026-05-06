"use client";

import { useState } from "react";
import { FAQ } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const expanded = open === i;
        return (
          <li key={it.q}>
            <button
              className="w-full text-left py-5 flex items-center justify-between gap-6"
              onClick={() => setOpen(expanded ? null : i)}
              aria-expanded={expanded}
              aria-controls={`faq-${i}`}
            >
              <span className="serif text-[18px] md:text-[20px]">{it.q}</span>
              <span
                className={cn(
                  "shrink-0 w-7 h-7 rounded-full border border-line2 flex items-center justify-center text-text2 transition-transform duration-300",
                  expanded && "rotate-45 border-gold text-gold"
                )}
                aria-hidden
              >
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path
                    d="M5 1v8M1 5h8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={`faq-${i}`}
              className={cn(
                "grid transition-all duration-300 ease-soft",
                expanded
                  ? "grid-rows-[1fr] opacity-100 pb-5"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-text2 text-[14.5px] leading-relaxed max-w-2xl">
                  {it.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
