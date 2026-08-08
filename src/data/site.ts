export type CityKey = "mumbai" | "kolkata" | "gujarat";

export type Branch = {
  key: CityKey;
  city: string;
  label: string;
  addressLines: string[];
  phones: string[];
  whatsapp: string;
  email: string;
  hours: string;
  mapUrl: string;
};

export const SITE = {
  name: "AL-KABEER Tours & Travels",
  shortName: "AL-KABEER",
  tagline: "For Quality Touring Since 1994",
  description:
    "Government-approved Hajj and Umrah tour operator serving pilgrims from Mumbai, Kolkata and Gujarat since 1994.",
  email: "info@alkabeertours.example",
  whatsapp: "919876543210",
  primaryPhone: "+91 98765 43210",
  secondaryPhone: "+91 98765 43211",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
} as const;

export const BRANCHES: Branch[] = [
  {
    key: "mumbai",
    city: "Mumbai",
    label: "Mumbai (Head Office)",
    addressLines: [
      "Shop No. 12, Ground Floor, Zainab Manzil",
      "Mohammed Ali Road, Bhendi Bazaar",
      "Mumbai, Maharashtra 400003",
    ],
    phones: ["+91 98765 43210", "+91 22 2345 6789"],
    whatsapp: "919876543210",
    email: "mumbai@alkabeertours.example",
    hours: "Mon – Sat, 10:00 AM – 8:00 PM",
    mapUrl: "https://maps.google.com/?q=Mohammed+Ali+Road+Mumbai",
  },
  {
    key: "kolkata",
    city: "Kolkata",
    label: "Kolkata Branch",
    addressLines: [
      "4B, Second Floor, Zakaria Point",
      "Zakaria Street, Chandni Chowk",
      "Kolkata, West Bengal 700073",
    ],
    phones: ["+91 98765 43211", "+91 33 2234 5678"],
    whatsapp: "919876543211",
    email: "kolkata@alkabeertours.example",
    hours: "Mon – Sat, 10:30 AM – 8:00 PM",
    mapUrl: "https://maps.google.com/?q=Zakaria+Street+Kolkata",
  },
  {
    key: "gujarat",
    city: "Gujarat",
    label: "Gujarat Branch (Ahmedabad)",
    addressLines: [
      "201, Al Noor Complex, Near Kalupur Tower",
      "Relief Road, Kalupur",
      "Ahmedabad, Gujarat 380001",
    ],
    phones: ["+91 98765 43212", "+91 79 2550 1234"],
    whatsapp: "919876543212",
    email: "gujarat@alkabeertours.example",
    hours: "Mon – Sat, 10:00 AM – 7:30 PM",
    mapUrl: "https://maps.google.com/?q=Kalupur+Ahmedabad",
  },
];

export const CITY_KEYS: CityKey[] = ["mumbai", "kolkata", "gujarat"];

export const CITY_LABELS: Record<CityKey, string> = {
  mumbai: "Mumbai",
  kolkata: "Kolkata",
  gujarat: "Gujarat",
};

export function getBranch(city: CityKey): Branch {
  return BRANCHES.find((b) => b.key === city) ?? BRANCHES[0]!;
}

export function isCityKey(value: string): value is CityKey {
  return (CITY_KEYS as string[]).includes(value);
}

export function whatsappLink(message: string, number: string = SITE.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}
