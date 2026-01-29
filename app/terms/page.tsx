import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | QoraxAI",
  description: "Read our Terms of Service to understand the rules and guidelines for using QoraxAI services.",
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Terms of Service</h1>

        <p className="text-foreground/80 mb-4 leading-relaxed">
          Welcome to <strong>QoraxAI</strong>. By accessing or using our website and services, you agree to comply with
          and be bound by these Terms of Service. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">1. Acceptance of Terms</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          By using our site, you confirm that you are at least 18 years old and that you accept these Terms in full. If
          you do not agree, please discontinue using our site.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">2. Use of Services</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of
          others or restrict anyone's use of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">3. Intellectual Property</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          All content, designs, text, and graphics on this site are the intellectual property of <strong>QoraxAI</strong>
          {" "}
          and are protected by copyright laws. You may not reproduce or distribute any materials without prior written
          consent.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">4. Limitation of Liability</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          QoraxAI is not liable for any direct, indirect, or consequential damages arising from your use of our website
          or services. Use all resources and tools at your own discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">5. Changes to These Terms</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          We may update these Terms occasionally. Updates take effect upon being posted to this page. Continued use of
          the site means you accept the new Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">6. Contact Information</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:legal@qoraxai.com" className="text-primary hover:underline">
            legal@qoraxai.com
          </a>
          .
        </p>

        <p className="text-sm text-foreground/60 mt-10">Last Updated: January 29, 2026</p>
      </main>
      <Footer />
    </>
  )
}
