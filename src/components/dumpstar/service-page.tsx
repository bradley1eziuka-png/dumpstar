import { ArrowRight, Check, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import type { ServiceConfig } from "@/lib/services-data";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// Generates a complete service page from a single ServiceConfig so all five
// service pages share one cohesive layout, voice, and visual system.
export function ServicePage({ service }: { service: ServiceConfig }) {
  return (
    <>
      {/* ── Service hero ─────────────────────────────────────────────── */}
      <section id="top" className="relative isolate flex min-h-[68vh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-primary">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="h-full w-full object-cover"
            style={{ objectPosition: service.heroPosition ?? "center" }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/75 via-primary/45 to-primary/70" />
          <div className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary/25 to-primary/25" />
        </div>

        <div className="mx-auto w-full max-w-4xl px-4 py-32 text-center sm:px-6 sm:py-36 lg:py-40">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            {service.eyebrow}
          </p>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {service.shortDescription}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
              Get a Free Quote
              <ArrowRight className="size-4" />
            </a>
            <a
              href={BUSINESS_PHONE_TEL}
              className={ctaButton({ variant: "outlineLight", size: "lg" })}
            >
              <Phone className="size-4" />
              Call {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── Explanation ──────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="The Service" title={service.explanation.title} />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.explanation.body}
            </p>
            <div className="mt-8">
              <a href="/#estimate" className={ctaButton({ variant: "solid", size: "md" })}>
                Get a Free Quote
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
          {(() => {
            const feature = service.gallery[1] ?? service.gallery[0];
            return (
              <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]">
                <img
                  src={feature!.src}
                  alt={feature!.alt}
                  width={900}
                  height={1125}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Dumpstar"
            title={`Why Choose Dumpstar for ${service.title}`}
            description="Straightforward service from a locally operated Northville, Michigan business."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:gap-8">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.3)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm">
                  <Check className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="A Simple Path to a Cleared Space"
            description="Three straightforward steps from first call to a finished job."
          />
          <div className="relative mt-16">
            <div
              className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
              aria-hidden
            />
            <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
              {service.process.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <span className="flex size-14 items-center justify-center rounded-full border-2 border-accent bg-background font-display text-xl font-bold text-accent-ink shadow-sm">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Dumpstar in Action"
            description="Photos from real Dumpstar projects."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {service.gallery.map((item) => (
              <figure
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-border shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={1125}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/75 via-transparent to-transparent" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-3 text-white sm:p-4">
                  <span className="h-0.5 w-5 bg-highlight" />
                  <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Questions & Answers"
            title={`${service.title} FAQ`}
            description="Straightforward answers to help you feel ready to start your project."
          />
          <Accordion type="single" collapsible className="mt-12 space-y-4">
            {service.faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-5 shadow-[0_2px_16px_-12px_rgba(0,0,0,0.14)]"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold tracking-tight text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section
        id="estimate-cta"
        className="relative isolate scroll-mt-24 overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src={service.heroImage}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/90 to-primary/75" />
        </div>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Reclaim Your Space?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Tell us about your project and we'll help you take the next step. We're open 24 hours a
            day, 7 days a week.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
              Get a Free Quote
              <ArrowRight className="size-4" />
            </a>
            <a
              href={BUSINESS_PHONE_TEL}
              className={ctaButton({ variant: "outlineLight", size: "lg" })}
            >
              <Phone className="size-4" />
              Call {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
