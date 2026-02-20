# MDK Engineering

> KI-Automatisierung für Arztpraxen

The website for MDK Engineering — a German medical practice automation engineer based in Munich.
Automatisierung für deutsche Arztpraxen: ePA-Workflows, Geräteanbindung, Smart-Praxis-Hardware und DSGVO-konforme KI-Systeme.

**Live:** [mdkengineering.com](https://mdkengineering.com)

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router, TypeScript, Server Components
- CSS Modules — Component-scoped styling
- [MDX](https://mdxjs.com/) — Blog content with next-mdx-remote
- [Vercel](https://vercel.com/) — Deployment & hosting

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/           — Pages (App Router)
  components/    — Reusable components
  lib/           — Utility functions
content/
  blog/          — MDX blog posts
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, projects, about, blog preview, contact |
| `/services` | Detailed service offerings (Leistungen) & pricing |
| `/about` | Background, timeline, capabilities (Über mich) |
| `/projects` | Project portfolio (Projekte) |
| `/projects/[slug]` | Individual case studies |
| `/blog` | Blog listing (Einblicke) |
| `/blog/[slug]` | Individual blog posts (MDX) |
| `/contact` | Contact form & info (Kontakt) |
| `/impressum` | Legal notice (German, TMG §5) |
| `/datenschutz` | Privacy policy (German, DSGVO) |

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A short description for SEO and previews."
date: "2025-01-20"
category: "Tutorial"
---

Your content here...
```

## Deployment

This project is configured for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository to Vercel for automatic deployments on push.

## Before Going Live

- [ ] Replace placeholder data in `/impressum` and `/datenschutz` (use [e-recht24.de](https://www.e-recht24.de/) generator)
- [ ] Set up email service for contact form (e.g., [Resend](https://resend.com/))
- [ ] Add real project photos / headshot
- [ ] Configure custom domain on Vercel
- [ ] Set up Vercel Analytics (optional, privacy-friendly)

## License

© MDK Engineering. All rights reserved.
