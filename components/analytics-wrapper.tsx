"use client"

import dynamic from "next/dynamic"

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then(mod => mod.Analytics),
  { ssr: false }
)

const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then(mod => mod.GoogleTagManager),
  { ssr: false }
)

export function AnalyticsWrapper({ gtmId }: { gtmId: string }) {
  return (
    <>
      <Analytics />
      <GoogleTagManager gtmId={gtmId} />
    </>
  )
}