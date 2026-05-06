"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { img } from "@/lib/cloudinary";

type Props = {
  images: string[];
};

export function GalleryGrid({ images }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () =>
      setActive((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            className="relative aspect-square overflow-hidden rounded-xl border border-line group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={img.square(src)}
              alt={`Mallorca scene ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="scrim flex items-center justify-center p-3 md:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-line2 bg-bg/80 backdrop-blur flex items-center justify-center text-text2 hover:text-text hover:border-line3 transition"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 1L3 7l6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-line2 bg-bg/80 backdrop-blur flex items-center justify-center text-text2 hover:text-text hover:border-line3 transition"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute top-4 right-4 w-11 h-11 rounded-full border border-line2 bg-bg/80 backdrop-blur flex items-center justify-center text-text2 hover:text-text hover:border-line3 transition"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={img.lightbox(images[active])}
              alt={`Mallorca scene ${active + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-2 right-3 text-[11px] text-white/60">
              {active + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
