import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { faqs } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MallorcasLocal. WhatsApp, email or send a custom inquiry — we usually reply within 1 hour.",
};

const HERO =
  "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG_2026_teizxh.jpg";

export default function ContactPage() {
  const waUrl = buildWhatsappUrl(
    "Hi MallorcasLocal — I'd like to chat about a trip to Mallorca."
  );

  return (
    <>
      <Hero
        eyebrow="Talk to a local"
        title={
          <>
            One message away.{" "}
            <em className="text-gold not-italic">Always.</em>
          </>
        }
        subtitle="Send us a WhatsApp, email, or fill in the form below. We reply in under an hour during the day."
        primaryCta={{ label: "Open WhatsApp", href: waUrl }}
        secondaryCta={{ label: "Browse experiences", href: "/book" }}
        image={HERO}
        alt="Mallorca cove"
        minH="min-h-[64vh]"
      />

      <Section eyebrow="Channels" title="Pick what's easiest">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-6">
            <p className="eyebrow"><span className="dot" />WhatsApp</p>
            <h3 className="serif text-[20px] mt-3">Fastest reply</h3>
            <p className="text-text2 text-[14px] mt-2 leading-relaxed">
              Tap below — we&apos;ll see your message instantly and reply during
              business hours.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa mt-5"
            >
              Open WhatsApp
            </a>
          </div>
          <div className="card p-6">
            <p className="eyebrow"><span className="dot" />Email</p>
            <h3 className="serif text-[20px] mt-3">For longer briefs</h3>
            <p className="text-text2 text-[14px] mt-2 leading-relaxed">
              Better for itineraries, group plans and corporate requests.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-ghost mt-5"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="card p-6">
            <p className="eyebrow"><span className="dot" />Hours</p>
            <h3 className="serif text-[20px] mt-3">When we&apos;re online</h3>
            <ul className="text-text2 text-[14px] mt-2 leading-relaxed space-y-1">
              <li>Mon – Sun · 09:00 – 23:00 CET</li>
              <li>Avg. WhatsApp reply &lt; 1h</li>
              <li>High season: replies until 02:00</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Custom inquiry"
        title="Tell us what you need"
        subtitle="Fill in the form — we&apos;ll continue the conversation on WhatsApp with a tailored proposal."
      >
        <div className="max-w-3xl mx-auto card p-6 md:p-10">
          <InquiryForm />
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions">
        <FAQAccordion items={faqs.slice(0, 5)} />
        <div className="mt-8 text-center">
          <Link href="/faq" className="link-gold text-[14px]">
            See all FAQs
          </Link>
        </div>
      </Section>
    </>
  );
}
