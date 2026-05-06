"use client";

import Image from "next/image";
import { Experience } from "@/lib/data";
import { img } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";

type Props = {
  experience: Experience;
  onOpen: (exp: Experience) => void;
  onBook: (exp: Experience) => void;
  priority?: boolean;
};

const badgeStyle: Record<NonNullable<Experience["badge"]>, string> = {
  premium: "bg-gold text-[#0a0a0a]",
  popular: "bg-gold text-[#0a0a0a]",
  open: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  season: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
};

export function ExperienceCard({ experience, onOpen, onBook, priority }: Props) {
  const e = experience;
  return (
    <article
      className="card group relative flex flex-col"
      tabIndex={0}
      onKeyDown={(ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          onOpen(e);
        }
      }}
    >
      <button
        onClick={() => onOpen(e)}
        className="block text-left"
        aria-label={`Open ${e.title}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={img.card(e.images[0])}
            alt={e.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            priority={priority}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          {e.badge && (
            <span
              className={cn(
                "absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-[0.1em]",
                badgeStyle[e.badge]
              )}
            >
              {e.badge === "popular" ? "Popular" : e.badge}
            </span>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/70">
              {e.location}
            </p>
            <h3 className="serif text-white text-[20px] leading-tight mt-1">
              {e.title}
            </h3>
          </div>
        </div>
      </button>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <p className="text-[13.5px] text-text2 leading-relaxed line-clamp-2">
          {e.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {e.tags.slice(0, 3).map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 mt-auto">
          <span className="text-gold font-medium text-[14.5px]">
            {e.priceDisplay}
          </span>
          <div className="flex gap-2">
            {e.bookingType === "external-link" && e.externalUrl ? (
              <a
                href={e.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !py-2 !px-4 text-[12px]"
              >
                Buy ticket
              </a>
            ) : (
              <button
                onClick={() => onBook(e)}
                className="btn-gold !py-2 !px-4 text-[12px]"
              >
                Book
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
