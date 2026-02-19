# MDK Engineering

> AI Knowledge Systems That Work

The website for MDK Engineering — an AI knowledge systems consultancy based in Munich, Germany.
Specializing in production-grade RAG systems, document intelligence, and AI architecture consulting.

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
| `/services` | Detailed service offerings & pricing |
| `/about` | Background, timeline, capabilities |
| `/projects` | Project portfolio |
| `/projects/[slug]` | Individual case studies |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts (MDX) |
| `/contact` | Contact form & info |
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
