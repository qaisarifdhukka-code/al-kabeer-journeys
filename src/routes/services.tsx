import { createFileRoute } from "@tanstack/react-router";
import { Plane, FileCheck, BedDouble, Bus, Compass, Wallet } from "lucide-react";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | AL-KABEER Tours & Travels" },
      {
        name: "description",
        content:
          "Visa processing, air ticketing, hotels near the Haram, Ziyarat transport, group leaders and flexible payment plans for Hajj and Umrah pilgrims.",
      },
      { property: "og:title", content: "Our Services | AL-KABEER Tours & Travels" },
      {
        property: "og:description",
        content: "Everything AL-KABEER arranges for your Hajj and Umrah journey.",
      },
      { property: "og:image", content: IMG.banner },
      { name: "twitter:image", content: IMG.banner },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: FileCheck, title: "Visa processing", text: "Complete Saudi Hajj and Umrah visa applications, biometrics guidance and document verification handled by our office." },
  { icon: Plane, title: "Air ticketing", text: "Group and individual bookings from Mumbai, Kolkata and Ahmedabad on direct and connecting flights." },
  { icon: BedDouble, title: "Hotel bookings", text: "Rooms in Makkah and Madinah from economy to five-star, selected for distance from the Haram." },
  { icon: Bus, title: "Ground transport", text: "Air-conditioned coaches for airport transfers, the Makkah–Madinah route and all Ziyarat visits." },
  { icon: Compass, title: "Guided Ziyarat", text: "Historic site visits in Makkah and Madinah with a guide who explains the significance of each place." },
  { icon: Wallet, title: "Flexible payments", text: "Book with an advance and pay the balance in instalments before departure, with written receipts." },
];

function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Everything your journey needs, arranged under one roof."
        image={IMG.banner}
        crumb="Services"
      />
      <Section>
        <SectionHeading
          eyebrow="What we handle"
          title="Complete pilgrimage support"
          intro="From your first enquiry to the day you return home, our team takes care of the arrangements so you can focus on worship."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl bg-card p-7 shadow-card card-lift text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
                <s.icon className="size-7 text-primary" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-base font-bold text-foreground">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
