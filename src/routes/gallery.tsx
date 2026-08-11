import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { GALLERY_IMAGES, IMG } from "@/data/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | AL-KABEER Tours & Travels Hajj & Umrah Groups" },
      {
        name: "description",
        content:
          "Photographs from AL-KABEER Hajj and Umrah groups in Makkah and Madinah, shared by pilgrims who travelled with us.",
      },
      { property: "og:title", content: "Gallery | AL-KABEER Tours & Travels" },
      {
        property: "og:description",
        content: "Moments from AL-KABEER Hajj and Umrah journeys.",
      },
      { property: "og:image", content: IMG.umrah1 },
      { name: "twitter:image", content: IMG.umrah1 },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Moments from our Hajj and Umrah groups in Makkah and Madinah."
        image={IMG.umrah1}
        crumb="Gallery"
      />
      <Section>
        <SectionHeading eyebrow="Featured" title="Highlights from our tours" />
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
                {GALLERY_IMAGES.slice(0, 5).map((img) => (
                  <CarouselItem key={`featured-${img.src}`} className="pl-4 sm:pl-6 md:basis-1/2">
                    <div className="h-64 sm:h-80 w-full overflow-hidden rounded-2xl shadow-card">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
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

      <Section tone="surface">
        <SectionHeading eyebrow="Memories" title="Our pilgrims, our journeys" />
        <FadeIn>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 space-y-4">
            {GALLERY_IMAGES.slice(5).map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full break-inside-avoid rounded-xl object-cover shadow-card transition-transform duration-300 hover:scale-[1.02]"
              />
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
