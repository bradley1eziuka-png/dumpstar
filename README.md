# Dumpstar Quality Rental & Removal website

Junk removal and dumpster rental site for Dumpstar (Northville, MI). Built on a TanStack Start +
Tailwind template.

```bash
npm install
npm run dev        # preview
npm run build      # production build (writes sitemap first, if seo.siteUrl is set)
npm run typecheck && npm run lint
```

Config: `src/config/site.config.json` (validated by `src/config/schema.ts`). Default copy:
`src/config/defaults.ts`. Services: `src/lib/services-data.ts`. Gallery photos: `src/lib/gallery-data.ts`.
Brand colors (sampled from the logo) live in `src/styles.css`.

## Before launch

- **Quote form**, `form.provider` is `demo`, so submissions are NOT delivered. Set `form.provider`
  to `formspree` + `formspreeId`, or `ghl-webhook` + `webhookUrl` in `site.config.json`.
- **Domain**, set `seo.siteUrl` (no trailing slash) so canonical URLs, Open Graph URLs, and the
  sitemap are generated.
- **Street address**, intentionally not shown. Add `business.address.street`/`zip` only once the
  location is confirmed eligible to display publicly.
