import { Clock, MapPin, MessagesSquare, Truck } from "lucide-react";

import { SectionHeading } from "./section-heading";

const REASONS = [
  {
    icon: Clock,
    title: "Open 24/7",
    description:
      "We're open 24 hours a day, 7 days a week, so you can reach out whenever it works for you.",
  },
  {
    icon: MessagesSquare,
    title: "Straightforward Communication",
    description: "Know what to expect from your first call through the finished job.",
  },
  {
    icon: Truck,
    title: "Equipped for Big Jobs",
    description: "15-yard dumpster trailers and hauling capacity make large cleanups manageable.",
  },
  {
    icon: MapPin,
    title: "Locally Operated",
    description:
      "Based in Northville, Michigan and serving homeowners, contractors, property managers, and businesses nearby.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-pad scroll-mt-24 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Dumpstar"
          title="Clearing Your Space Shouldn't Be a Hassle"
          description="Dependable service, clear communication, and the right equipment for the job."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.3)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-primary">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
