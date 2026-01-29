import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | QoraxAI - Data Protection & Privacy",
  description: "QoraxAI Privacy Policy. Learn how we collect, use, and protect your personal information and data.",
  robots: { index: true, follow: true },
}

function PageHeader() {
  return (
    <div className="border-b border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-3 mb-6 hover:opacity-80 transition">
          <Image
            src="/images/qoraxai-logo-nobackground-20-no-20name.png"
            alt="QoraxAI Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-bold text-lg">
            <span className="text-foreground">Qorax</span>
            <span className="text-[#00A7E1]">AI</span>
          </span>
        </Link>
        <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-foreground/60 mt-2 text-sm">Last Updated: January 29, 2026</p>
      </div>
    </div>
  )
}

export default function Privacy() {
  return (
    <>
      <PageHeader />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-sm max-w-none">
          {/* Introduction */}
          <section className="mb-10">
            <p className="text-foreground/80 leading-relaxed text-base">
              At <strong>QoraxAI</strong>, your privacy is important to us. This Privacy Policy explains how we
              collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may collect personal data such as:
            </p>
            <ul className="space-y-2 ml-5 text-foreground/80">
              <li className="flex gap-3">
                <span>•</span>
                <span>Your name, email address, and contact information</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Company information and business details</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Information provided through contact forms and subscriptions</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Usage data and analytics about how you interact with our services</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use your information for:
            </p>
            <ul className="space-y-2 ml-5 text-foreground/80">
              <li className="flex gap-3">
                <span>•</span>
                <span>Providing and improving our services</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Communicating with you about updates and support</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Personalizing your experience</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Complying with legal obligations</span>
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              <strong>We never sell your personal information to third parties.</strong>
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use industry-standard security measures including encryption, secure servers, and access controls to
              protect your data from unauthorized access, alteration, or disclosure. However, no system is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 4 - Meta/Facebook Data */}
          <section className="mb-10 p-6 bg-background/50 border border-border rounded-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Facebook / Meta Platform Data Usage</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use Facebook and Instagram (Meta Platforms) APIs to help our users manage leads and customer
              communications through our CRM platform.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">What Data We Collect</h3>
            <p className="text-foreground/80 leading-relaxed mb-3">
              When a user connects their Facebook Page, Instagram account, or advertising account to our system, we may
              collect and process the following data as permitted by Meta:
            </p>
            <ul className="space-y-2 ml-5 text-foreground/80 mb-4">
              <li className="flex gap-3">
                <span>•</span>
                <span>Lead information from Facebook or Instagram Lead Forms (name, email, phone, form responses)</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Page and ad account identifiers</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Messaging data from Facebook Messenger or Instagram Direct (if enabled by the user)</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">How We Use Meta Data</h3>
            <ul className="space-y-2 ml-5 text-foreground/80 mb-4">
              <li className="flex gap-3">
                <span>•</span>
                <span>Create and manage leads inside our CRM system</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Allow users to view, respond to, and manage customer inquiries</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Provide analytics, reporting, and automation for marketing and sales activities</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">Data Storage & Security</h3>
            <ul className="space-y-2 ml-5 text-foreground/80 mb-4">
              <li className="flex gap-3">
                <span>•</span>
                <span>All Meta-related data is stored securely with encryption</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Access is restricted to the authorized account owner only</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Data is isolated per client and not shared across accounts</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">Data Sharing</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We do not sell or share Meta user data with third parties. Data is used solely to provide CRM and
              automation services requested by the user.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">User Control & Data Removal</h3>
            <ul className="space-y-2 ml-5 text-foreground/80 mb-4">
              <li className="flex gap-3">
                <span>•</span>
                <span>Users can disconnect their Facebook or Instagram account at any time</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Upon disconnection, access tokens are revoked and no new data is collected</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Users may request deletion of their stored data by contacting us</span>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">Compliance</h3>
            <p className="text-foreground/80 leading-relaxed">
              Our use of Facebook and Instagram data complies with Meta Platform Terms, Meta Developer Policies, and
              applicable data protection laws.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
              Updates will be reflected on this page with a new "Last Updated" date. Continued use of our services
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have any questions about our Privacy Policy or how we handle your data, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-background/50 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">QoraxAI Privacy Team</p>
              <a href="mailto:privacy@qoraxai.com" className="text-primary hover:underline">
                privacy@qoraxai.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
