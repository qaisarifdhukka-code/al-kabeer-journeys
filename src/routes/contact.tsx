import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { IMG } from "@/data/images";
import { BRANCHES, SITE, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AL-KABEER Tours & Travels | Mumbai, Kolkata, Ahmedabad" },
      {
        name: "description",
        content:
          "Contact AL-KABEER Tours & Travels for Hajj and Umrah enquiries. Office addresses, phone numbers and WhatsApp for our Mumbai, Kolkata and Ahmedabad branches.",
      },
      { property: "og:title", content: "Contact AL-KABEER Tours & Travels" },
      {
        property: "og:description",
        content: "Reach the branch nearest to you for Hajj and Umrah bookings.",
      },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Speak with the branch nearest to you for seat availability, rates and payment plans."
        image={IMG.hero}
        crumb="Contact"
      />

      <Section>
        <SectionHeading
          eyebrow="Our branches"
          title="Three offices across India"
          intro="Demo contact details are shown here for now. Every branch handles its own bookings and documentation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BRANCHES.map((b) => (
            <div key={b.key} className="flex h-full flex-col border border-border bg-card p-6">
              <h2 className="font-heading text-base font-bold text-primary">{b.label}</h2>
              <ul className="mt-4 flex-1 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{b.addressLines.join(", ")}</span>
                </li>
                {b.phones.map((phone) => (
                  <li key={phone} className="flex gap-2.5">
                    <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <a href={`tel:${phone}`} className="hover:text-primary">
                      {phone}
                    </a>
                  </li>
                ))}
                <li className="flex gap-2.5">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <a href={`mailto:${b.email}`} className="hover:text-primary">
                    {b.email}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {b.hours}
                </li>
              </ul>
              <div className="mt-6 grid gap-2">
                <a
                  href={whatsappLink(
                    `Assalamu alaikum, I would like to enquire about packages from your ${b.city} office.`,
                    b.whatsapp,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-hover"
                >
                  <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
                </a>
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View on map
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-primary py-14">
        <div className="mx-auto max-w-3xl px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-2xl font-extrabold">Prefer to talk directly?</h2>
          <p className="mt-3 text-sm opacity-85">
            Our head office team can guide you to the right package for your city, budget and travel
            dates.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SITE.primaryPhone}`}
              className="rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-gold/85"
            >
              Call {SITE.primaryPhone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-sm border border-primary-foreground/60 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
