import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { GALLERY_IMAGES, IMG } from "@/data/images";

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
        <SectionHeading eyebrow="Memories" title="Our pilgrims, our journeys" />
        <div className="mt-10 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 space-y-4">
          {GALLERY_IMAGES.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full break-inside-avoid rounded-xl object-cover shadow-card transition-transform duration-300 hover:scale-[1.02]"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
