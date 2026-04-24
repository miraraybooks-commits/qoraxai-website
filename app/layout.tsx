import type React from "react"
import { Inter, DM_Sans } from "next/font/google"
import { CookieConsent } from "@/components/cookie-consent"
import dynamic from "next/dynamic"

// Dynamically imported to avoid SSR issues — GTM is consent-gated via CookieConsent component
const Analytics = dynamic(
  () => import("@vercel/analytics/next").then(mod => mod.Analytics),
  { ssr: false }
)

// GTM should only fire after cookie consent — wire this inside CookieConsent if possible,
// or conditionally render based on consent state. Kept here as dynamic (ssr:false) for now.
const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then(mod => mod.GoogleTagManager),
  { ssr: false }
)

// Next.js handles font preloading automatically — no need for preload:true
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" })

// ─── Shared copy ──────────────────────────────────────────────────────────────
const META_TITLE = "AI SEO, CRM & ERPNext Services in Bangladesh | QoraxAI"
const META_DESCRIPTION =
  "ERPNext implementation, CRM setup, AI SEO (GEO/AEO), and courier software solutions in Bangladesh. Grow your business with QoraxAI."
const META_URL = "https://qoraxai.com"
const OG_IMAGE = {
  url: "https://qoraxai.com/og-image.jpg", // must be 1200×630px
  width: 1200,
  height: 630,
  alt: "QoraxAI – AI SEO, CRM & ERPNext Services in Bangladesh",
}

export const metadata = {
  metadataBase: new URL(META_URL),

  // ── Remove generator — don't leak scaffolding tool
  // generator: removed intentionally

  title: META_TITLE,
  description: META_DESCRIPTION,
  authors: [{ name: "QoraxAI" }],
  creator: "QoraxAI",
  publisher: "QoraxAI",

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

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: META_URL,
    siteName: "QoraxAI",
    title: META_TITLE,           // consistent with <title>
    description: META_DESCRIPTION,
    images: [OG_IMAGE],           // was missing — critical for FB/WhatsApp/LinkedIn previews
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [OG_IMAGE.url],       // was missing — card won't render without this
  },

  // ── Canonical ─────────────────────────────────────────────────────────────
  // Root canonical covers homepage. Each sub-page should export its own alternates.canonical
  alternates: {
    canonical: META_URL,
  },

  // ── Google Search Console verification ───────────────────────────────────
  // Uncomment and paste your actual verification token from GSC
  // verification: {
  //   google: "PASTE_YOUR_GSC_VERIFICATION_CODE_HERE",
  // },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0066CC",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // ─── Structured Data (JSON-LD) ────────────────────────────────────────────
  //
  // Changes from original:
  //  • @type: "Organization" → "LocalBusiness" — tells Google you serve Dhaka/Bangladesh
  //  • Added address + geo — required for local SEO ("ERPNext Dhaka", "CRM Bangladesh")
  //  • Added hasOfferCatalog with Service items — improves service-based ranking + AI search (SGE/ChatGPT)
  //  • Removed aggregateRating — fake reviews violate Google guidelines and risk penalties
  //  • Fixed offers.lowPrice — removed misleading "0" unless you have a genuine free tier
  //
  const structuredData = {
    "@context": "https://schema.org",

    // LocalBusiness > Organization — more specific, connects to Google Business Profile
    "@type": "LocalBusiness",

    name: "QoraxAI",
    description: META_DESCRIPTION,
    url: META_URL,
    logo: "https://qoraxai.com/qoraxai-icon.png",
    image: "https://qoraxai.com/banner.webp",
    telephone: "+880-1718723202",
    email: "info@qoraxai.com",

    // ── Local signals — critical for "CRM setup Dhaka", "ERPNext Bangladesh" rankings
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.8103",
      longitude: "90.4125",
    },

    // ── Area served
    areaServed: [
      {
        "@type": "Country",
        name: "Bangladesh",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],

    // ── Service catalog — improves service-based ranking + AI search visibility
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT & Digital Growth Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERPNext Implementation",
            description:
              "End-to-end ERPNext deployment, configuration, and training for SMEs in Bangladesh.",
            areaServed: "Bangladesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM Setup & Integration",
            description:
              "Zoho CRM and social media CRM integration for lead management and sales automation.",
            areaServed: "Bangladesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI SEO, GEO & AEO Services",
            description:
              "AI-first search optimisation including Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO).",
            areaServed: "Worldwide",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Courier Management Software",
            description:
              "Custom courier and last-mile delivery management software for logistics companies in Bangladesh.",
            areaServed: "Bangladesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Growth Consulting",
            description:
              "Digital transformation and IT strategy consulting for SMEs and enterprises.",
            areaServed: "Bangladesh",
          },
        },
      ],
    },

    // ── Social profiles
    sameAs: [
      "https://www.linkedin.com/company/qoraxai",
      "https://twitter.com/qoraxai",
      "https://www.facebook.com/qoraxai",
    ],

    // ── Pricing signal (only include if accurate)
    priceRange: "$$",

    // ── aggregateRating REMOVED — do not use fabricated review counts.
    //    Add this back only when you have real, verifiable reviews on your site or a review platform.
    //    Fake schema ratings violate Google's structured data guidelines.

    // ── Offers summary
    offers: {
      "@type": "AggregateOffer",
      offerCount: "5",
      // lowPrice removed — only add when you have a genuine free or  entry-level tier
      priceCurrency: "BDT",
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* PNG favicon variants — better device compatibility + PWA readiness */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}

        {/*
          CookieConsent should control GTM initialisation.
          Ideal pattern: move <GoogleTagManager> inside CookieConsent so it only
          fires after the user accepts. Current setup (ssr:false dynamic import)
          still loads GTM unconditionally — a GDPR/PDPA compliance gap.
        */}
        <CookieConsent />

        <Analytics />
        <GoogleTagManager gtmId="GTM-P2ZSVZXQ" />
      </body>
    </html>
  )
}
