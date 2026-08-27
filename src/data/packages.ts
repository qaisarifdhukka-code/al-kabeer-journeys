import raw from "./packages.json";
import { IMG } from "./images";
import type { CityKey } from "./site";

export type PackageType = "hajj" | "umrah" | "ziyarat";

export type Hotel = { name: string; stars: number; distance: string };
export type SharingOption = { type: string; price: number };
export type ItineraryStep = { day: string; title: string; detail: string };

export type TourPackage = {
  id: string;
  slug: string;
  type: PackageType;
  category?: "Golden" | "Silver" | "Budget" | undefined;
  city: CityKey;
  title: string;
  days: number;
  departure: string;
  season: string;
  badge: string;
  seatsLeft: number;
  image: string;
  priceFrom: number;
  priceOld: number;
  meals: string;
  hotelMakkah: Hotel;
  hotelMadinah: Hotel;
  sharing: SharingOption[];
  highlights: string[];
  itinerary: ItineraryStep[];
};

const itineraries = raw.itineraries as Record<string, ItineraryStep[]>;
const imageMap = IMG as Record<string, string>;

export const PACKAGES: TourPackage[] = raw.packages.map((p) => ({
  ...p,
  type: p.type as PackageType,
  category: p.category as TourPackage["category"],
  city: p.city as CityKey,
  image: imageMap[p.image] ?? IMG.hero,
  itinerary: itineraries[p.itinerary] ?? [],
}));

export const INCLUSIONS: string[] = raw.inclusions;
export const EXCLUSIONS: string[] = raw.exclusions;

export function getPackages(type: PackageType, city?: CityKey) {
  return PACKAGES.filter((p) => p.type === type && (!city || p.city === city));
}

export function getPackageBySlug(slug: string) {
  return PACKAGES.find((p) => p.slug === slug);
}

export function relatedPackages(pkg: TourPackage) {
  return PACKAGES.filter((p) => p.city === pkg.city && p.slug !== pkg.slug).slice(0, 3);
}
