// ───────────────────────────────────────────────────────────────────────────
// Default copy for the site. Any field can be overridden in
// site.config.json → content. Do not add business facts, licenses, years in
// business, ratings, or reviews here.
// ───────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONTENT = {
  hero: {
    eyebrow: "Junk Removal & Dumpster Rentals",
    tagline: "Quality Rental & Removal",
    subheadline:
      "Junk removal, dumpster rentals, property cleanouts, and debris hauling, making it simple to clear your property.",
  },
  about: {
    eyebrow: "About Us",
    title: "Locally Operated. Straightforward Service.",
    body: "We're a locally operated junk removal and dumpster rental business focused on dependable service and straightforward communication.\n\nOur goal is simple: help you reclaim your space.",
    badgeTitle: "Locally Operated",
    badgeText: "dependable, straightforward service",
  },
  faqs: [
    {
      q: "What services do you offer?",
      a: "We offer junk removal, dumpster rentals, garage and property cleanouts, demolition and debris removal, and material pickup and delivery.",
    },
    {
      q: "How do I get a quote?",
      a: "Fill out the quote form on this page or give us a call. Tell us what you need, where the project is, and any details about the job, and we'll take it from there.",
    },
    {
      q: "What size are your dumpster rentals?",
      a: "Our dumpster rentals are 15-yard dumpster trailers, a practical fit for renovations, cleanouts, construction projects, and property cleanup.",
    },
    {
      q: "Who do you work with?",
      a: "We work with homeowners, contractors, property managers, and businesses.",
    },
  ],
  footerBlurb:
    "Professional junk removal, dumpster rentals, property cleanouts, demolition cleanup, and material pickup and delivery. Locally operated and open 24 hours a day, 7 days a week.",
  finalCta: {
    title: "Ready to Reclaim Your Space?",
    body: "Tell us about your cleanout, cleanup, or rental and we'll help you take the next step.",
  },
  seo: {
    description:
      "Junk removal, 15-yard dumpster rentals, and garage and property cleanouts. Open 24/7. Get a free quote today.",
  },
} as const;

export const DEFAULT_IMAGES = {
  hero: "/images/dumpster-trailer-sky-wide.webp",
  about: "/images/garage-floor-after.webp",
  trailerSky: "/images/dumpster-trailer-sky.webp",
  trailerDriveway: "/images/dumpster-trailer-driveway.webp",
  trailerFall: "/images/dumpster-trailer-fall.webp",
  trailerTownhomes: "/images/dumpster-trailer-townhomes.webp",
  drivewayBefore: "/images/garage-driveway-before.webp",
  drivewayAfter: "/images/garage-driveway-after.webp",
  basementBefore: "/images/basement-before.webp",
  basementAfter: "/images/basement-after.webp",
  largeGarageBefore: "/images/large-garage-before.webp",
  largeGarageAfter: "/images/large-garage-after.webp",
  garageCleanoutBefore: "/images/garage-cleanout-before.webp",
  garageCleanoutAfter: "/images/garage-cleanout-after.webp",
  garageDebrisBefore: "/images/garage-debris-before.webp",
  garageDebrisAfter: "/images/garage-debris-after.webp",
  garageContentsBefore: "/images/garage-contents-before.webp",
  garageFloorAfter: "/images/garage-floor-after.webp",
  heroTrailerWide: "/images/dumpster-trailer-sky-wide.webp",
  trailerFallWide: "/images/dumpster-trailer-fall-wide.webp",
  trailerTownhomesWide: "/images/dumpster-trailer-townhomes-wide.webp",
  basementBeforeWide: "/images/basement-before-wide.webp",
  largeGarageBeforeWide: "/images/large-garage-before-wide.webp",
  garageDebrisBeforeWide: "/images/garage-debris-before-wide.webp",
} as const;
