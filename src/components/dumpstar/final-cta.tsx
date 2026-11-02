import { ArrowRight, Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, COPY } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { ctaButton } from "./buttons";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.heroTrailerWide}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover object-[center_62%] opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/80 to-primary/65" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 text-center sm:py-24 lg:py-28">
        <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {COPY.finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
          {COPY.finalCta.body}
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
            Call Now
          </a>
        </div>

        <p className="mt-8 text-sm font-medium text-white/60">
          Or call us directly at{" "}
          <a
            href={BUSINESS_PHONE_TEL}
            className="font-semibold text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {BUSINESS_PHONE}
          </a>
        </p>
      </div>
    </section>
  );
}
