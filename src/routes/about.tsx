import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Target, Eye } from "lucide-react";
import { PageBanner, Section, SectionHeading } from "@/components/Section";
import { IMG } from "@/data/images";
import { BRANCHES } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AL-KABEER Tours & Travels | Hajj & Umrah Since 1994" },
      {
        name: "description",
        content:
          "AL-KABEER Tours & Travels has guided pilgrims for Hajj and Umrah since 1994, with offices in Mumbai, Kolkata and Ahmedabad and a team that travels with every group.",
      },
      { property: "og:title", content: "About AL-KABEER Tours & Travels" },
      {
        property: "og:description",
        content: "Three decades of arranging Hajj and Umrah for pilgrims across India.",
      },
      { property: "og:image", content: IMG.madinah },
      { name: "twitter:image", content: IMG.madinah },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner
        title="About AL-KABEER"
        subtitle="For quality touring since 1994 — serving pilgrims from Mumbai, Kolkata and Gujarat."
        image={IMG.madinah}
        crumb="About Us"
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Three decades of accompanying pilgrims"
              intro="AL-KABEER Tours & Travels began in 1994 with a single office in Mumbai and a simple promise: treat every pilgrim like family. Today our teams in Mumbai, Kolkata and Ahmedabad arrange Hajj and Umrah for hundreds of pilgrims each season."
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We handle visas, airfare, hotels, ground transport, Ziyarat and meals, and we send an
              experienced group leader with every departure. In Makkah and Madinah our ground staff
              stays reachable around the clock so that any concern is settled quickly.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Because departures and arrangements differ by region, each of our three branches
              publishes its own package rates. That keeps pricing honest and expectations clear.
            </p>
          </div>
          <img
            src={IMG.hajj2}
            alt="Pilgrims performing Tawaf around the Kaaba"
            loading="lazy"
            className="h-80 w-full object-cover sm:h-[440px]"
          />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our mission", text: "To make the journey of Hajj and Umrah simple, dignified and affordable for every pilgrim who trusts us." },
            { icon: Eye, title: "Our vision", text: "To be the most reliable Hajj and Umrah operator in western and eastern India, known for service rather than promises." },
            { icon: BadgeCheck, title: "Our values", text: "Honest pricing, respect for elders and families, punctual arrangements and accountability at every step." },
          ].map((item) => (
            <div key={item.title} className="border border-border bg-card p-7">
              <item.icon className="size-7 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-heading text-lg font-bold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our offices"
          title="Three branches, one standard of service"
          intro="Each branch handles its own departures, documentation and pilgrim support."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BRANCHES.map((b) => (
            <div key={b.key} className="border border-border bg-card p-6">
              <h3 className="font-heading text-base font-bold text-primary">{b.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.addressLines.join(", ")}
              </p>
              <p className="mt-3 text-sm text-foreground">{b.phones.join(" · ")}</p>
              <p className="mt-1 text-xs text-muted-foreground">{b.hours}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
