"use client";

import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Experience } from "@/lib/data";
import { img } from "@/lib/cloudinary";
import { buildWhatsappUrl, bookingMessage } from "@/lib/whatsapp";

type Props = {
  open: boolean;
  experience: Experience | null;
  onClose: () => void;
  onBook: (e: Experience) => void;
};

export function ExperienceDetail({ open, experience, onClose, onBook }: Props) {
  if (!experience) return null;
  const e = experience;

  const quickWa = buildWhatsappUrl(
    bookingMessage({
      activity: e.title,
      priceShown: e.priceDisplay,
    })
  );

  return (
    <Modal open={open} onClose={onClose} title={e.title}>
      <div className="grid gap-5">
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
          <Image
            src={img.hero(e.images[0])}
            alt={e.title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[13px]">
          <span className="text-text2">{e.location}</span>
          <span className="text-text3">·</span>
          <span className="text-gold font-medium">{e.priceDisplay}</span>
          {e.reserveDisplay && (
            <>
              <span className="text-text3">·</span>
              <span className="text-text2">{e.reserveDisplay}</span>
            </>
          )}
        </div>

        <p className="text-[14.5px] text-text leading-relaxed whitespace-pre-line">
          {e.longDescription}
        </p>

        {e.included.length > 0 && (
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] text-text3 mb-2">
              Included
            </h4>
            <ul className="grid gap-1.5">
              {e.included.map((i) => (
                <li
                  key={i}
                  className="text-[13.5px] text-text2 flex items-start gap-2"
                >
                  <span className="text-gold mt-1">·</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        )}

        {e.notIncluded && e.notIncluded.length > 0 && (
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.12em] text-text3 mb-2">
              Not included
            </h4>
            <ul className="grid gap-1.5">
              {e.notIncluded.map((i) => (
                <li
                  key={i}
                  className="text-[13.5px] text-text3 flex items-start gap-2"
                >
                  <span className="mt-1">·</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        )}

        {e.images.length > 1 && (
          <div className="grid grid-cols-3 gap-2">
            {e.images.slice(0, 6).map((src, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden border border-line"
              >
                <Image
                  src={img.square(src)}
                  alt={`${e.title} photo ${i + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-3 sticky bottom-0 bg-card pb-1">
          {e.bookingType === "external-link" && e.externalUrl ? (
            <a
              href={e.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex-1"
            >
              Buy ticket
            </a>
          ) : (
            <button onClick={() => onBook(e)} className="btn-gold flex-1">
              Book on WhatsApp
            </button>
          )}
          <a href={quickWa} target="_blank" rel="noopener noreferrer" className="btn-wa flex-1">
            Quick WhatsApp
          </a>
          {e.mapUrl && (
            <a
              href={e.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View on map
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
