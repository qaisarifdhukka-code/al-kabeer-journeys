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
  const activeClass =
    "bg-background text-primary border-2 border-gold shadow-md shadow-gold/20 font-extrabold";
  const inactiveClass =
    "bg-background text-muted-foreground border-2 border-border/50 hover:border-gold/50 hover:text-foreground hover:bg-background";
  const baseClass = "rounded-full px-6 py-2.5 text-xs uppercase tracking-widest transition-all";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {base ? (
        <Link
          to={`/${base}`}
          className={`${baseClass} ${!active || active === "ALL" ? activeClass : inactiveClass}`}
        >
          All Cities
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => onChange?.("ALL")}
          className={`${baseClass} ${active === "ALL" ? activeClass : inactiveClass}`}
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
            className={`${baseClass} ${active === city ? activeClass : inactiveClass}`}
          >
            {CITY_LABELS[city]}
          </Link>
        ) : (
          <button
            key={city}
            type="button"
            onClick={() => onChange?.(city)}
            className={`${baseClass} ${active === city ? activeClass : inactiveClass}`}
          >
            {CITY_LABELS[city]}
          </button>
        )
      )}
    </div>
  );
}
