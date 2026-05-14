export const revalidate = 3600

import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

const SITE_URL = "https://qoraxai.com"

// ── ROUTE: /services/web-saas-automation-development
// ── Replaces: /services/social-media-crm-integration

const OG_IMAGE = {
  url: "https://qoraxai.com/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "AI-powered full-stack web, SaaS and automation development by QoraxAI Bangladesh",
}

export const metadata = {
  title: "AI-Powered Full-Stack Web, SaaS & Automation Development in Bangladesh | QoraxAI",
  description:
    "Custom web apps, SaaS platforms, and business automation built with AI. QoraxAI delivers full-stack development using Next.js, React, Node.js, Python & ERPNext — serving clients across Dhaka and Bangladesh.",
  alternates: {
    canonical: `${SITE_URL}/services/web-saas-automation-development`,
  },
  keywords: [
    "full stack web development Bangladesh",
    "SaaS development company Dhaka",
    "AI automation development Bangladesh",
    "custom web app development Dhaka",
    "business process automation Bangladesh",
    "Next.js development Bangladesh",
    "ERPNext customization Bangladesh",
    "API integration development Dhaka",
    "QoraxAI web development",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/web-saas-automation-development`,
    title: "AI-Powered Full-Stack Web, SaaS & Automation Development in Bangladesh | QoraxAI",
    description:
      "Custom web apps, SaaS platforms, and AI-powered automation built for Bangladesh businesses. Next.js, React, Node.js, Python & ERPNext.",
    siteName: "QoraxAI",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Web, SaaS & Automation Development | QoraxAI Bangladesh",
    description:
      "Custom SaaS platforms and business automation powered by AI. Serving Dhaka & Bangladesh.",
    images: [OG_IMAGE.url],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/web-saas-automation-development#service`,
      name: "AI-Powered Full-Stack Web, SaaS & Automation Development",
      description:
        "End-to-end development of custom web applications, SaaS platforms, and AI-driven business automation solutions. Built with Next.js, React, Node.js, Python, and ERPNext for businesses across Bangladesh.",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#business`,
        name: "QoraxAI Technology",
        url: SITE_URL,
        telephone: "+8801718723202",
        email: "sales@qoraxai.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
      },
      areaServed: [
        { "@type": "City", name: "Dhaka" },
        { "@type": "Country", name: "Bangladesh" },
      ],
      serviceType: [
        "Full-Stack Web Development",
        "SaaS Development",
        "Business Automation",
        "AI Integration",
        "API Development",
      ],
      url: `${SITE_URL}/services/web-saas-automation-development`,
      offers: {
        "@type": "Offer",
        priceCurrency: "BDT",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/services/web-saas-automation-development`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web, SaaS & Automation Development",
          item: `${SITE_URL}/services/web-saas-automation-development`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What technologies does QoraxAI use for web development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "QoraxAI builds with Next.js, React, Node.js, Python, TypeScript, Tailwind CSS, PostgreSQL, MySQL, and integrates AI APIs including OpenAI, Anthropic Claude, and Google Gemini.",
          },
        },
        {
          "@type": "Question",
          name: "Can QoraxAI build a SaaS product from scratch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. QoraxAI handles full SaaS product development including architecture design, multi-tenant setup, subscription billing integration, user authentication, and deployment on Vercel, AWS, or your preferred cloud.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical automation project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simple workflow automation is typically delivered in 2–4 weeks. Complex multi-system integrations and custom SaaS platforms range from 6–16 weeks depending on scope.",
          },
        },
      ],
    },
  ],
}

const techStack = [
  { category: "Frontend", items: ["Next.js 14+", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python (FastAPI/Django)", "REST & GraphQL APIs"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "Supabase", "MongoDB"] },
  { category: "AI & Automation", items: ["OpenAI API", "Claude API", "n8n", "Zapier", "Make"] },
  { category: "ERP & CRM", items: ["ERPNext / Frappe", "Zoho CRM", "HubSpot"] },
  { category: "DevOps", items: ["Vercel", "AWS", "Cloudflare", "Docker", "GitHub Actions"] },
]

const services = [
  {
    number: "01",
    title: "Custom Web Application Development",
    description:
      "From business portals to customer-facing platforms, we build fast, scalable, SEO-ready web applications tailored to your exact workflow — not off-the-shelf templates.",
  },
  {
    number: "02",
    title: "SaaS Product Development",
    description:
      "Full SaaS builds from zero: multi-tenant architecture, subscription billing (Stripe/SSLCommerz), user management, onboarding flows, and cloud deployment ready to scale.",
  },
  {
    number: "03",
    title: "AI Feature Integration",
    description:
      "Embed AI into your existing software or new product — intelligent chatbots, document processing, lead scoring, content generation, and decision-automation using GPT-4 or Claude.",
  },
  {
    number: "04",
    title: "Business Process Automation",
    description:
      "Eliminate repetitive manual work. We automate invoice processing, lead routing, inventory alerts, reporting pipelines, and inter-system data flows using n8n, Make, or custom code.",
  },
  {
    number: "05",
    title: "API Development & Integration",
    description:
      "Connect your apps, ERPs, CRMs, and payment gateways. We design secure REST and GraphQL APIs and integrate third-party services so your tech stack works as one system.",
  },
  {
    number: "06",
    title: "ERPNext Customization & Portals",
    description:
      "Beyond standard ERPNext implementation — custom doctypes, workflows, Frappe scripts, and web portals built on top of your ERPNext instance for unique business requirements.",
  },
]

const results = [
  { metric: "60%", label: "Average reduction in manual data-entry hours after automation" },
  { metric: "3–5×", label: "Faster time-to-launch vs traditional development agencies" },
  { metric: "20+", label: "Years of ERP and enterprise systems experience behind every build" },
  { metric: "48 hrs", label: "Typical turnaround for API integration proof-of-concept delivery" },
]

export default function WebSaaSAutomationPage() {
  return (
    <>
      <ServicePageHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        {/* ── Hero ── */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-24">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary/70 mb-3">
              Web · SaaS · Automation
            </span>
            <h1 className="text-4xl font-bold text-primary mb-5 leading-tight">
              AI-Powered Full-Stack Web, SaaS &amp; Automation Development
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              QoraxAI builds production-grade web applications, SaaS platforms, and AI-driven
              automation systems for businesses across Bangladesh. From idea to deployment — fast,
              scalable, and built to deliver measurable results.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
              >
                Start Your Project
              </Link>
              <Link
                href="/#contact"
                className="inline-block border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/web-saas-automation.jpg"
              alt="AI-powered full-stack web and SaaS development by QoraxAI Bangladesh"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* ── Results Bar ── */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r) => (
              <div key={r.metric} className="bg-white rounded-2xl shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{r.metric}</div>
                <p className="text-sm text-muted-foreground leading-snug">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Problem Section ── */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Why Most Bangladesh Businesses Are Stuck
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Growing companies hit a wall when spreadsheets, manual processes, and disconnected
              tools can no longer keep up. The gap between what you need and what generic software
              provides costs you time, money, and competitive edge every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Off-the-Shelf Software Limitations",
                body: "Pre-built tools don't match your actual business workflow, forcing costly workarounds and manual fixes.",
              },
              {
                title: "No AI Leverage",
                body: "Competitors are automating decisions and customer interactions with AI while your team is still copy-pasting data between apps.",
              },
              {
                title: "Disconnected Systems",
                body: "Your website, CRM, ERP, and accounting software don't talk to each other — creating data silos and reporting headaches.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-primary">{card.title}</h3>
                <p className="text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services ── */}
        <div className="bg-white py-16 shadow-inner mb-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-12">
              What We Build
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <div key={s.number} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition">
                  <div className="text-4xl font-black text-primary/10 mb-3">{s.number}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tech Stack ── */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10">
            Technologies We Work With
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/60 mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why QoraxAI ── */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Why Choose QoraxAI for Development
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are not a generic dev shop. Every project combines 20+ years of enterprise systems
              experience with modern AI tooling — giving you software that actually fits your
              business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "ERP + Dev Expertise Combined",
                body: "Rare combination of ERPNext/Oracle knowledge and modern full-stack skills means we understand your whole business, not just the UI.",
              },
              {
                title: "AI-First Approach",
                body: "We design systems to leverage AI from day one — not bolt it on later as an afterthought.",
              },
              {
                title: "Bangladesh Market Knowledge",
                body: "Local payment gateways, Bangla language support, bKash/Nagad integration, and Bangladesh-specific compliance built in.",
              },
              {
                title: "Transparent, Fast Delivery",
                body: "Clear milestones, weekly demos, and real progress — no black-box development or disappearing developers.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 bg-white rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What technologies does QoraxAI use for web development?",
                a: "We primarily build with Next.js, React, Node.js, Python, TypeScript, and Tailwind CSS on the frontend and backend. For AI features we integrate OpenAI, Claude, and Gemini APIs. We deploy on Vercel, AWS, and Cloudflare.",
              },
              {
                q: "Can QoraxAI build a SaaS product from scratch?",
                a: "Yes — full SaaS builds including multi-tenant architecture, subscription billing (Stripe or SSLCommerz for Bangladesh), user authentication, onboarding, and cloud deployment.",
              },
              {
                q: "How long does a typical automation project take?",
                a: "Simple workflow automation is typically delivered in 2–4 weeks. Complex multi-system integrations and custom SaaS platforms range from 6–16 weeks depending on scope.",
              },
              {
                q: "Do you support local Bangladesh payment gateways?",
                a: "Yes. We integrate bKash, Nagad, SSLCOMMERZ, and ShurjoPay for Bangladesh-based SaaS and e-commerce products.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Ready to Build Something That Actually Works?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need a custom web app, a SaaS platform, or AI-powered automation — QoraxAI
            delivers production-ready software built for your exact business needs. Let&apos;s talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition"
            >
              View All Services
            </Link>
          </div>
        </div>

      </section>
    </>
  )
}
