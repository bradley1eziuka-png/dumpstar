import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Call or send a quote request with your project details and location.",
  },
  {
    number: "02",
    title: "Get Your Free Quote",
    description: "We'll review the details and talk through the next steps with you.",
  },
  {
    number: "03",
    title: "Reclaim Your Space",
    description: "With a plan in place, we get the job done so you can move on.",
  },
];

export function Process() {
  return (
    <section className="section-pad bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple Path to a Cleared Space"
          description="Three straightforward steps from first call to a cleared-out property."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
            aria-hidden
          />
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {STEPS.map((step) => (
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
  );
}
