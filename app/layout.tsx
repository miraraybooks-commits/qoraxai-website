import type React from "react"
import { Inter, DM_Sans } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display" })

export const metadata = {
  title: "QoraxAI: Revenue Growth Through Technology | Sales-Focused IT Services Bangladesh",
  description:
    "Accelerate your revenue by 250% with QoraxAI's sales-focused technology services. We drive growth through digital transformation, not just cost reduction.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <GoogleTagManager gtmId="GTM-P2ZSVZXQ" />
      </body>
    </html>
  )
}
