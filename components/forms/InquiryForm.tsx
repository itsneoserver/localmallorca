"use client";

import { useState } from "react";
import { buildWhatsappUrl, inquiryMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const TYPES = [
  "Boat rental",
  "Jet ski",
  "Nightlife",
  "Private service",
  "World Cup group",
  "Custom itinerary",
  "Partnership",
  "Other",
];

const LANGS = ["English", "Español", "Deutsch", "Français", "Italiano", "العربية", "Русский"];

export function InquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [date, setDate] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState(LANGS[0]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const m = inquiryMessage({
      name,
      phone,
      email,
      type,
      date,
      groupSize,
      budget,
      message,
      language,
    });
    window.open(buildWhatsappUrl(m), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="lab" htmlFor="iq-name">
            Full name
          </label>
          <input
            id="iq-name"
            required
            className="field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="lab" htmlFor="iq-phone">
            WhatsApp / phone
          </label>
          <input
            id="iq-phone"
            required
            className="field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+34 ..."
          />
        </div>
        <div>
          <label className="lab" htmlFor="iq-email">
            Email (optional)
          </label>
          <input
            id="iq-email"
            type="email"
            className="field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="lab" htmlFor="iq-type">
            Type of request
          </label>
          <select
            id="iq-type"
            className="field"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="lab" htmlFor="iq-date">
            Date
          </label>
          <input
            id="iq-date"
            type="date"
            className="field"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label className="lab" htmlFor="iq-group">
            Group size
          </label>
          <input
            id="iq-group"
            type="number"
            min={1}
            className="field"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
          />
        </div>
        <div>
          <label className="lab" htmlFor="iq-budget">
            Budget (optional)
          </label>
          <input
            id="iq-budget"
            className="field"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="EUR"
          />
        </div>
        <div>
          <label className="lab" htmlFor="iq-lang">
            Preferred language
          </label>
          <select
            id="iq-lang"
            className="field"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {LANGS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="lab" htmlFor="iq-msg">
          Message
        </label>
        <textarea
          id="iq-msg"
          className="field"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Tell us about your trip"
        />
      </div>

      <button type="submit" className={cn("btn-wa w-full md:w-auto md:self-end")}>
        Send inquiry on WhatsApp
      </button>
      <p className="text-[12px] text-text3">
        We typically reply within 1 hour during the day.
      </p>
    </form>
  );
}
