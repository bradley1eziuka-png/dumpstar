import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Info } from "lucide-react";

import { FORM_IS_DEMO, submitEstimate } from "@/lib/form-submit";
import { siteConfig } from "@/config";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { ctaButton } from "./buttons";

const SERVICE_OPTIONS = [
  "Junk Removal",
  "Dumpster Rental",
  "Garage / Property Cleanout",
  "Demolition / Debris Removal",
  "Material Pickup & Delivery",
  "Other",
];

type Values = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  details: string;
};

const EMPTY: Values = { name: "", phone: "", email: "", service: "", location: "", details: "" };

// Quote form card. Used in the hero on the homepage.
// Delivery is handled by src/lib/form-submit.ts (Formspree, GHL webhook, or
// demo). The success state only appears after the provider confirms receipt.
export function EstimateFormCard({ id, className }: { id?: string; className?: string }) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "demo" | "error">(
    "idle",
  );
  const [honeypot, setHoneypot] = useState("");

  function update<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (values.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please select a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const result = await submitEstimate(values, honeypot);
    if (result.status === "success") {
      setStatus("success");
      setValues(EMPTY);
    } else if (result.status === "demo") {
      setStatus("demo");
    } else {
      setStatus("error");
    }
  }

  const fieldBase =
    "h-12 w-full min-w-0 rounded-lg border bg-white px-4 text-base text-foreground transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40";
  const fieldOk = "border-border focus:border-accent";
  const fieldErr = "border-destructive focus:border-destructive";
  const labelCls = "mb-1.5 block text-sm font-semibold text-primary";
  const star = <span className="text-highlight">*</span>;

  return (
    <div
      id={id}
      className={
        "scroll-mt-24 rounded-3xl border border-border bg-white p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:p-7" +
        (className ? ` ${className}` : "")
      }
    >
      <div className="mb-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">
          Free Quote
        </span>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          Get a Free Quote
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
          Tell us about your junk removal, cleanout, or dumpster rental and we'll take it from
          there.
        </p>
      </div>

      {status === "demo" ? (
        <div
          role="status"
          className="flex flex-col items-center rounded-2xl border border-border bg-secondary/50 px-6 py-10 text-center"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-accent/20 text-accent-ink">
            <Info className="size-8" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary">
            Demo Mode, Not Sent
          </h3>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            This preview form isn't connected to an inbox yet, so your request was not delivered.
            Please call{" "}
            <a href={BUSINESS_PHONE_TEL} className="font-semibold text-primary underline">
              {BUSINESS_PHONE}
            </a>{" "}
            instead.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-accent-ink hover:underline"
          >
            Back to the form
          </button>
        </div>
      ) : status === "success" ? (
        <div className="flex flex-col items-center rounded-2xl border border-border bg-secondary/50 px-6 py-10 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-accent/20 text-accent-ink">
            <CheckCircle2 className="size-8" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary">
            Thank You, We'll Be in Touch
          </h3>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            Your quote request has been received. We'll reach out shortly to learn more about your
            project.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Need to reach us sooner?{" "}
            <a
              href={BUSINESS_PHONE_TEL}
              className="font-semibold text-primary hover:text-accent-ink"
            >
              Call {BUSINESS_PHONE}
            </a>
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-accent-ink hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="relative space-y-3.5">
          {/* Honeypot: hidden from people, tempting to bots. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="est-website">Leave this field empty</label>
            <input
              id="est-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <div>
              <label htmlFor="est-name" className={labelCls}>
                Full Name {star}
              </label>
              <input
                id="est-name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your full name"
                className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="est-phone" className={labelCls}>
                Phone Number {star}
              </label>
              <input
                id="est-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(555) 555-5555"
                className={`${fieldBase} ${errors.phone ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <div>
              <label htmlFor="est-email" className={labelCls}>
                Email Address
              </label>
              <input
                id="est-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="est-service" className={labelCls}>
                Service Needed {star}
              </label>
              <select
                id="est-service"
                value={values.service}
                onChange={(e) => update("service", e.target.value)}
                className={`${fieldBase} ${errors.service ? fieldErr : fieldOk} cursor-pointer`}
                aria-invalid={!!errors.service}
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.service}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="est-location" className={labelCls}>
              Project Location
            </label>
            <input
              id="est-location"
              type="text"
              autoComplete="address-level2"
              value={values.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="City or address, e.g. Novi, MI"
              className={`${fieldBase} ${fieldOk}`}
            />
          </div>

          <div>
            <label htmlFor="est-details" className={labelCls}>
              Project Details
            </label>
            <textarea
              id="est-details"
              rows={3}
              value={values.details}
              onChange={(e) => update("details", e.target.value)}
              placeholder="What needs to go, how much, and when you'd like it done."
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className={ctaButton({ variant: "solid", size: "lg" }) + " w-full"}
          >
            {status === "submitting" ? "Sending…" : "Get My Free Quote"}
          </button>

          {status === "error" && (
            <p role="alert" className="text-center text-sm font-medium text-destructive">
              We couldn't send your request. Please try again or call us at{" "}
              <a href={BUSINESS_PHONE_TEL} className="underline">
                {BUSINESS_PHONE}
              </a>
              .
            </p>
          )}

          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <Clock className="size-3.5 text-accent-ink" />
            Open 24 hours, 7 days a week
          </p>
          {FORM_IS_DEMO && siteConfig.form.showDemoNotice && (
            <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
              Demo mode, form not connected
            </p>
          )}
        </form>
      )}
    </div>
  );
}
