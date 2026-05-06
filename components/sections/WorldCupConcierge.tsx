"use client";

import { useMemo, useRef, useState } from "react";
import {
  WorldCupFixture,
  WorldCupPhase,
  formatFixtureDate,
  worldCupFixtures,
  worldCupPhases,
} from "@/lib/worldCupFixtures";
import { buildWhatsappUrl, worldCupMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Shisha delivery",
  "Boat rental",
  "Private villa rental",
  "Bottle service",
  "VIP nightlife",
  "Private transport",
  "Restaurant / table booking",
  "Custom itinerary",
];

const AREAS = [
  "Palma",
  "Magaluf",
  "Palmanova",
  "Santa Ponça",
  "Portals",
  "Port d'Andratx",
  "Villa / private address",
  "Not sure yet",
];

const BUDGETS = [
  "Under 500 EUR",
  "500–1,000 EUR",
  "1,000–2,500 EUR",
  "2,500–5,000 EUR",
  "5,000 EUR+",
  "Not sure yet",
];

export function WorldCupConcierge() {
  const [phase, setPhase] = useState<WorldCupPhase>("Group Stage");
  const [selected, setSelected] = useState<WorldCupFixture | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [budget, setBudget] = useState(BUDGETS[2]);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [services, setServices] = useState<string[]>([
    "Boat rental",
    "Private villa rental",
  ]);
  const [area, setArea] = useState(AREAS[0]);
  const [message, setMessage] = useState("");

  const list = useMemo(
    () => worldCupFixtures.filter((f) => f.phase === phase),
    [phase]
  );

  function toggleService(s: string) {
    setServices((cur) =>
      cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]
    );
  }

  function pickFixture(f: WorldCupFixture) {
    setSelected(f);
    if (!arrival) setArrival(f.date);
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const m = worldCupMessage({
      name,
      phone,
      email,
      groupSize,
      budget,
      arrivalDate: arrival,
      departureDate: departure,
      selectedFixture: selected
        ? `${formatFixtureDate(selected.date)} — ${selected.match} — ${selected.venue}`
        : undefined,
      services,
      area,
      message,
    });
    window.open(buildWhatsappUrl(m), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid gap-12">
      {/* Phase tabs */}
      <div>
        <div className="flex gap-2 overflow-x-auto no-sb pb-1 -mx-2 px-2">
          {worldCupPhases.map((p) => {
            const active = p === phase;
            return (
              <button
                key={p}
                onClick={() => setPhase(p)}
                className={cn(
                  "px-4 py-2 rounded-full text-[12.5px] border whitespace-nowrap transition",
                  active
                    ? "bg-gold text-[#0a0a0a] border-gold"
                    : "bg-bg2 text-text2 border-line hover:border-line3"
                )}
                aria-pressed={active}
              >
                {p}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {list.map((f) => {
            const active = selected?.id === f.id;
            return (
              <article
                key={f.id}
                className={cn(
                  "card p-5 flex flex-col gap-3 transition",
                  active && "border-gold/60 shadow-gold"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="pill pill-gold">{f.phase}</span>
                  <span className="text-text3 text-[12px]">
                    {formatFixtureDate(f.date)}
                  </span>
                </div>
                <h4 className="serif text-[18px] leading-snug">{f.match}</h4>
                <p className="text-text2 text-[13px]">
                  {f.group ? `${f.group} · ` : ""}
                  {f.venue}
                </p>
                <button
                  onClick={() => pickFixture(f)}
                  className={cn(
                    "mt-1 text-[12px] py-2 px-3 rounded-full self-start border",
                    active
                      ? "bg-gold text-[#0a0a0a] border-gold"
                      : "border-line2 hover:border-gold"
                  )}
                >
                  {active ? "Selected" : "Plan around this date →"}
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {/* Inquiry form */}
      <div ref={formRef}>
        <div className="rounded-3xl border border-line2 bg-bg2 p-6 md:p-10">
          {selected && (
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-gold/40 bg-[var(--golddim)] p-4">
              <div className="text-[12px] uppercase tracking-[0.12em] text-gold">
                Selected planning date
              </div>
              <div className="flex-1 text-[14px]">
                <strong className="font-medium">{selected.match}</strong>
                <span className="text-text2">
                  {" · "}
                  {formatFixtureDate(selected.date)}
                  {" · "}
                  {selected.venue}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-[12px] text-text2 underline"
              >
                Clear
              </button>
            </div>
          )}

          <form className="grid gap-5" onSubmit={onSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="lab" htmlFor="wc-name">
                  Full name
                </label>
                <input
                  id="wc-name"
                  required
                  className="field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="lab" htmlFor="wc-phone">
                  WhatsApp
                </label>
                <input
                  id="wc-phone"
                  required
                  className="field"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+34 ..."
                />
              </div>
              <div>
                <label className="lab" htmlFor="wc-email">
                  Email (optional)
                </label>
                <input
                  id="wc-email"
                  type="email"
                  className="field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="lab" htmlFor="wc-group">
                  Group size
                </label>
                <input
                  id="wc-group"
                  type="number"
                  min={1}
                  required
                  className="field"
                  value={groupSize}
                  onChange={(e) => setGroupSize(e.target.value)}
                />
              </div>
              <div>
                <label className="lab" htmlFor="wc-budget">
                  Budget
                </label>
                <select
                  id="wc-budget"
                  className="field"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  {BUDGETS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="lab" htmlFor="wc-area">
                  Preferred area
                </label>
                <select
                  id="wc-area"
                  className="field"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                >
                  {AREAS.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="lab" htmlFor="wc-arr">
                  Arrival date
                </label>
                <input
                  id="wc-arr"
                  type="date"
                  className="field"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                />
              </div>
              <div>
                <label className="lab" htmlFor="wc-dep">
                  Departure date
                </label>
                <input
                  id="wc-dep"
                  type="date"
                  className="field"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </div>
            </div>

            <div>
              <span className="lab block">Interested services</span>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => {
                  const on = services.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      className={cn(
                        "px-3 py-2 rounded-full border text-[12.5px] transition",
                        on
                          ? "bg-gold text-[#0a0a0a] border-gold"
                          : "bg-bg2 text-text2 border-line hover:border-line3"
                      )}
                      aria-pressed={on}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="lab" htmlFor="wc-msg">
                Message (any details)
              </label>
              <textarea
                id="wc-msg"
                className="field"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about the trip — match nights, vibe, must-haves…"
              />
            </div>

            <button type="submit" className="btn-wa w-full md:w-auto md:self-end">
              Send private inquiry on WhatsApp
            </button>
            <p className="text-[12px] text-text3">
              We'll reply with available options, an estimated quote and the next
              steps. Final pricing depends on date, group size, location and
              availability.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
