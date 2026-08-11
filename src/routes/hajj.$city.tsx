import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { getPackages } from "@/data/packages";
import { getBranch, CITY_LABELS, type CityKey } from "@/data/site";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/hajj/$city")({
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { city } = loaderData;
    const label = CITY_LABELS[city as CityKey];
    return {
      meta: [
        { title: `Hajj Packages from ${label} 2027 | AL-KABEER` },
        {
          name: "description",
          content: `Find the best Hajj 2027 packages from ${label}. AL-KABEER Tours & Travels offers dedicated departures from ${label} with complete arrangements.`,
        },
        { property: "og:title", content: `Hajj Packages from ${label} | AL-KABEER` },
        {
          property: "og:description",
          content: `Join our exclusive Hajj groups departing from ${label}. Complete arrangements including flights, hotels near Haram, and Mina tents.`,
        },
        { property: "og:image", content: IMG.hajj1 },
      ],
    };
  },
  loader: ({ params }) => ({ city: params.city as CityKey }),
  component: HajjCityPage,
});

function HajjCityPage() {
  const { city } = Route.useLoaderData();
  const branch = getBranch(city);
  const packages = getPackages("hajj", city);
  const label = CITY_LABELS[city];

  return (
    <>
      <PageBanner
        title={`Hajj Packages from ${label}`}
        subtitle={`Departures arranged by our ${branch.label} for Hajj 2027.`}
        image={IMG.hajj1}
        crumb={`Hajj — ${label}`}
      />

      <Section>
        <SectionHeading
          eyebrow={`${label} departures`}
          title={`Hajj 2027 packages for ${label} pilgrims`}
          intro={`All packages below depart from ${packages[0]?.departure ?? label}. Rates are per person and include airfare, visa, hotels, transport and meals as specified.`}
        />
        <div className="mt-9">
          <CityTabs base="hajj" active={city} />
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
