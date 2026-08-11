import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IMG } from "@/data/images";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Hajj & Umrah FAQ | AL-KABEER Tours & Travels" },
      {
        name: "description",
        content:
          "Answers to common questions about Hajj and Umrah bookings, documents, payments, hotels, group leaders and cancellation with AL-KABEER Tours & Travels.",
      },
      { property: "og:title", content: "Hajj & Umrah FAQ | AL-KABEER" },
      {
        property: "og:description",
        content: "Documents, payments, hotels and travel questions answered.",
      },
      { property: "og:image", content: IMG.hajj3 },
      { name: "twitter:image", content: IMG.hajj3 },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  { q: "How early should I book a Hajj package?", a: "Hajj seats are limited and allocated well in advance. We recommend booking six to eight months before departure, especially for the shifting and five-star categories." },
  { q: "Which documents do I need to submit?", a: "An original passport valid for at least eight months, six white-background photographs, copies of Aadhaar and PAN, a vaccination certificate as required by Saudi authorities, and the signed booking form." },
  { q: "Can I pay in instalments?", a: "Yes. Seats are confirmed with an advance and the balance can be paid in instalments before departure. Every payment is issued with a written receipt." },
  { q: "Are the package rates different for each city?", a: "Yes. Flight routes, ground arrangements and group sizes differ between Mumbai, Kolkata and Ahmedabad, so each branch publishes its own rates. Select your city on the package pages to see exact fares." },
  { q: "Will someone travel with the group?", a: "Every departure travels with an AL-KABEER group leader who speaks your regional language, along with ground staff in Makkah and Madinah available around the clock." },
  { q: "Is food included?", a: "Meals are included as specified in each package — most include breakfast and dinner, and Hajj packages include three meals during the days at Mina and Arafat." },
  { q: "What if I need wheelchair or medical assistance?", a: "Inform us at the time of booking. We arrange wheelchair support at airports and the Haram, and our group leaders coordinate with local clinics when required." },
  { q: "What is the cancellation policy?", a: "Cancellation charges depend on how close to departure the request is made and on airline and hotel terms. The exact schedule is shared in writing with your booking confirmation." },
];

function FaqPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Bookings, documents, payments and travel — answered."
        image={IMG.hajj3}
        crumb="FAQ"
      />
      <Section>
        <SectionHeading eyebrow="Help centre" title="Questions pilgrims ask us most" />
        {/* FAQ wrapped in a rounded card with shadow */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card p-4 shadow-card sm:p-6">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-border last:border-0"
              >
                <AccordionTrigger className="text-left font-heading text-sm font-bold text-foreground hover:text-primary transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  );
}
