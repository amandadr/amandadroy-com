import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  ALTERNATE_NAME,
  EMAIL,
  PERSON_ID,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL,
} from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F0E8E0" },
    { media: "(prefers-color-scheme: dark)", color: "#706830" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    alternateName: ALTERNATE_NAME,
    url: SITE_URL,
    email: EMAIL,
    jobTitle: "Technical SEO Specialist and Software Developer",
    address: {
      "@type": "PostalAddress",
      addressRegion: "PE",
      addressCountry: "CA",
    },
    sameAs: [SOCIAL.github, SOCIAL.linkedin],
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Manny Roy Consulting",
    url: SOCIAL.mrc,
    founder: { "@type": "Person", "@id": PERSON_ID, name: SITE_NAME },
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: { "@type": "Person", "@id": PERSON_ID, name: SITE_NAME },
  };

  return (
    <html lang="en-CA" data-theme="portfolio">
      <head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans/ibm-plex-sans-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans/ibm-plex-sans-latin-600-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ibm-plex-serif/ibm-plex-serif-latin-600-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a className="mrc-skip-link" href="#main">
          Skip to content
        </a>
        <div className="site">
          <Header />
          <main id="main" className="site-content">
            {children}
          </main>
          <Footer />
        </div>
        <JsonLd data={[personLd, organizationLd, websiteLd]} />
        <Analytics />
      </body>
    </html>
  );
}
