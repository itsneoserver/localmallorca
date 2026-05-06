import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { WorldCupConcierge } from "@/components/sections/WorldCupConcierge";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { img } from "@/lib/cloudinary";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "World Cup 2026 Mallorca Concierge",
  description:
    "Private Mallorca concierge for World Cup 2026 visitors. Request shisha delivery, boat rental, private villas, bottle service, transport and group planning by WhatsApp.",
  keywords: [
    "World Cup 2026 Mallorca",
    "Mallorca concierge",
    "private villa Mallorca",
    "boat rental Mallorca",
    "shisha delivery Mallorca",
    "World Cup group planning",
  ],
  openGraph: {
    title: "World Cup 2026 Private Mallorca Concierge",
    description:
      "Plan private Mallorca experiences around your World Cup dates. Boats, villas, shisha delivery, bottle service and group concierge by WhatsApp.",
  },
};

const HERO =
  "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG_5714_rka3f8.jpg";

const services = [
  {
    t: "Shisha Delivery",
    d: "Premium shisha setup delivered to your villa, boat, private event or group gathering.",
    image:
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG_7148_lznhtu.jpg",
    cta: "Request shisha service",
  },
  {
    t: "Boat Rental",
    d: "Private boat days for groups before or after match nights. Options depend on group size, date, route and availability.",
    image:
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG_5714_rka3f8.jpg",
    cta: "Request boat quote",
  },
  {
    t: "Private Villa Rental",
    d: "Villa options for private groups, viewing nights, birthdays, dinners or complete World Cup stays.",
    image:
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG_4569_bhdu2t.jpg",
    cta: "Request villa options",
  },
  {
    t: "Private Group Concierge",
    d: "One request for transport, nightlife, bottle service, private events, restaurants and custom Mallorca planning.",
    image:
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG_8746_stksoi.jpg",
    cta: "Build my plan",
  },
];

const plans = [
  {
    t: "Boat Day + Nightlife",
    d: "Private boat by day, club/table plan by night. The classic match-day combo.",
  },
  {
    t: "Villa Setup + Shisha",
    d: "Villa evening with shisha delivery, bottle service and group logistics handled.",
  },
  {
    t: "Full Weekend Concierge",
    d: "Villa, transport, beach club, boat day and nightlife — across your whole stay.",
  },
  {
    t: "Match Night Recovery Day",
    d: "A relaxed private boat, beach club or villa day after a big match night.",
  },
];

const faqs = [
  {
    q: "Is this an official FIFA package?",
    a: "No. MallorcasLocal is not affiliated with FIFA. We help visitors organize private services in Mallorca around World Cup dates.",
  },
  {
    q: "Can you book match tickets?",
    a: "No. This page is for private Mallorca concierge services, not official World Cup tickets.",
  },
  {
    q: "Are prices fixed?",
    a: "No. Shisha delivery, boat rental and villa rental are under quote. Final pricing depends on date, group size, location and availability.",
  },
  {
    q: "Can I request several services at once?",
    a: "Yes. The form is designed for combined requests such as villa + shisha + boat + nightlife.",
  },
  {
    q: "How fast do you reply?",
    a: "Usually within 1 hour by WhatsApp, depending on request complexity.",
  },
  {
    q: "Can you organize a full group plan?",
    a: "Yes. You can request a complete private itinerary including villas, boats, shisha, bottle service, transport and nightlife.",
  },
];

export default function WorldCupPage() {
  const wa = buildWhatsappUrl(
    "Hi MallorcasLocal, I'd like to plan a private Mallorca experience around the World Cup. Can you help?"
  );

  return (
    <>
      <Hero
        eyebrow="World Cup 2026 · Private Mallorca Concierge"
        title={
          <>
            Plan your Mallorca World Cup{" "}
            <em className="text-gold not-italic">experience privately.</em>
          </>
        }
        subtitle="Boat days, private villas, shisha delivery, bottle service, nightlife and transport arranged around your group, dates and budget."
        primaryCta={{ label: "Request private plan", href: "#inquiry" }}
        secondaryCta={{ label: "View fixtures", href: "#fixtures" }}
        image={HERO}
        alt="Private Mallorca boat day"
        minH="min-h-[80vh]"
      />

      {/* Disclaimer */}
      <div className="container-x mt-8">
        <div className="rounded-2xl border border-line bg-bg2 p-4 md:p-5 text-[12.5px] text-text2">
          <strong className="text-text">Note.</strong> MallorcasLocal is not
          affiliated with FIFA. Fixtures are provided for planning inspiration
          only. All private services are subject to availability and final
          confirmation.
        </div>
      </div>

      <Section
        eyebrow="Why Mallorca during World Cup"
        title="Your group. Your dates. Your private plan."
        subtitle="World Cup summer will move fast. Tell us your dates, group size and interests, and we will help you organize the right private Mallorca setup around your trip."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "Group-first",
              d: "Every plan is built around the group — villa size, transport, table layout, boat capacity.",
            },
            {
              t: "Match-night ready",
              d: "Private viewings, smart restaurant tables, club access, bottle service or quiet villa evenings.",
            },
            {
              t: "One WhatsApp",
              d: "Boat day, villa setup, transport, nightlife — all in one inquiry, one quote, one contact.",
            },
          ].map((b) => (
            <div key={b.t} className="card p-6">
              <h3 className="serif text-[20px]">{b.t}</h3>
              <p className="text-text2 text-[14px] mt-2 leading-relaxed">
                {b.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Concierge services"
        title="Private services — under quote"
        subtitle="Each service is quoted individually depending on date, location, group size and availability. Combine as many as you like."
      >
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {services.map((s) => (
            <article key={s.t} className="card overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src={img.hero(s.image)}
                  alt={s.t}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="serif text-[22px]">{s.t}</h3>
                <p className="text-text2 text-[14px] leading-relaxed">{s.d}</p>
                <span className="pill pill-gold w-fit">Under quote</span>
                <Link
                  href="#inquiry"
                  className="btn-gold !py-2.5 !px-5 w-fit text-[12.5px] mt-1"
                >
                  {s.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Suggested group plans" title="Build it your way">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <div className="card p-6 h-full flex flex-col gap-3">
                <h3 className="serif text-[19px]">{p.t}</h3>
                <p className="text-text2 text-[13.5px] leading-relaxed flex-1">
                  {p.d}
                </p>
                <span className="pill pill-gold w-fit">From quote</span>
                <Link
                  href="#inquiry"
                  className="text-[12.5px] link-gold w-fit mt-1"
                >
                  Ask for this plan →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="fixtures"
        eyebrow="Match calendar"
        title="Pick a date to plan around"
        subtitle="Filter the World Cup 2026 schedule by phase. Click a fixture to attach it to your inquiry — we'll plan the rest of your day in Mallorca around it."
      />

      <Section id="inquiry" className="!pt-2">
        <WorldCupConcierge />
      </Section>

      <Section
        eyebrow="World Cup FAQ"
        title="Quick answers"
        subtitle="Send one request. We will reply with available options, estimated pricing and next steps on WhatsApp."
      >
        <FAQAccordion items={faqs} />
      </Section>

      <Section className="!pt-6 !pb-24">
        <div className="rounded-3xl border border-line2 bg-bg2 p-8 md:p-14 text-center">
          <h2 className="serif text-[28px] md:text-[40px] leading-tight max-w-2xl mx-auto">
            Need a full private plan for your group?
          </h2>
          <p className="text-text2 mt-4 max-w-xl mx-auto">
            Send your dates, group size and budget. MallorcasLocal will help you
            build the best available option.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa">
              Quick WhatsApp
            </a>
            <Link href="#inquiry" className="btn-gold">
              Open inquiry form
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
