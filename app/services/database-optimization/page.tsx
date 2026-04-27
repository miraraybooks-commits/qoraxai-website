export const revalidate = 3600

import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

const SITE_URL = "https://qoraxai.com"
const OG_IMAGE = {
  url: "https://qoraxai.com/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Database optimization and performance tuning by QoraxAI",
}

export const metadata = {
  title: "SQL Server & MySQL Database Optimization Services in Bangladesh | QoraxAI",
  description:
    "Speed up slow queries, cut downtime & reduce hosting costs. Expert SQL Server, MySQL & PostgreSQL performance tuning for businesses in Bangladesh. Free health check.",
  alternates: {
    canonical: `${SITE_URL}/services/database-optimization`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/database-optimization`,
    title: "SQL Server & MySQL Database Optimization in Bangladesh | QoraxAI",
    description:
      "Speed up slow queries, cut downtime & reduce hosting costs. Expert database performance tuning for businesses in Bangladesh. Free health check.",
    siteName: "QoraxAI",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Database Optimization Services in Bangladesh | QoraxAI",
    description:
      "Speed up slow queries, cut downtime & reduce hosting costs. Expert SQL Server, MySQL & PostgreSQL performance tuning.",
    images: [OG_IMAGE.url],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Database Optimization & Performance Tuning",
  description:
    "Comprehensive database performance analysis, query optimization, index strategy, high availability setup, and scaling planning for SQL Server, MySQL, PostgreSQL, and cloud databases.",
  provider: {
    "@type": "LocalBusiness",
    name: "QoraxAI",
    url: SITE_URL,
  },
  areaServed: { "@type": "Country", name: "Bangladesh" },
  serviceType: "Database Consulting",
  url: `${SITE_URL}/services/database-optimization`,
  offers: {
    "@type": "Offer",
    priceCurrency: "BDT",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/services/database-optimization`,
  },
}

export default function DatabaseOptimizationPage() {
  return (
    <>
      <ServicePageHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Database Optimization & Performance</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your database is the backbone of your application — slow queries, poor indexing, and inefficient
              architecture can cripple performance and frustrate users. QoraxAI&apos;s{" "}
              <strong>Database Optimization & Performance</strong> service ensures your database runs fast, scales
              smoothly, and supports business growth.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Get Your Free Database Health Check
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/database-optimization.jpg"
              alt="Database performance optimization and query tuning"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* SECTION 1: Common Database Problems */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-semibold text-primary mb-4">Common Database Performance Problems</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Databases slow down over time due to poor design, lack of maintenance, and growing data volumes. These
            issues directly impact user experience, operational efficiency, and revenue.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">Slow Query Performance</h3>
              <p className="text-muted-foreground">Queries taking seconds or minutes to execute, causing timeouts and poor user experience.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">Frequent Downtime</h3>
              <p className="text-muted-foreground">Database crashes, connection pool exhaustion, and unplanned maintenance windows.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">Scalability Bottlenecks</h3>
              <p className="text-muted-foreground">Unable to handle growing data volumes or increased user traffic without performance degradation.</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Our Optimization Approach */}
        <div className="bg-primary/5 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">
              How QoraxAI Optimizes Your Database
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Comprehensive Database Health Check</h3>
                <p className="text-muted-foreground mb-6">We analyze your database architecture, schema design, indexing strategy, query patterns, and server configuration to identify performance bottlenecks.</p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. Query Optimization & Tuning</h3>
                <p className="text-muted-foreground mb-6">Identifying slow queries, rewriting inefficient SQL, adding proper indexes, and implementing caching strategies to reduce response times by 50–90%.</p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. Index Strategy & Schema Redesign</h3>
                <p className="text-muted-foreground">Creating optimal indexes, removing redundant ones, and restructuring tables for better performance and maintainability.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. Connection Pool & Resource Management</h3>
                <p className="text-muted-foreground mb-6">Configuring connection pools, memory allocation, and server resources to handle peak traffic without crashes or slowdowns.</p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Replication & High Availability Setup</h3>
                <p className="text-muted-foreground mb-6">Implementing read replicas, failover systems, and backup strategies to ensure 99.9%+ uptime and data durability.</p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. Scaling Strategy & Future-Proofing</h3>
                <p className="text-muted-foreground">Designing horizontal and vertical scaling plans, partitioning strategies, and migration paths for future growth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Technologies */}
        <div className="max-w-6xl mx-auto mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Technologies We Optimize</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              We have deep expertise across all major database systems and cloud platforms:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Relational Databases", body: "PostgreSQL, MySQL, MariaDB, SQL Server, Oracle" },
              { title: "NoSQL Databases", body: "MongoDB, Redis, DynamoDB, Cassandra, Elasticsearch" },
              { title: "Cloud Databases", body: "AWS RDS, Azure SQL, Google Cloud SQL, Supabase, PlanetScale" },
              { title: "Data Warehouses", body: "Snowflake, BigQuery, Redshift, Azure Synapse" },
            ].map((card) => (
              <div key={card.title} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: Real Performance Improvements */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">Real Performance Improvements</h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { location: "SaaS Platform (Dhaka)", problem: "Dashboard queries taking 8–12 seconds, causing customer complaints and churn risk.", solution: "Added composite indexes, implemented Redis caching, optimized 15 slow queries.", result: "Reduced query time to 0.3–0.8 seconds (93% faster)" },
                { location: "E-commerce Store (Bangladesh)", problem: "Database crashes during peak traffic hours, losing sales during high-demand periods.", solution: "Configured connection pooling, set up read replicas, optimized memory settings.", result: "99.97% uptime, handled 5x traffic with no crashes" },
                { location: "Logistics Company (Chittagong)", problem: "Reports taking 20+ minutes to generate, blocking real-time decision making.", solution: "Implemented materialized views, partitioned large tables, added scheduled aggregations.", result: "Reports now generate in under 2 minutes (90% faster)" },
                { location: "Healthcare Platform (Sylhet)", problem: "Database growing uncontrollably, storage costs increasing monthly.", solution: "Implemented data archiving, removed duplicate records, compressed old data.", result: "Reduced database size by 42%, saved $780/month in storage costs" },
              ].map((item) => (
                <div key={item.location} className="p-8 bg-gray-50 rounded-2xl">
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.location}</h3>
                  <p className="text-muted-foreground mb-4"><strong>Problem:</strong> {item.problem}</p>
                  <p className="text-muted-foreground mb-4"><strong>Solution:</strong> {item.solution}</p>
                  <p className="text-primary font-semibold">Result: {item.result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5: Benefits */}
        <div className="max-w-5xl mx-auto mt-20 mb-20 text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">Benefits of Database Optimization</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "50–90%", label: "Faster query response times" },
              { stat: "99.9%+", label: "Database uptime and availability" },
              { stat: "30–50%", label: "Reduction in storage and hosting costs" },
              { stat: "5–10x", label: "Improved scalability capacity" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-3xl font-bold text-primary mb-2">{item.stat}</h3>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: CTA */}
        <div className="bg-primary/10 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">Optimize Your Database Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            QoraxAI offers a <strong>free 30-minute Database Health Check</strong> to identify performance bottlenecks
            and show you exactly how to make your database faster and more reliable.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Claim My Free Database Health Check
          </Link>
        </div>
      </section>
    </>
  )
}
