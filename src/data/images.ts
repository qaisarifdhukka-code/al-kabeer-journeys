/**
 * Imagery hotlinked from the supplied screen designs.
 */
const CDN = "https://lh3.googleusercontent.com/aida-public/";

export const IMG = {
  hero: "/images/Hero/1.png",
  hajj1: "/images/Hajj/1.png",
  hajj2: "/images/Hajj/2.png",
  hajj3: "/images/Hajj/3.png",
  umrah1: "/images/Umrah/1.png",
  umrah2: "/images/Umrah/2.png",
  umrah3: "/images/Hajj/4.png",
  banner: "/images/Hero/2.png",
  madinah: "/images/Hero/3.png",
} as const;

export const PACKAGE_IMAGES = [IMG.hajj1, IMG.hajj2, IMG.hajj3, IMG.umrah1, IMG.umrah2, IMG.umrah3];

export const GALLERY_IMAGES = [
  { src: IMG.hajj2, alt: "Pilgrims performing Tawaf around the Kaaba in Masjid al-Haram" },
  { src: IMG.madinah, alt: "Masjid an-Nabawi in Madinah at dusk" },
  { src: IMG.umrah1, alt: "AL-KABEER group gathered outside the Haram" },
  { src: IMG.hajj1, alt: "Pilgrims in Ihram walking towards the mosque" },
  { src: IMG.umrah2, alt: "Interior of the Haram during prayer" },
  { src: IMG.hajj3, alt: "Pilgrim tents at Mina during Hajj" },
  { src: IMG.umrah3, alt: "Ziyarat visit to a historic site in Madinah" },
  { src: IMG.hero, alt: "Night view of the Haram courtyard" },
];
