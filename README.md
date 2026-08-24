# myHoneymoon.gr

Next.js rebuild of [myhoneymoon.gr](https://www.myhoneymoon.gr) — Greek-language honeymoon planning for Greek couples travelling abroad.

The site replaces a WordPress / Divi brochure with a typed destination graph: five world regions, nine destination pages, six guides, four comparisons, six audience pages, a planner quiz, journal and stories. Copy is original Greek, not a translation of [myhoneymoon.travel](https://www.myhoneymoon.travel) (that product is Greece-island honeymoons). Canonical URLs are Latin; every known WordPress / Greek path 301s in `next.config.ts`.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Content as typed TypeScript modules — no CMS, no runtime WordPress
- Live GR brand from WordPress/Divi: pink `#f072ab`, Cardo / Open Sans / Lato, stacked `myHoneymoon_logo_02` mark
- Deployed on Netlify via the OpenNext adapter

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Structure

- `src/content/` — registries. `destinations.ts` is the core; `regions.ts`, `guides.ts`, `compares.ts`, `audiences.ts`, `journal.ts`, `stories.ts`, `quiz.ts`, `faq.ts` and `planner.ts` fill the rest. `_raw_pages.json` is the one-time Novamira dump (not read at runtime).
- `src/lib/` — `paths.ts` (canonical URLs), `seo.ts` (`buildMetadata`, no hreflang with `.travel`), `schema.ts` (JSON-LD, `inLanguage: el`).
- `src/components/templates/` — one template per content type (`Destination`, `Region`, `Guide`, `Compare`, `Audience`, `PlannerType`, `Journal`, `Story`, `Legal`).
- `src/components/ui/` — shared primitives (`PageHero`, `AnswerBlock`, `FaqList`, `DayRibbon`, `MagazineSpread`, `ProofWall`, `Breadcrumbs`, `AuthorByline`, `JsonLd`).
- `src/app/` — explicit App Router segments. There is no catch-all router; legacy WordPress URLs are permanent redirects in `next.config.ts`.

## Adding a destination

1. Add the record to `src/content/destinations.ts`, filling every field on the `Destination` type — answer block, bases, stay types, sample arc, pairings, flights from Athens, visa, crowds, EUR budget, 5–8 FAQs, hero and gallery.
2. Nothing else. The route, sitemap entry, breadcrumbs and JSON-LD are derived from the registry.

## Deploying to Netlify

Netlify detects Next.js and applies its OpenNext adapter automatically — the adapter is deliberately **not** pinned in `package.json` so it keeps pace with Next releases.

1. Connect this repository to a new Netlify site.
2. Netlify reads `netlify.toml`: build command `npm run build`, publish directory `.next`, Node 22.
3. Point `www.myhoneymoon.gr` at the site and deploy.

Deploy previews and branch deploys set `NEXT_PUBLIC_NOINDEX=1`, which makes `src/app/robots.ts` serve a blanket `Disallow: /` so previews never compete with the production domain.

### Environment variables

All optional. Without them the enquiry form still works, falling back to a prefilled `mailto:` handoff.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends enquiries by email instead of the `mailto:` fallback |
| `ENQUIRY_TO` | Destination inbox (defaults to `welcome@myhoneymoon.gr`) |
| `ENQUIRY_FROM` | Verified sender address on your Resend domain |

## Search and answer engines

- Every route sets a unique title, description, canonical and Open Graph image through `buildMetadata()`. Locale is `el_GR`. There is no hreflang pairing with `.travel` (different intent).
- JSON-LD is a single `@graph` per page: `TravelAgency` + `Person` + `WebSite` (`inLanguage: el`) sitewide, plus `TouristDestination`, `TouristTrip`, `Article`, `Review`, `FAQPage` and `BreadcrumbList` per template.
- Destination, region, guide and comparison pages open with a question-shaped H2 and an answer of forty words or fewer.
- `sitemap.ts` is generated from the registries using each record's `updatedAt`.
