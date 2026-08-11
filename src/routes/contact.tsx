import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ChevronDown } from "lucide-react";
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

const TEAM = [
  {
    dept: "Operations",
    color: "bg-primary/10 text-primary",
    members: [
      { name: "Arbaaz", role: "Customer Service", phone: BRANCHES[0]!.phones[0]! },
      { name: "Nadeem", role: "Group Coordination", phone: BRANCHES[0]!.phones[1]! },
    ],
  },
  {
    dept: "Bookings & Visa",
    color: "bg-gold/15 text-foreground",
    members: [
      { name: "Taabish", role: "Hajj Bookings", phone: BRANCHES[1]!.phones[0]! },
      { name: "Mudassir", role: "Umrah & Visa", phone: BRANCHES[1]!.phones[1]! },
      { name: "Musavvir", role: "Documentation", phone: BRANCHES[2]!.phones[0]! },
      { name: "Arfaat", role: "Ziyarat Tours", phone: BRANCHES[2]!.phones[1]! },
    ],
  },
  {
    dept: "Accounts & Payments",
    color: "bg-accent text-accent-foreground",
    members: [
      { name: "Mr. Gaus", role: "Billing Support", phone: BRANCHES[0]!.phones[0]! },
    ],
  },
];

const TOURS = [
  "Hajj Package",
  "Umrah Package",
  "Ziyarat Tour",
  "Other Enquiry",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", tour: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Build WhatsApp message from form
    const text = `*Request Call Back*\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nTour: ${form.tour || "Not specified"}\nMessage: ${form.message}`;
    window.open(whatsappLink(text), "_blank");
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Banner with overlapping form ── */}
      <section className="relative">
        <img src={IMG.hero} alt="" aria-hidden="true" className="h-72 w-full object-cover sm:h-96" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-foreground/20" />

        {/* Banner text */}
        <div className="absolute inset-0 flex items-start pt-10 sm:pt-14">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="max-w-lg text-primary-foreground">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-gold">
                Get in touch
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl drop-shadow-md">
                Contact Us
              </h1>
              <p className="mt-3 text-sm opacity-85">
                Speak with the branch nearest to you for seat availability, rates and payment plans.
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur-sm text-white">
                Home <span className="opacity-60">/</span>
                <span className="text-gold font-semibold">Contact</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two-column overlap: branch info + floating form ── */}
      <section className="relative z-10 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:-mt-20">

            {/* Left: contact details */}
            <div className="pt-8 lg:pt-0">
              <SectionHeading
                align="left"
                eyebrow="Our branches"
                title="Three offices across India"
              />
              <div className="mt-8 space-y-5">
                {BRANCHES.map((b) => (
                  <div key={b.key} className="rounded-2xl bg-card p-5 shadow-card flex gap-5 items-start">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-base font-extrabold text-primary">
                      {b.city.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-sm font-bold text-primary">{b.label}</h2>
                      <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                        <li className="flex gap-2">
                          <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold" />
                          <span>{b.addressLines.join(", ")}</span>
                        </li>
                        {b.phones.map((p) => (
                          <li key={p} className="flex gap-2">
                            <Phone className="mt-0.5 size-3.5 shrink-0 text-gold" />
                            <a href={`tel:${p}`} className="hover:text-primary transition-colors">{p}</a>
                          </li>
                        ))}
                        <li className="flex gap-2">
                          <Mail className="mt-0.5 size-3.5 shrink-0 text-gold" />
                          <a href={`mailto:${b.email}`} className="hover:text-primary transition-colors">{b.email}</a>
                        </li>
                        <li className="flex gap-2">
                          <Clock className="mt-0.5 size-3.5 shrink-0 text-gold" />
                          {b.hours}
                        </li>
                      </ul>
                      <div className="mt-3 flex gap-2">
                        <a
                          href={whatsappLink(
                            `Assalamu alaikum, I would like to enquire about packages from your ${b.city} office.`,
                            b.whatsapp,
                          )}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-primary-foreground transition-all hover:bg-primary-hover"
                        >
                          <MessageCircle className="size-3.5" /> WhatsApp
                        </a>
                        <a
                          href={b.mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-primary px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                          View map
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating "Request Call Back" form — overlaps banner */}
            <div className="lg:-mt-48">
              <div className="rounded-2xl bg-card p-6 shadow-xl sm:p-8">
                <h2 className="font-display text-xl font-bold text-foreground">Request Call Back</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Get a call back for Hajj or Umrah packages by filling out the form below.
                </p>
                {submitted ? (
                  <div className="mt-8 flex flex-col items-center gap-3 py-8 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                      <Send className="size-8 text-primary" />
                    </div>
                    <p className="font-heading text-base font-bold text-foreground">Message sent!</p>
                    <p className="text-xs text-muted-foreground">
                      We have opened WhatsApp with your details. Our team will call you back shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 rounded-full border border-primary px-5 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="cb-name" className="block text-xs font-semibold text-foreground mb-1">
                        Name
                      </label>
                      <input
                        id="cb-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="cb-email" className="block text-xs font-semibold text-foreground mb-1">
                        Email
                      </label>
                      <input
                        id="cb-email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="cb-phone" className="block text-xs font-semibold text-foreground mb-1">
                        Mobile Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="cb-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="cb-tour" className="block text-xs font-semibold text-foreground mb-1">
                        Select Tour
                      </label>
                      <div className="relative">
                        <select
                          id="cb-tour"
                          value={form.tour}
                          onChange={(e) => setForm({ ...form, tour: e.target.value })}
                          className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">— Select a tour —</option>
                          {TOURS.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cb-message" className="block text-xs font-semibold text-foreground mb-1">
                        Message
                      </label>
                      <textarea
                        id="cb-message"
                        rows={3}
                        placeholder="Tell us your travel dates, departure city, and any questions..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-gold py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-gold/85 hover:shadow-lg"
                    >
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Talk to Our Team — department directory ── */}
      <Section>
        <SectionHeading eyebrow="Our team" title="Talk to Our Team" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TEAM.map((dept) => (
            <div key={dept.dept} className="rounded-2xl bg-card shadow-card overflow-hidden">
              {/* Department header */}
              <div className={`px-5 py-3 ${dept.color} font-heading text-xs font-extrabold uppercase tracking-widest`}>
                {dept.dept}
              </div>
              <div className="divide-y divide-border">
                {dept.members.map((m) => (
                  <div key={m.name} className="flex items-center gap-3 px-5 py-3.5">
                    {/* Avatar initial */}
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-xs font-extrabold text-primary">
                      {m.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-sm font-bold text-foreground truncate">{m.name}</p>
                      <p className="text-[11px] text-muted-foreground">{m.role}</p>
                    </div>
                    <a
                      href={whatsappLink(`Assalamu alaikum ${m.name}, I would like to enquire about AL-KABEER packages.`)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`WhatsApp ${m.name}`}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary-hover hover:scale-110"
                    >
                      <MessageCircle className="size-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-hover py-14">
        <div className="pointer-events-none absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center text-primary-foreground">
          <h2 className="font-display text-2xl font-bold">Prefer to talk directly?</h2>
          <p className="mt-3 text-sm opacity-85">
            Our head office team can guide you to the right package for your city, budget and travel dates.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SITE.primaryPhone}`}
              className="rounded-full bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:bg-gold/85 hover:shadow-lg"
            >
              Call {SITE.primaryPhone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-full border border-primary-foreground/60 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary-foreground/15"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
