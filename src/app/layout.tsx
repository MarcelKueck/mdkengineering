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
    default: "MDK Engineering — Engineering Intelligence Into Reality",
    template: "%s | MDK Engineering",
  },
  description:
    "AI engineer and inventor based in Munich. I help companies automate processes, build intelligent systems, and turn ideas into working technology — end to end.",
  metadataBase: new URL("https://mdkengineering.com"),
  openGraph: {
    title: "MDK Engineering — Engineering Intelligence Into Reality",
    description:
      "AI engineer and inventor based in Munich. I help companies automate processes, build intelligent systems, and turn ideas into working technology — end to end.",
    url: "https://mdkengineering.com",
    siteName: "MDK Engineering",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDK Engineering — Engineering Intelligence Into Reality",
    description:
      "AI engineer and inventor based in Munich. I help companies automate processes, build intelligent systems, and turn ideas into working technology.",
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
                'AI engineer and inventor based in Munich. Specializing in AI automation, rapid prototyping, and hardware-software integration.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Munich',
                addressCountry: 'DE',
              },
              founder: {
                '@type': 'Person',
                name: 'Marcel Koch',
                jobTitle: 'AI Engineer & Founder',
              },
              areaServed: 'DE',
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
