import { siteConfig } from "@/lib/site";

export function TrustBar() {
  return (
    <section
      className="border-y border-line bg-bg2/50"
      aria-label="Quick facts"
    >
      <div className="container-x py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {siteConfig.trust.map((t) => (
          <div key={t.label} className="text-center">
            <div className="serif text-gold text-[24px] md:text-[28px] leading-none">
              {t.value}
            </div>
            <div className="mt-2 text-[11px] tracking-[0.14em] uppercase text-text3">
              {t.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
