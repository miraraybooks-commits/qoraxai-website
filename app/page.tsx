import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuoteSection } from "@/components/quote-section"
import { TestimonialSliderSection } from "@/components/testimonial-slider-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ClientLogosSection } from "@/components/client-logos-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { DifferentiatorsSection } from "@/components/differentiators-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <QuoteSection />
      <TestimonialSliderSection />
      <CaseStudiesSection />
      <ClientLogosSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <PricingSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
