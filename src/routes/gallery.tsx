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
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`w-full rounded-xl object-cover shadow-card transition-transform duration-300 hover:scale-[1.03] ${i % 5 === 0 ? "h-72 lg:col-span-2" : "h-56"}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
