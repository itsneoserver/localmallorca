"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { buildWhatsappUrl, bookingMessage } from "@/lib/whatsapp";
import { Experience } from "@/lib/data";

type Props = {
  open: boolean;
  experience: Experience | null;
  onClose: () => void;
};

export function BookingModal({ open, experience, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [pickup, setPickup] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = bookingMessage({
      name,
      phone,
      activity: experience?.title,
      date,
      guests,
      pickup,
      budget,
      notes,
      priceShown: experience?.priceDisplay,
    });
    window.open(buildWhatsappUrl(msg), "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={experience ? `Book · ${experience.title}` : "Book an experience"}
    >
      <form className="grid gap-4" onSubmit={onSubmit}>
        {experience && (
          <div className="rounded-xl border border-line bg-bg2 p-3 flex justify-between items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-text3">
                Selected
              </p>
              <p className="text-[14px] mt-0.5">{experience.title}</p>
            </div>
            <span className="text-gold text-[13.5px]">
              {experience.priceDisplay}
            </span>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="lab" htmlFor="bk-name">
              Full name
            </label>
            <input
              id="bk-name"
              required
              className="field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="lab" htmlFor="bk-phone">
              Phone / WhatsApp
            </label>
            <input
              id="bk-phone"
              required
              className="field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+34 ..."
            />
          </div>
          <div>
            <label className="lab" htmlFor="bk-date">
              Date
            </label>
            <input
              id="bk-date"
              type="date"
              required
              className="field"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="lab" htmlFor="bk-guests">
              Guests
            </label>
            <input
              id="bk-guests"
              type="number"
              min={1}
              max={50}
              required
              className="field"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="lab" htmlFor="bk-pickup">
              Hotel / pickup point (optional)
            </label>
            <input
              id="bk-pickup"
              className="field"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Hotel name or address"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="lab" htmlFor="bk-budget">
              Budget (optional)
            </label>
            <input
              id="bk-budget"
              className="field"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="EUR"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="lab" htmlFor="bk-notes">
              Notes (optional)
            </label>
            <textarea
              id="bk-notes"
              className="field"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Anything we should know"
            />
          </div>
        </div>

        <button type="submit" className="btn-wa w-full">
          Send booking on WhatsApp
        </button>
        <p className="text-[12px] text-text3">
          We confirm availability and the final price by WhatsApp before booking.
        </p>
      </form>
    </Modal>
  );
}
