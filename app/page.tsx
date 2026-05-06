import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { ExperienceGrid } from "@/components/sections/ExperienceGrid";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { categoryMeta, faqs, featuredExperiences, galleryImages } from "@/lib/data";
import { img } from "@/lib/cloudinary";
import { Reveal } from "@/components/ui/Reveal";

const HERO_IMAGE =
  "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG_4569_bhdu2t.jpg";

const collections = [
  { key: "water", label: "Boats & jet ski", image: featuredExperiences[2]?.images[0] || galleryImages[0] },
  { key: "night", label: "Nightlife", image: featuredExperiences[0]?.images[0] || galleryImages[2] },
  { key: "beach", label: "Beaches & coves", image: galleryImages[7] },
  { key: "free", label: "Hidden viewpoints", image: galleryImages[18] },
];

const steps = [
  {
    n: "01",
    t: "Pick your experience",
    d: "Browse boats, beach clubs, nightlife and viewpoints — curated locally.",
  },
  {
    n: "02",
    t: "Send a WhatsApp request",
    d: "We pre-fill the message. You only confirm dates, group size and any notes.",
  },
  {
    n: "03",
    t: "We confirm in under 1h",
    d: "Final price, meeting point and the booking link — straight to WhatsApp.",
  },
  {
    n: "04",
    t: "Enjoy Mallorca",
    d: "Show up, enjoy, repeat. We're a message away if anything changes.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Mallorca · Independent local concierge"
        title={
          <>
            Book Mallorca <em className="text-gold not-italic">like a local.</em>
          </>
        }
        subtitle="Boats, jet skis, beach clubs, nightlife, private services and hidden spots. Direct WhatsApp booking, curated local recommendations and no unnecessary steps."
        primaryCta={{ label: "Book now", href: "/book" }}
        secondaryCta={{ label: "Explore experiences", href: "/book" }}
        image={HERO_IMAGE}
        alt="Sunset view over Mallorca"
      />

      <TrustBar />

      <Section
        eyebrow="Curated this week"
        title="Featured experiences"
        subtitle="Hand-picked Mallorca highlights — boats, nightlife and the kind of spots locals actually go to."
      >
        <ExperienceGrid
          data={featuredExperiences}
          showFilters={false}
          limit={4}
        />
        <div className="mt-10 flex justify-center">
          <Link href="/book" className="btn-ghost">
            View all experiences →
          </Link>
        </div>
      </Section>

      <Section eyebrow="How it works" title="Four steps. One WhatsApp.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="card p-6 h-full">
                <span className="serif text-gold text-[28px]">{s.n}</span>
                <h3 className="serif text-[19px] mt-3">{s.t}</h3>
                <p className="text-text2 text-[14px] mt-2 leading-relaxed">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Browse by mood" title="Top categories">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((c) => (
            <Link
              key={c.key}
              href={`/book?cat=${c.key}`}
              className="group relative overflow-hidden rounded-2xl border border-line aspect-[4/5]"
            >
              <Image
                src={img.card(c.image)}
                alt={c.label}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/65">
                  {categoryMeta[c.key as keyof typeof categoryMeta]?.short}
                </p>
                <h3 className="serif text-white text-[22px] mt-1">{c.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Snapshots" title="Mallorca, in pictures">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {galleryImages.slice(0, 8).map((g, i) => (
            <Link
              key={i}
              href="/gallery"
              className="relative aspect-square overflow-hidden rounded-xl border border-line"
            >
              <Image
                src={img.square(g)}
                alt={`Mallorca scene ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-[1.04] transition-transform duration-700"
              />
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/gallery" className="btn-ghost">
            Open the gallery →
          </Link>
        </div>
      </Section>

      <Section eyebrow="Why locals work with us" title="One contact. Zero noise.">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "Curated, not aggregated",
              d: "We only list experiences we'd send a friend to — boats, clubs, coves, dinners, drivers.",
            },
            {
              t: "WhatsApp, not chatbots",
              d: "Real local people reply. We handle the boring parts so your trip feels effortless.",
            },
            {
              t: "Clear pricing",
              d: "What you see is what you pay. Deposits and remaining amounts are always shown upfront.",
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
        eyebrow="Questions"
        title="Quick answers"
        subtitle="Everything you need to know before sending a WhatsApp request."
      >
        <FAQAccordion items={faqs.slice(0, 6)} />
        <div className="mt-8 text-center">
          <Link href="/faq" className="link-gold text-[14px]">
            See all FAQs
          </Link>
        </div>
      </Section>

      <Section className="!pt-6 !pb-24">
        <div className="rounded-3xl border border-line2 bg-bg2 p-8 md:p-14 text-center">
          <p className="eyebrow justify-center mb-4">
            <span className="dot" />
            Ready when you are
          </p>
          <h2 className="serif text-[30px] md:text-[44px] leading-tight max-w-2xl mx-auto">
            Tell us your dates. We'll handle the rest.
          </h2>
          <p className="text-text2 mt-4 max-w-xl mx-auto">
            One WhatsApp message — boats, nightlife, villas, transport. We reply
            in under an hour.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/book" className="btn-gold">
              Book an experience
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
