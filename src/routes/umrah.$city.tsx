import { createFileRoute, notFound } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { getPackages } from "@/data/packages";
import { CITY_LABELS, getBranch, isCityKey, whatsappLink, type CityKey } from "@/data/site";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/umrah/$city")({
  loader: ({ params }) => {
    if (!isCityKey(params.city)) throw notFound();
    return { city: params.city as CityKey };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Umrah packages unavailable | AL-KABEER" }, { name: "robots", content: "noindex" }] };
    }
    const label = CITY_LABELS[loaderData.city];
    const title = `Umrah Packages from ${label} | AL-KABEER Tours & Travels`;
    const description = `Umrah packages departing from ${label} — express, deluxe and extended itineraries with hotels near the Haram, visa and guided Ziyarat.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: IMG.umrah2 },
        { name: "twitter:image", content: IMG.umrah2 },
      ],
    };
  },
  component: UmrahCityPage,
});

function UmrahCityPage() {
  const { city } = Route.useLoaderData() as { city: CityKey };
  const branch = getBranch(city);
  const packages = getPackages("umrah", city);
  const label = CITY_LABELS[city];

  return (
    <>
      <PageBanner
        title={`Umrah Packages from ${label}`}
        subtitle={`Arranged by our ${branch.label} with departures throughout the year.`}
        image={IMG.umrah2}
        crumb={`Umrah — ${label}`}
      />

      <Section>
        <SectionHeading
          eyebrow={`${label} departures`}
          title={`Umrah packages for ${label} pilgrims`}
          intro={`All packages below depart from ${packages[0]?.departure ?? label}. Fares are per person and include airfare, visa, hotels, transfers and meals as specified.`}
        />
        <div className="mt-9">
          <CityTabs base="umrah" active={city} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-8 border border-border bg-card p-7 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-lg font-bold text-foreground">{branch.label}</h2>
            <p className="mt-3 flex gap-2.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{branch.addressLines.join(", ")}</span>
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            {branch.phones.map((phone) => (
              <p key={phone} className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${phone}`} className="hover:text-primary">
                  {phone}
                </a>
              </p>
            ))}
            <p className="flex gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {branch.hours}
            </p>
          </div>
          <div className="flex items-start md:justify-end">
            <a
              href={whatsappLink(
                `Assalamu alaikum, I would like details of your Umrah packages from ${label}.`,
                branch.whatsapp,
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-hover"
            >
              WhatsApp {label} office
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
