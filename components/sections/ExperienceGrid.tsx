"use client";

import { useMemo, useState } from "react";
import { Experience, experiences as ALL, categoryMeta, Category } from "@/lib/data";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { ExperienceDetail } from "@/components/cards/ExperienceDetail";
import { BookingModal } from "@/components/forms/BookingModal";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "price-asc" | "price-desc";

const cats: Array<{ key: Category | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "water", label: categoryMeta.water.label },
  { key: "beach", label: categoryMeta.beach.label },
  { key: "night", label: categoryMeta.night.label },
  { key: "mountain", label: categoryMeta.mountain.label },
  { key: "culture", label: categoryMeta.culture.label },
  { key: "free", label: categoryMeta.free.label },
];

type Props = {
  initialCategory?: Category | "all";
  initialQuery?: string;
  data?: Experience[];
  showFilters?: boolean;
  limit?: number;
};

export function ExperienceGrid({
  initialCategory = "all",
  initialQuery = "",
  data = ALL,
  showFilters = true,
  limit,
}: Props) {
  const [cat, setCat] = useState<Category | "all">(initialCategory);
  const [q, setQ] = useState(initialQuery);
  const [sort, setSort] = useState<SortKey>("featured");
  const [detail, setDetail] = useState<Experience | null>(null);
  const [book, setBook] = useState<Experience | null>(null);

  const list = useMemo(() => {
    let out = [...data];
    if (cat !== "all") out = out.filter((e) => e.category === cat);
    if (q.trim()) {
      const Q = q.toLowerCase();
      out = out.filter(
        (e) =>
          e.title.toLowerCase().includes(Q) ||
          e.location.toLowerCase().includes(Q) ||
          e.shortDescription.toLowerCase().includes(Q) ||
          e.tags.some((t) => t.toLowerCase().includes(Q))
      );
    }
    if (sort === "price-asc")
      out.sort((a, b) => (a.fromPrice ?? 9e9) - (b.fromPrice ?? 9e9));
    else if (sort === "price-desc")
      out.sort((a, b) => (b.fromPrice ?? -1) - (a.fromPrice ?? -1));
    else
      out.sort(
        (a, b) => Number(!!b.featured) - Number(!!a.featured)
      );
    if (limit) out = out.slice(0, limit);
    return out;
  }, [cat, q, sort, data, limit]);

  return (
    <>
      {showFilters && (
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <input
              className="field max-w-sm"
              placeholder="Search activities, places, tags…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search experiences"
            />
            <div className="ml-auto flex items-center gap-2">
              <label className="text-[12px] text-text3" htmlFor="sort">
                Sort
              </label>
              <select
                id="sort"
                className="field !py-2 !min-h-0 max-w-[180px]"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price · low to high</option>
                <option value="price-desc">Price · high to low</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto no-sb pb-1 -mx-2 px-2">
            {cats.map((c) => {
              const active = cat === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  className={cn(
                    "px-4 py-2 rounded-full text-[12.5px] border whitespace-nowrap transition",
                    active
                      ? "bg-gold text-[#0a0a0a] border-gold"
                      : "bg-bg2 text-text2 border-line hover:border-line3"
                  )}
                  aria-pressed={active}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid-cards">
        {list.map((e, i) => (
          <ExperienceCard
            key={e.id}
            experience={e}
            onOpen={(x) => setDetail(x)}
            onBook={(x) => setBook(x)}
            priority={i < 4}
          />
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-center text-text2 py-16">
          No experiences found. Try a different search or category.
        </p>
      )}

      <ExperienceDetail
        open={!!detail}
        experience={detail}
        onClose={() => setDetail(null)}
        onBook={(x) => {
          setDetail(null);
          setBook(x);
        }}
      />
      <BookingModal
        open={!!book}
        experience={book}
        onClose={() => setBook(null)}
      />
    </>
  );
}
