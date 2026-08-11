import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      {/* Gradient accent bar — thicker and rounded, with green→gold gradient */}
      <span
        className={`mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-gold ${align === "center" ? "mx-auto" : ""}`}
      />
      {intro && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function PageBanner({
  title,
  subtitle,
  image,
  crumb,
}: {
  title: string;
  subtitle?: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative">
      <img src={image} alt="" aria-hidden="true" className="h-56 w-full object-cover sm:h-72" />
      {/* Atmospheric gradient overlay instead of flat color */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/50 to-foreground/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 text-primary-foreground">
          <h1 className="font-display text-3xl font-bold sm:text-4xl drop-shadow-md text-shadow-md">{title}</h1>
          {subtitle && <p className="mt-3 max-w-2xl text-sm opacity-90 sm:text-base drop-shadow-sm">{subtitle}</p>}
          {/* Breadcrumb pill */}
          <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur-sm">
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="opacity-60">/</span>
            <span className="text-gold font-semibold">{crumb}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "white",
  className = "",
}: {
  children: ReactNode;
  tone?: "white" | "surface";
  className?: string;
}) {
  return (
    <section className={`${tone === "surface" ? "bg-surface" : "bg-background"} py-16 sm:py-20`}>
      <div className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</div>
    </section>
  );
}
