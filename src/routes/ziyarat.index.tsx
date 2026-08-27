import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { getPackages } from "@/data/packages";
import { getBranch, CITY_LABELS, type CityKey } from "@/data/site";
import { IMG } from "@/data/images";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/ziyarat/")({
  head: () => ({
    meta: [
      { title: "Ziyarat Packages from Mumbai, Kolkata & Gujarat | AL-KABEER" },
      {
        name: "description",
        content:
          "Find affordable Ziyarat packages from Mumbai, Kolkata and Gujarat. AL-KABEER Tours & Travels provides complete Ziyarat services.",
      },
      { property: "og:title", content: "Ziyarat Packages | AL-KABEER Tours & Travels" },
      {
        property: "og:description",
        content:
          "Ziyarat round the year with express, deluxe and extended itineraries. Complete arrangements for flights, hotels, and transport.",
      },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
  }),
  component: ZiyaratIndex,
});

function ZiyaratIndex() {
  const [city, setCity] = React.useState<CityKey>("mumbai");
  
  const branch = getBranch(city);
  const packages = getPackages("ziyarat", city);
  const label = CITY_LABELS[city];

  return (
    <>
      <PageBanner
        title={`Ziyarat Packages`}
        subtitle={`Departures arranged by our ${branch.label}.`}
        image={IMG.hero}
        crumb={`Ziyarat`}
      />

      <Section>
        <SectionHeading
          eyebrow={`${label} departures`}
          title={`Ziyarat packages for ${label} pilgrims`}
          intro={`Select your city below to view our packages. Rates are per person and include airfare, visa, hotels, transport and meals as specified.`}
        />
        <div className="mt-9">
          <CityTabs active={city} onChange={setCity} />
        </div>

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
