import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, HeartHandshake, ShieldCheck, Clock, FileText, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { IMG, GALLERY_IMAGES } from "@/data/images";
import { getPackages } from "@/data/packages";
import { BRANCHES, SITE, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AL-KABEER Tours & Travels | Hajj & Umrah from Mumbai, Kolkata, Gujarat" },
      {
        name: "description",
        content:
          "AL-KABEER Tours & Travels arranges Hajj and Umrah packages from Mumbai, Kolkata and Gujarat with hotels near the Haram, visas, guides and full support since 1994.",
      },
      { property: "og:title", content: "AL-KABEER Tours & Travels | Hajj & Umrah Packages" },
      {
        property: "og:description",
        content:
          "Government-approved Hajj and Umrah tour operator with dedicated departures from Mumbai, Kolkata and Gujarat.",
      },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
  }),
  component: HomePage,
});

const DOCUMENTS = [
  "Original passport valid for at least 8 months",
  "Six recent white-background photographs (35 x 45 mm)",
  "Copy of Aadhaar card and PAN card",
  "Vaccination certificate as per Saudi requirements",
  "Filled and signed AL-KABEER booking form",
  "Advance payment receipt for seat confirmation",
];

const WHY = [
  { icon: BadgeCheck, title: "Approved since 1994", text: "Three decades of arranging Hajj and Umrah for Indian pilgrims with a licensed, experienced team." },
  { icon: ShieldCheck, title: "Transparent pricing", text: "Package rates are published per sharing category. No hidden charges added later." },
  { icon: HeartHandshake, title: "Group leaders with you", text: "Every group travels with an AL-KABEER leader who speaks your language." },
  { icon: Clock, title: "24x7 support in Saudi", text: "Our ground staff in Makkah and Madinah is reachable throughout your stay." },
];

function HomePage() {
  const hajj = getPackages("hajj").slice(0, 3);
  const umrah = getPackages("umrah").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={IMG.hero}
          alt="Pilgrims gathered in the courtyard of Masjid al-Haram in Makkah"
          className="h-[420px] w-full object-cover sm:h-[520px]"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="max-w-2xl text-primary-foreground">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
                {SITE.tagline}
              </p>
              <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
                Hajj &amp; Umrah journeys arranged with care
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed opacity-90 sm:text-base">
                AL-KABEER Tours &amp; Travels serves pilgrims from Mumbai, Kolkata and Gujarat with
                dedicated departures, hotels close to the Haram and a team that stays with you from
                enquiry to return.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/hajj"
                  className="rounded-sm bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-gold/85"
                >
                  Hajj packages
                </Link>
                <Link
                  to="/umrah"
                  className="rounded-sm border border-primary-foreground/70 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Umrah packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City strip */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-8 sm:grid-cols-3">
          {BRANCHES.map((b) => (
            <div key={b.key} className="px-2 py-3 text-center sm:border-r sm:border-border sm:last:border-0">
              <p className="font-heading text-sm font-extrabold uppercase tracking-wider text-primary">
                {b.city}
              </p>
              <p className="mt-1.5 text-xs text-muted-foreground">{b.phones[0]}</p>
              <div className="mt-2 flex justify-center gap-3 text-xs font-semibold">
                <Link to="/hajj/$city" params={{ city: b.key }} className="text-foreground hover:text-primary">
                  Hajj
                </Link>
                <span className="text-border">|</span>
                <Link to="/umrah/$city" params={{ city: b.key }} className="text-foreground hover:text-primary">
                  Umrah
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={IMG.madinah}
              alt="Masjid an-Nabawi in Madinah illuminated in the evening"
              loading="lazy"
              className="h-80 w-full object-cover sm:h-[420px]"
            />
            <div className="absolute -bottom-6 -right-2 hidden bg-primary px-6 py-5 text-primary-foreground sm:block">
              <p className="font-heading text-3xl font-extrabold">30+</p>
              <p className="text-xs uppercase tracking-widest opacity-85">Years of service</p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Welcome to AL-KABEER"
              title="A trusted name in Hajj and Umrah since 1994"
              intro="What began as a small office in Mumbai now serves pilgrims across three states. We handle visas, flights, hotels, transport and Ziyarat so that your focus stays on worship, not logistics."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Licensed Hajj group organiser",
                "Hotels within walking distance of the Haram",
                "Pre-departure training sessions",
                "Ladies and family arrangements",
                "Air-conditioned Ziyarat coaches",
                "Assistance with all documentation",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-foreground">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:gap-3"
            >
              More about us <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Hajj packages */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Hajj 2027"
          title="Hajj packages from your city"
          intro="Shifting and non-shifting Hajj categories with departures from Mumbai, Kolkata and Ahmedabad. Rates shown are per person on the lowest sharing category."
        />
        <div className="mt-9">
          <CityTabs base="hajj" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hajj.map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/hajj"
            className="inline-flex items-center gap-2 rounded-sm border border-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View all Hajj packages <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Umrah packages */}
      <Section>
        <SectionHeading
          eyebrow="Umrah 2026 – 27"
          title="Umrah packages for every budget"
          intro="Express, deluxe and extended Umrah itineraries with five-star and economy hotel options, guided Ziyarat and full visa assistance."
        />
        <div className="mt-9">
          <CityTabs base="umrah" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {umrah.map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/umrah"
            className="inline-flex items-center gap-2 rounded-sm border border-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View all Umrah packages <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Why us */}
      <Section tone="surface">
        <SectionHeading eyebrow="Why AL-KABEER" title="Care that goes beyond the booking" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item) => (
            <div key={item.title} className="border border-border bg-card p-6">
              <item.icon className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Documents */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Before you travel"
              title="Documents required"
              intro="Keep these ready when you book. Our office will verify everything and handle the Saudi visa application on your behalf."
            />
            <ul className="mt-7 space-y-3">
              {DOCUMENTS.map((doc) => (
                <li key={doc} className="flex gap-3 border-b border-border pb-3 text-sm text-foreground">
                  <FileText className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={IMG.banner}
              alt="AL-KABEER pilgrims boarding a coach for Ziyarat"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80"
            />
            <div className="mt-6 border border-border bg-surface p-6">
              <h3 className="font-heading text-base font-bold text-foreground">
                Not sure which package suits you?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Send us a message on WhatsApp with your city and travel dates. Our team will suggest
                the right category and share the full cost break-up.
              </p>
              <a
                href={whatsappLink("Assalamu alaikum, please help me choose a suitable Hajj or Umrah package.")}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-sm bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-hover"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Memories"
          title="Moments from our journeys"
          intro="Photographs shared by pilgrims who travelled with AL-KABEER groups."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {GALLERY_IMAGES.slice(0, 8).map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-40 w-full object-cover sm:h-48"
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:gap-3"
          >
            View full gallery <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading eyebrow="Testimonials" title="What our pilgrims say" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { name: "Abdul Rahman", city: "Mumbai", text: "Our Hajj group was well managed. The tents in Mina were clean and the food arrangement was exactly as promised." },
            { name: "Fatima Sheikh", city: "Kolkata", text: "This was my mother's first Umrah. The team helped her with a wheelchair at every step. Very caring staff." },
            { name: "Yusuf Patel", city: "Ahmedabad", text: "Booking was simple and the hotel in Madinah was right beside the Haram. Costs were exactly as quoted." },
          ].map((t) => (
            <figure key={t.name} className="border border-border bg-card p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.city}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <section className="bg-primary py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <div className="text-primary-foreground">
            <h2 className="font-heading text-2xl font-extrabold">Ready to begin your journey?</h2>
            <p className="mt-2 text-sm opacity-85">
              Speak with the branch nearest to you for seat availability and payment plans.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-gold/85"
            >
              Contact us
            </Link>
            <a
              href={`tel:${SITE.primaryPhone}`}
              className="rounded-sm border border-primary-foreground/60 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10"
            >
              Call {SITE.primaryPhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
