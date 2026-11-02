import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em]",
            centered && "justify-center",
          )}
        >
          <span className="h-0.5 w-7 bg-highlight" />
          <span className={light ? "text-gold-soft" : "text-accent-ink"}>{eyebrow}</span>
          {centered && <span className="h-0.5 w-7 bg-highlight" />}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.7rem]",
          light ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
