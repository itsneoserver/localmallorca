export const siteConfig = {
  brand: "MallorcasLocal",
  tagline: "Book Mallorca like a local",
  description:
    "Boats, jet skis, beach clubs, nightlife, private services and hidden Mallorca spots. Direct WhatsApp booking with curated local recommendations.",
  url: "https://mallorcaslocal.com",
  whatsapp: "34644075065",
  email: "hola@mallorcaslocal.com",
  ogImage:
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/c_fill,ar_16:9,w_1200,q_auto,f_auto/v1778018087/IMG_4569_bhdu2t.jpg",
  externalLinks: {
    bcm: "https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket",
    boatParty:
      "https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit",
  },
  trust: [
    { value: "44+", label: "Experiences" },
    { value: "4.8", label: "Local rating" },
    { value: "<1h", label: "WhatsApp reply" },
    { value: "0", label: "Hidden fees" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const languages = ["en", "es", "de", "fr", "it", "ar", "ru"] as const;
export type Lang = (typeof languages)[number];

export const langMeta: Record<Lang, { label: string; rtl?: boolean }> = {
  en: { label: "English" },
  es: { label: "Español" },
  de: { label: "Deutsch" },
  fr: { label: "Français" },
  it: { label: "Italiano" },
  ar: { label: "العربية", rtl: true },
  ru: { label: "Русский" },
};
