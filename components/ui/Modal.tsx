"use client";

import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  ariaLabel?: string;
  panelClassName?: string;
};

export function Modal({
  open,
  onClose,
  children,
  title,
  ariaLabel,
  panelClassName,
}: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="scrim flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel || title}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "modal-panel w-full md:w-auto md:max-w-2xl rounded-t-2xl md:rounded-[22px]",
          panelClassName
        )}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 md:px-7 py-4 border-b border-line bg-card">
          <h3 className="serif text-[20px] md:text-[22px]">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full border border-line2 flex items-center justify-center text-text2 hover:text-text hover:border-line3 transition"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="px-5 md:px-7 py-5">{children}</div>
      </div>
    </div>
  );
}
