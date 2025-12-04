import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "Sales Growth & Revenue Optimization Services | QoraxAI",
  description:
    "Increase sales 25-40% with data-driven strategies, conversion optimization & marketing automation. Get free growth audit from QoraxAI Bangladesh.",
}

export default function SalesGrowthPage() {
  return (
    <>
      <ServicePageHeader />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Sales Growth & Revenue Optimization</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your business has the potential — but are you capturing every sales opportunity? QoraxAI's{" "}
              <strong>Sales Growth & Revenue Optimization</strong> service helps you identify revenue gaps, optimize
              conversion funnels, and implement data-driven strategies that turn visitors into paying customers.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Get Your Free Growth Audit
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/sales-growth.jpg"
              alt="Business growth analytics and revenue optimization strategies"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* SECTION 1: The Revenue Challenge */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-semibold text-primary mb-4">The Revenue Challenge Most Businesses Face</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Many businesses struggle with inconsistent revenue despite having a great product or service. The problem
            isn't always the offering — it's the gaps in your sales funnel, unclear customer journeys, and missed
            opportunities to convert interested prospects into buyers.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">High Traffic, Low Conversions</h3>
              <p className="text-muted-foreground">
                You're attracting visitors, but they're not completing purchases or filling out contact forms.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">Unclear Customer Journey</h3>
              <p className="text-muted-foreground">
                Your prospects don't understand how to buy, or the path from awareness to purchase is confusing.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">Inefficient Marketing Spend</h3>
              <p className="text-muted-foreground">
                You're investing in ads and campaigns but not seeing proportional revenue growth.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: How We Drive Sales Growth */}
        <div className="bg-primary/5 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">How QoraxAI Drives Sales Growth</h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Conversion Funnel Analysis</h3>
                <p className="text-muted-foreground mb-6">
                  We map your entire customer journey — from first click to final purchase — identifying where prospects
                  drop off and why. Then we optimize each stage to maximize conversions.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. Data-Driven Marketing Strategy</h3>
                <p className="text-muted-foreground mb-6">
                  Using analytics and customer insights, we help you understand which channels, campaigns, and messages
                  drive real revenue — so you can invest smarter.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. Website & Landing Page Optimization</h3>
                <p className="text-muted-foreground">
                  We redesign key pages to be faster, clearer, and more persuasive — improving user experience and
                  conversion rates by 20-50%.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. Marketing Automation & CRM Integration</h3>
                <p className="text-muted-foreground mb-6">
                  Automate lead nurturing, follow-ups, and email campaigns to ensure no opportunity falls through the
                  cracks. Integrate with tools like HubSpot, Salesforce, or Pipedrive.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Performance Dashboards & Analytics</h3>
                <p className="text-muted-foreground mb-6">
                  Real-time dashboards show exactly how your business is performing — revenue, conversion rates,
                  customer acquisition cost, and lifetime value.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. A/B Testing & Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  We continuously test headlines, CTAs, images, and pricing to find what resonates best with your
                  audience and drives more sales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Real Results */}
        <div className="max-w-6xl mx-auto mt-20 mb-20 text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">Real Business Results</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
            Our clients don't just see traffic increases — they see revenue growth. Here are typical outcomes from our
            Sales Growth & Revenue Optimization program:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-primary mb-2">25-40%</h3>
              <p className="text-muted-foreground">Increase in conversion rates within 3 months</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-primary mb-2">2-3x</h3>
              <p className="text-muted-foreground">ROI improvement on marketing spend</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-primary mb-2">30-50%</h3>
              <p className="text-muted-foreground">Reduction in customer acquisition cost</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-primary mb-2">15-25%</h3>
              <p className="text-muted-foreground">Revenue growth in the first quarter</p>
            </div>
          </div>
        </div>

        {/* SECTION 4: Who This Is For */}
        <div className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">Who This Service Is For</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Whether you're a startup looking to scale, an SME aiming for predictable growth, or an enterprise seeking
              to optimize underperforming channels — this service is for you.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">E-commerce Businesses</h3>
                <p className="text-muted-foreground">
                  Boost online sales, reduce cart abandonment, and improve repeat purchases.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">SaaS Companies</h3>
                <p className="text-muted-foreground">
                  Optimize trial-to-paid conversion, reduce churn, and increase lifetime value.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">Service Providers</h3>
                <p className="text-muted-foreground">
                  Generate more leads, shorten sales cycles, and close more deals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: CTA */}
        <div className="bg-primary/10 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl mt-20">
          <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Grow Your Revenue?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            QoraxAI offers a <strong>free 30-minute Growth Audit</strong> to help you identify revenue opportunities and
            quick wins. Let's build a data-driven roadmap to scale your sales.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Claim My Free Growth Audit
          </Link>
        </div>
      </section>
    </>
  )
}
