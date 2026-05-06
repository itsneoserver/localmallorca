import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Mallorca in pictures — boats, beaches, hidden coves, sunsets, nightlife and viewpoints. Hand-picked by locals.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-[120px] pb-10">
        <div className="container-x text-center">
          <p className="eyebrow justify-center mb-4">
            <span className="dot" />
            Snapshots
          </p>
          <h1 className="serif text-[40px] md:text-[64px] leading-[1.05] max-w-3xl mx-auto">
            Mallorca, <em className="text-gold not-italic">in pictures.</em>
          </h1>
          <p className="text-text2 mt-5 max-w-xl mx-auto leading-relaxed">
            Coves, boats, sunsets, viewpoints and a few late nights. All shot
            on the island by us.
          </p>
        </div>
      </section>

      <Section className="!pt-4">
        <GalleryGrid images={galleryImages} />
      </Section>

      <Section className="!pt-6 !pb-24">
        <div className="rounded-3xl border border-line2 bg-bg2 p-8 md:p-12 text-center max-w-3xl mx-auto">
          <p className="eyebrow justify-center mb-4">
            <span className="dot" />
            Want to see it for yourself?
          </p>
          <h2 className="serif text-[26px] md:text-[36px] leading-tight">
            We&apos;ll plan the route.
          </h2>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/book" className="btn-gold">
              Browse experiences
            </Link>
            <Link href="/contact" className="btn-ghost">
              Custom inquiry
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
