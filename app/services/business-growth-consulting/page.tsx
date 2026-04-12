import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "Business Growth Consulting Services | Strategic Planning | QoraxAI",
  description:
    "Accelerate business growth with expert consulting. Data-driven strategies for market expansion, revenue optimization, and competitive advantage.",
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
              Transform your business potential into measurable results. QoraxAI's <strong>Business Growth Consulting Services</strong> combine strategic planning, market intelligence, and operational excellence to unlock new revenue streams and market opportunities. Whether you&apos;re scaling, expanding, or optimizing, we provide the roadmap to sustainable growth.
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
              src="/business-growth.webp"
              alt="Strategic business growth consulting and market expansion services"
              fill
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
              Many businesses plateau because they lack a clear growth strategy, market intelligence, or execution roadmap. Without the right consulting partnership, companies miss market opportunities, waste resources on ineffective initiatives, and struggle to scale sustainably.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Unclear Growth Strategy</h3>
              <p className="text-muted-foreground">
                Without data-driven strategy, expansion efforts lack focus and ROI becomes unpredictable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Missed Market Opportunities</h3>
              <p className="text-muted-foreground">
                Competitors capitalize on untapped segments while you remain in your current market comfort zone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Ineffective Execution</h3>
              <p className="text-muted-foreground">
                Strategic plans fail without proper implementation frameworks, accountability, and continuous optimization.
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
                  We equip your team with frameworks and mindsets needed to lead organizational change and sustain growth momentum.
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
