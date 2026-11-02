import { ArrowRight, Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, COPY } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { ctaButton } from "./buttons";
import { EstimateFormCard } from "./estimate-form";

// Two-column hero: eyebrow + headline + tagline + description + CTAs on the
// left, quote form card on the right. Stacks vertically on mobile in the
// order: headline/description → CTAs → form.
export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex items-center overflow-hidden lg:min-h-[92vh]"
    >
      <div className="absolute inset-0 -z-10 bg-primary">
        <img
          src={IMAGES.heroTrailerWide}
          alt="Black Dumpstar dump trailer parked on a driveway under a bright blue sky"
          width={1290}
          height={1720}
          className="h-full w-full object-cover object-[center_88%]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/70 via-primary/30 to-primary/55" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-primary/35 to-primary/10 max-lg:from-primary/60 max-lg:via-primary/45 max-lg:to-primary/45" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* Left column */}
          <div className="max-w-xl">
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
              {COPY.hero.eyebrow}
            </p>

            <h1 className="font-display text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white [word-break:break-word] sm:text-5xl lg:text-[3.6rem]">
              {COPY.hero.headline}
            </h1>

            <p className="mt-4 font-display text-lg font-semibold uppercase tracking-[0.12em] text-accent sm:text-xl">
              {COPY.hero.tagline}
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              {COPY.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
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

          {/* Right column, quote form card */}
          <div className="lg:pl-2">
            <EstimateFormCard id="estimate" />
          </div>
        </div>
      </div>
    </section>
  );
}
