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
      <h2 className="mt-3 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
        {title}
      </h2>
      <span
        className={`mt-4 block h-0.5 w-16 bg-primary ${align === "center" ? "mx-auto" : ""}`}
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
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 text-primary-foreground">
          <h1 className="font-heading text-3xl font-extrabold sm:text-4xl">{title}</h1>
          {subtitle && <p className="mt-3 max-w-2xl text-sm opacity-90 sm:text-base">{subtitle}</p>}
          <p className="mt-4 text-xs opacity-80">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{crumb}</span>
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
