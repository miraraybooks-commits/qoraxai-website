import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | QoraxAI - Legal Terms & Conditions",
  description: "QoraxAI Terms of Service. Read the complete legal terms and conditions for using our platform.",
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
        <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="text-foreground/60 mt-2 text-sm">Last Updated: January 29, 2026</p>
      </div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <>
      <PageHeader />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-sm max-w-none">
          {/* Introduction */}
          <section className="mb-10">
            <p className="text-foreground/80 leading-relaxed text-base">
              Welcome to <strong>QoraxAI</strong>. By accessing or using our website and services, you agree to comply
              with and be bound by these Terms of Service. Please read them carefully before using our platform.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              By using our site and services, you confirm that:
            </p>
            <ul className="space-y-2 ml-5 text-foreground/80 mt-4">
              <li className="flex gap-3">
                <span>•</span>
                <span>You are at least 18 years old</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>You accept these Terms in full</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>You have the legal capacity to enter into this agreement</span>
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              If you do not agree with any part of these Terms, please discontinue using our services immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of Services</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              You agree to use our services only for lawful purposes and in a manner that:
            </p>
            <ul className="space-y-2 ml-5 text-foreground/80 mb-4">
              <li className="flex gap-3">
                <span>•</span>
                <span>Does not infringe upon the rights of others</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Does not restrict or inhibit anyone's use or enjoyment of our services</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Does not involve harassment, abuse, or hateful conduct</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Does not include any unlawful or fraudulent activity</span>
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed">
              Prohibited activities include but are not limited to: spreading malware, spamming, unauthorized access,
              and impersonation.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              All content, designs, text, graphics, logos, images, and software on our website and services are the
              intellectual property of <strong>QoraxAI</strong> or our content providers and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              You may not reproduce, distribute, transmit, modify, or create derivative works of any materials without
              our prior written consent. Limited use of our materials for personal, non-commercial purposes is
              permitted.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. User-Generated Content</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              By uploading, posting, or transmitting content to our services, you grant QoraxAI a non-exclusive,
              royalty-free, perpetual license to use, reproduce, modify, and distribute such content.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              You represent and warrant that you own or have the necessary rights to all content you submit and that
              such content does not violate any third-party intellectual property or privacy rights.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
            <div className="p-4 bg-background/50 border border-border rounded-lg mb-4">
              <p className="text-foreground/80 leading-relaxed">
                <strong>TO THE FULLEST EXTENT PERMITTED BY LAW:</strong>
              </p>
              <p className="text-foreground/80 leading-relaxed mt-2">
                QoraxAI shall not be liable for any direct, indirect, incidental, special, consequential, or punitive
                damages, including but not limited to damages for lost profits, goodwill, use, data, or other
                intangible losses.
              </p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Use all resources, tools, and services at your own discretion and risk. We are not responsible for any
              damages or losses resulting from your use of our platform.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Indemnification</h2>
            <p className="text-foreground/80 leading-relaxed">
              You agree to indemnify and hold harmless QoraxAI, its officers, directors, employees, and agents from
              any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of
              our services or violation of these Terms.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or
              implied, regarding:
            </p>
            <ul className="space-y-2 ml-5 text-foreground/80">
              <li className="flex gap-3">
                <span>•</span>
                <span>Merchantability or fitness for a particular purpose</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Uninterrupted or error-free operation</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Freedom from viruses or harmful components</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Accuracy or completeness of content</span>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms and Services</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Service at any time. Significant changes will be announced
              through our website or via email notification. Changes take effect upon being posted to this page.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Your continued use of our services after any modifications constitutes your acceptance of the updated
              Terms of Service.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may terminate or suspend your account and access to our services at any time, in our sole discretion,
              for:
            </p>
            <ul className="space-y-2 ml-5 text-foreground/80 mb-4">
              <li className="flex gap-3">
                <span>•</span>
                <span>Violation of these Terms</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Fraudulent or illegal activity</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Non-payment of fees</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Any other reason at our discretion</span>
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed">
              Upon termination, your right to use the services ceases immediately. We are not liable for any loss or
              damage resulting from termination.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law & Jurisdiction</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in
              which QoraxAI operates, without regard to its conflicts of law principles. You agree to submit to the
              exclusive jurisdiction of the courts in that jurisdiction.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Severability</h2>
            <p className="text-foreground/80 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall
              continue in full force and effect.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you have any questions about these Terms of Service or our legal policies, please contact us:
            </p>
            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">QoraxAI Support</p>
              <a href="mailto:sayeed@qoraxai.com" className="text-primary hover:underline">
                sayeed@qoraxai.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
