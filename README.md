# Mitali Yadav — portfolio

A code rebuild of [mitaliyadavvv.framer.website](https://mitaliyadavvv.framer.website/) using Next.js (App Router), TypeScript and CSS Modules. There is no backend and no environment variables.

```bash
npm install
npm run dev      # http://localhost:3400
npm run build
```

## Deploy

Import the GitHub repo into Vercel and keep the default Next.js settings.

## Where things live

| Page | File |
|---|---|
| Home | `src/app/page.tsx` |
| About (formal / fun) | `src/app/about-me-formal`, `src/app/about-me-fun` |
| Case studies | `src/app/{the-shop,siemens,prayan,godrej-crm,ritual}/page.tsx` |
| Shared pieces (nav, hero, TL;DR, sections, footer) | `src/components/` |
| Colours, spacing, pills | `src/app/globals.css` |

Text is written straight into each page file, so to change copy, edit the JSX.

## Media

- Media files live in `public/media/`. Captured diagrams and collages from the original design are in `public/media/cap/`.
- After you add or replace an image or video, run:

  ```bash
  node scripts/media-dims.mjs
  ```

  This refreshes `src/content/media-dims.json`, which stores each file's size so pages don't shift while loading. Video sizes are kept from the existing file. For a new video, add `"name.mp4": [width, height]` to that JSON by hand.
- The About pages are scrapbook collages. Each section is one image (`af-*` / `ab-*` in `cap/`), with a desktop and a phone version. The copy is repeated as hidden text for screen readers and search.
