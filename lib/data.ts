// Client-facing experience catalogue, extracted from DATASET.md.
// Internal commercial data (commissions, supplier margins, partner deals)
// has been deliberately excluded.

export type Category =
  | "water"
  | "beach"
  | "night"
  | "food"
  | "mountain"
  | "culture"
  | "free";

export type BookingType = "whatsapp" | "external-link" | "inquiry";

export type Experience = {
  id: string;
  slug: string;
  category: Category;
  title: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  priceDisplay: string;
  reserveDisplay?: string;
  fromPrice?: number;
  included: string[];
  notIncluded?: string[];
  tags: string[];
  images: string[];
  mapUrl?: string;
  bookingType: BookingType;
  externalUrl?: string;
  badge?: "premium" | "open" | "season" | "popular";
  featured?: boolean;
};

const CL =
  "https://res.cloudinary.com/dmm8bz2gj/image/upload/";

const img = {
  // Boats / water
  boatA: `${CL}v1778018087/IMG_5714_rka3f8.jpg`,
  boatB: `${CL}v1778018088/IMG_4812_be5wig.jpg`,
  jet1: `${CL}v1778018087/IMG_4569_bhdu2t.jpg`,
  jet2: `${CL}v1778018088/IMG_7149_ps5dkd.jpg`,
  // Beach / coves
  puntaNegra: `${CL}v1778018087/IMG_7746_yiavnq.jpg`,
  puntaNegra2: `${CL}v1778018087/IMG_0047_nsc1nw.jpg`,
  portalsVells: `${CL}v1778018087/7E36ADC6-9DBA-4991-9299-5AA46B900EA5_fnquwo.jpg`,
  elMago: `${CL}v1778018087/IMG_8253_fygjqz.jpg`,
  santElm: `${CL}v1778018087/IMG_9221_y6op7h.jpg`,
  santElm2: `${CL}v1778018087/IMG_2021_sum8y5.jpg`,
  santElm3: `${CL}v1778018087/IMG_2026_teizxh.jpg`,
  calaVinas: `${CL}v1778018087/IMG_0686_spye1e.jpg`,
  calaBeltran: `${CL}v1778018087/IMG_7733_lutkvz.jpg`,
  calaBeltran2: `${CL}v1778018087/IMG_9007_lzeomb.jpg`,
  magaluf: `${CL}v1778018087/IMG_4720_oju6em.jpg`,
  calaMalgrats: `${CL}v1778018087/IMG_4870_iqqkns.jpg`,
  sonMatias: `${CL}v1778018087/IMG_6759_gbrpd0.jpg`,
  // Viewpoints / mountain / city
  saForadada: `${CL}v1778018088/IMG_7149_ps5dkd.jpg`,
  tramuntana: `${CL}v1778018087/IMG_0865_2_knhmby.jpg`,
  palma: `${CL}v1778018087/IMG_4569_bhdu2t.jpg`,
  // Shisha / nightlife / bottle
  shisha1: `${CL}v1777577854/IMG_7148_lznhtu.jpg`,
  shisha2: `${CL}v1777577854/IMG_7147_lwi4yw.jpg`,
  shisha3: `${CL}v1777577854/IMG_7139_wgykdn.jpg`,
  shisha4: `${CL}v1777577855/IMG_7141_mzaegr.jpg`,
  // Lifestyle gallery
  life1: `${CL}v1778018087/IMG_8746_stksoi.jpg`,
  life2: `${CL}v1778018087/IMG_9209_h1zy27.jpg`,
  life3: `${CL}v1778018087/IMG_0372_jtwvag.jpg`,
  life4: `${CL}v1778018087/IMG_0380_t9dkjw.jpg`,
  life5: `${CL}v1778018087/IMG_9353_v5xiwp.jpg`,
  life6: `${CL}v1778018087/IMG_0943_sbybfl.jpg`,
  life7: `${CL}v1778018087/91DDE83A-7633-4A37-AE90-230FE230D8B4_asyza9.jpg`,
  life8: `${CL}v1778018087/IMG_3190_bdesd9.jpg`,
  life9: `${CL}v1778018087/IMG_9416_ppoeur.jpg`,
  life10: `${CL}v1778018087/C856CF2C-6315-4786-A5F9-7EB52C4FEB09_vmzlyd.jpg`,
  life11: `${CL}v1778018087/IMG_9811_zu8xbm.jpg`,
  life12: `${CL}v1778018087/IMG_3804_z3t6zs.jpg`,
};

export const experiences: Experience[] = [
  // ───────────── NIGHTLIFE ─────────────
  {
    id: "bcm",
    slug: "bcm-mallorca",
    category: "night",
    title: "BCM Mallorca",
    location: "Magaluf",
    shortDescription:
      "Iconic Magaluf nightclub. General admission with online reservation, official BCM merch included.",
    longDescription:
      "BCM Mallorca is one of the most iconic nightclubs on the island. Reserve your access in advance and pick up an official BCM T-shirt or hat (subject to availability) on arrival.",
    priceDisplay: "From 35 EUR",
    reserveDisplay: "10 EUR online · 25 EUR at venue",
    fromPrice: 35,
    included: [
      "General admission for 1 person",
      "Official BCM T-shirt or hat (subject to availability)",
    ],
    notIncluded: ["Drinks", "Late-night supplement after 12:00"],
    tags: ["Magaluf", "Nightclub", "Official", "18+"],
    images: [img.life1, img.life2, img.life9],
    bookingType: "external-link",
    externalUrl:
      "https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket",
    badge: "popular",
    featured: true,
  },
  {
    id: "mcp",
    slug: "mcp-club-pass",
    category: "night",
    title: "MCP Club Pass",
    location: "Magaluf",
    shortDescription:
      "Three clubs, one wristband: Bananas, Tokio and Soho. 2 drinks included.",
    longDescription:
      "Hop between three Magaluf venues with one access pass. Includes two drinks and a small surprise gift or shot if you arrive before 1:00 AM (subject to availability).",
    priceDisplay: "From 30 EUR",
    reserveDisplay: "20 EUR online · 10 EUR at the door",
    fromPrice: 30,
    included: [
      "Access to Bananas, Tokio and Soho",
      "2 drinks included",
      "Gift / shot before 1:00 AM (subject to availability)",
    ],
    tags: ["3 clubs", "2 drinks", "Magaluf", "11PM–6AM"],
    images: [img.life3, img.life8, img.life10],
    bookingType: "whatsapp",
    badge: "open",
    featured: true,
  },
  {
    id: "red-lion",
    slug: "red-lion",
    category: "night",
    title: "Red Lion",
    location: "Magaluf",
    shortDescription:
      "Classic Magaluf bar with a 4-drinks package. Easy entry, group friendly.",
    longDescription:
      "A long-running Magaluf staple. Reserve a table or group entry with the included drinks pack and start the night early.",
    priceDisplay: "From 30 EUR",
    fromPrice: 30,
    included: ["4 drinks included", "Group-friendly entry"],
    tags: ["Magaluf", "Bar", "Group friendly"],
    images: [img.life4, img.life5],
    bookingType: "whatsapp",
    badge: "open",
  },
  {
    id: "panama-jack",
    slug: "panama-jack",
    category: "night",
    title: "Panama Jack",
    location: "Magaluf",
    shortDescription:
      "Easy-going Magaluf bar with one drink included on entry.",
    longDescription:
      "Relaxed pre-club spot in the heart of Magaluf. Includes one drink with your entry.",
    priceDisplay: "From 15 EUR",
    fromPrice: 15,
    included: ["1 drink included on entry"],
    tags: ["Magaluf", "Bar", "Pre-game"],
    images: [img.life6, img.life7],
    bookingType: "whatsapp",
  },
  {
    id: "gringos",
    slug: "gringos-reloaded",
    category: "night",
    title: "Gringos / Reloaded",
    location: "Magaluf",
    shortDescription:
      "Group show experience in Magaluf — reserved entry for groups of any size.",
    longDescription:
      "A Magaluf group classic with a strong show energy. Reserve in advance for the best entry slot for your group.",
    priceDisplay: "From 35 EUR",
    fromPrice: 35,
    included: ["Reserved group entry", "Show experience"],
    tags: ["Magaluf", "Group", "Show"],
    images: [img.life11, img.life12],
    bookingType: "whatsapp",
    badge: "popular",
  },
  {
    id: "social-club",
    slug: "social-club-palma",
    category: "night",
    title: "Social Club",
    location: "Palma",
    shortDescription:
      "Palma club night with 2 drinks included. Smarter dress code, central location.",
    longDescription:
      "A more refined Palma option with two drinks included. Reserve to skip queues.",
    priceDisplay: "From 25 EUR",
    fromPrice: 25,
    included: ["Reserved entry", "2 drinks"],
    tags: ["Palma", "Club", "2 drinks"],
    images: [img.palma, img.life3],
    bookingType: "whatsapp",
  },

  // ───────────── WATER ─────────────
  {
    id: "jetski-andratx",
    slug: "jet-ski-andratx",
    category: "water",
    title: "Jet Ski Tour · Port d'Andratx",
    location: "Port d'Andratx",
    shortDescription:
      "1-hour guided jet ski tour from Port d'Andratx. Transport from Magaluf area included.",
    longDescription:
      "Glide along the southwest coast on a guided 1-hour jet ski tour. Round-trip transport from the Magaluf area is included. 1–2 people per ski, weather permitting.",
    priceDisplay: "From 159 EUR",
    reserveDisplay: "40 EUR online · 119 EUR at the location",
    fromPrice: 159,
    included: [
      "1-hour guided jet ski tour",
      "1–2 people per jet ski",
      "Pickup & return from Magaluf area",
    ],
    notIncluded: ["GoPro footage", "Fuel surcharge if applicable"],
    tags: ["Jet Ski", "1 hour", "Transport included"],
    images: [img.jet1, img.jet2],
    bookingType: "inquiry",
    badge: "season",
    featured: true,
  },
  {
    id: "jetski-paguera",
    slug: "jet-ski-paguera",
    category: "water",
    title: "Jet Ski · Paguera",
    location: "Paguera",
    shortDescription:
      "Quieter jet ski tour from Paguera bay. Ideal for first-timers and small groups.",
    longDescription:
      "Tour the Paguera coastline on a guided jet ski experience — calmer waters, beautiful coves and easy parking nearby.",
    priceDisplay: "From 140 EUR",
    fromPrice: 140,
    included: ["Guided tour", "Briefing", "Safety equipment"],
    tags: ["Jet Ski", "Paguera", "Beginner friendly"],
    images: [img.calaMalgrats, img.calaVinas],
    bookingType: "whatsapp",
    badge: "season",
  },
  {
    id: "jetski-circuit",
    slug: "jet-ski-circuit",
    category: "water",
    title: "Jet Ski Circuit",
    location: "Mallorca",
    shortDescription:
      "Short jet ski circuit experience — fast, fun and ideal between activities.",
    longDescription:
      "Open circuit jet ski experience for a quick adrenaline session. Great as a half-day add-on.",
    priceDisplay: "From 85 EUR",
    fromPrice: 85,
    included: ["Circuit access", "Safety briefing"],
    tags: ["Jet Ski", "Short", "Add-on"],
    images: [img.life5, img.life6],
    bookingType: "whatsapp",
  },
  {
    id: "sunset-heatwave-boat-party",
    slug: "sunset-heatwave-boat-party",
    category: "water",
    title: "Sunset Heatwave Boat Party",
    location: "Magaluf",
    shortDescription:
      "3-hour double-tier boat party with DJs, swim stop, paella and after-party included.",
    longDescription:
      "The signature Magaluf boat party. Double-tier boat, live DJs, bongo player, swim stop, paella, fruit, transfer to the boat, Shipwrecked after-party, free Magaluf T-shirt and free shots at Alex's Lounge (~9:30/10:00 PM).",
    priceDisplay: "From 69 EUR",
    fromPrice: 69,
    included: [
      "3-hour cruise on a double-tier boat",
      "Live DJs and bongo player",
      "Swim stop",
      "Paella and fruit",
      "Transfer to the boat",
      "Shipwrecked after-party",
      "Free Magaluf T-shirt",
      "Free shots at Alex's Lounge (~9:30/10:00 PM)",
    ],
    tags: ["3h cruise", "Live DJs", "Swim stop", "After-party"],
    images: [img.boatA, img.boatB, img.life8],
    bookingType: "external-link",
    externalUrl:
      "https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit",
    badge: "popular",
    featured: true,
  },
  {
    id: "boat-rental-no-license",
    slug: "boat-rental-no-license",
    category: "water",
    title: "Boat Rental · No License",
    location: "Mallorca",
    shortDescription:
      "Skipper-free boat rental for small groups. No license required, half or full day options.",
    longDescription:
      "Take a boat out for the day without a license — perfect for small groups. We help match the right boat to your group, route and date.",
    priceDisplay: "Under quote",
    included: ["Boat rental", "Briefing", "Safety equipment"],
    notIncluded: ["Fuel", "Skipper (optional add-on)"],
    tags: ["Boat", "Half/full day", "Group"],
    images: [img.boatB, img.boatA, img.puntaNegra],
    bookingType: "inquiry",
    badge: "season",
  },

  // ───────────── BEACH / BEACH CLUB ─────────────
  {
    id: "barbuda-brunch",
    slug: "barbuda-beach-brunch",
    category: "beach",
    title: "Barbuda Beach Brunch",
    location: "Palmanova",
    shortDescription:
      "Beachfront brunch in Palmanova. Lazy mornings with sea views and a relaxed vibe.",
    longDescription:
      "Reserve a brunch table at Barbuda for a slow start to the day, right on the beach. Family and group friendly.",
    priceDisplay: "Under quote",
    included: ["Reserved table", "Beachfront access"],
    tags: ["Beach club", "Brunch", "Palmanova"],
    images: [img.sonMatias, img.magaluf],
    bookingType: "inquiry",
  },
  {
    id: "punta-negra",
    slug: "punta-negra",
    category: "beach",
    title: "Punta Negra",
    location: "Costa d'en Blanes",
    shortDescription:
      "Quiet rocky beach with clear water, close to Portals and Palmanova.",
    longDescription:
      "A calm spot for swimming and snorkelling. Easy access from Portals and Palmanova, with rocky platforms and clear water.",
    priceDisplay: "Free to visit",
    included: ["Public beach access"],
    tags: ["Quiet", "Snorkel", "Clear water"],
    images: [img.puntaNegra, img.puntaNegra2],
    bookingType: "whatsapp",
    mapUrl: "https://maps.google.com/?q=Punta+Negra+Calvia",
  },
  {
    id: "portals-vells",
    slug: "portals-vells",
    category: "beach",
    title: "Portals Vells",
    location: "Calvià",
    shortDescription:
      "Small turquoise cove popular with boats, swimmers and beach days.",
    longDescription:
      "Sheltered cove with calm turquoise water. Pine trees provide natural shade, and you'll often see boats anchored in the bay.",
    priceDisplay: "Free to visit",
    included: ["Public beach access"],
    tags: ["Cove", "Turquoise", "Family"],
    images: [img.portalsVells, img.elMago],
    bookingType: "whatsapp",
    mapUrl: "https://maps.google.com/?q=Portals+Vells",
  },
  {
    id: "el-mago",
    slug: "el-mago",
    category: "beach",
    title: "El Mago",
    location: "Portals Vells area",
    shortDescription:
      "Hidden cove next to Portals Vells. Clear water, secluded, harder to find.",
    longDescription:
      "A small natural cove tucked next to Portals Vells. Quieter than its neighbour, with that secret-spot feeling.",
    priceDisplay: "Free to visit",
    included: ["Public beach access"],
    tags: ["Hidden", "Snorkel", "Quiet"],
    images: [img.elMago, img.portalsVells],
    bookingType: "whatsapp",
  },
  {
    id: "cala-vinas",
    slug: "cala-vinas",
    category: "beach",
    title: "Cala Viñas",
    location: "Calvià",
    shortDescription:
      "Easy-access cove with soft sand and clear water near Magaluf.",
    longDescription:
      "Small, quieter neighbour to Magaluf. Soft sand, clear water, simple access from the road.",
    priceDisplay: "Free to visit",
    included: ["Public beach access"],
    tags: ["Sand", "Easy access", "Quiet"],
    images: [img.calaVinas],
    bookingType: "whatsapp",
  },
  {
    id: "cala-beltran",
    slug: "cala-beltran",
    category: "beach",
    title: "Cala Beltrán",
    location: "Llucmajor",
    shortDescription:
      "Narrow turquoise inlet near Cala Pi. A short walk gets you a postcard view.",
    longDescription:
      "A scenic narrow inlet with turquoise water. Best reached on foot — wear shoes you don't mind getting wet.",
    priceDisplay: "Free to visit",
    included: ["Public beach access"],
    tags: ["Hidden", "Hike", "Scenic"],
    images: [img.calaBeltran, img.calaBeltran2],
    bookingType: "whatsapp",
  },
  {
    id: "magaluf-beach",
    slug: "magaluf-beach",
    category: "beach",
    title: "Magaluf Beach",
    location: "Magaluf",
    shortDescription:
      "Wide beach with beach clubs, bars and easy access to nightlife.",
    longDescription:
      "The main beach in Magaluf with full services — beach clubs, bars, water sports and short walks to the nightlife.",
    priceDisplay: "Free to visit",
    included: ["Public beach access"],
    tags: ["Beach", "Beach clubs", "Bars"],
    images: [img.magaluf],
    bookingType: "whatsapp",
  },
  {
    id: "cala-malgrats",
    slug: "cala-malgrats",
    category: "beach",
    title: "Cala Malgrats",
    location: "Santa Ponça",
    shortDescription:
      "Coastal viewpoint over the Malgrats islands. Great for sunsets and walks.",
    longDescription:
      "Quiet coastal walk above Santa Ponça with views toward the Malgrats islands. Combine with sunset drinks nearby.",
    priceDisplay: "Free to visit",
    included: ["Public access"],
    tags: ["Walk", "Sunset", "Viewpoint"],
    images: [img.calaMalgrats],
    bookingType: "whatsapp",
  },
  {
    id: "son-matias",
    slug: "son-matias",
    category: "beach",
    title: "Playa Son Matías",
    location: "Palmanova",
    shortDescription:
      "Easy beach between Palmanova and Magaluf. Restaurants, hotels and calm access.",
    longDescription:
      "A relaxed alternative if you want quieter water near Magaluf. Restaurants and hotels right behind the beach.",
    priceDisplay: "Free to visit",
    included: ["Public beach access"],
    tags: ["Calm", "Family", "Palmanova"],
    images: [img.sonMatias],
    bookingType: "whatsapp",
  },
  {
    id: "sant-elm",
    slug: "sant-elm",
    category: "beach",
    title: "Sant Elm",
    location: "Northwest Mallorca",
    shortDescription:
      "Sunset views over Dragonera Natural Park. Calm walks and seaside restaurants.",
    longDescription:
      "Small village with great sunsets, views over Dragonera and a relaxed seaside walk. Combine with lunch at a beachfront restaurant.",
    priceDisplay: "Free to visit",
    included: ["Public access"],
    tags: ["Sunset", "Dragonera", "Walk"],
    images: [img.santElm, img.santElm2, img.santElm3],
    bookingType: "whatsapp",
  },

  // ───────────── MOUNTAIN / VIEWPOINTS ─────────────
  {
    id: "sa-foradada",
    slug: "sa-foradada",
    category: "free",
    title: "Sa Foradada",
    location: "Deià area",
    shortDescription:
      "Iconic viewpoint near Deià. Best before sunset, dramatic Tramuntana coastline.",
    longDescription:
      "One of Mallorca's most photographed viewpoints. Park nearby and walk to the cliffs for sunset.",
    priceDisplay: "Free to visit",
    included: ["Public viewpoint"],
    tags: ["Sunset", "Tramuntana", "Hike"],
    images: [img.saForadada],
    bookingType: "whatsapp",
  },
  {
    id: "tramuntana-roads",
    slug: "tramuntana-roads",
    category: "mountain",
    title: "Serra de Tramuntana Roads",
    location: "North Mallorca",
    shortDescription:
      "Mountain road route through the Serra: stone villages, viewpoints and sea views.",
    longDescription:
      "A drive across the Serra de Tramuntana with stops at stone villages, viewpoints and quiet coves. Great for a half- or full-day trip.",
    priceDisplay: "Free to drive",
    included: ["Suggested route + stops"],
    tags: ["Drive", "Mountain", "Villages"],
    images: [img.tramuntana],
    bookingType: "whatsapp",
  },

  // ───────────── CULTURE ─────────────
  {
    id: "palma-downtown",
    slug: "palma-downtown",
    category: "culture",
    title: "Palma Downtown Walk",
    location: "Palma",
    shortDescription:
      "Walk through Palma's old streets, cafés, terraces and local corners.",
    longDescription:
      "Wander through Palma's historic centre with a curated short list of cafés, shops and terraces — local picks, no tourist traps.",
    priceDisplay: "Free to walk",
    included: ["Curated café & shop list"],
    tags: ["City", "Cafés", "Walk"],
    images: [img.palma],
    bookingType: "whatsapp",
  },

  // ───────────── PRIVATE TRANSPORT ─────────────
  {
    id: "private-transfer",
    slug: "private-transfer",
    category: "water",
    title: "Private Transfer / Minibus",
    location: "Mallorca-wide",
    shortDescription:
      "Private transport for groups: airport, nightlife, boat day or full-day driver.",
    longDescription:
      "Pre-book private transport for your group. Options range from airport pickup to night-out drivers and full-day touring with a minibus.",
    priceDisplay: "Under quote",
    included: ["Private vehicle", "Driver", "Group capacity to suit"],
    tags: ["Transport", "Group", "Private"],
    images: [img.life9, img.life10],
    bookingType: "inquiry",
  },
];

export const featuredExperiences = experiences.filter((e) => e.featured);

export const categoryMeta: Record<
  Category,
  { label: string; short: string }
> = {
  water: { label: "Water", short: "Boats, jet ski & sea" },
  beach: { label: "Beaches", short: "Coves & beach clubs" },
  night: { label: "Nightlife", short: "Clubs & bars" },
  food: { label: "Food", short: "Restaurants & brunch" },
  mountain: { label: "Mountain", short: "Tramuntana drives" },
  culture: { label: "Culture", short: "Old town walks" },
  free: { label: "Viewpoints", short: "Hidden spots" },
};

// ───────────── PRIVATE SERVICES ─────────────

export type PrivateService = {
  id: string;
  slug: string;
  title: string;
  short: string;
  long: string;
  priceDisplay: string;
  features: string[];
  images: string[];
  cta: string;
};

export const privateServices: PrivateService[] = [
  {
    id: "shisha",
    slug: "shisha-delivery",
    title: "Shisha Delivery",
    short:
      "Premium shisha setup delivered to your villa, boat or private event.",
    long: "Specialist shisha delivery across Mallorca. Choose between rental setups for your villa or full specialist service for an event. Catering and flavours on request. One-week rentals come with a discount.",
    priceDisplay: "Rental from 100 EUR / 24h · Specialist from 150 EUR / 6h",
    features: [
      "Premium pipes and clean coal setup",
      "Wide flavour selection on request",
      "Specialist or self-serve rental",
      "Catering for groups",
      "Discount on one-week rentals",
    ],
    images: [img.shisha1, img.shisha2, img.shisha3, img.shisha4],
    cta: "Request shisha service",
  },
  {
    id: "bottle",
    slug: "bottle-service",
    title: "Bottle Service",
    short:
      "Premium spirits and ice service for boats, villas or private events.",
    long: "Pre-arranged bottle and ice delivery for your boat day, villa party or private event. Availability depends on date and location.",
    priceDisplay: "From 50 EUR · subject to availability",
    features: [
      "Bottle + ice delivery",
      "Boat, villa or private address",
      "Mixers and cups available",
    ],
    images: [img.life8, img.life10],
    cta: "Request bottle service",
  },
  {
    id: "villa",
    slug: "private-villa",
    title: "Private Villa Rental",
    short:
      "Villa options for groups, viewing nights, birthdays or full World Cup stays.",
    long: "We help you find the right villa for your group, dates and style. Options range from intimate finca stays to full event villas.",
    priceDisplay: "Under quote",
    features: [
      "Group-matched villa shortlist",
      "Local concierge add-ons",
      "Optional staff and chefs",
    ],
    images: [img.life4, img.life5, img.life11],
    cta: "Request villa options",
  },
  {
    id: "vip-table",
    slug: "vip-table",
    title: "VIP Tables & Club Access",
    short:
      "Reserved tables, fast access and bottle service at the best Mallorca clubs.",
    long: "VIP tables, fast queue access and on-table bottle service at top clubs in Magaluf and Palma. Group friendly.",
    priceDisplay: "Under quote",
    features: [
      "Reserved table",
      "Fast access",
      "Bottle service options",
    ],
    images: [img.life1, img.life9],
    cta: "Request VIP setup",
  },
  {
    id: "transport",
    slug: "private-transport",
    title: "Private Transport",
    short:
      "Drivers, minibuses and group transport across the island, day or night.",
    long: "Pre-book single vehicles or fleets for your group. Airport, club nights, boat days and full-day touring.",
    priceDisplay: "Under quote",
    features: [
      "Pre-booked driver",
      "Single car to minibus",
      "Hourly or full-day",
    ],
    images: [img.life9, img.life10],
    cta: "Request transport",
  },
  {
    id: "events",
    slug: "private-events",
    title: "Private Events & Birthdays",
    short:
      "Private group experiences, birthdays and custom plans handled end-to-end.",
    long: "Tell us the date, group size and vibe — we coordinate venue, transport, food, drinks and add-ons.",
    priceDisplay: "Under quote",
    features: [
      "Venue selection",
      "Catering & drinks",
      "Transport coordination",
      "Add-ons: shisha, bottles, DJs",
    ],
    images: [img.life2, img.life3],
    cta: "Plan an event",
  },
  {
    id: "itinerary",
    slug: "custom-itinerary",
    title: "Custom Itinerary",
    short:
      "A complete day-by-day Mallorca plan built around your group, dates and budget.",
    long: "From boats to beach clubs to dinners and nightlife — one inquiry, one plan, one WhatsApp contact for the whole trip.",
    priceDisplay: "Under quote",
    features: [
      "Day-by-day plan",
      "All bookings handled",
      "One WhatsApp contact",
    ],
    images: [img.life6, img.life7, img.life12],
    cta: "Build my itinerary",
  },
];

// ───────────── GALLERY ─────────────

export const galleryImages: string[] = [
  img.boatA,
  img.puntaNegra,
  img.life1,
  img.santElm,
  img.shisha1,
  img.calaBeltran,
  img.life3,
  img.portalsVells,
  img.tramuntana,
  img.life4,
  img.calaVinas,
  img.shisha2,
  img.life5,
  img.calaMalgrats,
  img.boatB,
  img.life6,
  img.elMago,
  img.life7,
  img.saForadada,
  img.life8,
  img.shisha3,
  img.sonMatias,
  img.life9,
  img.santElm2,
  img.life10,
  img.palma,
  img.shisha4,
  img.life11,
  img.santElm3,
  img.life12,
];

// ───────────── FAQs ─────────────

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: "How do I book?",
    a: "Most experiences are booked through WhatsApp. Pick what you want, fill in a short form, and your request opens a pre-filled WhatsApp message. We confirm availability and the next steps directly with you.",
  },
  {
    q: "Do I pay online or at the venue?",
    a: "It depends on the experience. Some require a small reservation deposit online (or via a secure link). The remaining amount is paid at the venue or at the activity location. The split is shown clearly on each card.",
  },
  {
    q: "Is the price final?",
    a: "Listed prices are accurate at the time you see them. For private services, villas and boats, prices are quoted on request because they depend on date, group size, location and availability.",
  },
  {
    q: "Can I reserve with a deposit?",
    a: "Yes, several experiences let you secure your spot with a small online deposit. The card and detail page show the exact deposit and the remaining amount.",
  },
  {
    q: "Do you arrange transport?",
    a: "Yes. We can pre-book a private driver, minibus or full-day transport for your group. Send your group size and dates and we'll quote.",
  },
  {
    q: "Can I book for groups?",
    a: "Absolutely — most experiences and private services are designed for groups. For very large groups, send us your dates and we'll build a plan.",
  },
  {
    q: "Can I request a private service?",
    a: "Yes. Shisha delivery, bottle service, VIP tables, villas, private transport and full custom itineraries are available on request.",
  },
  {
    q: "What languages do you support?",
    a: "We reply in English, Spanish, German, French, Italian, Arabic and Russian. You can pick your preferred language in the inquiry form.",
  },
  {
    q: "What happens after I send a WhatsApp request?",
    a: "We usually reply within 1 hour during the day. We confirm availability, share the final option and pricing, and send the booking link or meeting point details.",
  },
  {
    q: "Can I change the date?",
    a: "Yes — date changes depend on the supplier. Most are flexible if you ask early. Let us know on WhatsApp and we'll arrange the change.",
  },
];
