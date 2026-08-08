import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, MapPin, X, ChevronDown } from "lucide-react";
import { BRANCHES, CITY_KEYS, CITY_LABELS, SITE, whatsappLink } from "@/data/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/hajj", label: "Hajj Packages" },
  { to: "/umrah", label: "Umrah Packages" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* utility bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.primaryPhone}`} className="flex items-center gap-1.5 hover:text-gold">
              <Phone className="size-3.5" aria-hidden="true" /> {SITE.primaryPhone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-gold">
              <Mail className="size-3.5" aria-hidden="true" /> {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            <span>Offices in Mumbai · Kolkata · Ahmedabad</span>
          </div>
        </div>
      </div>

      {/* logo row */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-sm bg-primary font-heading text-xl font-extrabold text-primary-foreground">
              K
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-extrabold tracking-tight text-primary sm:text-xl">
                AL-KABEER
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Tours &amp; Travels
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="border-l border-border pl-4 text-right">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {SITE.tagline}
              </p>
              <p className="font-heading text-sm font-bold text-foreground">
                Govt. approved Hajj &amp; Umrah operator
              </p>
            </div>
            <a
              href={whatsappLink("Assalamu alaikum, I would like to enquire about your Hajj and Umrah packages.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-gold px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-gold/85"
            >
              Enquire on WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* nav strip */}
      <nav className="hidden bg-surface lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 px-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary border-primary" }}
              inactiveProps={{ className: "text-foreground border-transparent" }}
              className="border-b-2 px-3.5 py-3.5 text-sm font-semibold transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <CityMenu />
        </div>
      </nav>

      {open && (
        <div className="border-b border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="block border-b border-border py-3 text-sm font-semibold last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Assalamu alaikum, I would like to enquire about your Hajj and Umrah packages.")}
              target="_blank"
              rel="noreferrer"
              className="my-3 block rounded-sm bg-gold px-4 py-3 text-center text-sm font-bold text-foreground"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function CityMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative ml-auto"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3.5 py-3.5 text-sm font-semibold text-primary"
      >
        Choose your city <ChevronDown className="size-4" aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 w-64 border border-border bg-background p-2 shadow-lg">
          {CITY_KEYS.map((city) => (
            <div key={city} className="px-2 py-1.5">
              <p className="font-heading text-sm font-bold text-foreground">{CITY_LABELS[city]}</p>
              <div className="mt-1 flex gap-3 text-xs">
                <Link to="/hajj/$city" params={{ city }} className="text-primary hover:underline">
                  Hajj packages
                </Link>
                <Link to="/umrah/$city" params={{ city }} className="text-primary hover:underline">
                  Umrah packages
                </Link>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {BRANCHES.find((b) => b.key === city)?.phones[0]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
