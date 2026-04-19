# Wittgenstein Website

This folder contains the standalone website app for `wittgenstein.wtf`.

It is a Vite + React + TypeScript build, kept separate from the main monorepo site scaffold so it can be iterated on and deployed independently.

## What This Site Is For

The site is a public-facing narrative layer for the project. It should:

- explain the thesis clearly
- present the five-layer architecture without flattening it into marketing copy
- stay aligned with the real repository and docs
- remain visually stable while text evolves

The UI and section framework are intentionally fixed. Most iteration should happen in the copy.

## Local Development

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run preview
```

The preview server runs on `http://localhost:4173`.

## Validation

```bash
npm run check
```

This runs lint plus a full production build.

## Vercel Deployment

This app is configured for Vercel via [`vercel.json`](./vercel.json).

From this directory:

```bash
vercel
vercel --prod
```

Notes:

- The app is a Vite SPA, so `vercel.json` includes a rewrite to `index.html`.
- The canonical production host is `https://wittgenstein.wtf`.
- `public/CNAME` is harmless for static hosting portability, but Vercel itself uses project-domain settings rather than GitHub Pages style CNAME handling.

## Domain

The intended production domain is:

```text
wittgenstein.wtf
```

Static hosting helpers included in `public/`:

- `CNAME`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`

## Content Guidelines

- Keep the macro structure stable:
  - Thesis
  - Layers
  - Pipeline
  - Codecs
- Do not rewrite the UI or component layout unless explicitly requested.
- Prefer accurate engineering language over exaggerated product claims.
- When the repo is ahead of the site, update the copy.
- When the site is ahead of the repo, pull the copy back to reality.
