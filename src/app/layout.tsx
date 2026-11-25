import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  ALTERNATE_NAME,
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
    name: SITE_NAME,
    alternateName: ALTERNATE_NAME,
    url: SITE_URL,
    email: "manny@mannyroy.com",
    jobTitle: "Technical SEO Specialist and Software Developer",
    address: {
      "@type": "PostalAddress",
      addressRegion: "PE",
      addressCountry: "CA",
    },
    sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.mrc],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: { "@type": "Person", name: SITE_NAME },
  };

  return (
    <html lang="en-CA" data-theme="portfolio">
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
        <JsonLd data={[personLd, websiteLd]} />
        <Analytics />
      </body>
    </html>
  );
}
