{/*import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cost Optimization – Save 20–40% on IT for Bangladeshi SMEs | QoraxAI",
  description: "QoraxAI helps Bangladeshi SMEs cut IT costs 20–40% by identifying underused subscriptions, cloud waste, and redundant IT expenses. Get a free tech audit today.",
}

export default function WebsitePerformancePage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">

        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/website-performance.png"
            alt="Website Performance Check"
            fill
            className="object-cover object-center"
            priority
          />
        </div>


        <h1 className="text-4xl font-bold mb-4 text-primary">
          Website Performance Check
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your website’s speed directly affects your customer experience and SEO ranking. 
          We analyze every layer — front-end, backend, and hosting — to identify slowdowns 
          and boost overall performance.
        </p>


        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
        >
          Get Your Free Tech Audit
        </Link>
      </div>
    </section>
  );
} */}

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Website Performance Check – Optimize Speed, SEO & Conversion | QoraxAI",
  description:
    "QoraxAI’s Website Performance Check uncovers what slows your site down. Boost speed, SEO, and conversion with expert technical analysis. Get a free 30-minute audit today.",
};

export default function WebsitePerformanceCheckPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Website Performance Check
          </h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Every second counts online. A slow or poorly optimized website drives
            users away, lowers conversions, and hurts your search rankings.
            QoraxAI’s <strong>Website Performance Check</strong> reveals what’s
            holding your site back — and gives you a clear roadmap to make it
            faster, safer, and more reliable.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Get Your Free Tech Audit
          </Link>
        </div>

        <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/website-performance.png"
            alt="Analysis of website loading speed, uptime, and overall performance"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* SECTION 1: The Hidden Impact */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          The Hidden Impact of a Slow Website
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Visitors expect your website to load in under three seconds. Anything
          slower, and you risk losing potential customers before they even see
          your content. A slow site doesn’t just frustrate users — it also tells
          Google your experience isn’t optimized, damaging your SEO and reducing
          your visibility.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Lower Conversions
            </h3>
            <p className="text-muted-foreground">
              Even a one-second delay can reduce conversions by 7%. Faster pages
              keep users engaged and buying.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Poor SEO Rankings
            </h3>
            <p className="text-muted-foreground">
              Search engines prioritize high-performing, mobile-friendly sites
              in their results.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Lost Trust & Reputation
            </h3>
            <p className="text-muted-foreground">
              A laggy or broken website creates doubt about your brand’s quality
              and professionalism.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: How QoraxAI Helps */}
      <div className="bg-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10">
            How QoraxAI Optimizes Your Website
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                1. Comprehensive Technical Analysis
              </h3>
              <p className="text-muted-foreground mb-6">
                We evaluate your site’s speed, code structure, server response
                time, and page weight using leading tools like GTmetrix,
                Google’s PageSpeed Insights, and Core Web Vitals.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                2. Performance Bottleneck Identification
              </h3>
              <p className="text-muted-foreground mb-6">
                From image compression issues to unused scripts and unoptimized
                hosting, we identify every element slowing your site down.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                3. Mobile & Cross-Browser Optimization
              </h3>
              <p className="text-muted-foreground">
                Your audience is everywhere — we ensure your website performs
                flawlessly across all browsers and devices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                4. Server & Hosting Review
              </h3>
              <p className="text-muted-foreground mb-6">
                We analyze your hosting environment, CDN setup, and caching
                policies to reduce load times and improve uptime reliability.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                5. Security & Stability Check
              </h3>
              <p className="text-muted-foreground mb-6">
                Broken links, outdated plugins, and vulnerabilities can impact
                both performance and safety — we find and fix them.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                6. Actionable Optimization Report
              </h3>
              <p className="text-muted-foreground">
                Receive a detailed performance report with prioritized
                recommendations and a clear path to improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Why Companies Need It */}
      <div className="max-w-6xl mx-auto mt-20 mb-20 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Why Every Company Needs a Performance Check
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
          Whether you run an eCommerce store, SaaS platform, or corporate site,
          your website is your digital front door. Regular performance checks
          ensure that door opens fast, safely, and consistently — delivering
          better customer experience, higher conversion rates, and a stronger
          return on your digital investments.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Faster Load Speeds
            </h3>
            <p className="text-muted-foreground">
              Decrease bounce rates and improve conversions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Better SEO Results
            </h3>
            <p className="text-muted-foreground">
              Higher Google ranking with improved Core Web Vitals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Stronger Brand Perception
            </h3>
            <p className="text-muted-foreground">
              A smooth experience reflects professionalism and trust.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Long-Term Savings
            </h3>
            <p className="text-muted-foreground">
              Reduced hosting costs and fewer maintenance issues over time.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: CTA */}
      <div className="bg-primary/10 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Boost Your Website’s Power Today
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          QoraxAI offers a <strong>30-minute free Website Performance Check</strong> 
          to help you understand what’s slowing your site down — and how to fix it.  
          Click below to request your audit and start improving your website today.
        </p>

        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Claim My Free Website Audit
        </Link>
      </div>
    </section>
  );
}
