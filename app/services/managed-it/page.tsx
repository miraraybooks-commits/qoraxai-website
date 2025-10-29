{/*import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cost Optimization – Save 20–40% on IT for Bangladeshi SMEs | QoraxAI",
  description: "QoraxAI helps Bangladeshi SMEs cut IT costs 20–40% by identifying underused subscriptions, cloud waste, and redundant IT expenses. Get a free tech audit today.",
}

export default function ManagedITPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image src="/managed-it.jpg" alt="Managed IT Services" fill className="object-cover object-center" priority />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Managed IT Services</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Our team handles system maintenance, updates, and user support so you can focus on your business. Reliable, scalable, and cost-effective IT management for SMEs.
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
  title: "Power Managed IT Services – Reliable, Scalable, Always-On IT | QoraxAI",
  description:
    "QoraxAI’s Power Managed IT Services help businesses simplify technology, ensure uptime, and scale securely with proactive monitoring, cloud management, and 24/7 support.",
};

export default function ManagedITServicesPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Power Managed IT Services
          </h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Technology should power your business — not slow it down. QoraxAI’s{" "}
            <strong>Power Managed IT Services</strong> give you proactive,
            always-on management for your systems, infrastructure, and
            cybersecurity. From day-to-day IT support to strategic technology
            planning, we ensure your business operates efficiently, securely,
            and without interruption.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Start Your Free IT Consultation
          </Link>
        </div>

        <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/managed-it.png"
            alt="Power Managed IT Services"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Section: The Challenge */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            The Challenge Businesses Face
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            As technology evolves, companies struggle to maintain IT systems
            that keep up with growth, security, and customer expectations.
            Internal IT teams are often overworked, reactive, and focused on
            firefighting rather than innovation. Downtime, slow systems, and
            rising costs can silently drain productivity and profitability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Frequent Downtime
            </h3>
            <p className="text-muted-foreground">
              Reactive maintenance leads to recurring outages and lost business
              hours.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Security Vulnerabilities
            </h3>
            <p className="text-muted-foreground">
              Without continuous monitoring, systems become easy targets for
              cyber threats and data breaches.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Rising IT Costs
            </h3>
            <p className="text-muted-foreground">
              Inconsistent hardware, software, and vendor management inflate
              total cost of ownership.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Our Managed IT Solution */}
      <div className="bg-white py-16 shadow-inner">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10">
            Our Managed IT Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                1. Proactive Monitoring & Maintenance
              </h3>
              <p className="text-muted-foreground mb-6">
                We continuously monitor your servers, networks, and endpoints to
                detect and resolve issues before they cause downtime. This
                ensures maximum uptime and smooth operations across all
                departments.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                2. IT Infrastructure Management
              </h3>
              <p className="text-muted-foreground mb-6">
                From on-premises hardware to cloud platforms, QoraxAI manages
                every layer of your IT stack — ensuring performance,
                scalability, and cost efficiency.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                3. Helpdesk & End-User Support
              </h3>
              <p className="text-muted-foreground">
                Our 24/7 helpdesk resolves user issues quickly and efficiently,
                freeing your team to focus on their core tasks instead of
                troubleshooting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                4. Cybersecurity & Data Protection
              </h3>
              <p className="text-muted-foreground mb-6">
                Security is built into every layer. We manage antivirus,
                firewalls, encryption, and backup systems — protecting your data
                from loss or attack.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                5. Cloud & Hybrid Management
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you’re using Microsoft 365, AWS, or private clouds, we
                optimize your cloud resources and ensure seamless integration
                with existing systems.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                6. Strategic IT Consulting
              </h3>
              <p className="text-muted-foreground">
                Beyond operations, we provide IT roadmaps, cost optimization
                strategies, and scalability plans aligned with your business
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Why Choose QoraxAI */}
      <div className="max-w-6xl mx-auto mt-20 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Why Choose QoraxAI
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We’re not just an IT vendor — we’re your long-term technology
            partner. QoraxAI blends automation, data intelligence, and human
            expertise to create a managed IT ecosystem that’s secure,
            predictable, and built for growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-1">
              24/7 Support
            </h3>
            <p className="text-muted-foreground">
              Round-the-clock helpdesk and proactive system response.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-1">
              Certified Experts
            </h3>
            <p className="text-muted-foreground">
              Experienced engineers certified in cloud, networking, and
              cybersecurity.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-1">
              Transparent Reporting
            </h3>
            <p className="text-muted-foreground">
              Real-time dashboards and performance reports you can trust.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-1">
              Scalable & Cost-Efficient
            </h3>
            <p className="text-muted-foreground">
              Scale your IT services up or down based on your business needs.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Let’s Power Your IT — Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          QoraxAI’s Power Managed IT Services keep your systems secure, stable,
          and scalable — so you can focus on growing your business. Take the
          first step with a free 30-minute consultation.
        </p>

        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Book My Free IT Audit
        </Link>
      </div>
    </section>
  );
}
