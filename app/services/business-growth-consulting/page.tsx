export const revalidate = 3600

import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "AI-powered business growth consulting in Bangladesh | QoraxAI",
  description:
    "Accelerate business growth with expert consulting. Data-driven strategies for market expansion, revenue optimization, and competitive advantage.",
  alternates: {
    canonical: "/services/business-growth-consulting",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BusinessGrowthConsultingPage() {
  return (
    <>
      <ServicePageHeader />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Business Growth Consulting</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              You can do away with guesswork in growth of your business what you need is a clear plan and the right execution. QoraxAI&apos;s Business Growth Consulting we help you to understand your market, identify real opportunities and turn strategy into action.
              <br /><br />
              As you look to reach new customers, improve your operations, or scale sustainably we provide you with practical steps that result in measurable success and in turn higher profitability.
            </p>

            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Start Your Growth Strategy
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/business-growth.jpg"
              alt="Strategic business growth consulting and market expansion services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Section: The Challenge */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">The Growth Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A lot of businesses hit a wall because they don't have a clear plan for growth, market knowledge, or a way to carry it out. Companies miss out on business opportunities, waste money on projects that don't work, and have trouble growing in a way that lasts without the right consulting partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Not sure on how to grow</h3>
              <p className="text-muted-foreground">
                Without a strategy based on data, efforts to grow lack focus and the return on investment (ROI) is hard to predict.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Missed Opportunities</h3>
              <p className="text-muted-foreground">
                While you stay in your comfort zone in your current market, your competitors take advantage of untapped segments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Poor Execution</h3>
              <p className="text-muted-foreground">
                Without the right implementation frameworks, accountability, and ongoing improvement, strategic plans don't work.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Our Solution */}
        <div className="bg-white py-16 shadow-inner">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">Our Growth Consulting Solution</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Strategic Market Analysis</h3>
                <p className="text-muted-foreground mb-6">
                  We analyze your market position, competitive landscape, and untapped opportunities to identify the highest-impact growth vectors for your business.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. Business Model Optimization</h3>
                <p className="text-muted-foreground mb-6">
                  We redesign revenue streams, pricing strategies, and service offerings to maximize profitability while improving customer value.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. Market Expansion Strategy</h3>
                <p className="text-muted-foreground">
                  Whether geographic expansion, new product lines, or market segment penetration, we create actionable plans backed by data and market research.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. Operational Scaling</h3>
                <p className="text-muted-foreground mb-6">
                  We align your operations, technology, and team structure to support growth without compromising quality or efficiency.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Performance Monitoring & Optimization</h3>
                <p className="text-muted-foreground mb-6">
                  Real-time dashboards and KPI tracking ensure your growth initiatives stay on course and deliver measurable returns on investment.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. Leadership Coaching & Change Management</h3>
                <p className="text-muted-foreground">
                  We prepare your team with frameworks and mindsets needed to lead organizational change and sustain growth momentum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Why Choose QoraxAI */}
        <div className="max-w-6xl mx-auto mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose QoraxAI for Growth Consulting</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We don&apos;t just provide advice — we partner with you to execute and achieve measurable growth. Our consultants combine industry expertise, strategic frameworks, and hands-on execution experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Data-Driven Strategy</h3>
              <p className="text-muted-foreground">Every recommendation is backed by market data, competitive analysis, and proven frameworks.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Industry Expertise</h3>
              <p className="text-muted-foreground">Our consultants bring 15+ years of experience across diverse industries and business models.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Execution-Focused</h3>
              <p className="text-muted-foreground">Beyond strategy, we help implement plans, track progress, and optimize for results.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Measurable Results</h3>
              <p className="text-muted-foreground">Growth targets are tracked with real-time KPIs and regular performance reviews.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Accelerate Growth?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            QoraxAI&apos;s Business Growth Consulting unlocks your company&apos;s full potential. Schedule a free 30-minute growth consultation to explore opportunities specific to your business.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Schedule Free Growth Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
