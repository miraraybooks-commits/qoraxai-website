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
                {/* Google Tag Manager */}

                <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P2ZSVZXQ');
            `,
          }}
        />
          </head>
      <body className={`font-sans antialiased`}>
            {/* Google Tag Manager (noscript) */}
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2ZSVZXQ"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
