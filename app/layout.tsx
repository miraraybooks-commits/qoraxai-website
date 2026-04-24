import type React from "react"
import { Inter, DM_Sans } from "next/font/google"
//import { GoogleTagManager } from "@next/third-parties/google"
//import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import dynamic from "next/dynamic"

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then(mod => mod.Analytics),
  { ssr: false }
)

const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then(mod => mod.GoogleTagManager),
  { ssr: false }
)
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" })

export const metadata = {
  metadataBase: new URL("https://qoraxai.com"),
  title: "AI SEO, CRM & ERPNext Services in Bangladesh | QoraxAI",
  description:
    "ERPNext implementation, CRM setup, AI SEO (GEO/AEO), and courier software solutions in Bangladesh. Grow your business with QoraxAI.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qoraxai.com",
    title: "AI SEO, CRM & ERPNext Services in Bangladesh | QoraxAI",
    description:
      "Accelerate your revenue by 40% with QoraxAI's sales-focused technology services. Drive growth through digital transformation.",
    siteName: "QoraxAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "QoraxAI: Accelerate Revenue Through Technology",
    description: "Boost revenue by up to 40% with QoraxAI's sales-focused IT services, digital transformation, and growth technology solutions.",
  },
  //verification: {
  //  google: "your-google-verification-code",
  //},
  alternates: {
    canonical: "https://qoraxai.com",
  },
  generator: "v0.app",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QoraxAI",
    description: "Revenue growth through technology - Sales-focused IT support services",
    url: "https://qoraxai.com",
    logo: "https://qoraxai.com/qoraxai-icon.png",
    image: "https://qoraxai.com/banner.webp",
    telephone: "+880-1718723202",
    email: "info@qoraxai.com",
    areaServed: [
      {
        "@type": "Country",
        name: "Bangladesh"
      },
      {
        "@type": "Place",
        name: "Worldwide"
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/qoraxai",
      "https://twitter.com/qoraxai",
      "https://www.facebook.com/qoraxai",
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: "6",
      lowPrice: "0",
      priceCurrency: "BDT",
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Analytics />
        <GoogleTagManager gtmId="GTM-P2ZSVZXQ" />
      </body>
    </html>
  )
}
