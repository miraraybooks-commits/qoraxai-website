import Image from "next/image";
import Link from "next/link";

export default function DatabaseHealthPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image src="/database-health.png" alt="Database Health Check" fill className="object-cover object-center" priority />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Database Health & Performance Check</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          We review your database design, queries, and indexing strategy to uncover performance bottlenecks and ensure smooth scalability — making your applications faster and more reliable.
        </p>
        <Link href="/#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition">
          Get Your Free Tech Audit
        </Link>
      </div>
    </section>
  );
}
