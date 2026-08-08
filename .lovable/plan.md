# AL-KABEER Tours & Travels — Hajj & Umrah Website

Production-ready marketing site built from the four supplied screens (Home, Hajj Packages, Umrah Packages, Contact), with three-city package browsing (Mumbai, Kolkata, Gujarat) driven by local JSON — no backend.

## Design system — taste of Al Multazim + Classic Tour, not generic AI

The two reference sites share a concrete, traditional travel-agency look. AL-KABEER inherits that discipline, with the brand's own green from the logo instead of their navy/blue:

- Flat, solid color blocks only. No purple/indigo, no glassmorphism, no soft AI gradients, no gradient text, no gradient buttons, no glow shadows. Section backgrounds alternate solid white / very light grey (`#f4f6f8`) / deep brand green band — exactly the banded rhythm of both references.
- Palette: deep green `#00501e` (headers, footer, bands, section headings), mid green `#006b2b` (hover, icon tiles), gold/amber `#fbbf24`–`#fed65b` for primary CTA buttons and underline accents (Classic Tour's yellow Submit button, Al Multazim's gold accents), white surfaces, `#181c20` text, thin `#e2e6ea` borders.
- Page structure copied from the references: slim top utility bar with phone + WhatsApp numbers, centered logo row, full-width green nav strip with icon+label links, then a photographic banner with page title and Home > Page breadcrumb on every inner page (as in the Classic Tour contact screenshot). Footer: dark green, 4 columns (Packages / Useful Links / Contact Details / Social), an approvals-and-licences logo strip above it (Vision 2030, Haj Committee, IATA style), copyright bar below.
- Cards: square-ish corners (4–8px radius), 1px border, flat white, small badge chips for city/seats, price shown large in green with a struck-through old price, gold "Book Now" / green "View Details" buttons — the Classic Tour package-card pattern.
- Section headings: centered, serif-ish weight, with a short gold divider under them; no oversized hero typography experiments.
- Type: Manrope (headings) + Plus Jakarta Sans (body), Material Symbols Outlined icons, loaded via `<link>` in the root route. Icons are small and functional, sitting inside nav links and beside contact rows, never large decorative illustration icons.
- Motion: restrained — hover color/border changes and simple carousel arrows only. No scroll-reveal on every element.
- Brand logo recreated as markup (green tile + AL-KABEER wordmark + "For Quality Touring Since 1994" tagline); hero and package imagery hotlinked from the URLs in the provided HTML.


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
