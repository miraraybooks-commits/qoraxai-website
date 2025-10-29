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
  title: "Website Performance Check – Speed, SEO & Security Optimization | QoraxAI",
  description:
    "QoraxAI’s Website Performance Check helps businesses optimize speed, SEO, and security. Identify what slows your site and get a 30-minute free performance audit today.",
};

export default function WebsitePerformancePage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/website-performance.png"
            alt="Website Performance Check"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Website Performance Check
        </h1>

        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Your website is often the first impression customers have of your business. 
          A slow or poorly optimized site can lead to lost sales, lower rankings, 
          and reduced trust. Our Website Performance Check pinpoints what’s 
          holding your website back and provides actionable fixes for lasting results.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-primary">
          What We Analyze
        </h2>
        <ul className="text-left list-disc list-inside text-muted-foreground mb-8 max-w-2xl mx-auto space-y-2">
          <li>Page speed and load performance across devices</li>
          <li>SEO & technical health for better Google visibility</li>
          <li>Mobile responsiveness and user experience</li>
          <li>Security vulnerabilities and broken link checks</li>
          <li>Hosting and backend efficiency review</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Why It Matters
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          A high-performing website boosts engagement, increases conversions, 
          and builds customer trust. Regular performance checks ensure 
          your site remains fast, secure, and competitive in today’s digital landscape.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-primary">
          How QoraxAI Helps
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          QoraxAI’s experts deliver a detailed performance analysis — 
          uncovering slowdowns, technical issues, and missed optimization 
          opportunities. We’ll help you make data-driven improvements 
          that enhance both user experience and business outcomes.
        </p>

        {/* CTA */}
        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
        >
          Get Your Free 30-Minute Tech Audit
        </Link>

        <p className="text-sm text-muted-foreground mt-4">
          Click “Free Tech Audit,” fill out your information, and our team will contact you to schedule your session.
        </p>
      </div>
    </section>
  );
}
