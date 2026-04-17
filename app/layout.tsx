import type React from "react"
import { Inter, DM_Sans } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display" })

export const metadata = {
  title: "QoraxAI - AI-Powered Digital Growth Agency — Results Proven",
  description:
    "Boost revenue with QoraxAI's IT services—business consulting, SEO Service, CRM integration, ERPNext implementation, and cybersecurity assessment.",
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
    title: "QoraxAI | Revenue Growth Through Automation & IT Services",
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
    "@type": "ITConsultant",
    name: "QoraxAI",
    description: "Revenue growth through technology - Sales-focused IT support services",
    url: "https://qoraxai.com",
    logo: "https://qoraxai.com/qoraxai-icon.png",
    image: "https://qoraxai.com/banner.webp",
    telephone: "+880-1718723202",
    email: "info@qoraxai.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Dhaka",
    },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
