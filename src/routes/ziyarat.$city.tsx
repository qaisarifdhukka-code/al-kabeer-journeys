import * as React from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { getPackages } from "@/data/packages";
import { getBranch, CITY_LABELS, type CityKey, isCityKey } from "@/data/site";
import { IMG } from "@/data/images";
import { FadeIn } from "@/components/FadeIn";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/ziyarat/$city")({
  loader: ({ params }) => {
    if (!isCityKey(params.city)) throw notFound();
    return { city: params.city as CityKey };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { city } = loaderData;
    const label = CITY_LABELS[city];
    return {
      meta: [
        { title: `Ziyarat Packages from ${label} | AL-KABEER` },
        {
          name: "description",
          content: `Find the best Ziyarat packages from ${label}. AL-KABEER Tours & Travels offers dedicated departures from ${label} with complete arrangements.`,
        },
        { property: "og:title", content: `Ziyarat Packages from ${label} | AL-KABEER` },
        { property: "og:image", content: IMG.hero },
      ],
    };
  },
  component: ZiyaratCityPage,
});

function ZiyaratCityPage() {
  const { city } = Route.useLoaderData() as { city: CityKey };
  
  const branch = getBranch(city);
  const packages = getPackages("ziyarat", city);
  const label = CITY_LABELS[city];

  return (
    <>
      <PageBanner
        title={`Ziyarat Packages from ${label}`}
        subtitle={`Departures arranged by our ${branch.label}.`}
        image={IMG.hero}
        crumb={`Ziyarat — ${label}`}
      />

      <Section>
        <div className="mb-6 flex justify-center">
          <Link
            to="/ziyarat"
            className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-all hover:bg-gold/20 hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> View all cities
          </Link>
        </div>

        <SectionHeading
          eyebrow={`${label} departures`}
          title={`Ziyarat packages for ${label} pilgrims`}
          intro={`Rates are per person and include airfare, visa, hotels, transport and meals as specified.`}
        />

        <FadeIn key={city}>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.length > 0 ? (
              packages.map((p) => (
                <PackageCard key={p.id} pkg={p} />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">
                Packages for this city will be updated soon.
              </div>
            )}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
