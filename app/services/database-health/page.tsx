{/*
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cost Optimization – Save 20–40% on IT for Bangladeshi SMEs | QoraxAI",
  description: "QoraxAI helps Bangladeshi SMEs cut IT costs 20–40% by identifying underused subscriptions, cloud waste, and redundant IT expenses. Get a free tech audit today.",
}

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
*/}
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SQL Database Health & Performance Check – Optimize Speed, Reliability & Security | QoraxAI",
  description:
    "QoraxAI’s SQL Database Health & Performance Check helps businesses optimize query speed, fix inefficiencies, and improve data reliability. Get a 30-minute free database audit today.",
};

export default function SQLDatabasePerformancePage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/database-health.webp"
            alt="The necessity of SQL database performance and health monitoring for any business"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-primary">
          SQL Database Health & Performance Check
        </h1>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Your SQL database is the backbone of your applications — powering transactions, reports, and day-to-day business operations. 
          Over time, database performance can degrade due to poor indexing, inefficient queries, outdated configurations, 
          or unmonitored growth. That’s where QoraxAI’s <strong>SQL Database Health & Performance Check</strong> comes in.
        </p>

        {/* What We Do */}
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          What We Evaluate
        </h2>
        <ul className="text-left list-disc list-inside text-muted-foreground mb-8 max-w-3xl mx-auto space-y-2">
          <li>
            <strong>Query Performance Analysis</strong> – Identify slow-running queries, optimize execution plans, and reduce latency.
          </li>
          <li>
            <strong>Index Optimization</strong> – Detect missing, duplicate, or fragmented indexes that slow data retrieval.
          </li>
          <li>
            <strong>Database Configuration Review</strong> – Check memory, cache, and connection settings for optimal performance.
          </li>
          <li>
            <strong>Storage & Growth Tracking</strong> – Monitor table size, log files, and disk I/O patterns to prevent slowdowns.
          </li>
          <li>
            <strong>Security & Access Control Audit</strong> – Verify permissions, data encryption, and backup strategies.
          </li>
          <li>
            <strong>Replication & High Availability</strong> – Assess failover configurations, replication lag, and cluster health.
          </li>
        </ul>

        {/* Why It Matters */}
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Why a Database Health Check Is Critical
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          A slow or unstable database doesn’t just affect performance — it impacts every connected service and user experience. 
          As data volumes grow and applications scale, regular database health assessments are essential for maintaining system integrity, 
          reducing downtime, and preventing costly outages.  
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left text-muted-foreground mb-10">
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Improve Application Speed
            </h3>
            <p>
              Faster query execution means faster response times, better user experience, 
              and less strain on your infrastructure.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Reduce Operational Costs
            </h3>
            <p>
              Eliminate wasted compute and storage resources by optimizing database operations 
              and indexing strategies.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Enhance Data Reliability
            </h3>
            <p>
              Regular checks ensure data consistency, reliable backups, and minimized risk of corruption or downtime.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Strengthen Security
            </h3>
            <p>
              Identify and fix misconfigurations, outdated access rules, and missing encryption to keep your data safe.
            </p>
          </div>
        </div>

        {/* How QoraxAI Helps */}
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          How QoraxAI Helps
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          QoraxAI’s database engineers conduct a comprehensive SQL performance audit across 
          your infrastructure. We pinpoint bottlenecks, optimize schema design, and fine-tune 
          configurations to ensure your system runs at peak efficiency.  
          Whether you use <strong>MySQL, PostgreSQL, Microsoft SQL Server, or Oracle</strong>, 
          our team provides actionable insights that improve performance, scalability, and resilience.  
          After the audit, we deliver a detailed report outlining findings, recommendations, 
          and a roadmap for implementation.
        </p>

        {/* CTA */}
        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
        >
          Get Your Free 30-Minute Database Audit
        </Link>

        <p className="text-sm text-muted-foreground mt-4">
          Click “Free Tech Audit,” fill out your information, and our team will contact you 
          to schedule your 30-minute free database performance review.
        </p>
      </div>
    </section>
  );
}
