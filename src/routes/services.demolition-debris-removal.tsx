import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/dumpstar/site-layout";
import { ServicePage } from "@/components/dumpstar/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { pageHead } from "@/lib/seo";

const service = SERVICES.demolition;

export const Route = createFileRoute("/services/demolition-debris-removal")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("demolition")) throw notFound();
  },
  head: () =>
    pageHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: service.path,
      image: service.heroImage,
    }),
  component: DemolitionPage,
});

function DemolitionPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
