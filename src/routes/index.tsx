import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/dumpstar/site-layout";
import { Hero } from "@/components/dumpstar/hero";
import { Services } from "@/components/dumpstar/services";
import { WhyChooseUs } from "@/components/dumpstar/why-choose-us";
import { Gallery } from "@/components/dumpstar/gallery";
import { Process } from "@/components/dumpstar/process";
import { Trust } from "@/components/dumpstar/trust";
import { Faq } from "@/components/dumpstar/faq";
import { FinalCta } from "@/components/dumpstar/final-cta";
import { ServiceAreas } from "@/components/dumpstar/service-areas";
import { ContactSection } from "@/components/dumpstar/contact-section";
import { Testimonials } from "@/components/dumpstar/testimonials";
import { HOME_DESCRIPTION, HOME_TITLE, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Trust />
      <Gallery />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <Faq />
      <FinalCta />
      <ContactSection />
    </SiteLayout>
  );
}
