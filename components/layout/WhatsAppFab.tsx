"use client";

import { buildWhatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const url = buildWhatsappUrl(
    "Hi MallorcasLocal, I'd like to ask about an experience."
  );
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MallorcasLocal on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full text-white shadow-soft transition-transform hover:scale-105"
      style={{ background: "var(--wa)" }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.83c0 2.08.55 4.12 1.6 5.91L0 24l6.42-1.68a11.84 11.84 0 0 0 5.62 1.43h.01c6.54 0 11.84-5.3 11.84-11.83 0-3.16-1.23-6.13-3.37-8.44ZM12.04 21.6h-.01a9.78 9.78 0 0 1-4.99-1.37l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.74 9.74 0 0 1-1.5-5.1c0-5.4 4.4-9.79 9.8-9.79 2.62 0 5.07 1.02 6.92 2.87a9.7 9.7 0 0 1 2.87 6.92c0 5.4-4.4 9.79-9.81 9.79Zm5.36-7.32c-.29-.15-1.74-.86-2.01-.96-.27-.1-.46-.15-.66.15-.2.29-.76.96-.93 1.16-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.2 3.02c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.09 1.74-.71 1.99-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.56-.34Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
