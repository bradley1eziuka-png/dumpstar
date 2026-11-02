import { ArrowRight, Check } from "lucide-react";

import { COPY } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

const WHO_WE_SERVE = ["Homeowners", "Contractors", "Property Managers", "Businesses"];

// About section. Body copy may contain blank lines → separate paragraphs.
export function Trust() {
  const paragraphs = COPY.about.body.split(/\n\s*\n/);
  return (
    <section id="about" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]">
            <img
              src={IMAGES.about}
              alt="A clear, empty garage with a speckled epoxy-style floor and storage shelving after a cleanout"
              width={900}
              height={1125}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-[center_70%]"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border-l-4 border-l-highlight bg-primary px-6 py-5 shadow-xl sm:block">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {COPY.about.badgeTitle}
            </p>
            <p className="mt-1 text-sm text-white/80">{COPY.about.badgeText}</p>
          </div>
        </div>

        <div>
          <SectionHeading align="left" eyebrow={COPY.about.eyebrow} title={COPY.about.title} />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {WHO_WE_SERVE.map((who) => (
              <li
                key={who}
                className="flex items-center gap-2.5 text-sm font-semibold text-primary"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-accent/25 text-accent-ink">
                  <Check className="size-3.5" />
                </span>
                {who}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="/#estimate" className={ctaButton({ variant: "solid", size: "md" })}>
              Get a Free Quote
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
