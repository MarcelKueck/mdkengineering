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
    default: "MDK Engineering | AI Knowledge Systems That Work",
    template: "%s | MDK Engineering",
  },
  description:
    "I build AI systems that give your team instant, reliable access to your organization's knowledge — production-grade, compliant, and tailored to your domain. Based in Munich.",
  metadataBase: new URL("https://mdkengineering.com"),
  openGraph: {
    title: "MDK Engineering | AI Knowledge Systems That Work",
    description:
      "I build AI systems that give your team instant, reliable access to your organization's knowledge — production-grade, compliant, and tailored to your domain. Based in Munich.",
    url: "https://mdkengineering.com",
    siteName: "MDK Engineering",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDK Engineering | AI Knowledge Systems That Work",
    description:
      "I build AI systems that give your team instant, reliable access to your organization's knowledge — production-grade, compliant, and tailored to your domain. Based in Munich.",
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
    <html lang="en" className={`${jetbrainsMono.variable} ${dmSans.variable}`}>
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
                'AI knowledge systems specialist based in Munich. Building production-grade RAG systems for research, healthcare, and e-commerce.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Munich',
                addressCountry: 'DE',
              },
              founder: {
                '@type': 'Person',
                name: 'Marcel Kück',
                jobTitle: 'AI Engineer & Knowledge Systems Specialist',
              },
              areaServed: ['DE', 'EU'],
              priceRange: '€€€',
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
