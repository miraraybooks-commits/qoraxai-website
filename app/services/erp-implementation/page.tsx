import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "ERPNext Implementation Services in Bangladesh | QoraxAI",
  description:
    "ERPNext implementation for small and medium businesses. We handle installation, configuration, data migration, training, and ongoing support. Get started with a free consultation.",
  keywords: [
    "ERPNext implementation Bangladesh",
    "ERPNext setup",
    "open source ERP",
    "ERP for small business",
    "ERPNext consultant Dhaka",
    "Frappe ERP",
    "ERP implementation service",
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function ERPImplementationPage() {
  return (
    <>
      <ServicePageHeader />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-24">
          <div>
            {/* Small label above H1 */}
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4">
              Open-Source ERP · No Licensing Fees
            </span>

            <h1 className="text-4xl font-bold text-primary mb-5 leading-tight">
              ERPNext Implementation Services
            </h1>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Running a business on spreadsheets, WhatsApp, and disconnected software is fine — until it isn&apos;t.
              When your team loses track of stock, invoices go out late, or no one knows which sales order was fulfilled,
              that&apos;s the moment you need an ERP system.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ERPNext is one of the most capable open-source ERP platforms available today. QoraxAI helps businesses
              in Bangladesh and beyond set it up properly — configured for your actual workflows, not a generic template.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition text-center"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="#what-is-erpnext"
                className="inline-block border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition text-center"
              >
                Learn About ERPNext ↓
              </Link>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/erp-implementation.jpg"
              alt="ERPNext business dashboard showing inventory, accounting and sales modules"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* ── WHAT IS ERPNEXT ──────────────────────────────────────────── */}
        <div id="what-is-erpnext" className="max-w-5xl mx-auto mb-24 scroll-mt-20">
          <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
            What Is ERPNext?
          </h2>
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              ERPNext is a free, open-source Enterprise Resource Planning (ERP) system built on the Frappe framework.
              It brings your entire business — accounting, inventory, sales, purchasing, HR, manufacturing, and more —
              into one connected platform. Instead of jumping between five different tools, your team works in one place
              and every department can see the same data in real time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              Unlike SAP, Oracle, or Microsoft Dynamics — which charge heavy licensing fees — ERPNext is completely
              free to use. You only pay for the server it runs on and the expert who sets it up correctly. For small
              and medium businesses, this makes it one of the most cost-effective ERP options in the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It is used by over 5,000 companies across 150 countries. In Bangladesh, adoption is growing fast —
              particularly in manufacturing, trading, retail, and service businesses that need proper financial
              controls without enterprise-level budgets.
            </p>
          </div>
        </div>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary mb-4 text-center">
            How Does ERPNext Work?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            Think of ERPNext as the central nervous system of your business. Data entered in one department
            flows automatically to every other department that needs it.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="text-3xl font-bold text-primary/20 mb-2">01</div>
              <h3 className="text-lg font-semibold text-primary mb-2">One database, every department</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your sales team raises a quotation. It becomes a sales order. Warehouse gets a delivery note.
                Accounts gets an invoice. All automatically, from a single entry. No re-typing. No miscommunication.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="text-3xl font-bold text-primary/20 mb-2">02</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Real-time visibility</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                See your current stock levels, outstanding payments, monthly profit, and team performance
                on one dashboard. No waiting for end-of-month reports. The numbers are live.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="text-3xl font-bold text-primary/20 mb-2">03</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Works in a browser</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ERPNext runs in any web browser and has a mobile app. Your team can use it from the office,
                warehouse, or on the road. No software installation needed on individual computers.
              </p>
            </div>
          </div>
        </div>

        {/* ── WHO IS IT FOR ─────────────────────────────────────────────── */}
        <div className="bg-white py-16 px-4 rounded-3xl shadow-inner mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center mb-4">
              What Type of Business Can Use ERPNext?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              ERPNext works for almost any business that handles products, money, or people. Here are the most
              common types we help:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Trading & Distribution",
                  desc: "Track purchase orders, stock movement, supplier payments, and customer invoices across multiple warehouses. Know exactly what you have and what you owe — at any moment."
                },
                {
                  title: "Manufacturing",
                  desc: "Manage your Bill of Materials, work orders, raw material consumption, and finished goods production. See the true cost of every product you make."
                },
                {
                  title: "Retail & Ecommerce",
                  desc: "Connect your point-of-sale, online store, and warehouse inventory in one place. Avoid overselling and stock-outs with live inventory syncing."
                },
                {
                  title: "Healthcare & Pharmacy",
                  desc: "Track medicine inventory, expiry dates, patient billing, and supplier accounts. Stay compliant without drowning in manual paperwork."
                },
                {
                  title: "Construction & Real Estate",
                  desc: "Manage project costs, subcontractor payments, material procurement, and client invoicing per project. Know which projects are profitable."
                },
                {
                  title: "Service Businesses",
                  desc: "Handle client contracts, project timelines, team timesheets, and invoicing in one system. Bill accurately and get paid faster."
                },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8 text-sm">
              Not sure if ERPNext fits your business?{" "}
              <Link href="/#contact" className="text-primary underline underline-offset-2">
                Ask us — we will give you an honest answer.
              </Link>
            </p>
          </div>
        </div>

        {/* ── MODULES ──────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary text-center mb-4">
            ERPNext Modules — What Is Included
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            ERPNext comes with 15+ built-in modules. You do not need to buy or activate all of them on day one.
            Most businesses start with 3–4 core modules and expand over time.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Accounting", desc: "General ledger, accounts payable/receivable, bank reconciliation, financial reports, tax compliance." },
              { name: "Inventory & Stock", desc: "Multi-warehouse stock tracking, stock transfers, valuation, reorder alerts, batch and serial number tracking." },
              { name: "Sales", desc: "Quotations, sales orders, delivery notes, invoices, customer management, sales analytics." },
              { name: "Purchasing", desc: "Purchase orders, supplier management, goods receipt, purchase invoices, spend analysis." },
              { name: "Manufacturing", desc: "Bill of Materials, work orders, production planning, subcontracting, quality control." },
              { name: "HR & Payroll", desc: "Employee records, attendance, leave management, payroll processing, appraisals." },
              { name: "CRM", desc: "Lead and opportunity tracking, pipeline management, customer communication history." },
              { name: "Project Management", desc: "Task tracking, timesheets, project costing, milestone management." },
              { name: "Point of Sale", desc: "Retail POS with offline support, cashier management, shift closing, receipt printing." },
              { name: "Assets", desc: "Asset register, depreciation, maintenance schedules, disposal tracking." },
              { name: "Quality", desc: "Inspection checklists, non-conformance reports, supplier quality tracking." },
              { name: "Website & Ecommerce", desc: "Built-in website builder, product catalog, online store connected directly to inventory." },
            ].map((mod) => (
              <div key={mod.name} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <h3 className="font-semibold text-primary mb-1">{mod.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BENEFITS ─────────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary text-center mb-4">
            What Benefits Will Your Company Get?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            These are not theoretical benefits. They are what businesses typically experience within the
            first 3–6 months of going live on ERPNext.
          </p>

          <div className="space-y-5">
            {[
              {
                label: "Stop losing money to manual errors",
                detail: "Double entries, wrong stock counts, missed invoices — these are expensive. When everything flows through one system, the errors go away because there is nothing to re-enter manually."
              },
              {
                label: "Know your real financial position at any time",
                detail: "Most small business owners only know how they are doing at month end when the accountant finishes. With ERPNext, your profit and loss, outstanding payments, and cash position update in real time."
              },
              {
                label: "No more 'I thought we had stock'",
                detail: "ERPNext tracks every stock movement — purchases, sales, transfers, returns. Your team will always know what is available before they promise delivery to a customer."
              },
              {
                label: "Reduce your operational costs",
                detail: "Companies implementing ERPNext typically reduce administrative overhead by 30–40% within the first year. Tasks that took hours — like month-end closing or inventory audits — take minutes."
              },
              {
                label: "Scale without hiring more admin staff",
                detail: "As your business grows, manual processes force you to hire more people just to handle paperwork. ERPNext lets your operations grow without a proportional increase in admin headcount."
              },
              {
                label: "Zero software licensing cost",
                detail: "ERPNext is 100% open source. You pay nothing to use the software itself — ever. Your only costs are hosting (typically $20–50/month on a cloud server) and implementation support."
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6 flex gap-5 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{benefit.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── OUR PROCESS ──────────────────────────────────────────────── */}
        <div className="bg-white py-16 px-4 rounded-3xl shadow-inner mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center mb-4">
              How QoraxAI Implements ERPNext
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              We follow a structured process so nothing gets missed and your team is ready to use
              the system confidently from day one.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "Step 1",
                  title: "Discovery & requirements gathering",
                  desc: "We start by understanding your business — not pitching software. We map your current processes, find the pain points, and decide which ERPNext modules you actually need. This usually takes 1–2 working sessions."
                },
                {
                  step: "Step 2",
                  title: "Server setup & installation",
                  desc: "We install ERPNext on a cloud server (or your own server if preferred), configure the domain, SSL security, backups, and email settings. Your system is live and secure before we touch any business data."
                },
                {
                  step: "Step 3",
                  title: "Configuration & customisation",
                  desc: "We configure the system for your business — your chart of accounts, tax rules, item and customer masters, warehouses, workflows, and print formats. ERPNext adapts to your processes, not the other way around."
                },
                {
                  step: "Step 4",
                  title: "Data migration",
                  desc: "We import your existing data — customers, suppliers, items, opening stock balances, and outstanding invoices — from your spreadsheets or old system. You do not start from zero."
                },
                {
                  step: "Step 5",
                  title: "Training your team",
                  desc: "We train your staff hands-on in your own system, with your own data. Not a generic demo. Each role gets training relevant to what they will actually do every day."
                },
                {
                  step: "Step 6",
                  title: "Go-live & ongoing support",
                  desc: "We stay with you through go-live week. After that, we are available for questions, small adjustments, and as your business grows, expanding the system to new modules or locations."
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 text-sm font-semibold text-primary/40 pt-1 w-14">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HONEST NOTE ──────────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-primary mb-3">
              A straightforward note from QoraxAI
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will not tell you ERPNext is right for every situation — because it is not. Some businesses
              are too small and a simple accounting tool is all they need. Some have very specialised processes
              that require custom development. We will tell you honestly in our first conversation whether
              ERPNext makes sense for you, and if there is a better option, we will say so.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What we can promise is that if we take on your implementation, we see it through until your
              team is actually using the system — not just until it is technically installed.
            </p>
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Ready to see if ERPNext fits your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute consultation. We will look at your current setup, ask a few questions,
            and give you an honest picture of what ERPNext implementation would look like for your business —
            including timeline and cost.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
