import { Link } from "@tanstack/react-router";
import { CITY_KEYS, CITY_LABELS, type CityKey } from "@/data/site";

export function CityTabs({
  base,
  active,
}: {
  base: "hajj" | "umrah";
  active?: CityKey;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Link
        to={base === "hajj" ? "/hajj" : "/umrah"}
        activeOptions={{ exact: true }}
        className={`rounded-sm border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
          active
            ? "border-border bg-background text-foreground hover:border-primary hover:text-primary"
            : "border-primary bg-primary text-primary-foreground"
        }`}
      >
        All cities
      </Link>
      {CITY_KEYS.map((city) => {
        const isActive = active === city;
        return (
          <Link
            key={city}
            to={base === "hajj" ? "/hajj/$city" : "/umrah/$city"}
            params={{ city }}
            className={`rounded-sm border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {CITY_LABELS[city]}
          </Link>
        );
      })}
    </div>
  );
}
