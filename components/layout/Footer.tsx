import Link from "next/link";
import { siteConfig } from "@/lib/site";

const cols = [
  {
    title: "Experiences",
    links: [
      { href: "/book", label: "All experiences" },
      { href: "/book?cat=water", label: "Boats & jet ski" },
      { href: "/book?cat=night", label: "Nightlife" },
      { href: "/book?cat=beach", label: "Beaches & coves" },
    ],
  },
  {
    title: "Concierge",
    links: [
      { href: "/private-services", label: "Private services" },
      { href: "/world-cup", label: "World Cup concierge" },
      { href: "/contact", label: "Custom inquiry" },
    ],
  },
  {
    title: "Mallorcas",
    links: [
      { href: "/about", label: "About us" },
      { href: "/faq", label: "FAQ" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line mt-24 bg-[var(--bg)]">
      <div className="container-x py-14 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="serif text-[24px] tracking-tight">
            Mallorcas<span className="text-gold">Local</span>
          </Link>
          <p className="mt-3 text-text2 text-[14px] max-w-sm">
            {siteConfig.tagline}. Direct WhatsApp booking for boats, jet skis,
            beach clubs, nightlife and private Mallorca services.
          </p>
          <p className="mt-4 text-text3 text-[12px]">
            WhatsApp: +34 644 075 065
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-text3 mb-4">
              {c.title}
            </h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13.5px] text-text2 hover:text-text transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-text3">
          <span>
            © {new Date().getFullYear()} {siteConfig.brand}. {siteConfig.tagline}.
          </span>
          <span>
            Independent Mallorca concierge — not affiliated with FIFA.
          </span>
        </div>
      </div>
    </footer>
  );
}
