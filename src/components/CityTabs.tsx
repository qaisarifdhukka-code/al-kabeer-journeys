import { Link } from "@tanstack/react-router";
import { CITY_KEYS, CITY_LABELS, type CityKey } from "@/data/site";

export type TabKey = CityKey | "ALL";

export function CityTabs({
  base,
  active,
  onChange,
}: {
  base?: "hajj" | "umrah";
  active?: TabKey;
  onChange?: (key: TabKey) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {base ? (
        <Link
          to={`/${base}`}
          className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
            !active || active === "ALL"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-surface text-foreground hover:bg-primary/10"
          }`}
        >
          All Cities
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => onChange?.("ALL")}
          className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
            active === "ALL"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-surface text-foreground hover:bg-primary/10"
          }`}
        >
          All Cities
        </button>
      )}

      {CITY_KEYS.map((city) =>
        base ? (
          <Link
            key={city}
            to={`/${base}/$city`}
            params={{ city }}
            className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
              active === city
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-surface text-foreground hover:bg-primary/10"
            }`}
          >
            {CITY_LABELS[city]}
          </Link>
        ) : (
          <button
            key={city}
            type="button"
            onClick={() => onChange?.(city)}
            className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
              active === city
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-surface text-foreground hover:bg-primary/10"
            }`}
          >
            {CITY_LABELS[city]}
          </button>
        )
      )}
    </div>
  );
}
