# MDK Engineering

> Praxisautomatisierung für Arztpraxen

The website for MDK Engineering GbR — a German medical practice automation team based in Munich.
Automatisierung für deutsche Arztpraxen: ePA-Workflows, Geräteanbindung und Smart-Praxis-Hardware — DSGVO-konform, aus einer Hand.

**Live:** [mdkengineering.com](https://mdkengineering.com)

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router, TypeScript, Server Components
- CSS Modules — Component-scoped styling
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
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, why us, contact |
| `/services` | Detailed service offerings (Leistungen) |
| `/about` | Team page (Über uns) |
| `/contact` | Contact form & info (Kontakt) |
| `/impressum` | Legal notice (German, TMG §5) |
| `/datenschutz` | Privacy policy (German, DSGVO) |

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
- [ ] Configure custom domain on Vercel

## License

© MDK Engineering GbR. All rights reserved.
