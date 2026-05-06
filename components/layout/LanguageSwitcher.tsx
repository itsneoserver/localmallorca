"use client";

import { useLocale } from "@/lib/i18n/provider";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_FULL_LABELS,
  Locale,
} from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

type Variant = "inline" | "stacked";

type Props = {
  variant?: Variant;
  className?: string;
};

// Pure-text language selector. Sigla only. No flags, no emojis.
export function LanguageSwitcher({ variant = "inline", className }: Props) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t("nav_change_language")}
      className={cn(
        "lang-grp flex flex-wrap gap-1",
        variant === "stacked" && "gap-1.5",
        className
      )}
    >
      {LOCALES.map((l: Locale) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            data-lang={l}
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={`${t("nav_change_language")}: ${LOCALE_FULL_LABELS[l]}`}
            className={cn(
              "lb px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-full border transition-colors",
              "min-w-[40px] min-h-[28px] inline-flex items-center justify-center",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
              active
                ? "on bg-gold/15 text-gold border-gold/40"
                : "text-text2 border-line2 hover:text-text hover:border-line3"
            )}
          >
            {LOCALE_LABELS[l]}
          </button>
        );
      })}
    </div>
  );
}
