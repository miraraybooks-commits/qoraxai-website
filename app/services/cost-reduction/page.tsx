import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "IT Cost Reduction - Save 20-40% on Tech | QoraxAI",
  description:
    "Cut IT costs 20-40% through cloud optimization, license audits & infrastructure rightsizing. Free cost audit from QoraxAI Bangladesh today.",
}

export default function CostReductionPage() {
  return (
    <>
      <ServicePageHeader />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Cost Reduction & IT Optimization</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Are you overpaying for technology that doesn't deliver results? QoraxAI's{" "}
              <strong>Cost Reduction & IT Optimization</strong> service identifies waste, eliminates redundant expenses,
              and optimizes your IT infrastructure — helping you save 20-40% annually without sacrificing performance.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Get Your Free Cost Audit
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/cost-reduction.jpg"
              alt="IT cost optimization and expense reduction strategies"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* SECTION 1: The Hidden Cost Problem */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-semibold text-primary mb-4">The Hidden Cost Problem in IT</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Most businesses don't realize how much they're overspending on technology. Unused software licenses,
            over-provisioned cloud resources, inefficient hosting, and redundant tools silently drain your budget —
            often by 30-50% more than necessary.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">Subscription Waste</h3>
              <p className="text-muted-foreground">
                Paying for software licenses your team no longer uses or duplicate tools that serve the same function.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">Cloud Overspending</h3>
              <p className="text-muted-foreground">
                Over-provisioned servers, unoptimized storage, and forgotten test environments running 24/7.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">Inefficient Operations</h3>
              <p className="text-muted-foreground">
                Manual processes, poor automation, and reactive IT management costing you time and money.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: How We Cut Costs */}
        <div className="bg-primary/5 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">How QoraxAI Reduces Your IT Costs</h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Comprehensive IT Cost Audit</h3>
                <p className="text-muted-foreground mb-6">
                  We analyze every dollar you spend on technology — software licenses, cloud services, hosting,
                  hardware, and support contracts — to identify waste and savings opportunities.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. Cloud Cost Optimization</h3>
                <p className="text-muted-foreground mb-6">
                  Rightsizing instances, eliminating unused resources, implementing autoscaling, and negotiating better
                  pricing with cloud providers like AWS, Azure, or Google Cloud.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. Software License Management</h3>
                <p className="text-muted-foreground">
                  Identifying unused or underutilized licenses, consolidating duplicate tools, and renegotiating
                  contracts to reduce annual software spend by 20-35%.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. Infrastructure Optimization</h3>
                <p className="text-muted-foreground mb-6">
                  Migrating legacy systems to more efficient platforms, consolidating servers, and implementing better
                  resource allocation strategies.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Process Automation</h3>
                <p className="text-muted-foreground mb-6">
                  Automating manual tasks, reducing operational overhead, and eliminating time-consuming processes that
                  drain productivity and budget.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. Vendor Consolidation & Negotiation</h3>
                <p className="text-muted-foreground">
                  Streamlining vendor relationships, consolidating services with fewer providers, and leveraging our
                  buying power to negotiate better terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Cost Savings Examples */}
        <div className="max-w-6xl mx-auto mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Real Cost Savings Examples</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Here are real-world scenarios where businesses reduced IT costs without compromising performance or
              security:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">E-commerce Company (Dhaka)</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Challenge:</strong> Over-provisioned AWS infrastructure and unused marketing tools costing
                $4,500/month.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Rightsized EC2 instances, eliminated unused S3 buckets, consolidated SaaS
                tools.
              </p>
              <p className="text-primary font-semibold">Result: Saved $1,850/month (41% reduction) = $22,200/year</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">Fintech Startup (Bangladesh)</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Challenge:</strong> Paying for 50 software licenses but only 32 actively used.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> License audit, removed 18 unused seats, migrated to more affordable
                alternatives.
              </p>
              <p className="text-primary font-semibold">Result: Saved $680/month (38% reduction) = $8,160/year</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">Healthcare Provider (Chittagong)</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Challenge:</strong> Legacy on-premise servers consuming high electricity and maintenance costs.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Migrated to cloud, decommissioned physical servers, implemented autoscaling.
              </p>
              <p className="text-primary font-semibold">Result: Saved $2,100/month (45% reduction) = $25,200/year</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">Manufacturing SME (Sylhet)</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Challenge:</strong> Multiple redundant project management and communication tools.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Consolidated to unified platform, eliminated duplicate subscriptions.
              </p>
              <p className="text-primary font-semibold">Result: Saved $520/month (33% reduction) = $6,240/year</p>
            </div>
          </div>
        </div>

        {/* SECTION 4: Benefits Beyond Savings */}
        <div className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">Benefits Beyond Cost Savings</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Cost reduction isn't just about spending less — it's about spending smarter. Our optimization approach
              improves performance, security, and scalability while reducing expenses.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">Better Performance</h3>
                <p className="text-muted-foreground">Optimized systems run faster and more reliably.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">Enhanced Security</h3>
                <p className="text-muted-foreground">Fewer tools mean fewer vulnerabilities and better control.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">Scalability</h3>
                <p className="text-muted-foreground">Efficient infrastructure scales affordably as you grow.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">Team Productivity</h3>
                <p className="text-muted-foreground">Simplified tooling means less confusion and faster work.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: CTA */}
        <div className="bg-primary/10 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl mt-20">
          <h2 className="text-3xl font-bold mb-4 text-primary">Stop Overpaying for Technology</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            QoraxAI offers a <strong>free 30-minute IT Cost Audit</strong> to uncover hidden waste and show you exactly
            where you can save. Let's optimize your technology spending together.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Claim My Free Cost Audit
          </Link>
        </div>
      </section>
    </>
  )
}
