import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CityTabs } from "@/components/CityTabs";
import { getPackages } from "@/data/packages";
import { IMG } from "@/data/images";
import { FadeIn } from "@/components/FadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        <FadeIn>
          <div className="mt-10 px-4 sm:px-10 relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 sm:-ml-6">
                {packages.map((p) => (
                  <CarouselItem key={p.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full pb-4">
                      <PackageCard pkg={p} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 sm:-left-8" />
              <CarouselNext className="hidden sm:flex -right-4 sm:-right-8" />
            </Carousel>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
