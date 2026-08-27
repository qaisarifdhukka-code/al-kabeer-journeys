import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { getPackages } from "@/data/packages";
import { getBranch, CITY_LABELS, type CityKey } from "@/data/site";
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
  const [city, setCity] = React.useState<CityKey>("mumbai");
  
  const branch = getBranch(city);
  const packages = getPackages("hajj", city);
  const label = CITY_LABELS[city];

  // Client wants Golden, Silver, Budget categories
  const categories = ["Golden", "Silver", "Budget"] as const;
  const [activeCategory, setActiveCategory] = React.useState<typeof categories[number]>("Golden");

  const availableCategories = categories.filter(cat => packages.some(p => p.category === cat));

  React.useEffect(() => {
    if (availableCategories.length > 0 && !availableCategories.includes(activeCategory)) {
      setActiveCategory(availableCategories[0]!);
    }
  }, [city, activeCategory, availableCategories]);

  // Use the valid category to prevent flashing empty state before effect runs
  const currentCategory = availableCategories.includes(activeCategory) ? activeCategory : availableCategories[0];
  const filteredPackages = packages.filter(p => p.category === currentCategory);

  return (
    <>
      <PageBanner
        title={`Hajj Packages`}
        subtitle={`Departures arranged by our ${branch.label} for Hajj 2027.`}
        image={IMG.hajj1}
        crumb={`Hajj`}
      />

      <Section>
        <SectionHeading
          eyebrow={`${label} departures`}
          title={`Hajj 2027 packages for ${label} pilgrims`}
          intro={`Select your city and category below to view our packages. Rates are per person and include airfare, visa, hotels, transport and meals as specified.`}
        />
        
        <div className="mt-9">
          <CityTabs active={city} onChange={setCity} />
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
                currentCategory === cat
                  ? "bg-gold text-foreground shadow-md"
                  : "bg-surface text-muted-foreground hover:bg-gold/20"
              }`}
            >
              {cat} Package
            </button>
          ))}
        </div>

        <FadeIn key={`${city}-${currentCategory}`}>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((p) => (
                <PackageCard key={p.id} pkg={p} />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">
                Packages for this category will be updated soon.
              </div>
            )}
          </div>
        </FadeIn>
      </Section>

      {/* Hajio ka Feedback / Videos Section */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Pilgrim Experiences"
          title="Pilgrim Feedback & Videos"
          intro="Watch testimonials and experiences from our previous pilgrims who travelled with AL-KABEER."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Demo Video Placeholders */}
          {[1, 2, 3].map((v) => (
            <div key={v} className="overflow-hidden rounded-xl bg-card shadow-card group cursor-pointer relative">
              <img
                src={IMG.banner}
                alt={`Video testimonial ${v}`}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm group-hover:bg-gold group-hover:text-black transition-colors">
                  <svg className="size-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground text-sm">Pilgrim Feedback {v}</h3>
                <p className="text-xs text-muted-foreground mt-1">Experience of Hajj 2026</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
