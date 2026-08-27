import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { getPackages } from "@/data/packages";
import { getBranch, CITY_LABELS, type CityKey } from "@/data/site";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/umrah/$city")({
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { city } = loaderData;
    const label = CITY_LABELS[city as CityKey];
    return {
      meta: [
        { title: `Umrah Packages from ${label} | AL-KABEER` },
        {
          name: "description",
          content: `Find the best Umrah packages from ${label}. AL-KABEER Tours & Travels offers dedicated departures from ${label} with complete arrangements.`,
        },
        { property: "og:title", content: `Umrah Packages from ${label} | AL-KABEER` },
        {
          property: "og:description",
          content: `Join our exclusive Umrah groups departing from ${label}. Complete arrangements including flights, hotels near Haram, and transport.`,
        },
        { property: "og:image", content: IMG.umrah1 },
      ],
    };
  },
  loader: ({ params }) => ({ city: params.city as CityKey }),
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
        subtitle={`Departures arranged by our ${branch.label}.`}
        image={IMG.umrah1}
        crumb={`Umrah — ${label}`}
      />

      <Section>
        <SectionHeading
          eyebrow={`${label} departures`}
          title={`Umrah packages for ${label} pilgrims`}
          intro={`All packages below depart from ${packages[0]?.departure ?? label}. Rates are per person and include airfare, visa, hotels, transport and meals as specified.`}
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
    </>
  );
}
