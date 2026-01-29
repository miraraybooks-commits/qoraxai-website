import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | QoraxAI",
  description: "Learn how QoraxAI collects, uses, and protects your personal information.",
  robots: { index: true, follow: true },
}

export default function Privacy() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Privacy Policy</h1>

        <p className="text-foreground/80 mb-4 leading-relaxed">
          At <strong>QoraxAI</strong>, your privacy is important to us. This Privacy Policy explains how we collect,
          use, and protect your personal information when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">1. Information We Collect</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          We may collect personal data such as your name, email address, company information, and any details you
          provide through contact forms or subscriptions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">2. How We Use Your Information</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          We use your information to provide services, communicate with you, and improve our offerings. We never sell
          your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">3. Data Security</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          We use modern security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">4. Changes to This Policy</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          We may update this Privacy Policy periodically. Updates will be reflected on this page with a new "Last
          Updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-foreground">5. Contact Us</h2>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          If you have any questions about our Privacy Policy, please contact us at{" "}
          <a href="mailto:info@qoraxai.com" className="text-primary hover:underline">
            info@qoraxai.com
          </a>
          .
        </p>

        <p className="text-sm text-foreground/60 mt-10">Last Updated: January 29, 2026</p>
      </main>
      <Footer />
    </>
  )
}
