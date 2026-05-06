import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { TrustBar } from "@/components/sections/TrustBar";
import { img } from "@/lib/cloudinary";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "MallorcasLocal is an independent local concierge in Mallorca. Curated experiences, real WhatsApp replies, no hidden fees.",
};

const HERO =
  "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG_8253_fygjqz.jpg";

const principles = [
  {
    t: "Curated, not aggregated",
    d: "We only list experiences we'd send a friend or family member to. Every boat, club, villa, beach and viewpoint has been tested by us.",
  },
  {
    t: "Real people on WhatsApp",
    d: "No chatbots. No call centers. You talk to actual locals who live here year-round and know the island intimately.",
  },
  {
    t: "Transparent pricing",
    d: "Public prices stay public. Deposits and remaining balances are explained upfront. No surprise charges.",
  },
  {
    t: "We say no when it's right",
    d: "If a date is bad, a service is unsafe, or a venue is overhyped — we'll tell you. Your trip matters more than a sale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About MallorcasLocal"
        title={
          <>
            Independent concierge.{" "}
            <em className="text-gold not-italic">Local first.</em>
          </>
        }
        subtitle="We started MallorcasLocal because booking Mallorca should feel like calling a friend who lives here — not navigating five booking platforms with hidden fees."
        primaryCta={{ label: "Explore experiences", href: "/book" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        image={HERO}
        alt="Mallorca coast"
        minH="min-h-[70vh]"
      />

      <TrustBar />

      <Section eyebrow="Our story" title="Built by locals, for travelers">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-text2 leading-relaxed text-[15px]">
            <p>
              MallorcasLocal began as a private WhatsApp list. Friends visiting
              the island kept asking the same questions — which boat is worth
              it, which club is actually fun on a Tuesday, where to find a quiet
              cove without a 2-hour hike.
            </p>
            <p>
              Over time the list grew. We started writing back the same answers,
              connecting visitors with the captains, drivers, villa owners and
              event hosts we&apos;ve known for years. What started as a favor
              became the concierge service we always wished existed.
            </p>
            <p>
              Today we coordinate boats, jet skis, villas, nightlife,
              transport, shisha delivery, private chefs and full custom
              itineraries — all through one WhatsApp thread, with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {galleryImages.slice(0, 4).map((g, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl border border-line"
              >
                <Image
                  src={img.square(g)}
                  alt={`Mallorca scene ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="What we believe" title="Four principles">
        <div className="grid md:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div key={p.t} className="card p-6">
              <h3 className="serif text-[22px]">{p.t}</h3>
              <p className="text-text2 text-[14px] mt-3 leading-relaxed">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What we don&apos;t do" title="Honest limits">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-6">
            <h3 className="serif text-[18px]">No mass tourism</h3>
            <p className="text-text2 text-[14px] mt-2 leading-relaxed">
              We don&apos;t sell pub crawls or 200-person bus tours. Small
              groups, premium experiences only.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="serif text-[18px]">No anonymous suppliers</h3>
            <p className="text-text2 text-[14px] mt-2 leading-relaxed">
              Every operator we work with is known to us by name. If we
              wouldn&apos;t go ourselves, we won&apos;t send you.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="serif text-[18px]">No 24/7 robot replies</h3>
            <p className="text-text2 text-[14px] mt-2 leading-relaxed">
              Human-only WhatsApp. Slower at 4am. Faster than any platform
              during the day.
            </p>
          </div>
        </div>
      </Section>

      <Section className="!pt-6 !pb-24">
        <div className="rounded-3xl border border-line2 bg-bg2 p-8 md:p-14 text-center">
          <p className="eyebrow justify-center mb-4">
            <span className="dot" />
            Let&apos;s plan
          </p>
          <h2 className="serif text-[30px] md:text-[44px] leading-tight max-w-2xl mx-auto">
            Mallorca, the way locals enjoy it.
          </h2>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/book" className="btn-gold">
              Browse experiences
            </Link>
            <Link href="/contact" className="btn-ghost">
              Send a custom inquiry
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
