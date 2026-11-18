# Muqimiy theatre: website concept

A redesign concept for the website of the Muqimiy theatre in Tashkent, built by [Akbarov Labs](https://akbarovlabs.uz).

**Live demo:** https://muqumiy-orcin.vercel.app

This is a concept, not the theatre's official website. It is not affiliated with or endorsed by the theatre.

## What's in it

The site is in Uzbek (Cyrillic) and has these pages:

- **Home:** the featured show, upcoming performances, news and a short history.
- **Repertoire and shows:** every production with genre, credits and photos.
- **News:** articles with their own pages.
- **Team:** the company, grouped by role.
- **Photo album and contact.**

All content lives in `lib/data.ts` and images in `lib/images.ts`, so pages contain no hard-coded text.

## Stack

Next.js 16 (App Router), TypeScript and CSS modules. Most pages are prerendered as static HTML.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```
