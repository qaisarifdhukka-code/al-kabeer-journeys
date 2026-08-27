import { CITY_KEYS, CITY_LABELS, type CityKey } from "@/data/site";

export function CityTabs({
  active,
  onChange,
}: {
  active?: CityKey;
  onChange?: (key: CityKey) => void;
}) {
  const activeClass =
    "bg-background text-primary border-2 border-gold shadow-md shadow-gold/20 font-extrabold";
  const inactiveClass =
    "bg-background text-muted-foreground border-2 border-border/50 hover:border-gold/50 hover:text-foreground hover:bg-background";
  const baseClass = "rounded-full px-6 py-2.5 text-xs uppercase tracking-widest transition-all";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {CITY_KEYS.map((city) => (
        <button
          key={city}
          type="button"
          onClick={() => onChange?.(city)}
          className={`${baseClass} ${active === city ? activeClass : inactiveClass}`}
        >
          {CITY_LABELS[city]}
        </button>
      ))}
    </div>
  );
}
