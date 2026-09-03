import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_KEYWORDS } from "@/lib/seo";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// Social images come from app/**/opengraph-image.tsx (file-based metadata outranks this object).
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE.name,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE.doctor, url: `${SITE.url}/about` }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "health",
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#0E3A5E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-dvh flex-col pb-[72px] nav:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}
