import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RevenueStatsSection } from "@/components/revenue-stats-section"
import { ServicesSectionNew } from "@/components/services-section-new"
import { TestimonialSection } from "@/components/testimonial-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ClientLogosSection } from "@/components/client-logos-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <RevenueStatsSection />
      <ServicesSectionNew />
      <TestimonialSection />
      <CaseStudiesSection />
      <ClientLogosSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
