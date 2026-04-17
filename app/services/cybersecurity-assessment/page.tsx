import Image from "next/image"
import Link from "next/link"
import { ServicePageHeader } from "@/components/service-page-header"

export const metadata = {
  title: "Cybersecurity Assessment & Risk Management | QoraxAI",
  description:
    "Comprehensive cybersecurity assessment services. Identify vulnerabilities, assess threats, and build a robust security framework.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CybersecurityAssessmentPage() {
  return (
    <>
      <ServicePageHeader />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">Cybersecurity Assessment & Risk Management</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Protect your business from cyber threats. QoraxAI&apos;s <strong>Cybersecurity Assessment Services</strong> identify vulnerabilities, assess risks, and build comprehensive security strategies. Know your weaknesses before attackers do.
            </p>

            <Link
              href="/#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Get Security Assessment
            </Link>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/cybersecurity-assessment.jpg"
              alt="Cybersecurity assessment and vulnerability testing services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Section: The Challenge */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-4">The Cybersecurity Risk</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Cyberattacks are becoming more sophisticated and frequent. Many organizations don&apos;t know their security posture until a breach occurs. Without a systematic security assessment, you&apos;re exposed to data loss, ransomware, compliance violations, and reputation damage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Unknown Vulnerabilities</h3>
              <p className="text-muted-foreground">
                Without assessment, you don&apos;t know where your systems are vulnerable to attack.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Compliance Violations</h3>
              <p className="text-muted-foreground">
                Missing security controls lead to regulatory violations and hefty fines under GDPR, PCI-DSS, and other standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">High Breach Costs</h3>
              <p className="text-muted-foreground">
                Average data breach cost exceeds $4M. Prevention through assessment is far cheaper than recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Our Solution */}
        <div className="bg-white py-16 shadow-inner">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-10">Our Cybersecurity Assessment & Risk Management Solution</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1. Vulnerability Scanning & Testing</h3>
                <p className="text-muted-foreground mb-6">
                  Automated and manual penetration testing to identify weaknesses in applications, networks, and infrastructure.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">2. Security Compliance Audit</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive review against ISO 27001, NIST, GDPR, PCI-DSS, and other compliance frameworks.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">3. Risk Assessment & Quantification</h3>
                <p className="text-muted-foreground">
                  Identify threats, assess likelihood and impact, and quantify business risk to prioritize remediation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4. Security Architecture Review</h3>
                <p className="text-muted-foreground mb-6">
                  Evaluate your overall security posture, policies, and technical controls for alignment with best practices.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">5. Security Roadmap & Remediation</h3>
                <p className="text-muted-foreground mb-6">
                  Build a prioritized action plan with timelines, budgets, and implementation guidance to close security gaps.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-primary">6. Employee Security Training</h3>
                <p className="text-muted-foreground">
                  Awareness programs and training to reduce human-based security risks like phishing and social engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Why Choose QoraxAI */}
        <div className="max-w-6xl mx-auto mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose QoraxAI for Cybersecurity Assessment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our certified security experts bring years of offensive and defensive security experience. We go beyond compliance to build a security culture that protects your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Certified Experts</h3>
              <p className="text-muted-foreground">CISSP, CEH, and other industry certifications ensure top-tier expertise.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Holistic Approach</h3>
              <p className="text-muted-foreground">We assess people, processes, and technology for comprehensive protection.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Actionable Insights</h3>
              <p className="text-muted-foreground">Every finding comes with clear remediation steps and business context.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-1">Ongoing Support</h3>
              <p className="text-muted-foreground">We support implementation of recommendations and re-assess for continuous improvement.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 py-16 text-center rounded-3xl shadow-inner mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">Know Your Security Posture Before It&apos;s Too Late</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a comprehensive security assessment and build a roadmap to protect your business, data, and reputation. Schedule your free security assessment today.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Schedule Security Assessment
          </Link>
        </div>
      </section>
    </>
  )
}
