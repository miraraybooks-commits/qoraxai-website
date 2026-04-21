import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "generative engine optimization service | QoraxAI",
  description:
    "Dominate Google, ChatGPT,  Gemini, and AI search. QoraxAI delivers AI SEO, GEO, and AEO to future-proof your search visibility.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function AISEOPage() {
  return (
    <>
      <ServicePageHeader />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              AI SEO, GEO & AEO — Get Found Where It Actually Matters
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your customers are no longer just searching Google. They&apos;re asking ChatGPT, Gemini, and voice
              assistants for answers. The real question is: when they ask, is your business the one being
              recommended? QoraxAI&apos;s <strong>AI SEO, GEO (Generative Engine Optimization), and AEO (Answer
                Engine Optimization)</strong> services are built to put you in front of those results — consistently.
            </p>

            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Get a Free SEO Audit
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/ai-seo-geo-aeo.jpg"
              alt="AI SEO, GEO and AEO optimization services for Google, ChatGPT and Gemini"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Section: The Problem */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">Search Has Changed. Has Your Strategy?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Traditional SEO alone is no longer enough. AI-powered search tools are now answering questions
              directly — pulling from trusted sources and skipping the rest. If your website isn&apos;t
              optimised for how AI reads and recommends content, you&apos;re invisible to a growing share of
              your audience. Here&apos;s what&apos;s at stake:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Missing AI Recommendations</h3>
              <p className="text-muted-foreground">
                ChatGPT, Gemini, and Perplexity cite sources they trust. If your brand isn&apos;t one of them,
                your competitors are getting that visibility — and those customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">No Featured Snippet Presence</h3>
              <p className="text-muted-foreground">
                Google&apos;s AI Overviews and Featured Snippets now sit above organic results. Without AEO,
                your content gets buried even when it ranks on page one.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Falling Behind on Voice Search</h3>
              <p className="text-muted-foreground">
                Voice assistants answer in full sentences, not lists of links. If your content isn&apos;t
                structured for conversational queries, you won&apos;t be the answer they give.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Our  Services */}
        <div className="bg-white py-16 shadow-inner">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-4">
              What&apos;s Included in Our AI SEO, GEO & AEO Service
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-10 max-w-3xl mx-auto">
              We don&apos;t sell random tasks. We build search systems — ones that work for Google today
              and for AI-powered search tomorrow.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Full On-Page SEO Optimisation</h3>
                <p className="text-muted-foreground mb-6">
                  We start with a thorough website audit, keyword research, meta tag optimisation, header tag
                  structuring, and fixing any technical issues holding your rankings back. A clean foundation
                  makes everything else work better.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. AEO — Answer Engine Optimisation</h3>
                <p className="text-muted-foreground mb-6">
                  We optimise your content for conversational intent, structure FAQs around real user queries,
                  and implement complete schema markup (FAQ, Article, Local Business, and more) so Google
                  and AI tools pull your answers to the top.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. GEO — Generative Engine Optimisation</h3>
                <p className="text-muted-foreground">
                  We align your content with how generative AI models interpret, summarise, and recommend
                  information. This includes AI-intent keyword architecture, NLP-based topical relevance,
                  internal linking strategy, and content blocks crafted specifically for AI-generated summaries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. AI Citations & Brand Mentions</h3>
                <p className="text-muted-foreground mb-6">
                  We secure genuine AI citations and brand mentions across high-authority platforms so that
                  ChatGPT, Gemini, and other LLMs recognise your brand as a trusted source. Every mention
                  is earned through real outreach — no shortcuts, no spam.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Authority Backlink Building</h3>
                <p className="text-muted-foreground mb-6">
                  Our off-page strategy includes high DA guest posts, niche edits, UGC mentions in real
                  forums, and diversified backlink profiles from sites with real traffic. We build links
                  that signal trust to both Google and AI platforms.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. Monthly Reporting & Strategy Updates</h3>
                <p className="text-muted-foreground">
                  Search is always evolving, and so is our approach. Every month you get clear reporting
                  on what&apos;s moved, what&apos;s next, and how we&apos;re adapting your strategy to stay ahead
                  of Google updates and AI algorithm changes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Who This Is For */}
        <div className="max-w-5xl mx-auto mt-20 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">Is This Service Right for You?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work best with clients who are serious about long-term growth. SEO and GEO are not
              overnight fixes — results typically begin showing within 8 to 12 weeks and build from there.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-primary mb-4">This Is For You If...</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  You&apos;re a business tired of SEO strategies that never delivered
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  You want to be found on Google, ChatGPT, Gemini, and voice search
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  You understand SEO is an investment, not an expense
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  You want steady, compounding traffic growth month over month
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  You want your brand to be the trusted authority in your niche
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border-l-4 border-gray-300">
              <h3 className="text-xl font-semibold text-gray-500 mb-4">This Is Not For You If...</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">✗</span>
                  You&apos;re expecting page-one rankings in days or weeks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">✗</span>
                  You&apos;re looking for the cheapest option available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold mt-0.5">✗</span>
                  You want one-off tasks rather than a proper strategy
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Why QoraxAI */}
        <div className="max-w-6xl mx-auto mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose QoraxAI for AI SEO & GEO</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We don&apos;t just follow trends — we build strategies that hold up when Google updates and AI
              search evolves. Here&apos;s what makes our approach different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Built for AI Search</h3>
              <p className="text-muted-foreground">
                We optimise for Google and for ChatGPT, Gemini, Perplexity, and every AI platform
                your customers are already using.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">100% White Hat</h3>
              <p className="text-muted-foreground">
                Every backlink, citation, and piece of content we produce is earned manually through
                genuine outreach. No shortcuts that put your site at risk.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Strategy, Not Tasks</h3>
              <p className="text-muted-foreground">
                We build systems, not checklists. Everything we do connects back to growing your
                visibility, authority, and revenue over time.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Transparent Reporting</h3>
              <p className="text-muted-foreground">
                You always know what we&apos;re doing and why. Monthly reports with real data, clear
                explanations, and the next steps mapped out.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            The AI Search Revolution Is Already Here
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Every day without an AI SEO strategy is a day your competitors are being cited instead of you.
            Let&apos;s build a plan that gets your business found — on Google, in AI answers, and everywhere
            your customers are looking. Start with a free audit.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Get Your Free SEO Audit
          </Link>
        </div>

      </section>
    </>
  )
}
