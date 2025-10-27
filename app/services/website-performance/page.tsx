import Image from "next/image";
import Link from "next/link";

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
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your website’s speed directly affects your customer experience and SEO ranking. 
          We analyze every layer — front-end, backend, and hosting — to identify slowdowns 
          and boost overall performance.
        </p>

        {/* CTA */}
        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
        >
          Get Your Free Tech Audit
        </Link>
      </div>
    </section>
  );
}
