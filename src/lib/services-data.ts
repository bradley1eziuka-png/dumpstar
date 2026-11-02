// ───────────────────────────────────────────────────────────────────────────
// Service content for Dumpstar Quality Rental & Removal.
//
// Every service page is generated from this single source of truth so all
// five pages share one voice, layout, and visual system. Copy sticks to facts
// the business provided, no pricing, turnaround times, guarantees, insurance
// claims, ratings, or reviews.
//
// To hide a service, remove its key from site.config.json → services.enabled.
// Its page then returns 404 and it disappears from the nav, footer, homepage,
// and the sitemap.
// ───────────────────────────────────────────────────────────────────────────

import { siteConfig, type ServiceKey } from "@/config";
import { IMAGES } from "./site-images";
import { PHOTOS } from "./gallery-data";

export type ServiceStep = { number: string; title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { q: string; a: string };
export type GalleryItem = { src: string; alt: string; label: string };

export interface ServiceConfig {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  explanation: { title: string; body: string };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  gallery: GalleryItem[];
  faqs: ServiceFaq[];
  heroImage: string;
  heroAlt: string;
  // Card image on the homepage grid (4:5 crop) and focal point for full-bleed heroes.
  cardImage: string;
  heroPosition?: string;
  seoTitle: string;
  seoDescription: string;
}

// The same simple three-step path applies to every service.
const SHARED_PROCESS: ServiceStep[] = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Call or send a quote request with your project details and location.",
  },
  {
    number: "02",
    title: "Get Your Free Quote",
    description: "We'll review the details and talk through the next steps with you.",
  },
  {
    number: "03",
    title: "Reclaim Your Space",
    description: "With a plan in place, we get the job done so you can move on.",
  },
];

const BASE_SERVICES = {
  junkRemoval: {
    slug: "junk-removal",
    path: "/services/junk-removal",
    title: "Junk Removal",
    eyebrow: "Junk Removal Services",
    shortDescription:
      "Professional removal of unwanted furniture, household junk, appliances, and general debris.",
    seoTitle: "Junk Removal in Northville & Novi, MI | Dumpstar",
    seoDescription:
      "Furniture, appliance, household junk, and debris removal in Northville, Novi, Livonia, Plymouth, Canton, and South Lyon, MI. Open 24/7. Request a free quote.",
    explanation: {
      title: "Get Rid of the Clutter",
      body: "Unwanted furniture, old appliances, and piles of household junk take up space you could be using. Dumpstar handles the lifting, loading, and hauling so you don't have to. Tell us what needs to go, and we'll help you clear it out and reclaim your space.",
    },
    benefits: [
      {
        title: "We Do the Heavy Lifting",
        description: "Furniture, appliances, and bulky items are loaded and hauled away for you.",
      },
      {
        title: "Homes, Job Sites & Businesses",
        description: "Junk removal for homeowners, contractors, property managers, and businesses.",
      },
      {
        title: "Open 24/7",
        description: "Reach out any time, any day of the week to request a quote.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: PHOTOS.drivewayBefore.src, alt: PHOTOS.drivewayBefore.alt, label: "Before" },
      { src: PHOTOS.drivewayAfter.src, alt: PHOTOS.drivewayAfter.alt, label: "After" },
      {
        src: PHOTOS.garageCleanoutBefore.src,
        alt: PHOTOS.garageCleanoutBefore.alt,
        label: "Before",
      },
      {
        src: PHOTOS.garageCleanoutAfter.src,
        alt: PHOTOS.garageCleanoutAfter.alt,
        label: "After",
      },
    ],
    faqs: [
      {
        q: "What kinds of items can you remove?",
        a: "We remove unwanted furniture, household junk, appliances, and general debris. If you're unsure about a specific item, mention it when you request a quote.",
      },
      {
        q: "How do I schedule junk removal?",
        a: "Call (734) 747-0543 or send a quote request. Share what needs to go and where the property is, and we'll follow up with next steps.",
      },
    ],
    heroImage: IMAGES.garageDebrisBeforeWide,
    heroAlt: "Garage floor covered in broken drywall, cardboard, toilets, and black trash bags",
    heroPosition: "center 55%",
    cardImage: IMAGES.garageDebrisBefore,
  },

  dumpsterRental: {
    slug: "dumpster-rentals",
    path: "/services/dumpster-rentals",
    title: "Dumpster Rentals",
    eyebrow: "Dumpster Rental Services",
    shortDescription:
      "Convenient 15-yard dumpster trailer rentals for renovations, cleanouts, construction projects, and property cleanup.",
    seoTitle: "15-Yard Dumpster Rental in Northville, MI | Dumpstar",
    seoDescription:
      "Rent a 15-yard dumpster trailer for renovations, cleanouts, and construction projects in Northville and surrounding Metro Detroit communities. Open 24/7. Free quote.",
    explanation: {
      title: "A Dumpster Trailer for Your Project",
      body: "When a project produces more debris than you can handle, a dumpster makes it manageable. Our 15-yard dumpster trailers are a practical fit for renovations, garage and basement cleanouts, construction projects, and general property cleanup. Share your project details and we'll help you figure out the next step.",
    },
    benefits: [
      {
        title: "15-Yard Dumpster Trailers",
        description:
          "A practical size for renovations, cleanouts, construction projects, and property cleanup.",
      },
      {
        title: "Fits Many Project Types",
        description:
          "Good for homeowners tackling a cleanout, contractors managing debris, and property managers.",
      },
      {
        title: "Simple to Request",
        description:
          "Call or send a quote request any time. We're open 24 hours a day, 7 days a week.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: PHOTOS.trailerSky.src, alt: PHOTOS.trailerSky.alt, label: "15-Yard Dumpster Trailer" },
      {
        src: PHOTOS.trailerTownhomes.src,
        alt: PHOTOS.trailerTownhomes.alt,
        label: "Dumpster Trailer On Site",
      },
      {
        src: PHOTOS.trailerDriveway.src,
        alt: PHOTOS.trailerDriveway.alt,
        label: "Driveway Placement",
      },
      { src: PHOTOS.trailerFall.src, alt: PHOTOS.trailerFall.alt, label: "Dumpster Trailer" },
    ],
    faqs: [
      {
        q: "How big is the dumpster?",
        a: "Our dumpster rentals are 15-yard dumpster trailers.",
      },
      {
        q: "How do I reserve a dumpster?",
        a: "Call us or submit the quote form with your project location and details. We'll follow up to confirm the details of your rental.",
      },
    ],
    heroImage: IMAGES.trailerTownhomesWide,
    heroAlt: "Black dump trailer parked in front of brick and siding townhomes",
    heroPosition: "center 60%",
    cardImage: IMAGES.trailerTownhomes,
  },

  cleanouts: {
    slug: "garage-property-cleanouts",
    path: "/services/garage-property-cleanouts",
    title: "Garage & Property Cleanouts",
    eyebrow: "Cleanout Services",
    shortDescription:
      "Complete cleanout services for garages, basements, homes, rental properties, and commercial spaces.",
    seoTitle: "Garage & Property Cleanouts in Northville, MI | Dumpstar",
    seoDescription:
      "Garage, basement, home, rental property, and commercial cleanouts in Northville, Novi, Livonia, Plymouth, Canton, and South Lyon, MI. Open 24/7. Free quote.",
    explanation: {
      title: "From Packed to Cleared",
      body: "A garage or basement that's been filling up for years can feel impossible to tackle. Our cleanout service takes on the whole job, from garages and basements to entire homes, rental properties, and commercial spaces, so you can take your space back. Our before-and-after photos show what a finished cleanout looks like.",
    },
    benefits: [
      {
        title: "Start to Finish",
        description: "We handle the clearing and hauling so you don't have to.",
      },
      {
        title: "Any Kind of Space",
        description: "Garages, basements, homes, rental properties, and commercial spaces.",
      },
      {
        title: "Real Results",
        description: "See the transformation in before-and-after photos from completed jobs.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: PHOTOS.largeGarageBefore.src, alt: PHOTOS.largeGarageBefore.alt, label: "Before" },
      { src: PHOTOS.largeGarageAfter.src, alt: PHOTOS.largeGarageAfter.alt, label: "After" },
      {
        src: PHOTOS.garageContentsBefore.src,
        alt: PHOTOS.garageContentsBefore.alt,
        label: "Before",
      },
      { src: PHOTOS.garageFloorAfter.src, alt: PHOTOS.garageFloorAfter.alt, label: "After" },
    ],
    faqs: [
      {
        q: "What spaces can you clean out?",
        a: "Garages, basements, homes, rental properties, and commercial spaces.",
      },
      {
        q: "Do I need to sort everything first?",
        a: "Let us know what's staying and what's going when you request a quote, and we'll go over how to handle the job.",
      },
    ],
    heroImage: IMAGES.largeGarageBeforeWide,
    heroAlt: "Large garage packed with furniture, tools, storage bins, and household items",
    heroPosition: "center 50%",
    cardImage: IMAGES.largeGarageBefore,
  },

  demolition: {
    slug: "demolition-debris-removal",
    path: "/services/demolition-debris-removal",
    title: "Demolition & Debris Removal",
    eyebrow: "Demolition Cleanup Services",
    shortDescription:
      "Demolition-related cleanup and hauling services for renovation and property improvement projects.",
    seoTitle: "Demolition Cleanup & Debris Removal in Northville, MI | Dumpstar",
    seoDescription:
      "Demolition cleanup and debris hauling for renovation and property improvement projects in Northville, Novi, Livonia, Plymouth, Canton, and South Lyon, MI. Open 24/7.",
    explanation: {
      title: "Clear the Debris, Keep the Project Moving",
      body: "Renovations and property improvement projects leave a lot behind. Dumpstar handles demolition-related cleanup and hauling so the mess doesn't slow you down. Tell us about your project and we'll help you plan the next step.",
    },
    benefits: [
      {
        title: "Built for Renovations",
        description: "Cleanup and hauling for renovation and property improvement projects.",
      },
      {
        title: "Pair With a Dumpster",
        description:
          "Need somewhere to put it all? Ask about renting a 15-yard dumpster trailer for your project.",
      },
      {
        title: "Contractors & Homeowners",
        description: "Straightforward help for contractors, homeowners, and property managers.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: PHOTOS.basementBefore.src, alt: PHOTOS.basementBefore.alt, label: "Before" },
      { src: PHOTOS.basementAfter.src, alt: PHOTOS.basementAfter.alt, label: "After" },
      { src: PHOTOS.garageDebrisBefore.src, alt: PHOTOS.garageDebrisBefore.alt, label: "Before" },
      { src: PHOTOS.garageDebrisAfter.src, alt: PHOTOS.garageDebrisAfter.alt, label: "After" },
    ],
    faqs: [
      {
        q: "Is this demolition work or cleanup?",
        a: "This service covers demolition-related cleanup and hauling for renovation and property improvement projects. Tell us about your project when you request a quote and we'll confirm how we can help.",
      },
      {
        q: "Can I combine this with a dumpster rental?",
        a: "Many projects pair well with a dumpster. Ask about our 15-yard dumpster trailer rentals when you request a quote.",
      },
    ],
    heroImage: IMAGES.basementBeforeWide,
    heroAlt: "Wood-paneled basement room with a pile of broken wood and debris on the floor",
    heroPosition: "center 60%",
    cardImage: IMAGES.basementBefore,
  },

  materialPickup: {
    slug: "material-pickup-delivery",
    path: "/services/material-pickup-delivery",
    title: "Material Pickup & Delivery",
    eyebrow: "Pickup & Delivery Services",
    shortDescription:
      "Pickup and transportation of landscaping materials, construction materials, and other bulk items.",
    seoTitle: "Material Pickup & Delivery in Northville, MI | Dumpstar",
    seoDescription:
      "Pickup and delivery of landscaping materials, construction materials, and bulk items in Northville, Novi, Livonia, Plymouth, Canton, and South Lyon, MI. Open 24/7.",
    explanation: {
      title: "Bulk Hauling Without the Hassle",
      body: "Moving bulk materials is easier with the right trailer and someone to handle the load. Dumpstar picks up and transports landscaping materials, construction materials, and other bulk items so your project keeps moving.",
    },
    benefits: [
      {
        title: "Landscaping & Construction",
        description: "Pickup and transportation of landscaping and construction materials.",
      },
      {
        title: "Bulk Items Welcome",
        description:
          "Have something large or heavy to move? Tell us about it in your quote request.",
      },
      {
        title: "Open 24/7",
        description: "Reach out any time, any day of the week to get started.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      { src: PHOTOS.trailerFall.src, alt: PHOTOS.trailerFall.alt, label: "Dump Trailer" },
      { src: PHOTOS.trailerSky.src, alt: PHOTOS.trailerSky.alt, label: "Loaded Trailer" },
      { src: PHOTOS.trailerDriveway.src, alt: PHOTOS.trailerDriveway.alt, label: "On Site" },
      {
        src: PHOTOS.trailerTownhomes.src,
        alt: PHOTOS.trailerTownhomes.alt,
        label: "Ready to Haul",
      },
    ],
    faqs: [
      {
        q: "What can you pick up or deliver?",
        a: "Landscaping materials, construction materials, and other bulk items. Describe what you need moved when you request a quote.",
      },
      {
        q: "How do I set up a pickup or delivery?",
        a: "Call (734) 747-0543 or send a quote request with the pickup location, destination, and what's being moved.",
      },
    ],
    heroImage: IMAGES.trailerFallWide,
    heroAlt: "Black dump trailer parked on a driveway surrounded by fall foliage",
    heroPosition: "center 50%",
    cardImage: IMAGES.trailerFall,
  },
} satisfies Record<string, ServiceConfig>;

// Apply per-site title/description overrides from site.config.json.
export const SERVICES = Object.fromEntries(
  Object.entries(BASE_SERVICES).map(([key, base]) => {
    const o = siteConfig.services.overrides[key as ServiceKey] ?? {};
    return [
      key,
      {
        ...base,
        ...(o.title ? { title: o.title } : {}),
        ...(o.shortDescription ? { shortDescription: o.shortDescription } : {}),
      },
    ];
  }),
) as Record<ServiceKey, ServiceConfig>;

export function isServiceEnabled(key: ServiceKey) {
  return siteConfig.services.enabled.includes(key);
}

// Ordered list for the header dropdown, footer links, and the home services grid.
// Only services enabled in site.config.json appear.
export const SERVICE_LIST: ServiceConfig[] = siteConfig.services.enabled.map((k) => SERVICES[k]);
