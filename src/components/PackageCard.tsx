import { Link } from "@tanstack/react-router";
import { Star, CalendarDays, Plane, BedDouble, Users, ArrowRight } from "lucide-react";
import type { TourPackage } from "@/data/packages";
import { CITY_LABELS, formatINR, getBranch, whatsappLink } from "@/data/site";

export function PackageCard({ pkg }: { pkg: TourPackage }) {
  const branch = getBranch(pkg.city);
  const message = `Assalamu alaikum, I am interested in the "${pkg.title}" (${CITY_LABELS[pkg.city]} departure) — starting ${formatINR(pkg.priceFrom)}. Please share the details.`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.title} — ${CITY_LABELS[pkg.city]} departure`}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-sm">
          {pkg.badge}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground shadow-sm">
          {CITY_LABELS[pkg.city]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {pkg.season}
        </p>
        <h3 className="mt-1.5 font-heading text-base font-bold leading-snug text-foreground">
          {pkg.title}
        </h3>
        {/* View details — subtle text link under title */}
        <Link
          to="/packages/$slug"
          params={{ slug: pkg.slug }}
          className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
        >
          View full details <ArrowRight className="size-3" />
        </Link>

        <ul className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-3.5 text-primary" aria-hidden="true" /> {pkg.days} days package
          </li>
          <li className="flex items-center gap-2">
            <Plane className="size-3.5 text-primary" aria-hidden="true" /> Departs from {pkg.departure}
          </li>
          <li className="flex items-center gap-2">
            <BedDouble className="size-3.5 text-primary" aria-hidden="true" />
            <span className="flex items-center gap-1">
              Makkah {pkg.hotelMakkah.stars}
              <Star className="size-3 fill-gold text-gold" aria-hidden="true" /> · {pkg.hotelMakkah.distance}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Users className="size-3.5 text-primary" aria-hidden="true" /> {pkg.seatsLeft} seats available
          </li>
        </ul>

        {/* ── Bottom row: price left, single Book Now button right ── */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Starting from</p>
            <p className="font-heading text-xl font-extrabold leading-none text-primary">
              {formatINR(pkg.priceFrom)}
            </p>
            <p className="text-[10px] text-muted-foreground line-through">{formatINR(pkg.priceOld)}</p>
          </div>
          <a
            href={whatsappLink(message, branch.whatsapp)}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
}
