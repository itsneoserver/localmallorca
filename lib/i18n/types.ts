// Locale registry. Adding a new locale only requires adding it here and
// providing the corresponding entries in dictionaries.ts.

export const LOCALES = [
  "es",
  "en",
  "de",
  "fr",
  "it",
  "ar",
  "pt-BR",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
  fr: "FR",
  it: "IT",
  ar: "AR",
  "pt-BR": "PT-BR",
};

export const LOCALE_FULL_LABELS: Record<Locale, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  ar: "العربية",
  "pt-BR": "Português (Brasil)",
};

export const RTL_LOCALES: ReadonlyArray<Locale> = ["ar"];

export function isRtl(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

// Single-source localized string. All visible content uses this shape.
export type Localized = Record<Locale, string>;

// Pick the right value for the active locale, falling back to EN, then ES.
export function pick(value: Localized | string | undefined, locale: Locale): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[locale] || value.en || value.es || "";
}
