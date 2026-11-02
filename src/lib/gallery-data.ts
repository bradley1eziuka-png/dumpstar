// ───────────────────────────────────────────────────────────────────────────
// Real Dumpstar project photos, grouped for the homepage gallery. Before and
// after shots are paired; dumpster trailer photos stand alone.
//
// `labeled` means the photo already has a "Before" / "After" label burned in
// by the business, so the card doesn't add its own pill on top.
// ───────────────────────────────────────────────────────────────────────────
import { IMAGES } from "./site-images";

export const GALLERY_CATEGORIES = [
  "Dumpster Rentals",
  "Junk Removal",
  "Garage Cleanouts",
  "Before & After",
  "Property Cleanup",
] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type Photo = { src: string; alt: string };

export type GalleryItem =
  | {
      kind: "pair";
      title: string;
      categories: GalleryCategory[];
      labeled: boolean;
      before: Photo;
      after: Photo;
    }
  | { kind: "single"; title: string; categories: GalleryCategory[]; photo: Photo };

export const PHOTOS = {
  trailerSky: {
    src: IMAGES.trailerSky,
    alt: "Black dump trailer loaded with lumber parked on a driveway under a blue sky",
  },
  trailerDriveway: {
    src: IMAGES.trailerDriveway,
    alt: "Black dump trailer parked on a suburban driveway in front of a brick home",
  },
  trailerFall: {
    src: IMAGES.trailerFall,
    alt: "Black dump trailer parked on a driveway surrounded by fall foliage",
  },
  trailerTownhomes: {
    src: IMAGES.trailerTownhomes,
    alt: "Black dump trailer parked in front of brick and siding townhomes",
  },
  drivewayBefore: {
    src: IMAGES.drivewayBefore,
    alt: "Garage with a pile of boxes, wood, insulation, and trash bags spilling onto the driveway",
  },
  drivewayAfter: {
    src: IMAGES.drivewayAfter,
    alt: "The same garage entrance after cleanup, with the driveway cleared",
  },
  basementBefore: {
    src: IMAGES.basementBefore,
    alt: "Wood-paneled basement room with a pile of broken wood and debris on the floor",
  },
  basementAfter: {
    src: IMAGES.basementAfter,
    alt: "The same wood-paneled basement room cleared out and empty",
  },
  largeGarageBefore: {
    src: IMAGES.largeGarageBefore,
    alt: "Large garage packed with furniture, tools, storage bins, and household items",
  },
  largeGarageAfter: {
    src: IMAGES.largeGarageAfter,
    alt: "The same large garage with the floor cleared and open",
  },
  garageCleanoutBefore: {
    src: IMAGES.garageCleanoutBefore,
    alt: "Garage with a heap of cardboard boxes, insulation, and trash bags against the wall",
  },
  garageCleanoutAfter: {
    src: IMAGES.garageCleanoutAfter,
    alt: "The same garage swept and empty after the cleanout",
  },
  garageDebrisBefore: {
    src: IMAGES.garageDebrisBefore,
    alt: "Garage floor covered in broken drywall, cardboard, toilets, and black trash bags",
  },
  garageDebrisAfter: {
    src: IMAGES.garageDebrisAfter,
    alt: "The same garage empty and swept clean after debris removal",
  },
  garageContentsBefore: {
    src: IMAGES.garageContentsBefore,
    alt: "Garage with a speckled floor covered in cardboard boxes, a rolled rug, and scattered items",
  },
  garageFloorAfter: {
    src: IMAGES.garageFloorAfter,
    alt: "A clear garage with a speckled epoxy-style floor and storage shelving",
  },
} satisfies Record<string, Photo>;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    kind: "pair",
    title: "Garage & Driveway Cleanout",
    categories: ["Before & After", "Garage Cleanouts", "Junk Removal"],
    labeled: true,
    before: PHOTOS.drivewayBefore,
    after: PHOTOS.drivewayAfter,
  },
  {
    kind: "pair",
    title: "Basement Cleanup",
    categories: ["Before & After", "Property Cleanup", "Junk Removal"],
    labeled: true,
    before: PHOTOS.basementBefore,
    after: PHOTOS.basementAfter,
  },
  {
    kind: "pair",
    title: "Large Garage Cleanout",
    categories: ["Before & After", "Garage Cleanouts", "Property Cleanup"],
    labeled: true,
    before: PHOTOS.largeGarageBefore,
    after: PHOTOS.largeGarageAfter,
  },
  {
    kind: "pair",
    title: "Garage Junk Removal",
    categories: ["Before & After", "Garage Cleanouts", "Junk Removal"],
    labeled: true,
    before: PHOTOS.garageCleanoutBefore,
    after: PHOTOS.garageCleanoutAfter,
  },
  {
    kind: "pair",
    title: "Garage Debris Removal",
    categories: ["Before & After", "Garage Cleanouts", "Property Cleanup"],
    labeled: false,
    before: PHOTOS.garageDebrisBefore,
    after: PHOTOS.garageDebrisAfter,
  },
  {
    kind: "pair",
    title: "Garage Reset",
    categories: ["Before & After", "Garage Cleanouts"],
    labeled: false,
    before: PHOTOS.garageContentsBefore,
    after: PHOTOS.garageFloorAfter,
  },
  {
    kind: "single",
    title: "15-Yard Dumpster Trailer",
    categories: ["Dumpster Rentals"],
    photo: PHOTOS.trailerSky,
  },
  {
    kind: "single",
    title: "Dumpster Trailer on Site",
    categories: ["Dumpster Rentals"],
    photo: PHOTOS.trailerTownhomes,
  },
  {
    kind: "single",
    title: "Dumpster Trailer Delivery",
    categories: ["Dumpster Rentals"],
    photo: PHOTOS.trailerDriveway,
  },
  {
    kind: "single",
    title: "Dumpster Trailer Rental",
    categories: ["Dumpster Rentals"],
    photo: PHOTOS.trailerFall,
  },
];
