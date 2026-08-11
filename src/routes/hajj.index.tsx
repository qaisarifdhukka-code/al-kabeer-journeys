import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { getPackages } from "@/data/packages";
import { IMG } from "@/data/images";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/hajj/")({
  head: () => ({
    meta: [
      { title: "Hajj Packages 2027 from Mumbai, Kolkata & Gujarat | AL-KABEER" },
      {
        name: "description",
        content:
          "Compare AL-KABEER Hajj 2027 packages — shifting, comprehensive and economy categories with departures from Mumbai, Kolkata and Ahmedabad.",
      },
      { property: "og:title", content: "Hajj Packages 2027 | AL-KABEER Tours & Travels" },
      {
        property: "og:description",
        content:
          "Hajj packages with hotels near the Haram, air-cooled Mina tents, guided Ziyarat and experienced group leaders.",
      },
      { property: "og:image", content: IMG.hajj2 },
      { name: "twitter:image", content: IMG.hajj2 },
    ],
  }),
  component: HajjIndex,
});

function HajjIndex() {
  const packages = getPackages("hajj");

  return (
    <>
      <PageBanner
        title="Hajj Packages"
        subtitle="Hajj 2027 departures from Mumbai, Kolkata and Ahmedabad with complete arrangements for Mina, Arafat and Muzdalifah."
        image={IMG.hajj2}
        crumb="Hajj Packages"
      />
      <Section>
        <SectionHeading
          eyebrow="Choose your departure city"
          title="All Hajj packages"
          intro="Packages differ by city because of flight routes and local arrangements. Select your city to see the exact rates and seat availability."
        />
        <div className="mt-9">
          <CityTabs base="hajj" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <FadeIn key={p.id} delay={i * 100}>
              <PackageCard pkg={p} />
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
