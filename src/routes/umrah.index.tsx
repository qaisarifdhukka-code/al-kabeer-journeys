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
          "Find affordable Umrah packages from Mumbai, Kolkata and Gujarat. AL-KABEER Tours & Travels provides complete Umrah services with hotels near Haram.",
      },
      { property: "og:title", content: "Umrah Packages | AL-KABEER Tours & Travels" },
      {
        property: "og:description",
        content:
          "Umrah round the year with express, deluxe and extended itineraries. Complete arrangements for flights, hotels, and transport.",
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
          intro="Packages differ by city because of flight routes and local arrangements. Select your city to see the exact rates and seat availability."
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
