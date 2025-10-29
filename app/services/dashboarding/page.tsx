{/*import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cost Optimization – Save 20–40% on IT for Bangladeshi SMEs | QoraxAI",
  description: "QoraxAI helps Bangladeshi SMEs cut IT costs 20–40% by identifying underused subscriptions, cloud waste, and redundant IT expenses. Get a free tech audit today.",
}

export default function BIDashboardPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image src="/bi-dashboard.jpg" alt="Power BI / MIS Dashboarding" fill className="object-cover object-center" priority />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Power BI / MIS Dashboarding</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          We design interactive dashboards using Power BI and Excel-based MIS, providing clear visibility into your business KPIs and helping you make data-driven decisions.
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

export const metadata = {
  title:
    "Power BI & MIS Dashboarding – Turn Data Into Decisions | QoraxAI",
  description:
    "QoraxAI designs Power BI and MIS dashboards that help companies visualize key metrics, automate reporting, and make smarter data-driven decisions. Get a free dashboard consultation today.",
};

export default function PowerBIDashboardingPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Power BI & MIS Dashboarding
          </h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Modern businesses generate enormous volumes of data, but without the
            right insights, that data stays unused. QoraxAI helps you turn
            numbers into action through <strong>Power BI</strong> and{" "}
            <strong>Management Information System (MIS)</strong> dashboards that
            deliver clarity, accuracy, and real-time visibility across your
            operations.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Request a Free Dashboard Consultation
          </Link>
        </div>

        <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/powerbi-dashboarding.png"
            alt="Power BI / MIS Dashboarding"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Section Divider */}
      <div className="border-b border-gray-200 my-16" />

      {/* Why It Matters */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Why Dashboarding Matters
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Manual reports and spreadsheets take time, create confusion, and delay
          decisions. A well-built dashboard provides <strong>instant access</strong> 
          to the KPIs that matter most — sales, finance, HR, operations, or marketing — 
          helping leaders take the right decisions faster.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Real-Time Visibility
          </h3>
          <p className="text-muted-foreground">
            Monitor live metrics from your ERP, CRM, accounting, or HR systems
            in one unified dashboard.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Automated Reporting
          </h3>
          <p className="text-muted-foreground">
            Eliminate repetitive report creation. Your dashboards auto-refresh
            with the latest data every day.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Data-Driven Decisions
          </h3>
          <p className="text-muted-foreground">
            Empower your leadership team with visual insights that highlight
            performance, trends, and opportunities.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Centralized Data
          </h3>
          <p className="text-muted-foreground">
            Integrate multiple data sources — from Excel and SQL to cloud apps
            like Google Analytics and QuickBooks.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Interactive Visualization
          </h3>
          <p className="text-muted-foreground">
            Drill down into regions, products, or departments with intuitive
            filters and charts.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            Executive Summary Dashboards
          </h3>
          <p className="text-muted-foreground">
            Provide C-level executives with easy-to-digest visuals that align
            operations with strategic objectives.
          </p>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-primary text-center mb-8">
          How QoraxAI Delivers Your Dashboard
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              1. Discovery & KPI Mapping
            </h3>
            <p className="text-muted-foreground">
              We start by understanding your goals, reporting needs, and key
              performance indicators across departments. This ensures every
              metric on your dashboard aligns with your business priorities.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              2. Data Integration & Modeling
            </h3>
            <p className="text-muted-foreground">
              Our engineers connect to your data sources (SQL, Excel, ERP, APIs)
              and clean, model, and transform data to create a unified
              analytical layer.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              3. Dashboard Design & Automation
            </h3>
            <p className="text-muted-foreground">
              We design visually rich, user-friendly Power BI dashboards that
              automatically refresh with real-time updates.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              4. Training & Handover
            </h3>
            <p className="text-muted-foreground">
              Your team gets hands-on training to navigate, filter, and export
              reports — ensuring full ownership and usability.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-primary/5 py-16 px-4 rounded-3xl shadow-inner">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Ready to See Your Business in One Dashboard?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Let QoraxAI show you how a powerful Power BI or MIS dashboard can
          transform your reporting and decision-making. Get a free 30-minute
          consultation to explore your dashboard potential.
        </p>

        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Schedule My Free Dashboard Audit
        </Link>
      </div>
    </section>
  );
}
