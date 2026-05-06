"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { DICTIONARIES, Dict } from "./dictionaries";
import { DEFAULT_LOCALE, LOCALES, Locale, isRtl } from "./types";

const STORAGE_KEY = "ml_lang";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof Dict | string) => string;
  dir: "ltr" | "rtl";
};

const LocaleCtx = createContext<Ctx | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (LOCALES as readonly string[]).includes(saved)) {
      return saved as Locale;
    }
  } catch {
    // ignore
  }
  const nav = window.navigator?.language || "";
  const lower = nav.toLowerCase();
  if (lower.startsWith("pt-br")) return "pt-BR";
  const short = lower.split("-")[0];
  if ((LOCALES as readonly string[]).includes(short)) return short as Locale;
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // SSR-stable initial value, hydrate to detected locale on mount.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const next = detectInitialLocale();
    setLocaleState(next);
  }, []);

  // Keep <html lang> and dir in sync.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const dict = DICTIONARIES[locale] || DICTIONARIES.en;
      return dict[key] || DICTIONARIES.en[key] || "";
    },
    [locale]
  );

  const value = useMemo<Ctx>(
    () => ({
      locale,
      setLocale,
      t,
      dir: isRtl(locale) ? "rtl" : "ltr",
    }),
    [locale, setLocale, t]
  );

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleCtx);
  if (!ctx) {
    // Soft fallback — useful in tests / isolated rendering.
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: (k: string) => DICTIONARIES.en[k] || "",
      dir: "ltr",
    };
  }
  return ctx;
}

export function useT() {
  return useLocale().t;
}
