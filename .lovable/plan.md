# AL-KABEER Tours & Travels — Hajj & Umrah Website

Production-ready marketing site built from the four supplied screens (Home, Hajj Packages, Umrah Packages, Contact), styled in the green/gold Material palette from those files, with three-city package browsing (Mumbai, Kolkata, Gujarat) driven by local JSON — no backend.

## Design system

- Colors taken verbatim from the supplied HTML tokens: primary `#00501e`, primary-container `#006b2b`, secondary-container gold `#fed65b`, background `#f7f9ff`, surface-container `#ebeef3`, on-surface `#181c20`, outline-variant `#bfcabb`. Converted to oklch tokens in `src/styles.css`.
- Fonts: Manrope (headings) + Plus Jakarta Sans (body), Material Symbols Outlined for icons, loaded via `<link>` in the root route.
- Layout density and card/rounded-corner treatment follow the screens; reference-site cues (Al Multazim, Go Classic Tour) inform section ordering only, not the visual style.
- Brand logo recreated as markup (green tile + AL-KABEER wordmark + "For Quality Touring Since 1994" tagline) so it stays crisp; hero and package imagery hotlinked from the URLs in the provided HTML.

## City model

- Global city context with a header city switcher; choice persisted in localStorage.
- Dedicated routes per city for SEO:
  - `/hajj`, `/hajj/mumbai`, `/hajj/kolkata`, `/hajj/gujarat`
  - `/umrah`, `/umrah/mumbai`, `/umrah/kolkata`, `/umrah/gujarat`
  - `/packages/$slug` package detail page (itinerary day-by-day, inclusions/exclusions, hotels, pricing tiers, gallery)
- The `/hajj` and `/umrah` index pages show all cities with city filter chips linking to the city routes.

## Package data (JSON, no backend)

`src/data/packages.json` with typed loader in `src/data/packages.ts`:
each package has id, slug, title, type (hajj/umrah), city, duration, departure airport, price tiers (quint/quad/triple/double), Makkah/Madinah hotel + distance, inclusions, exclusions, itinerary, highlights, image, seats/status badge. Seeded with realistic demo packages per city (3 Hajj + 3–4 Umrah each), matching the cards in the supplied screens.

## Pages

- `/` Home: hero with Quranic line and package finder (type + city + duration), why-choose-us, featured packages by selected city, services strip, 3-branch cards, testimonials, CTA band.
- `/hajj` + 3 city pages, `/umrah` + 3 city pages, `/packages/$slug`
- `/about` — since 1994 story, licenses/approvals, leadership, milestones
- `/services` — Hajj, Umrah, Visa assistance, Ziyarat tours, Flights, Hotel booking, Group & family tours, Laundry/food support
- `/gallery` — image grid with lightbox
- `/testimonials`, `/faq` (accordion, FAQPage JSON-LD)
- `/contact` — form + 3 branch cards with address/phone/hours/map link (screen 1)
- `/privacy`, `/terms`

## Enquiry flow (WhatsApp, no backend)

- Shared `EnquiryForm` + `WhatsAppButton`: validates with react-hook-form + zod, then opens `wa.me/<number>` with a prefilled message including name, phone, travellers, city, package name and duration.
- Floating WhatsApp + call buttons on all pages; tel: links on branch cards.
- Demo contact details used throughout, centralised in `src/data/site.ts` so real numbers/addresses can be swapped in one file later.

## SEO & quality

- Unique `head()` per route (title, description, og/twitter), TravelAgency + FAQPage JSON-LD, single H1 per page, alt text, lazy-loaded images, robots.txt, responsive down to 360px, accessible nav with mobile drawer.

## Technical notes

- TanStack Start file routes; shared header/footer in `src/routes/__root.tsx`.
- Reusable components: `Header`, `Footer`, `CitySwitcher`, `PackageCard`, `PackageFilters`, `SectionHeading`, `EnquiryForm`, `FloatingActions`, `Lightbox`.
- All colors via semantic tokens; no hardcoded color utilities. No database or auth is added.
