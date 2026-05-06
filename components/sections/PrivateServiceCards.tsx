"use client";

import { useState } from "react";
import Image from "next/image";
import { privateServices } from "@/lib/data";
import { img } from "@/lib/cloudinary";
import { PrivateServiceForm } from "@/components/forms/PrivateServiceForm";

export function PrivateServiceCards() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {privateServices.map((s, i) => (
          <article
            key={s.id}
            className="card overflow-hidden flex flex-col md:flex-row"
          >
            <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto">
              <Image
                src={img.card(s.images[0])}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
                priority={i < 2}
              />
            </div>
            <div className="p-6 md:p-7 flex flex-col gap-3 flex-1">
              <h3 className="serif text-[22px] md:text-[26px] leading-tight">
                {s.title}
              </h3>
              <p className="text-text2 text-[14px] leading-relaxed">{s.long}</p>
              <span className="pill pill-gold w-fit">{s.priceDisplay}</span>
              <ul className="grid gap-1 mt-1">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="text-[13.5px] text-text2 flex items-start gap-2"
                  >
                    <span className="text-gold mt-1">·</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setActive(s.title)}
                  className="btn-gold !py-2.5 !px-5 text-[12.5px]"
                >
                  {s.cta}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <PrivateServiceForm
        open={!!active}
        service={active}
        onClose={() => setActive(null)}
      />
    </>
  );
}
