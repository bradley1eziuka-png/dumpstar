import { ArrowRight } from "lucide-react";

import { SERVICE_LIST } from "@/lib/services-data";
import { SectionHeading } from "./section-heading";

// Homepage services grid, every enabled service, each linking to its own
// dedicated service page via "Learn More". Cards are centered so a final
// short row (5 services = 3 + 2) stays balanced.
export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Junk Removal, Dumpster Rentals & Cleanouts"
          description="Straightforward cleanup and hauling for homeowners, contractors, property managers, and businesses."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-6 lg:gap-8">
          {SERVICE_LIST.map((service) => (
            <article
              key={service.title}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary">
                <img
                  src={service.cardImage}
                  alt={service.heroAlt}
                  width={900}
                  height={1125}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ objectPosition: service.heroPosition ?? "center" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold tracking-tight text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <a
                  href={service.path}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink transition-all hover:gap-2.5"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
