import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { getPackages } from "@/data/packages";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/umrah/")({
  head: () => ({
    meta: [
      { title: "Umrah Packages from Mumbai, Kolkata & Gujarat | AL-KABEER" },
      {
        name: "description",
        content:
          "Express, deluxe and extended Umrah packages from AL-KABEER with hotels near the Haram, visa processing and guided Ziyarat in Makkah and Madinah.",
      },
      { property: "og:title", content: "Umrah Packages | AL-KABEER Tours & Travels" },
      {
        property: "og:description",
        content:
          "Umrah packages for every budget with departures from Mumbai, Kolkata and Ahmedabad.",
      },
      { property: "og:image", content: IMG.umrah1 },
      { name: "twitter:image", content: IMG.umrah1 },
    ],
  }),
  component: UmrahIndex,
});

function UmrahIndex() {
  const packages = getPackages("umrah");

  return (
    <>
      <PageBanner
        title="Umrah Packages"
        subtitle="Umrah round the year with express, deluxe and extended itineraries from all three of our branches."
        image={IMG.umrah1}
        crumb="Umrah Packages"
      />
      <Section>
        <SectionHeading
          eyebrow="Choose your departure city"
          title="All Umrah packages"
          intro="Select your city to see the exact fares, hotel categories and available dates for your departure."
        />
        <div className="mt-9">
          <CityTabs base="umrah" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
