import { MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";

// Homepage "Service Areas" section, renders the towns listed in
// site.config.json → business.serviceAreas. Hidden if none are configured.
export function ServiceAreas() {
  const areas = siteConfig.business.serviceAreas;
  if (areas.length === 0) return null;
  return (
    <section id="service-areas" className="section-pad scroll-mt-24 bg-brand-dark text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          light
          eyebrow="Service Areas"
          title="Serving Northville & Surrounding Communities"
          description="Junk removal, dumpster rentals, and cleanouts across these Michigan communities."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {areas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 py-4 text-sm font-semibold text-white sm:px-5 sm:text-base"
            >
              <MapPin className="size-5 shrink-0 text-white/70" />
              {area}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-9 max-w-xl text-center text-[0.95rem] leading-relaxed text-white/80">
          Nearby but don't see your town listed? Give us a call at{" "}
          <a
            href={BUSINESS_PHONE_TEL}
            className="inline-flex items-center gap-1.5 font-semibold text-white underline underline-offset-4 hover:text-accent"
          >
            <Phone className="size-3.5" />
            {BUSINESS_PHONE}
          </a>{" "}
          and ask.
        </p>
      </div>
    </section>
  );
}
