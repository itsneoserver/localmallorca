 # MallorcasLocal — Build Summary

Production-ready Next.js 14 (App Router) site rebuilt from `index.html.md` + `DATASET.md` + `/COMPONENTS`.
Dark premium theme, WhatsApp-first conversion, Cloudinary-optimised imagery, fully Vercel-deployable.

Build: `✓ Compiled successfully` — 13 routes, ~87 kB shared JS, all secondary pages statically pre-rendered.

---

## Route structure

| Path                | Type     | Purpose                                                                 |
| ------------------- | -------- | ----------------------------------------------------------------------- |
| `/`                 | Static   | Home: hero, trust, featured experiences, how-it-works, categories, gallery, FAQ, CTA |
| `/book`             | Dynamic  | Full catalogue with category filters, search, sort, detail + booking modal |
| `/private-services` | Static   | Shisha, bottle, villa, VIP, transport, events, custom itinerary cards    |
| `/world-cup`        | Static   | World Cup 2026 private concierge — services, plans, fixtur. e selector, inquiry form |
| `/contact`          | Static   | WhatsApp / email / hours, custom inquiry form                            |
| `/about`            | Static   | Story, principles, honest limits                                         |
| `/faq`              | Static   | Full FAQ accordion                                                       |
| `/gallery`          | Static   | Lightbox gallery (keyboard nav, prev/next/close)                         |
| `/sitemap.xml`      | Static   | Auto-generated                                                           |
| `/robots.txt`       | Static   | Auto-generated                                                           |
| `/_not-found`       | Static   | Branded 404                                                              |

`/book` is the only dynamic route (uses `searchParams` for `?cat=` + `?q=`).

---

## Tech stack

- **Next.js** 14.2.15 (App Router, TypeScript)
- **React** 18.3
- **Tailwind CSS** 3.4 with CSS variables (theming-friendly)
- **next/image** with Cloudinary remote pattern
- Google Fonts: **Playfair Display** (serif) + **DM Sans** (sans)

No external runtime dependencies beyond `next`, `react`, `react-dom`. No analytics, no chat widgets — by design.

---

## Components

### Layout
- `components/layout/Navbar.tsx` — sticky, scroll-aware, mobile drawer, animated burger
- `components/layout/Footer.tsx` — 4-column with brand block + WhatsApp CTA
- `components/layout/WhatsAppFab.tsx` — floating button (mobile + desktop)

### UI primitives
- `components/ui/Section.tsx` — eyebrow / title / subtitle / aligned container
- `components/ui/Reveal.tsx` — IntersectionObserver fade-up (respects `prefers-reduced-motion`)
- `components/ui/Modal.tsx` — accessible dialog (`role="dialog"`, ESC, body scroll lock)

### Cards
- `components/cards/ExperienceCard.tsx` — image + badge + title + tags + price + CTA
- `components/cards/ExperienceDetail.tsx` — full detail with included / not-included, image grid, sticky CTA bar

### Forms
- `components/forms/BookingModal.tsx` — booking → WhatsApp
- `components/forms/InquiryForm.tsx` — generic contact / partnership / World Cup inquiry → WhatsApp
- `components/forms/PrivateServiceForm.tsx` — private-service quote → WhatsApp

### Sections
- `components/sections/Hero.tsx` — fullscreen hero with overlay
- `components/sections/TrustBar.tsx` — stat row from `siteConfig.trust`
- `components/sections/FAQAccordion.tsx` — animated grid-rows accordion
- `components/sections/ExperienceGrid.tsx` — filters + sort + search + detail/booking modal orchestration
- `components/sections/PrivateServiceCards.tsx` — image+text private-service cards
- `components/sections/WorldCupConcierge.tsx` — phase tabs + fixture cards + auto-fill inquiry form
- `components/sections/GalleryGrid.tsx` — gallery + keyboard-navigable lightbox

---

## Library / data

- `lib/site.ts` — brand, WhatsApp number, OG image, trust stats, language registry (`en, es, de, fr, it, ar (RTL), ru`)
- `lib/cloudinary.ts` — `img.hero / card / square / thumb / micro / lightbox / logo` URL transforms
- `lib/whatsapp.ts` — `buildWhatsappUrl()` + four message builders: `bookingMessage`, `inquiryMessage`, `worldCupMessage`, `privateServiceMessage`
- `lib/data.ts` — 25 experiences across 7 categories, 7 private services, 30 gallery images, 10 FAQs
- `lib/worldCupFixtures.ts` — full 104-match FIFA 2026 calendar with phases, dates, venues
- `lib/utils.ts` — `cn()` + price formatter

---

## Data extraction policy

**Included** (client-facing only):
- Public titles, descriptions, locations
- Public prices (`From X EUR`, `Under quote`)
- Public deposits / reserve amounts
- Inclusions / exclusions
- Image URLs, map URLs, external booking URLs (BCM SumUp, boat-party SumUp)

**Excluded** (internal commercial data — deliberately never imported):
- Commission percentages
- Supplier net rates / margins
- Partner deal terms
- Internal contact lists, captain phone numbers, owner emails
- Per-booking payouts

The `data.ts` header comment makes this policy explicit so future contributors keep it sanitised.

---

## WhatsApp flow

All "book / inquire" CTAs converge on a single mechanism:

1. Form (or fixture selection) → builds a structured plain-text message
2. `buildWhatsappUrl(message)` → `https://wa.me/34644075065?text={encoded}`
3. Opens in new tab (`target="_blank" rel="noopener noreferrer"`)

Templates always end with a "Source:" line so the inbound message is attributable to the right page (e.g. `Source: MallorcasLocal World Cup Concierge`).

---

## World Cup 2026 page

- **Positioned as a private concierge offer**, not football news. No FIFA branding, no team/player crests, no live scores.
- Hero, FIFA disclaimer banner ("not affiliated with FIFA"), Why Mallorca, 4 service cards (shisha, boat, villa, group concierge), 4 suggested plans (Boat+Nightlife, Villa+Shisha, Full Weekend, Recovery Day).
- `WorldCupConcierge` component renders phase tabs (Group / R32 / R16 / QF / SF / 3rd / Final) with all 104 fixtures.
- Clicking "Plan around this date" pre-fills the arrival date in the inquiry form, attaches fixture context to the WhatsApp message, and smooth-scrolls to `#inquiry`.
- Services are presented as **under quote** — no public pricing on World Cup services (intentional, matches the prompt requirement).
- Full FAQ + final CTA at the bottom.

---

## Accessibility

- Semantic `<main>`, `<section>`, `<article>` where appropriate
- Skip-to-content link in the layout
- All interactive elements ≥ 44 px tap target (`--tap` token + `min-h-[44px]` on buttons)
- `:focus-visible` outline in champagne gold across the site
- `aria-label`, `aria-modal`, `role="dialog"` on modals and lightbox
- Keyboard nav for lightbox (Esc / ←/→) and modals (Esc)
- `prefers-reduced-motion` respected globally (animations cut to 0.001 ms)

---

## SEO

- `metadataBase` set from `siteConfig.url`
- Per-page `metadata` with title / description / OG / Twitter card
- Open Graph: 1200×675 Cloudinary-optimised image
- `app/sitemap.ts` enumerates all 8 public routes
- `app/robots.ts` allows all + references sitemap
- Twitter `summary_large_image` card on all pages

---

## Multilingual handling

The site ships in English with the multilingual hook in place:
- `siteConfig.languages` + `langMeta` declared with `rtl: true` for Arabic
- `InquiryForm` exposes a "Preferred language" selector (es, en, de, fr, it, ar, ru) so the message arriving on WhatsApp tells the operator which language to reply in
- The `<html lang="en">` attribute and `dir` switching can be wired to a future locale router (e.g. `next-intl`) without restructuring components

This honors the DATASET requirement to support 7 languages without prematurely locking the site into a translation framework before copy is professionally translated.

---

## Assumptions made

1. **Dark mode default.** The original `index.html.md` defaulted to light with optional dark; the new prompt explicitly demanded "dark premium / silent luxury." Light mode tokens are preserved as `.lm` class for an easy future toggle.
2. **No direct supplier integrations.** All booking flows go through WhatsApp or external SumUp pages (BCM, boat party). No Stripe, no internal checkout — matches the "WhatsApp-first" requirement.
3. **OG image** reuses the Cloudinary hero (`IMG_4569_bhdu2t.jpg`). Replace with a branded 1200×675 if needed.
4. **`siteConfig.url`** is set to `https://mallorcaslocal.com` — change before deploy if the production domain differs.
5. **`siteConfig.email`** is set to `hola@mallorcaslocal.com` — confirm or override.
6. **No analytics** were added (Plausible, GA, Vercel Analytics). Add `@vercel/analytics` if desired.
7. **No translated copy** is shipped — only the language selector. Translation should be a separate CMS / `next-intl` pass once final copy is approved.
8. **Pricing is "as displayed in DATASET"** — anything missing or sensitive is shown as `Under quote`. The component renders this gracefully via `formatPriceFromNumber`.

---

## Missing / suggested follow-ups

- Replace placeholder `siteConfig.url` and `siteConfig.email` with production values.
- Provide a custom OG image per page if marketing has dedicated artwork.
- Wire `next-intl` (or similar) once translations are approved.
- Add `@vercel/analytics` and `@vercel/speed-insights` if desired.
- Upgrade Next.js patch version (`14.2.15` has a flagged advisory — bump to latest 14.x or 15.x in a follow-up PR).
- Optional: add a `/legal` page (privacy + terms) — not in the prompt but recommended for paid traffic.

---

## Vercel deployment

1. Push the `mallorcaslocal/` folder to a Git repo (GitHub / GitLab / Bitbucket).
2. In Vercel: **New Project → Import Repository → select the repo**.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: `/` (or `mallorcaslocal/` if the repo contains other projects).
5. Build command: `npm run build` (default).
6. Output directory: `.next` (default).
7. Environment variables: **none required** (everything is public-config; the WhatsApp number is intentionally hard-coded in `lib/site.ts`).
8. Hit **Deploy**. First build will succeed in roughly the same time as the local build (~30 s).

After deploy:
- Bind your custom domain in **Settings → Domains**.
- Update `siteConfig.url` in `lib/site.ts` to the production URL so OG, sitemap and canonical metadata point to the live host.
- Verify `/sitemap.xml` and `/robots.txt` are reachable.
- Submit `/sitemap.xml` to Google Search Console.

---

## Local development

```bash
cd mallorcaslocal
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build locally
```

Node 18.17+ is required (Next 14 baseline).

---

## File tree (top-level)

```
mallorcaslocal/
├── app/
│   ├── about/page.tsx
│   ├── book/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── gallery/page.tsx
│   ├── private-services/page.tsx
│   ├── world-cup/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── cards/
│   ├── forms/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── lib/
│   ├── cloudinary.ts
│   ├── data.ts
│   ├── site.ts
│   ├── utils.ts
│   ├── whatsapp.ts
│   └── worldCupFixtures.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
