# AL-KABEER Tours & Travels — Hajj & Umrah Website

Production-ready marketing site built from the four supplied screens (Home, Hajj Packages, Umrah Packages, Contact), with three-city package browsing (Mumbai, Kolkata, Gujarat) driven by local JSON — no backend.

## Design system — taste of Al Multazim + Classic Tour, not generic AI

The two reference sites share a concrete, traditional travel-agency look. AL-KABEER inherits that discipline, with the brand's own green from the logo instead of their navy/blue:

- Flat, solid color blocks only. No purple/indigo, no glassmorphism, no soft AI gradients, no gradient text, no gradient buttons, no glow shadows.
- **Color balance (premium restraint):** roughly 70% white / off-white `#fbfbfa`, 20% neutral greys and photography, 10% brand color. Green is an accent and anchor, not a wash — it appears in the nav strip, footer, headings, price figures, icon glyphs, small chips and button fills. At most **one** full-width green band per page (the CTA band); everything else sits on white or light grey with photographs carrying the color.
- Palette: deep green `#00501e` (nav strip, footer, headings, prices, primary buttons), mid green `#006b2b` (hover), gold `#c9a227` used sparingly as a hairline divider / small accent and for the single most important CTA per section — not as a broad fill; white and off-white surfaces, `#181c20` text, `#6b7280` muted text, thin `#e5e7eb` borders.
- Page structure from the references: slim top utility bar with phone + WhatsApp numbers, centered logo row on white, one thin green nav strip with icon+label links, then a photographic banner with page title and Home > Page breadcrumb on every inner page (dark image overlay carries the mood, not a colored block). Footer: deep green, 4 columns (Packages / Useful Links / Contact Details / Social), an approvals-and-licences logo strip on white above it, copyright bar below.
- Cards: white, 1px light border, 6px radius, subtle shadow on hover only; small neutral chips for city/duration, price large in green with struck-through old price, one filled primary button plus one outlined secondary — the Classic Tour card pattern, kept airy with generous padding.
- Section headings: centered, dark near-black with the accent word in green, short gold hairline underneath. Plenty of whitespace between sections (80–96px) — density comes from content, not color.

- Type: Manrope (headings) + Plus Jakarta Sans (body), Material Symbols Outlined icons, loaded via `<link>` in the root route. Icons are small and functional, sitting inside nav links and beside contact rows, never large decorative illustration icons.
- Motion: restrained — hover color/border changes and simple carousel arrows only. No scroll-reveal on every element.
- Brand logo recreated as markup (green tile + AL-KABEER wordmark + "For Quality Touring Since 1994" tagline); hero and package imagery hotlinked from the URLs in the provided HTML.

## What each reference contributes

Classic Tour (goclassictour.com) — the layout engine:
- Slim white top bar with call + WhatsApp numbers on either side of a centered logo, then one thin colored nav strip with small icon + label links.
- Photographic banner with a centered page title (and Home > Page breadcrumb on inner pages).
- Package sections repeated per category ("Explore Our Hajj Packages", "Explore Our Umrah & Ziyarat Packages"), each with pill tab filters above the cards, a "View all" link on the right, and a horizontal card carousel with side arrows and dots.
- Card anatomy: image left/top, small colored ribbon badge, title, icon rows for duration / hotel / meals, struck-through price + bold current price, then two buttons (solid primary "Book Now" + light secondary "View Details").
- Supporting sections: Makkah hotels, Madinah hotels, transportation options, blog cards, an SEO paragraph block, FAQ accordion, then the 4-column footer with an approvals/licence logo strip.

Al Multazim (almultazim.in) — the tone:
- Centered uppercase gold/accent section titles ("HAJJ", "UMRAH", "OUR BEST MEMORIES") over calm white space.
- Deep solid brand-color hero and bands with an arched/rounded photo panel, no gradient noise.
- Dedicated "Documents Required" section with numbered icon rows, an About block with a portrait beside body copy, and a memories/gallery mosaic.
- Contact block: dark brand panel with address/phone/email on the left, plain underlined form fields on the right.

AL-KABEER keeps this exact structural taste, in green + gold on mostly white, per the color-balance rule above.

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

- `/` Home, in the reference order: top bar + logo + nav, photo hero with the Quranic line and a package finder (type + city + duration), welcome/about block with portrait, "Explore Our Hajj Packages" (city tabs + card carousel), "Explore Our Umrah & Ziyarat Packages" (same pattern), Makkah/Madinah hotel cards, documents-required section, why-choose-us, 3-branch cards, gallery mosaic, testimonials, FAQ accordion, single green CTA band, footer.
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
