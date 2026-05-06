"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import {
  buildWhatsappUrl,
  privateServiceMessage,
} from "@/lib/whatsapp";

type Props = {
  open: boolean;
  service: string | null;
  onClose: () => void;
};

export function PrivateServiceForm({ open, service, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const m = privateServiceMessage({
      name,
      phone,
      service: service || "Private service",
      date,
      groupSize,
      location,
      budget,
      message,
    });
    window.open(buildWhatsappUrl(m), "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={service ? `Request · ${service}` : "Request a private service"}
    >
      <form className="grid gap-4" onSubmit={onSubmit}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="lab" htmlFor="ps-name">
              Full name
            </label>
            <input
              id="ps-name"
              required
              className="field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="lab" htmlFor="ps-phone">
              WhatsApp
            </label>
            <input
              id="ps-phone"
              required
              className="field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+34 ..."
            />
          </div>
          <div>
            <label className="lab" htmlFor="ps-date">
              Date
            </label>
            <input
              id="ps-date"
              type="date"
              className="field"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="lab" htmlFor="ps-group">
              Group size
            </label>
            <input
              id="ps-group"
              type="number"
              min={1}
              className="field"
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="lab" htmlFor="ps-loc">
              Location / address
            </label>
            <input
              id="ps-loc"
              className="field"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Villa, hotel or area"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="lab" htmlFor="ps-budget">
              Budget (optional)
            </label>
            <input
              id="ps-budget"
              className="field"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="EUR"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="lab" htmlFor="ps-msg">
              Notes
            </label>
            <textarea
              id="ps-msg"
              className="field"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn-wa w-full">
          Request quote on WhatsApp
        </button>
        <p className="text-[12px] text-text3">
          All private services are quoted on request and subject to availability.
        </p>
      </form>
    </Modal>
  );
}
