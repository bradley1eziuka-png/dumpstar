import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/dumpstar/site-layout";
import { ServicePage } from "@/components/dumpstar/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { pageHead } from "@/lib/seo";

const service = SERVICES.materialPickup;

export const Route = createFileRoute("/services/material-pickup-delivery")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("materialPickup")) throw notFound();
  },
  head: () =>
    pageHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: service.path,
      image: service.heroImage,
    }),
  component: MaterialPickupPage,
});

function MaterialPickupPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
