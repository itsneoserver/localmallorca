import { siteConfig } from "./site";
import { DICTIONARIES, Dict } from "./i18n/dictionaries";
import { DEFAULT_LOCALE, Locale } from "./i18n/types";

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}

function dict(locale?: Locale): Dict {
  const l = locale && DICTIONARIES[locale] ? locale : DEFAULT_LOCALE;
  return DICTIONARIES[l];
}

function line(label: string, value?: string | number | null): string {
  if (value === undefined || value === null || value === "") return "";
  return `${label}: ${value}`;
}

function compose(parts: (string | "")[]): string {
  return parts.filter(Boolean).join("\n");
}

export type BookingPayload = {
  name?: string;
  phone?: string;
  activity?: string;
  date?: string;
  guests?: string | number;
  pickup?: string;
  budget?: string;
  notes?: string;
  priceShown?: string;
  locale?: Locale;
};

export function bookingMessage(p: BookingPayload): string {
  const d = dict(p.locale);
  return compose([
    d.wa_booking_intro,
    "",
    line(d.wa_name, p.name),
    line(d.wa_phone, p.phone),
    line(d.wa_activity, p.activity),
    line(d.wa_date, p.date),
    line(d.wa_guests, p.guests),
    line(d.wa_pickup, p.pickup),
    line(d.wa_price_shown, p.priceShown),
    line(d.wa_budget, p.budget),
    line(d.wa_notes, p.notes),
    "",
    d.wa_booking_request,
    `${d.wa_source}: ${d.wa_source_main}`,
  ]);
}

export type InquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  type?: string;
  date?: string;
  groupSize?: string | number;
  budget?: string;
  message?: string;
  language?: string;
  locale?: Locale;
};

export function inquiryMessage(p: InquiryPayload): string {
  const d = dict(p.locale);
  return compose([
    d.wa_inquiry_intro,
    "",
    line(d.wa_name, p.name),
    line(d.wa_phone, p.phone),
    line(d.wa_email, p.email),
    line(d.wa_request_type, p.type),
    line(d.wa_date, p.date),
    line(d.wa_group_size, p.groupSize),
    line(d.wa_budget, p.budget),
    line(d.wa_language, p.language),
    line(d.wa_message, p.message),
    "",
    d.wa_booking_request,
    `${d.wa_source}: ${d.wa_source_main}`,
  ]);
}

export type WorldCupPayload = {
  name?: string;
  phone?: string;
  email?: string;
  groupSize?: string | number;
  budget?: string;
  arrivalDate?: string;
  departureDate?: string;
  selectedFixture?: string;
  services?: string[];
  area?: string;
  message?: string;
  locale?: Locale;
};

export function worldCupMessage(p: WorldCupPayload): string {
  const d = dict(p.locale);
  const services =
    p.services && p.services.length ? p.services.join(", ") : d.wc_no_fixture;
  const fixture = p.selectedFixture || d.wc_no_fixture;
  return compose([
    d.wa_worldcup_intro,
    "",
    line(d.wa_name, p.name),
    line(d.wa_phone, p.phone),
    line(d.wa_email, p.email),
    line(d.wa_group_size, p.groupSize),
    line(d.wa_budget, p.budget),
    line(d.wa_arrival, p.arrivalDate),
    line(d.wa_departure, p.departureDate),
    `${d.wa_fixture}: ${fixture}`,
    `${d.wa_interest}: ${services}`,
    line(d.wa_area, p.area),
    line(d.wa_message, p.message),
    "",
    d.wa_worldcup_request,
    `${d.wa_source}: ${d.wa_source_worldcup}`,
  ]);
}

export type PrivateServicePayload = {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  groupSize?: string | number;
  location?: string;
  budget?: string;
  message?: string;
  locale?: Locale;
};

export function privateServiceMessage(p: PrivateServicePayload): string {
  const d = dict(p.locale);
  return compose([
    d.wa_private_intro,
    "",
    line(d.wa_name, p.name),
    line(d.wa_phone, p.phone),
    line(d.wa_service, p.service),
    line(d.wa_date, p.date),
    line(d.wa_group_size, p.groupSize),
    line(d.wa_location, p.location),
    line(d.wa_budget, p.budget),
    line(d.wa_message, p.message),
    "",
    d.wa_private_request,
    `${d.wa_source}: ${d.wa_source_private}`,
  ]);
}
