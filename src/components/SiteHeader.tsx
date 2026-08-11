import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, MapPin, X } from "lucide-react";
import { BRANCHES, SITE, whatsappLink } from "@/data/site";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Invisible placeholder to prevent layout shift and scroll bouncing when header becomes fixed/shrinks */}
      <div className="w-full invisible h-[64px] sm:h-[72px] lg:h-[124px] xl:h-[142px]" aria-hidden="true" />
      <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* ── ROW 1: BRAND & CONTACT (White Background) ── */}
      <div className={`bg-white transition-all duration-500 overflow-hidden ${scrolled ? "py-2 lg:py-0 lg:max-h-0 lg:opacity-0" : "py-2 sm:py-3 max-h-[150px] opacity-100"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          
          {/* Logo (Left) */}
          <Link to="/" className="flex items-center gap-3 xl:gap-4 z-50 shrink-0">
            <img 
              src="/images/LOGO/original-logo.png" 
              alt="AL-KABEER Tours & Travels Logo" 
              className="h-12 xl:h-16 w-auto object-contain"
            />
            <div className="flex flex-col justify-center text-primary">
              <span className="font-display text-[22px] xl:text-[28px] font-extrabold tracking-tight leading-none">
                AL-KABEER
              </span>
              <span className="text-[9px] xl:text-[11px] font-bold uppercase tracking-[0.25em] leading-tight mt-0.5">
                Tours &amp; Travels
              </span>
              <span className="text-[8px] xl:text-[10px] font-serif italic mt-0.5 opacity-90">
                For Quality Touring Since 1994
              </span>
            </div>
          </Link>

          {/* Contact & CTA (Right Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex flex-col items-end">
              <a href={`tel:${SITE.primaryPhone}`} className="flex items-center gap-2 text-primary font-bold hover:text-gold transition-colors text-sm xl:text-base">
                <Phone className="size-4" aria-hidden="true" /> {SITE.primaryPhone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs mt-1">
                <Mail className="size-3.5" aria-hidden="true" /> {SITE.email}
              </a>
            </div>
            <a
              href={whatsappLink("Assalamu alaikum, I would like to enquire about your Hajj and Umrah packages.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:bg-gold/85 hover:shadow-lg hover:-translate-y-0.5"
            >
              Enquire
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-12 place-items-center rounded-xl border border-border text-foreground lg:hidden transition-colors hover:bg-surface z-50"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* ── ROW 2: NAVIGATION (Green Background) ── */}
      <div className="hidden lg:block bg-primary border-t border-white/10 relative z-40 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex items-center justify-center gap-8 xl:gap-12">
            {NAV.map((item) => (
              <div key={item.to} className="relative group">
                <Link
                  to={item.to}
                  activeProps={{ className: "text-gold border-gold" }}
                  inactiveProps={{ className: "text-primary-foreground/90 border-transparent hover:text-white hover:border-white/50" }}
                  className="whitespace-nowrap block text-xs xl:text-[13px] font-bold uppercase tracking-[0.15em] py-4 border-b-2 border-t-2 border-t-transparent transition-all"
                >
                  {item.label}
                </Link>
                {(item.to === "/hajj" || item.to === "/umrah") && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-background shadow-xl rounded-xl border border-border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-background" />
                    {CITY_KEYS.map((city) => (
                      <Link
                        key={city}
                        to={`${item.to}/$city`}
                        params={{ city }}
                        className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-surface hover:text-primary transition-colors text-center"
                      >
                        {CITY_LABELS[city]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ── MOBILE DROPDOWN NAVIGATION ── */}
      <div
        className={`lg:hidden overflow-hidden bg-background shadow-2xl transition-all duration-300 ease-in-out absolute w-full left-0 ${
          open ? "max-h-[85vh] border-b border-border opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 max-h-[85vh] overflow-y-auto pb-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "bg-primary/5 text-primary font-bold border-l-4 border-primary pl-3" }}
              inactiveProps={{ className: "text-foreground font-medium border-l-4 border-transparent pl-4 hover:bg-surface" }}
              className="py-3.5 rounded-r-xl transition-all"
            >
              {item.label}
            </Link>
          ))}
          
          <div className="mt-4 pt-4 border-t border-border" />
          <div className="px-4 mt-6 flex flex-col gap-3">
            <a href={`tel:${SITE.primaryPhone}`} className="flex items-center justify-center gap-2 text-primary font-bold hover:text-gold transition-colors py-2 border border-border rounded-full">
              <Phone className="size-4" aria-hidden="true" /> {SITE.primaryPhone}
            </a>
            <a
              href={whatsappLink("Assalamu alaikum...")}
              className="block w-full rounded-full bg-gold px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-foreground hover:bg-gold/85"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
}
