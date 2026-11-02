// SEO helpers: per-page head tags (title, description, canonical, Open Graph,
// Twitter) and LocalBusiness structured data, all driven by site.config.json.
import { DEFAULT_CONTENT } from "@/config/defaults";
import { siteConfig } from "@/config";
import { BUSINESS_NAME, BUSINESS_PHONE, LOCATION_LABEL, SITE_URL } from "./site-config";
import { IMAGES } from "./site-images";
import { SERVICE_LIST } from "./services-data";

const { business, seo } = siteConfig;

function absolute(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL ? `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}` : pathOrUrl;
}

export const HOME_TITLE =
  seo.title ||
  `Junk Removal & Dumpster Rentals${LOCATION_LABEL ? ` in ${LOCATION_LABEL}` : ""} | ${BUSINESS_NAME}`;
export const HOME_DESCRIPTION = seo.description || DEFAULT_CONTENT.seo.description;

export function pageHead({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const ogImage = absolute(seo.ogImage || image || IMAGES.hero);
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : "";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BUSINESS_NAME },
      { property: "og:locale", content: seo.locale },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}

// schema.org LocalBusiness (no narrower type exists for junk removal). Only fields the client
// actually provided are emitted, nothing is invented.
export function localBusinessJsonLd() {
  const a = business.address;
  const hasAddress = Boolean(a.street || a.city || a.state || a.zip);
  const sameAs = Object.values(business.social).filter(Boolean);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    telephone: BUSINESS_PHONE,
    image: absolute(IMAGES.hero),
    ...(SITE_URL && { url: SITE_URL }),
    ...(business.email && { email: business.email }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        ...(a.street && { streetAddress: a.street }),
        ...(a.city && { addressLocality: a.city }),
        ...(a.state && { addressRegion: a.state }),
        ...(a.zip && { postalCode: a.zip }),
        addressCountry: "US",
      },
    }),
    ...(business.serviceAreas.length > 0 && {
      areaServed: business.serviceAreas.map((name) => ({ "@type": "City", name })),
    }),
    ...(business.open24x7 && {
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${BUSINESS_NAME} services`,
      itemListElement: SERVICE_LIST.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.shortDescription,
          ...(SITE_URL && { url: `${SITE_URL}${svc.path}` }),
        },
      })),
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
  return JSON.stringify(data);
}
