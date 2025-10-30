import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "QoraxAI: IT Audit to Cut Costs & Drive Growth for Bangladeshi SMEs",
  description: "QoraxAI helps SMEs cut operating costs 20–40% through IT audits, automation, and AI solutions. Boost growth today.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
