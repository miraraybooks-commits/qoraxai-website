import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Database Optimization & Performance – Faster Queries, Better Uptime | QoraxAI",
  description:
    "QoraxAI's Database Optimization service improves query performance, reduces downtime, and scales your database infrastructure for growth. Get a free database health check today.",
}

export default function DatabaseOptimizationPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">Database Optimization & Performance</h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Your database is the backbone of your application — slow queries, poor indexing, and inefficient
            architecture can cripple performance and frustrate users. QoraxAI's{" "}
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
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* SECTION 1: Common Database Problems */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">Common Database Performance Problems</h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Databases slow down over time due to poor design, lack of maintenance, and growing data volumes. These issues
          directly impact user experience, operational efficiency, and revenue.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Slow Query Performance</h3>
            <p className="text-muted-foreground">
              Queries taking seconds or minutes to execute, causing timeouts and poor user experience.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Frequent Downtime</h3>
            <p className="text-muted-foreground">
              Database crashes, connection pool exhaustion, and unplanned maintenance windows.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Scalability Bottlenecks</h3>
            <p className="text-muted-foreground">
              Unable to handle growing data volumes or increased user traffic without performance degradation.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Our Optimization Approach */}
      <div className="bg-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10">How QoraxAI Optimizes Your Database</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">1. Comprehensive Database Health Check</h3>
              <p className="text-muted-foreground mb-6">
                We analyze your database architecture, schema design, indexing strategy, query patterns, and server
                configuration to identify performance bottlenecks.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">2. Query Optimization & Tuning</h3>
              <p className="text-muted-foreground mb-6">
                Identifying slow queries, rewriting inefficient SQL, adding proper indexes, and implementing caching
                strategies to reduce response times by 50-90%.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">3. Index Strategy & Schema Redesign</h3>
              <p className="text-muted-foreground">
                Creating optimal indexes, removing redundant ones, and restructuring tables for better performance and
                maintainability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">4. Connection Pool & Resource Management</h3>
              <p className="text-muted-foreground mb-6">
                Configuring connection pools, memory allocation, and server resources to handle peak traffic without
                crashes or slowdowns.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">5. Replication & High Availability Setup</h3>
              <p className="text-muted-foreground mb-6">
                Implementing read replicas, failover systems, and backup strategies to ensure 99.9%+ uptime and data
                durability.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">6. Scaling Strategy & Future-Proofing</h3>
              <p className="text-muted-foreground">
                Designing horizontal and vertical scaling plans, partitioning strategies, and migration paths for future
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Technologies We Work With */}
      <div className="max-w-6xl mx-auto mt-20 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Technologies We Optimize</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            We have deep expertise across all major database systems and cloud platforms:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-lg font-semibold text-primary mb-2">Relational Databases</h3>
            <p className="text-muted-foreground">PostgreSQL, MySQL, MariaDB, SQL Server, Oracle</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-lg font-semibold text-primary mb-2">NoSQL Databases</h3>
            <p className="text-muted-foreground">MongoDB, Redis, DynamoDB, Cassandra, Elasticsearch</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-lg font-semibold text-primary mb-2">Cloud Databases</h3>
            <p className="text-muted-foreground">AWS RDS, Azure SQL, Google Cloud SQL, Supabase, PlanetScale</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h3 className="text-lg font-semibold text-primary mb-2">Data Warehouses</h3>
            <p className="text-muted-foreground">Snowflake, BigQuery, Redshift, Azure Synapse</p>
          </div>
        </div>
      </div>

      {/* SECTION 4: Real Performance Improvements */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10">Real Performance Improvements</h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-xl font-semibold text-primary mb-3">SaaS Platform (Dhaka)</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Dashboard queries taking 8-12 seconds, causing customer complaints and churn
                risk.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Added composite indexes, implemented Redis caching, optimized 15 slow
                queries.
              </p>
              <p className="text-primary font-semibold">Result: Reduced query time to 0.3-0.8 seconds (93% faster)</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-xl font-semibold text-primary mb-3">E-commerce Store (Bangladesh)</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Database crashes during peak traffic hours, losing sales during high-demand
                periods.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Configured connection pooling, set up read replicas, optimized memory
                settings.
              </p>
              <p className="text-primary font-semibold">Result: 99.97% uptime, handled 5x traffic with no crashes</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-xl font-semibold text-primary mb-3">Logistics Company (Chittagong)</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Reports taking 20+ minutes to generate, blocking real-time decision making.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Implemented materialized views, partitioned large tables, added scheduled
                aggregations.
              </p>
              <p className="text-primary font-semibold">Result: Reports now generate in under 2 minutes (90% faster)</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-xl font-semibold text-primary mb-3">Healthcare Platform (Sylhet)</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Problem:</strong> Database growing uncontrollably, storage costs increasing monthly.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Solution:</strong> Implemented data archiving, removed duplicate records, compressed old data.
              </p>
              <p className="text-primary font-semibold">
                Result: Reduced database size by 42%, saved $780/month in storage costs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Benefits */}
      <div className="max-w-5xl mx-auto mt-20 mb-20 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">Benefits of Database Optimization</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-2">50-90%</h3>
            <p className="text-muted-foreground">Faster query response times</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-2">99.9%+</h3>
            <p className="text-muted-foreground">Database uptime and availability</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-2">30-50%</h3>
            <p className="text-muted-foreground">Reduction in storage and hosting costs</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-2">5-10x</h3>
            <p className="text-muted-foreground">Improved scalability capacity</p>
          </div>
        </div>
      </div>

      {/* SECTION 6: CTA */}
      <div className="bg-primary/10 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-4 text-primary">Optimize Your Database Today</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          QoraxAI offers a <strong>free 30-minute Database Health Check</strong> to identify performance bottlenecks and
          show you exactly how to make your database faster and more reliable.
        </p>

        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Claim My Free Database Health Check
        </Link>
      </div>
    </section>
  )
}
