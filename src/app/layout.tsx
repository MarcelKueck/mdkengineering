import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "MDK Engineering | KI-Automatisierung für Arztpraxen",
    template: "%s | MDK Engineering",
  },
  description:
    "Ihr technischer Partner für Praxisautomatisierung. ePA-Workflows, Dokumentenverarbeitung, Geräteanbindung und DSGVO-konforme KI-Lösungen für Arztpraxen. Sitz in München.",
  metadataBase: new URL("https://mdkengineering.com"),
  openGraph: {
    title: "MDK Engineering | KI-Automatisierung für Arztpraxen",
    description:
      "Weniger Verwaltung, mehr Zeit für Patienten. Automatisierung von ePA-Uploads, Dokumentenverarbeitung und Gerätedatenerfassung — DSGVO-konform, praxistauglich, aus einer Hand.",
    url: "https://mdkengineering.com",
    siteName: "MDK Engineering",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDK Engineering | KI-Automatisierung für Arztpraxen",
    description:
      "Automatisierung für Arztpraxen: ePA, Dokumentenverarbeitung, Geräteanbindung. Software + Hardware aus einer Hand.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mdkengineering.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${jetbrainsMono.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'MDK Engineering',
              url: 'https://mdkengineering.com',
              email: 'marcel@mdkengineering.com',
              description:
                'KI-gestützte Automatisierung für deutsche Arztpraxen. ePA-Workflows, Dokumentenverarbeitung, Geräteanbindung und laufende Betreuung — Software und Hardware aus einer Hand.',
              areaServed: {
                '@type': 'Country',
                name: 'Germany',
              },
              serviceType: [
                'Praxisautomatisierung',
                'ePA-Automatisierung',
                'Medizinische Dokumentenverarbeitung',
                'IoT-Geräteanbindung',
                'KI für Arztpraxen',
              ],
              knowsAbout: [
                'ePA',
                'GDT-Schnittstelle',
                'PVS-Integration',
                'DSGVO',
                'Medizinische IoT',
                'Workflow-Automatisierung',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Munich',
                addressRegion: 'Bavaria',
                addressCountry: 'DE',
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
