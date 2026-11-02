import { Truck } from "lucide-react";

import { cn } from "@/lib/utils";
import { BUSINESS_NAME, LOGO } from "@/lib/site-config";

// Business logo mark (the round Dumpstar badge). With no logo set in
// site.config.json → branding.logo, a simple truck mark is shown instead.
export function Logo({ className }: { className?: string }) {
  if (LOGO.src) {
    return (
      <img
        src={LOGO.src}
        alt={LOGO.alt || `${BUSINESS_NAME} logo`}
        width={320}
        height={318}
        className={cn(
          "size-14 shrink-0 rounded-full object-contain ring-1 ring-white/15",
          className,
        )}
      />
    );
  }
  return (
    <span
      className={cn(
        "flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-accent shadow-sm",
        className,
      )}
    >
      <Truck className="size-6" />
    </span>
  );
}
