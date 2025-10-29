{/*import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cost Optimization – Save 20–40% on IT for Bangladeshi SMEs | QoraxAI",
  description: "QoraxAI helps Bangladeshi SMEs cut IT costs 20–40% by identifying underused subscriptions, cloud waste, and redundant IT expenses. Get a free tech audit today.",
}

export default function CostOptimizationPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image src="/cost-optimization.png" alt="Cost Optimization" fill className="object-cover object-center" priority />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Company Cost Optimization</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          We identify underused subscriptions, cloud waste, and redundant IT expenses — saving you 20–40% on annual technology costs without reducing performance.
        </p>
        <Link href="/#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition">
          Get Your Free Tech Audit
        </Link>
      </div>
    </section>
  );
}
*/}

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, LineChart, DollarSign, Layers } from "lucide-react";

export const metadata = {
  title: "Company Cost Optimization – Cut 20–40% IT Spending Without Compromise | QoraxAI",
  description:
    "QoraxAI helps companies reduce IT and operational costs by 20–40% through data-driven insights, cloud efficiency, and smart automation. Book your free 30-minute cost optimization audit today.",
};

export default function CompanyCostOptimizationPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Company Cost Optimization
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rising IT and infrastructure costs can quietly erode profits — often without leaders realizing where the waste is hiding.  
            At <strong>QoraxAI</strong>, we specialize in uncovering inefficiencies across your technology stack, 
            cloud usage, and operational workflows — helping you cut costs by up to <strong>40%</strong> without sacrificing productivity or innovation.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-16 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/cost-optimization.png"
            alt="Company Cost Optimization Service"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Section: Common Pain Points */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
            Where Companies Lose Money
          </h2>
          <p className="text-muted-foreground mb-8 text-center">
            Most organizations are unaware of the hidden costs buried inside their IT ecosystem. Here are some of the most common issues we uncover:
          </p>
          <ul className="text-left grid sm:grid-cols-2 gap-6 text-muted-foreground">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" />
              Underused or duplicate software subscriptions eating up budgets.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" />
              Cloud instances and servers running 24/7 without need.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" />
              Poor vendor contract visibility and overlapping service costs.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" />
              Manual workflows where automation could save hours each week.
            </li>
          </ul>
        </div>

        {/* Section: QoraxAI’s Strategic Approach */}
        <div className="bg-muted/20 rounded-2xl p-10 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Our 4-Pillar Cost Optimization Framework
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-muted-foreground">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <LineChart className="text-primary w-8 h-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">1. Spend Analysis</h3>
              <p>
                We audit your IT and operational costs to map where resources are being allocated — and where they’re being wasted.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Layers className="text-primary w-8 h-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">2. Cloud & Infrastructure Review</h3>
              <p>
                Identify idle workloads, unused storage, and over-provisioned servers across AWS, Azure, or private cloud setups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <DollarSign className="text-primary w-8 h-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">3. License & Subscription Rationalization</h3>
              <p>
                Consolidate overlapping tools, negotiate better vendor terms, and retire redundant software licenses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <CheckCircle className="text-primary w-8 h-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">4. Process Automation</h3>
              <p>
                Implement AI-powered automations that reduce manual workload, speed up delivery, and minimize operational errors.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Expected Results */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Real, Measurable Outcomes
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Our clients typically achieve:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-muted-foreground">
            <div className="bg-muted/10 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-primary mb-1">20–40%</h3>
              <p className="text-sm">Average IT cost reduction</p>
            </div>
            <div className="bg-muted/10 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-primary mb-1">50%+</h3>
              <p className="text-sm">Increase in resource efficiency</p>
            </div>
            <div className="bg-muted/10 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-primary mb-1">2–3x</h3>
              <p className="text-sm">ROI within the first year</p>
            </div>
            <div className="bg-muted/10 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-primary mb-1">Zero Downtime</h3>
              <p className="text-sm">During implementation</p>
            </div>
          </div>
        </div>

        {/* Section: Process */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            How QoraxAI Works With You
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-left text-muted-foreground">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-primary mb-2">Step 1: Discovery</h3>
              <p>We review your IT, cloud, and operational spending to understand your cost baseline and identify immediate savings opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-primary mb-2">Step 2: Analysis</h3>
              <p>Our AI-powered tools analyze patterns, licensing data, and usage metrics to locate inefficiencies and cost duplication.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-primary mb-2">Step 3: Optimization Roadmap</h3>
              <p>We deliver a prioritized, actionable plan showing exactly how to achieve sustainable savings and optimize resource use.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Cut Unnecessary IT Spending?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Book your free 30-minute cost optimization session today. We’ll show you exactly where you can reduce costs — 
            and how to reinvest those savings into growth and innovation.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Get Your Free Cost Audit
          </Link>

          <p className="text-sm text-muted-foreground mt-4">
            Just click “Free Tech Audit,” fill in your information, and our experts will contact you to begin your optimization journey.
          </p>
        </div>
      </div>
    </section>
  );
}
