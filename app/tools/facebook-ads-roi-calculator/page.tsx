export const revalidate = 3600

import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "Generative Engine Optimization Service | QoraxAI",
  description:
    "Dominate Google, ChatGPT, Gemini, and AI search. QoraxAI delivers AI SEO, GEO, and AEO to future-proof your search visibility.",
  alternates: {
    canonical: "/services/ai-seo-geo-aeo",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AISEOPage() {
  return (
    <>
      <ServicePageHeader />

      <main className="bg-white">

        {/* ── Breadcrumb / Back ───────────────────────────────────────────── */}
        <div className="border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">AI SEO, GEO & AEO</span>
          </div>
        </div>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                AI SEO · GEO · AEO
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Get Found Where It <span className="text-primary">Actually Matters</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your customers are no longer just searching Google. They&apos;re asking ChatGPT, Gemini,
                and voice assistants for answers. The real question is: when they ask, is your business
                the one being recommended? QoraxAI&apos;s AI SEO, GEO, and AEO services are built to
                put you in front of those results — consistently.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get a Free SEO Audit
                </Link>
                <Link
                  href="/#services"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  ← Back to Services
                </Link>
              </div>
            </div>

            <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl">
              <Image
                src="/ai-seo-geo-aeo.jpg"
                alt="AI SEO, GEO and AEO optimization services for Google, ChatGPT and Gemini"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── The Problem ─────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Search Has Changed. Has Your Strategy?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Traditional SEO alone is no longer enough. AI-powered search tools are now answering
                questions directly — pulling from trusted sources and skipping the rest. If your website
                isn&apos;t optimised for how AI reads and recommends content, you&apos;re invisible to a
                growing share of your audience.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Missing AI Recommendations",
                  body: "ChatGPT, Gemini, and Perplexity cite sources they trust. If your brand isn't one of them, your competitors are getting that visibility — and those customers.",
                },
                {
                  title: "No Featured Snippet Presence",
                  body: "Google's AI Overviews and Featured Snippets now sit above organic results. Without AEO, your content gets buried even when it ranks on page one.",
                },
                {
                  title: "Falling Behind on Voice Search",
                  body: "Voice assistants answer in full sentences, not lists of links. If your content isn't structured for conversational queries, you won't be the answer they give.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">!</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's Included ─────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What&apos;s Included in Our Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We don&apos;t sell random tasks. We build search systems — ones that work for Google
                today and for AI-powered search tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  title: "Full On-Page SEO Optimisation",
                  body: "We start with a thorough website audit, keyword research, meta tag optimisation, header tag structuring, and fixing any technical issues holding your rankings back. A clean foundation makes everything else work better.",
                },
                {
                  num: "02",
                  title: "AEO — Answer Engine Optimisation",
                  body: "We optimise your content for conversational intent, structure FAQs around real user queries, and implement complete schema markup (FAQ, Article, Local Business, and more) so Google and AI tools pull your answers to the top.",
                },
                {
                  num: "03",
                  title: "GEO — Generative Engine Optimisation",
                  body: "We align your content with how generative AI models interpret, summarise, and recommend information — AI-intent keyword architecture, NLP-based topical relevance, internal linking, and content blocks crafted for AI-generated summaries.",
                },
                {
                  num: "04",
                  title: "AI Citations & Brand Mentions",
                  body: "We secure genuine AI citations and brand mentions across high-authority platforms so that ChatGPT, Gemini, and other LLMs recognise your brand as a trusted source. Every mention is earned through real outreach — no shortcuts.",
                },
                {
                  num: "05",
                  title: "Authority Backlink Building",
                  body: "High DA guest posts, niche edits, UGC mentions in real forums, and diversified backlink profiles from sites with real traffic. We build links that signal trust to both Google and AI platforms.",
                },
                {
                  num: "06",
                  title: "Monthly Reporting & Strategy Updates",
                  body: "Every month you get clear reporting on what's moved, what's next, and how we're adapting your strategy to stay ahead of Google updates and AI algorithm changes.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-3xl font-bold text-primary/20 leading-none shrink-0 mt-1">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Is This For You ─────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Is This Service Right for You?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work best with clients who are serious about long-term growth. Results typically
                begin showing within 8 to 12 weeks and build from there.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">This Is For You If...</h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    "You're tired of SEO strategies that never delivered",
                    "You want to be found on Google, ChatGPT, Gemini, and voice search",
                    "You understand SEO is an investment, not an expense",
                    "You want steady, compounding traffic growth month over month",
                    "You want your brand to be the trusted authority in your niche",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border-l-4 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-400 mb-5">This Is Not For You If...</h3>
                <ul className="space-y-3 text-gray-500">
                  {[
                    "You're expecting page-one rankings in days or weeks",
                    "You're looking for the cheapest option available",
                    "You want one-off tasks rather than a proper strategy",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gray-300 font-bold mt-0.5 shrink-0">✗</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why QoraxAI ─────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose QoraxAI for AI SEO & GEO
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We don&apos;t just follow trends — we build strategies that hold up when Google updates
                and AI search evolves.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Built for AI Search",
                  body: "We optimise for Google and for ChatGPT, Gemini, Perplexity, and every AI platform your customers are already using.",
                },
                {
                  title: "100% White Hat",
                  body: "Every backlink, citation, and piece of content we produce is earned manually through genuine outreach. No shortcuts that put your site at risk.",
                },
                {
                  title: "Strategy, Not Tasks",
                  body: "We build systems, not checklists. Everything connects back to growing your visibility, authority, and revenue over time.",
                },
                {
                  title: "Transparent Reporting",
                  body: "You always know what we're doing and why. Monthly reports with real data, clear explanations, and next steps mapped out.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-8 h-8 bg-primary rounded-lg mb-4" />
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The AI Search Revolution Is Already Here
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every day without an AI SEO strategy is a day your competitors are being cited instead
              of you. Let&apos;s build a plan that gets your business found — on Google, in AI answers,
              and everywhere your customers are looking.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Your Free SEO Audit
              </Link>
              <Link
                href="/#services"
                className="border border-white/40 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                ← Back to Services
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
