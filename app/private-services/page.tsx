import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { PrivateServiceCards } from "@/components/sections/PrivateServiceCards";

export const metadata: Metadata = {
  title: "Private Services in Mallorca",
  description:
    "Premium Mallorca private concierge — shisha delivery, bottle service, private villas, VIP tables, transport and custom itineraries. Quote on request, by WhatsApp.",
};

const HERO =
  "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG_7148_lznhtu.jpg";

export default function PrivateServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Private concierge · Mallorca"
        title={
          <>
            Private services,{" "}
            <em className="text-gold not-italic">arranged your way.</em>
          </>
        }
        subtitle="Shisha delivery, bottle service, villas, VIP tables, drivers, events and full custom plans. One inquiry, one WhatsApp contact, one premium plan."
        primaryCta={{ label: "Send a request", href: "/contact" }}
        secondaryCta={{ label: "View experiences", href: "/book" }}
        image={HERO}
        alt="Private shisha service in Mallorca"
        minH="min-h-[78vh]"
      />

      <Section
        eyebrow="What we arrange"
        title="Concierge services on request"
        subtitle="Each service is quoted privately depending on your date, group size, location and the partner availability that night. Send a message, get a clear answer."
      >
        <PrivateServiceCards />
      </Section>

      <Section eyebrow="How a private request works" title="Simple. Honest. Fast.">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "Tell us what you need",
              d: "Date, group size, location and what you're looking for — even if it's vague.",
            },
            {
              t: "We send options",
              d: "We come back with available options and an estimated quote — no commitments.",
            },
            {
              t: "You confirm",
              d: "Pick the plan, pay any required deposit and we coordinate the rest.",
            },
          ].map((b) => (
            <div key={b.t} className="card p-6">
              <h3 className="serif text-[20px]">{b.t}</h3>
              <p className="text-text2 text-[14px] mt-2 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-6 !pb-24">
        <div className="rounded-3xl border border-line2 bg-bg2 p-8 md:p-14 text-center">
          <h2 className="serif text-[28px] md:text-[40px] leading-tight max-w-2xl mx-auto">
            Need a complete plan?
          </h2>
          <p className="text-text2 mt-4 max-w-xl mx-auto">
            Combine villa, boat day, shisha, bottle service, drivers and
            nightlife in a single inquiry.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/contact" className="btn-gold">
              Send a custom inquiry
            </Link>
            <Link href="/world-cup" className="btn-ghost">
              World Cup concierge →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
