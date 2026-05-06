import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { faqs } from "@/lib/data";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Everything you need to know about booking boats, jet skis, nightlife, private services and World Cup concierge in Mallorca.",
};

export default function FAQPage() {
  const waUrl = buildWhatsappUrl(
    "Hi MallorcasLocal — I have a question I couldn't find in the FAQ."
  );

  return (
    <>
      <section className="pt-[120px] pb-10">
        <div className="container-x text-center">
          <p className="eyebrow justify-center mb-4">
            <span className="dot" />
            Frequently asked
          </p>
          <h1 className="serif text-[40px] md:text-[64px] leading-[1.05] max-w-3xl mx-auto">
            Quick answers, <em className="text-gold not-italic">no fluff.</em>
          </h1>
          <p className="text-text2 mt-5 max-w-xl mx-auto leading-relaxed">
            Everything you need to know before sending us a WhatsApp request. If
            it&apos;s not here, ping us — we&apos;ll reply in under an hour.
          </p>
        </div>
      </section>

      <Section className="!pt-4">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <Section className="!pt-6 !pb-24">
        <div className="rounded-3xl border border-line2 bg-bg2 p-8 md:p-12 text-center max-w-3xl mx-auto">
          <p className="eyebrow justify-center mb-4">
            <span className="dot" />
            Still have questions?
          </p>
          <h2 className="serif text-[26px] md:text-[36px] leading-tight">
            Talk to a real local on WhatsApp.
          </h2>
          <p className="text-text2 mt-4 max-w-md mx-auto">
            Tell us your dates and what you have in mind. We&apos;ll handle the
            rest.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
            >
              Message us on WhatsApp
            </a>
            <Link href="/contact" className="btn-ghost">
              Send a custom inquiry
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
