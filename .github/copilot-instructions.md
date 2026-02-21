# MDK Engineering — Copilot Instructions

## Project Overview

MDK Engineering GbR is a Next.js 16 website for a German medical practice automation team based in Munich.
The business specializes in workflow automation (ePA, document processing, billing optimization) and
smart practice hardware (IoT device integration, check-in terminals, queue displays) for Arztpraxen.
The primary audience is German practice owners (Praxisinhaber).
It's deployed on Vercel at mdkengineering.com.

## Tech Stack

- **Framework:** Next.js 16 with App Router, TypeScript
- **Styling:** CSS Modules + global CSS (not Tailwind utilities)
- **Fonts:** JetBrains Mono (headings/mono) + DM Sans (body) via next/font/google
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
    services/             — Services page (Leistungen)
    about/                — About page (Über uns)
    contact/              — Contact page (Kontakt)
    impressum/            — Legal notice (German)
    datenschutz/          — Privacy policy (German)
  components/
    Navbar.tsx            — Navigation with mobile menu
    Footer.tsx            — Site footer
    ContactForm.tsx       — Contact form (client component)
    HeroAnimation.tsx     — Robotic arm animation with typed text
    ScrollReveal.tsx      — Intersection Observer animations
```

## Conventions

- Use CSS Modules for component-specific styles (`.module.css`)
- Use global CSS classes for shared patterns (`section-label`, `section-title`, `btn`, etc.)
- Server Components by default; only use `'use client'` when needed (interactivity)
- All pages export metadata for SEO
- Website language is German (`lang="de"`) — target audience is German Praxisinhaber
- German legal pages (Impressum, Datenschutz) contain placeholder data marked with [brackets]
- Team voice: always use "wir/unser" (never "ich/mein")

## Important Notes

- Legal pages need real data before going live (replace [placeholders])
- Contact form currently logs to console — integrate with email service (Resend recommended) for production
- No analytics/tracking is installed (privacy-first approach)
- Target audience: German medical practice owners (Praxisinhaber)
- Service focus: ePA automation, document processing, IoT device integration, ongoing support
