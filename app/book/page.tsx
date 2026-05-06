import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ExperienceGrid } from "@/components/sections/ExperienceGrid";
import { Category } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book Experiences in Mallorca",
  description:
    "All MallorcasLocal experiences in one place — boats, jet ski, beach clubs, nightlife and viewpoints. Book any of them through WhatsApp.",
};

type SP = { searchParams?: { cat?: string; q?: string } };

const ALLOWED: Array<Category | "all"> = [
  "all",
  "water",
  "beach",
  "night",
  "food",
  "mountain",
  "culture",
  "free",
];

export default function BookPage({ searchParams }: SP) {
  const raw = (searchParams?.cat || "all").toLowerCase();
  const cat = (ALLOWED.includes(raw as Category | "all")
    ? raw
    : "all") as Category | "all";
  const q = searchParams?.q || "";

  return (
    <>
      <Section
        className="!pt-32 md:!pt-40 !pb-10"
        eyebrow="Mallorca · All experiences"
        title="Book Mallorca, your way."
        subtitle="Filter by category, search by place or vibe, then send a pre-filled WhatsApp request. We confirm in under an hour."
      >
        <ExperienceGrid initialCategory={cat} initialQuery={q} />
      </Section>
    </>
  );
}
