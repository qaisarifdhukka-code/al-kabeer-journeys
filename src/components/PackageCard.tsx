import { Link } from "@tanstack/react-router";
import { Star, CalendarDays, Plane, BedDouble, Users } from "lucide-react";
import type { TourPackage } from "@/data/packages";
import { CITY_LABELS, formatINR, getBranch, whatsappLink } from "@/data/site";

export function PackageCard({ pkg }: { pkg: TourPackage }) {
  const branch = getBranch(pkg.city);
  const message = `Assalamu alaikum, I am interested in the "${pkg.title}" (${CITY_LABELS[pkg.city]} departure) — starting ${formatINR(pkg.priceFrom)}. Please share the details.`;

  return (
    <article className="flex h-full flex-col border border-border bg-card transition-shadow hover:shadow-md">
      <div className="relative">
        <img
          src={pkg.image}
          alt={`${pkg.title} — ${CITY_LABELS[pkg.city]} departure`}
          loading="lazy"
          className="h-48 w-full object-cover"
        />
        <span className="absolute left-0 top-4 bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
          {pkg.badge}
        </span>
        <span className="absolute bottom-0 right-0 bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
          {CITY_LABELS[pkg.city]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {pkg.season}
        </p>
        <h3 className="mt-1.5 font-heading text-base font-bold leading-snug text-foreground">
          <Link to="/packages/$slug" params={{ slug: pkg.slug }} className="hover:text-primary">
            {pkg.title}
          </Link>
        </h3>

        <ul className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-3.5 text-primary" aria-hidden="true" /> {pkg.days} days
            package
          </li>
          <li className="flex items-center gap-2">
            <Plane className="size-3.5 text-primary" aria-hidden="true" /> Departs from{" "}
            {pkg.departure}
          </li>
          <li className="flex items-center gap-2">
            <BedDouble className="size-3.5 text-primary" aria-hidden="true" />
            <span className="flex items-center gap-1">
              Makkah {pkg.hotelMakkah.stars}
              <Star className="size-3 fill-gold text-gold" aria-hidden="true" /> ·{" "}
              {pkg.hotelMakkah.distance}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Users className="size-3.5 text-primary" aria-hidden="true" /> {pkg.seatsLeft} seats
            available
          </li>
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Starting from
            </p>
            <p className="font-heading text-xl font-extrabold text-primary">
              {formatINR(pkg.priceFrom)}
            </p>
            <p className="text-xs text-muted-foreground line-through">{formatINR(pkg.priceOld)}</p>
          </div>
          <p className="text-right text-[11px] leading-tight text-muted-foreground">
            per person
            <br />
            {pkg.sharing[0]?.type}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link
            to="/packages/$slug"
            params={{ slug: pkg.slug }}
            className="rounded-sm border border-primary px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View details
          </Link>
          <a
            href={whatsappLink(message, branch.whatsapp)}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-primary px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Enquire now
          </a>
        </div>
      </div>
    </article>
  );
}
