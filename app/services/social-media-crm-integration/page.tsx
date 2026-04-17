import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "Zoho & ERPNext CRM Integration | QoraxAI",
  description:
    "Integrate social media with CRM systems for seamless lead collection and management. Boost conversions with automated customer engagement.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function SocialMediaCRMIntegrationPage() {
  return (
    <>
      <ServicePageHeader />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Social Media CRM Integration</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Capture every lead and convert followers into customers. QoraxAI&apos;s <strong>Social Media CRM Integration</strong> connects your social platforms directly to your CRM system, automating lead collection, scoring, and nurturing. Turn social engagement into measurable business results.
            </p>

            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Get Integrated Now
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/social-media-crm.jpg"
              alt="Social media CRM integration for lead management and customer engagement"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Section: The Challenge */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">The Social Media-CRM Gap</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Millions of interactions happen on social media, yet most businesses manually process leads, losing conversion opportunities in the process. Without integration, you&apos;re managing customers across disconnected platforms, creating bottlenecks and missed sales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Manual Lead Handling</h3>
              <p className="text-muted-foreground">
                Manually transferring leads from social to CRM creates delays, errors, and lost opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Incomplete Customer Profiles</h3>
              <p className="text-muted-foreground">
                Social conversations aren&apos;t recorded, leaving your sales team without context on customer needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Slow Response Times</h3>
              <p className="text-muted-foreground">
                Leads go cold while waiting for manual nurturing workflows or delayed notifications.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Our Solution */}
        <div className="bg-white py-16 shadow-inner">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">Our Social Media CRM Integration Solution</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Seamless Multi-Channel Integration</h3>
                <p className="text-muted-foreground mb-6">
                  Connect Facebook, Instagram, LinkedIn, TikTok, and Twitter directly to your CRM system for centralized lead management.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. Automated Lead Capture</h3>
                <p className="text-muted-foreground mb-6">
                  Comments, DMs, form submissions, and inquiries automatically create CRM records with complete customer information.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. Lead Scoring & Qualification</h3>
                <p className="text-muted-foreground">
                  AI-powered scoring identifies high-intent leads so sales teams focus on the most promising opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. Automated Nurture Campaigns</h3>
                <p className="text-muted-foreground mb-6">
                  Trigger personalized email, SMS, and social messages based on social engagement and behavioral signals.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Social Listening & Sentiment Analysis</h3>
                <p className="text-muted-foreground mb-6">
                  Monitor brand mentions, track customer sentiment, and identify customer service opportunities in real-time.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. Analytics & ROI Reporting</h3>
                <p className="text-muted-foreground">
                  Track conversions from social to sales, measure campaign performance, and optimize for maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Why Choose QoraxAI */}
        <div className="max-w-6xl mx-auto mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose QoraxAI for Social CRM Integration</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We specialize in connecting tools and platforms to create seamless customer journeys. Our integrations are secure, scalable, and designed to maximize lead conversion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">All-Platform Support</h3>
              <p className="text-muted-foreground">We integrate with HubSpot, Salesforce, Pipedrive, and 100+ CRM platforms.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Zero Lead Loss</h3>
              <p className="text-muted-foreground">Automated workflows ensure no lead falls through the cracks.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Enterprise-Grade Security</h3>
              <p className="text-muted-foreground">All data is encrypted, GDPR-compliant, and backed by secure APIs.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Quick Implementation</h3>
              <p className="text-muted-foreground">Most integrations are live within 48 hours with minimal disruption.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">Convert Social Followers Into Customers</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop losing leads to manual processes. Get your social media and CRM integrated and start converting social engagement into revenue. Schedule a free consultation today.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Schedule Integration Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
