# MDK Engineering — Copilot Instructions

## Project Overview

MDK Engineering is a Next.js 16 website for an AI engineering consultancy based in Munich.
It's deployed on Vercel at mdkengineering.com.

## Tech Stack

- **Framework:** Next.js 16 with App Router, TypeScript
- **Styling:** CSS Modules + global CSS (not Tailwind utilities)
- **Fonts:** JetBrains Mono (headings/mono) + DM Sans (body) via next/font/google
- **Blog:** MDX files in `/content/blog/` parsed with gray-matter + reading-time, rendered with next-mdx-remote
- **Deployment:** Vercel

## Design System

- **Background:** #272a2d (dark charcoal)
- **Text:** #f5f0eb (warm white)
- **Accent:** #e8641b (engineering orange)
- **Aesthetic:** Dark, technical, blueprint-style with grid background pattern
- **Typography:** Monospace headings, sans-serif body text

## Project Structure

```
src/
  app/
    page.tsx              — Home page
    layout.tsx            — Root layout with SEO + JSON-LD
    globals.css           — Global styles + design tokens
    sitemap.ts            — Dynamic sitemap generation
    robots.ts             — Robots.txt generation
    api/contact/route.ts  — Contact form API endpoint
    services/             — Services page
    about/                — About page
    projects/             — Project listing + [slug] case studies
    blog/                 — Blog listing + [slug] individual posts
    contact/              — Contact page
    impressum/            — Legal notice (German)
    datenschutz/          — Privacy policy (German)
  components/
    Navbar.tsx            — Navigation with mobile menu
    Footer.tsx            — Site footer
    ContactForm.tsx       — Contact form (client component)
    ScrollReveal.tsx      — Intersection Observer animations
  lib/
    blog.ts               — Blog utility functions
content/
  blog/                   — MDX blog posts
```

## Conventions

- Use CSS Modules for component-specific styles (`.module.css`)
- Use global CSS classes for shared patterns (`section-label`, `section-title`, `btn`, etc.)
- Server Components by default; only use `'use client'` when needed (interactivity)
- Blog posts are MDX files with frontmatter (title, description, date, category)
- All pages export metadata for SEO
- German legal pages (Impressum, Datenschutz) contain placeholder data marked with [brackets]

## Adding a Blog Post

1. Create a new `.mdx` file in `/content/blog/`
2. Add frontmatter: title, description, date (YYYY-MM-DD), category
3. Write content in MDX (Markdown with optional JSX)
4. The post will automatically appear on /blog and be included in the sitemap

## Important Notes

- Legal pages need real data before going live (replace [placeholders])
- Contact form currently logs to console — integrate with email service (Resend recommended) for production
- No analytics/tracking is installed (privacy-first approach)
