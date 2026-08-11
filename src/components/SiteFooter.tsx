import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { BRANCHES, SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            {/* Rounded-xl logo box to match header */}
            <span className="grid size-11 place-items-center rounded-xl bg-primary-foreground font-heading text-xl font-extrabold text-primary">
              K
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-extrabold">AL-KABEER</span>
              <span className="block text-[10px] uppercase tracking-[0.18em] opacity-80">
                Tours &amp; Travels
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-85">{SITE.description}</p>
          {/* Rounded-full social icon buttons */}
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid size-9 place-items-center rounded-full border border-primary-foreground/30 transition-all hover:bg-primary-foreground/15 hover:border-primary-foreground/60"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-primary-foreground/30 transition-all hover:bg-primary-foreground/15 hover:border-primary-foreground/60"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid size-9 place-items-center rounded-full border border-primary-foreground/30 transition-all hover:bg-primary-foreground/15 hover:border-primary-foreground/60"
            >
              <Youtube className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/hajj", label: "Hajj Packages" },
              { to: "/umrah", label: "Umrah Packages" },
              { to: "/services", label: "Our Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-85 transition-all hover:text-gold hover:opacity-100 hover:pl-1">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Packages by City
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {BRANCHES.map((b) => (
              <li key={b.key} className="space-y-1">
                <p className="font-semibold">{b.city}</p>
                <div className="flex gap-3 text-xs opacity-85">
                  <Link to="/hajj/$city" params={{ city: b.key }} className="hover:text-gold transition-colors">
                    Hajj
                  </Link>
                  <Link to="/umrah/$city" params={{ city: b.key }} className="hover:text-gold transition-colors">
                    Umrah
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Head Office
          </h2>
          <ul className="mt-4 space-y-3 text-sm opacity-85">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{BRANCHES[0]!.addressLines.join(", ")}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`tel:${SITE.primaryPhone}`} className="hover:text-gold transition-colors">
                {SITE.primaryPhone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs opacity-80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.tagline} · Demo contact details shown</p>
        </div>
      </div>
    </footer>
  );
}
