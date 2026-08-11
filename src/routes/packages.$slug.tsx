import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, X, Star, CalendarDays, Plane, Utensils } from "lucide-react";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import {
  EXCLUSIONS,
  INCLUSIONS,
  getPackageBySlug,
  relatedPackages,
  type TourPackage,
} from "@/data/packages";
import { CITY_LABELS, formatINR, getBranch, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = getPackageBySlug(params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Package not found | AL-KABEER" }, { name: "robots", content: "noindex" }] };
    }
    const pkg = loaderData.pkg as TourPackage;
    const label = CITY_LABELS[pkg.city];
    const title = `${pkg.title} from ${label} | AL-KABEER Tours & Travels`;
    const description = `${pkg.days} days ${pkg.type === "hajj" ? "Hajj" : "Umrah"} package departing from ${pkg.departure}. Stay at ${pkg.hotelMakkah.name} in Makkah and ${pkg.hotelMadinah.name} in Madinah from ${formatINR(pkg.priceFrom)} per person.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: pkg.image },
        { name: "twitter:image", content: pkg.image },
      ],
    };
  },
  component: PackageDetail,
});

function PackageDetail() {
  const { pkg } = Route.useLoaderData() as { pkg: TourPackage };
  const branch = getBranch(pkg.city);
  const label = CITY_LABELS[pkg.city];
  const message = `Assalamu alaikum, I would like to book the "${pkg.title}" (${label} departure, ${pkg.days} days) starting ${formatINR(pkg.priceFrom)}. Please share the availability and payment details.`;

  return (
    <>
      <PageBanner
        title={pkg.title}
        subtitle={`${pkg.days} days · Departs from ${pkg.departure} · ${pkg.season}`}
        image={pkg.image}
        crumb={pkg.title}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            {/* Pill stat badges */}
            <div className="flex flex-wrap gap-3 border-b border-border pb-6">
              <span className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                <CalendarDays className="size-3.5" aria-hidden="true" /> {pkg.days} days
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                <Plane className="size-3.5" aria-hidden="true" /> {pkg.departure}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                <Utensils className="size-3.5" aria-hidden="true" /> {pkg.meals}
              </span>
            </div>

            <h2 className="mt-8 font-heading text-xl font-extrabold text-foreground">
              Package highlights
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-heading text-xl font-extrabold text-foreground">Hotels</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { city: "Makkah", hotel: pkg.hotelMakkah },
                { city: "Madinah", hotel: pkg.hotelMadinah },
              ].map(({ city, hotel }) => (
                <div key={city} className="rounded-xl bg-card p-5 shadow-card">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold">{city}</p>
                  <p className="mt-1.5 font-heading text-base font-bold text-foreground">
                    {hotel.name}
                  </p>
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-gold text-gold" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{hotel.distance}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-heading text-xl font-extrabold text-foreground">Itinerary</h2>
            <ol className="mt-4 space-y-4">
              {pkg.itinerary.map((step) => (
                <li key={step.day} className="flex gap-4">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-2 ring-primary/30">
                      <div className="size-2 rounded-full bg-primary" />
                    </div>
                    <div className="mt-1 w-0.5 flex-1 bg-primary/15" />
                  </div>
                  <div className="pb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {step.day}
                    </p>
                    <p className="mt-1 font-heading text-sm font-bold text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-card p-5 shadow-card">
                <h3 className="font-heading text-base font-bold text-foreground">Inclusions</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {INCLUSIONS.map((i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-card p-5 shadow-card">
                <h3 className="font-heading text-base font-bold text-foreground">Exclusions</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {EXCLUSIONS.map((i) => (
                    <li key={i} className="flex gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <aside className="h-fit lg:sticky lg:top-40">
            <div className="rounded-2xl bg-surface p-6 shadow-card">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Starting from
              </p>
              <p className="mt-1 font-heading text-3xl font-extrabold text-primary">
                {formatINR(pkg.priceFrom)}
              </p>
              <p className="text-sm text-muted-foreground line-through">
                {formatINR(pkg.priceOld)}
              </p>

              <table className="mt-5 w-full text-sm">
                <caption className="sr-only">Per person rates by room sharing</caption>
                <tbody>
                  {pkg.sharing.map((s) => (
                    <tr key={s.type} className="border-b border-border last:border-0">
                      <th scope="row" className="py-2.5 text-left font-medium text-muted-foreground">
                        {s.type}
                      </th>
                      <td className="py-2.5 text-right font-heading font-bold text-foreground">
                        {formatINR(s.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-4 text-xs text-muted-foreground">
                {pkg.seatsLeft} seats available · Booked through our {branch.label}
              </p>

              {/* Pill action buttons */}
              <a
                href={whatsappLink(message, branch.whatsapp)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block rounded-full bg-primary px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-md"
              >
                Enquire on WhatsApp
              </a>
              <a
                href={`tel:${branch.phones[0]}`}
                className="mt-3 block rounded-full border border-primary px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Call {branch.phones[0]}
              </a>
              <Link
                to={pkg.type === "hajj" ? "/hajj/$city" : "/umrah/$city"}
                params={{ city: pkg.city }}
                className="mt-4 block text-center text-xs font-semibold text-primary hover:underline"
              >
                All {pkg.type === "hajj" ? "Hajj" : "Umrah"} packages from {label}
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="You may also like" title={`More packages from ${label}`} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedPackages(pkg).map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
