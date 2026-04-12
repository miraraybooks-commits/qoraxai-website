import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "ERPNext Implementation | Installation & Setup | QoraxAI",
  description:
    "Expert ERPNext implementation services. Complete installation, configuration, and customization for your business processes.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ERPImplementationPage() {
  return (
    <>
      <ServicePageHeader />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">ERPNext Implementation Services</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Streamline operations with a robust ERP system. QoraxAI&apos;s <strong>ERPNext Implementation Services</strong> deliver end-to-end setup, configuration, and training. From inventory management to financial accounting, get a fully customized ERPNext system tailored to your business.
            </p>

            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Start Your ERP Journey
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/erp-implementation.webp"
              alt="ERPNext implementation and business process automation"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Section: The Challenge */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">ERP Implementation Challenges</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Implementing an ERP system is complex. Many organizations face high costs, long deployment timelines, poor user adoption, and failed customizations. Without expert guidance, ERP projects can drain budgets and disrupt operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">High Implementation Costs</h3>
              <p className="text-muted-foreground">
                Expensive consultants and lengthy timelines inflate project budgets and delay ROI.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">User Adoption Issues</h3>
              <p className="text-muted-foreground">
                Without proper training and change management, teams resist the new system, defeating its purpose.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Poor Customization</h3>
              <p className="text-muted-foreground">
                Generic ERP setups don&apos;t match your unique business workflows, leading to workarounds and inefficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Our Solution */}
        <div className="bg-white py-16 shadow-inner">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">Our ERPNext Implementation Solution</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Business Process Assessment</h3>
                <p className="text-muted-foreground mb-6">
                  We analyze your current workflows to identify optimization opportunities and design the ideal ERPNext configuration for your business.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. System Configuration & Customization</h3>
                <p className="text-muted-foreground mb-6">
                  Custom modules, workflows, and integrations ensure ERPNext aligns perfectly with your operations and business rules.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. Data Migration & Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly migrate legacy data and integrate existing tools—accounting, CRM, inventory—without disruption.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. User Training & Documentation</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive training programs and documentation ensure your team confidently uses all ERPNext features.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Go-Live Support & Optimization</h3>
                <p className="text-muted-foreground mb-6">
                  We manage the transition and provide hands-on support during go-live to minimize disruption and ensure smooth operations.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. Ongoing Maintenance & Support</h3>
                <p className="text-muted-foreground">
                  Post-implementation support ensures your system stays optimized and adapts as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Why Choose QoraxAI */}
        <div className="max-w-6xl mx-auto mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose QoraxAI for ERPNext Implementation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We&apos;re certified ERPNext partners with 100+ successful implementations. We deliver on-time, on-budget projects with exceptional user adoption rates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Certified Partners</h3>
              <p className="text-muted-foreground">Officially recognized ERPNext partners with proven expertise and credentials.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Faster Deployment</h3>
              <p className="text-muted-foreground">Average implementation timeline: 4-8 weeks vs. industry standard of 6-12 months.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Cost-Effective</h3>
              <p className="text-muted-foreground">Flexible pricing models and no hidden costs. You control your investment.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">High Adoption Rates</h3>
              <p className="text-muted-foreground">Our training approach ensures 90%+ user adoption within the first month.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">Ready for a Unified Business System?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            QoraxAI&apos;s ERPNext implementation brings operational efficiency, transparency, and scalability to your organization. Get a free assessment of your ERP needs today.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Schedule Free ERP Assessment
          </Link>
        </div>
      </section>
    </>
  )
}
