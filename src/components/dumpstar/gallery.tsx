import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
  type Photo,
} from "@/lib/gallery-data";
import { SectionHeading } from "./section-heading";

type Filter = "All" | GalleryCategory;
const FILTERS: Filter[] = ["All", ...GALLERY_CATEGORIES];

function Pill({ children, tone }: { children: string; tone: "before" | "after" }) {
  return (
    <span
      className={cn(
        "absolute bottom-3 left-3 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider shadow-md",
        tone === "before" ? "bg-primary text-white" : "bg-accent text-primary",
      )}
    >
      {children}
    </span>
  );
}

function Frame({ photo, className }: { photo: Photo; className?: string }) {
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      width={900}
      height={1125}
      loading="lazy"
      className={cn("aspect-[4/5] w-full object-cover", className)}
    />
  );
}

function Card({ item }: { item: GalleryItem }) {
  if (item.kind === "pair") {
    return (
      <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_30px_-18px_rgba(0,0,0,0.3)] sm:col-span-2">
        <div className="relative grid grid-cols-2 gap-0.5 bg-primary">
          <div className="relative overflow-hidden">
            <Frame photo={item.before} />
            {!item.labeled && <Pill tone="before">Before</Pill>}
          </div>
          <div className="relative overflow-hidden">
            <Frame photo={item.after} />
            {!item.labeled && <Pill tone="after">After</Pill>}
          </div>
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-highlight text-white shadow-lg ring-2 ring-white"
          >
            <ArrowRight className="size-4" />
          </span>
        </div>
        <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="text-sm font-semibold text-primary">{item.title}</span>
          <span className="shrink-0 rounded-full bg-accent/25 px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-accent-ink">
            Before &amp; After
          </span>
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-border bg-primary shadow-[0_2px_20px_-14px_rgba(0,0,0,0.3)]">
      <Frame
        photo={item.photo}
        className="transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent" />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-white">
        <span className="h-0.5 w-5 bg-highlight" />
        <span className="text-sm font-semibold tracking-wide">{item.title}</span>
      </figcaption>
    </figure>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const items =
    filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.categories.includes(filter));

  return (
    <section id="our-work" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="See the Difference a Cleanout Makes"
          description="Real before-and-after results and dumpster trailers from Dumpstar projects."
        />

        <div
          role="group"
          aria-label="Filter projects"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                filter === f
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-card text-foreground/80 hover:border-accent hover:text-accent-ink",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
          Photos from real Dumpstar projects
        </p>
      </div>
    </section>
  );
}
