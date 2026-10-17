# Color Together Co.

Marketing site for **Color Together Co.** — printable Creator Duo twin packs (Kid Edition + Adult Edition of the same theme).

**Promise:** One theme. Two ages. One table.  
**Tagline:** Color together tonight.

**Live:** [https://ntxhail.github.io/color-together-co/](https://ntxhail.github.io/color-together-co/)

## Stack

- Next.js App Router (static export)
- TypeScript
- Tailwind CSS
- GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Other scripts

```bash
npm run build
npm run lint
```

`npm run build` writes a static site to `out/`. For a GitHub Pages–shaped build (assets under `/color-together-co/`):

```bash
npm run build:pages
```

## GitHub Pages

Pushes to `main` (and manual **Run workflow**) deploy via `.github/workflows/deploy.yml`.

**One-time (repo owner):** GitHub → **Settings → Pages → Source** must be **GitHub Actions**.

The production build sets:

- `NEXT_PUBLIC_BASE_PATH=/color-together-co`
- `NEXT_PUBLIC_SITE_URL=https://ntxhail.github.io/color-together-co`

For a custom domain later, set `NEXT_PUBLIC_BASE_PATH` to empty and `NEXT_PUBLIC_SITE_URL` to the canonical origin in the workflow.

## What’s on the site

- Home hero with the twin-pack promise and dual CTAs
- How it works (Download → Print → Color together)
- Featured Creator Duos: Frenchie Family Night, Jets & Joyrides, Castle at Sunset
- Pets + Speed Bundle
- Free Frenchie Family Night sample pack (email form stub)
- Color Together Co. Club teaser
- Product mock page at `/frenchie`

Shop and Club links are placeholders. Search the codebase for `TODO` comments before wiring Shopify or Facebook URLs.

## Product art

Cover artwork lives in `public/images/`:

- `frenchie-kid-edition.jpg`
- `frenchie-adult-edition.jpg`
- `jets-kid-edition.jpg`
- `frenchie-walk-squad.jpg`
