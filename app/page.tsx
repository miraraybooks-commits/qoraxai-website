"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const RevenueStatsSection = dynamic(
  () => import("@/components/revenue-stats-section").then((mod) => ({ default: mod.RevenueStatsSection })),
  {
    loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
  },
)

const ServicesSectionNew = dynamic(
  () => import("@/components/services-section-new").then((mod) => ({ default: mod.ServicesSectionNew })),
  {
    loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
  },
)

const TestimonialSection = dynamic(
  () => import("@/components/testimonial-section").then((mod) => ({ default: mod.TestimonialSection })),
  {
    loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
    ssr: false,
  },
)

const CaseStudiesSection = dynamic(
  () => import("@/components/case-studies-section").then((mod) => ({ default: mod.CaseStudiesSection })),
  {
    loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
  },
)

const ClientLogosSection = dynamic(
  () => import("@/components/client-logos-section").then((mod) => ({ default: mod.ClientLogosSection })),
  {
    loading: () => <div className="h-48 bg-muted/20 animate-pulse" />,
  },
)

const ProcessSection = dynamic(
  () => import("@/components/process-section").then((mod) => ({ default: mod.ProcessSection })),
  {
    loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
  },
)

const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => ({ default: mod.PricingSection })),
  {
    loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
  },
)

const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
})

const ContactForm = dynamic(() => import("@/components/contact-form").then((mod) => ({ default: mod.ContactForm })), {
  loading: () => <div className="h-96 bg-muted/20 animate-pulse" />,
})

const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => <div className="h-48 bg-muted/20 animate-pulse" />,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <RevenueStatsSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <ServicesSectionNew />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <CaseStudiesSection />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-muted/20 animate-pulse" />}>
        <ClientLogosSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-muted/20 animate-pulse" />}>
        <Footer />
      </Suspense>
    </main>
  )
}
