{/*import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cost Optimization – Save 20–40% on IT for Bangladeshi SMEs | QoraxAI",
  description: "QoraxAI helps Bangladeshi SMEs cut IT costs 20–40% by identifying underused subscriptions, cloud waste, and redundant IT expenses. Get a free tech audit today.",
}

export default function CybersecurityPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image src="/cybersecurity.png" alt="Cybersecurity Assessment" fill className="object-cover object-center" priority />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">Cybersecurity Assessment</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Protect your business data and reputation. We scan for vulnerabilities, configuration issues, and security gaps — ensuring your IT environment meets global standards.
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
  title:
    "Cybersecurity Assessment – Identify Threats, Secure Your Business | QoraxAI",
  description:
    "QoraxAI’s Cybersecurity Assessment identifies vulnerabilities, strengthens data protection, and helps your company prevent cyberattacks. Get a 30-minute free security audit today.",
};

export default function CybersecurityAssessmentPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/cybersecurity.png"
            alt="Cybersecurity Assessment by QoraxAI"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Cybersecurity Assessment
        </h1>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          In today’s hyper-connected world, data breaches and cyber threats are
          not a matter of <em>if</em> but <em>when</em>. A single vulnerability
          can expose confidential data, disrupt operations, and damage your
          company’s reputation. QoraxAI’s{" "}
          <strong>Cybersecurity Assessment</strong> is designed to identify
          weaknesses across your IT ecosystem, evaluate your security posture,
          and provide a clear roadmap to safeguard your digital assets.
        </p>

        {/* What We Evaluate */}
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          What We Assess
        </h2>

        <ul className="text-left list-disc list-inside text-muted-foreground mb-8 max-w-3xl mx-auto space-y-2">
          <li>
            <strong>Network Security Audit</strong> – Inspect firewalls, VPNs,
            ports, and network configurations for misconfigurations or
            vulnerabilities.
          </li>
          <li>
            <strong>Endpoint Protection Review</strong> – Verify that employee
            devices, servers, and IoT endpoints are secure and updated.
          </li>
          <li>
            <strong>Access Control & Authentication</strong> – Evaluate
            password policies, multi-factor authentication (MFA), and privilege
            management.
          </li>
          <li>
            <strong>Data Protection & Encryption</strong> – Check for proper
            encryption practices, data backups, and secure storage procedures.
          </li>
          <li>
            <strong>Web Application & API Security</strong> – Identify
            vulnerabilities like SQL injection, XSS, and misconfigured API
            endpoints.
          </li>
          <li>
            <strong>Incident Response & Recovery Readiness</strong> – Assess
            your preparedness to detect, respond to, and recover from attacks.
          </li>
          <li>
            <strong>Compliance & Regulatory Review</strong> – Ensure alignment
            with standards like ISO 27001, GDPR, HIPAA, or local data protection
            regulations.
          </li>
        </ul>

        {/* Why It’s Essential */}
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Why a Cybersecurity Assessment Is Essential
        </h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Cyberattacks have evolved beyond basic malware — they’re targeted,
          strategic, and financially motivated. Small and medium-sized
          businesses are often the easiest targets due to weaker controls and
          limited monitoring. A periodic cybersecurity assessment helps your
          organization stay one step ahead by proactively identifying risks and
          reinforcing defenses before attackers exploit them.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left text-muted-foreground mb-10">
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Prevent Data Breaches
            </h3>
            <p>
              Detect vulnerabilities early and implement corrective measures
              before sensitive information is compromised.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Strengthen Business Continuity
            </h3>
            <p>
              Reduce the risk of costly downtime by improving system resilience
              and response procedures.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Build Customer Trust
            </h3>
            <p>
              Demonstrate your commitment to security and privacy by following
              best practices and recognized compliance frameworks.
            </p>
          </div>
          <div className="bg-muted/10 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Reduce Financial Risk
            </h3>
            <p>
              Avoid heavy regulatory fines, lost revenue, and the reputational
              damage caused by preventable cyber incidents.
            </p>
          </div>
        </div>

        {/* How QoraxAI Helps */}
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          How QoraxAI Helps
        </h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          QoraxAI brings a combination of deep cybersecurity expertise and
          advanced analytics to evaluate your organization’s digital defenses.
          We use industry-standard frameworks such as{" "}
          <strong>NIST Cybersecurity Framework</strong>,{" "}
          <strong>OWASP Top 10</strong>, and{" "}
          <strong>Zero Trust Architecture principles</strong> to provide a
          holistic view of your security posture.
        </p>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Our assessment includes both automated scanning tools and manual
          penetration testing to simulate real-world attack vectors. We deliver
          a comprehensive report that includes:
        </p>

        <ul className="text-left list-disc list-inside text-muted-foreground mb-10 max-w-3xl mx-auto space-y-2">
          <li>
            A prioritized list of vulnerabilities with risk ratings (critical,
            high, medium, low)
          </li>
          <li>
            Remediation steps and best-practice recommendations for immediate
            fixes
          </li>
          <li>
            A long-term cybersecurity roadmap to strengthen your IT governance
            and risk management
          </li>
          <li>
            Optional continuous monitoring and follow-up assessments to ensure
            ongoing protection
          </li>
        </ul>

        {/* Real Business Impact */}
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Business Impact You Can Expect
        </h2>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          After a QoraxAI Cybersecurity Assessment, companies typically see
          measurable improvements in their risk posture, incident response time,
          and employee security awareness. By translating technical insights
          into business-friendly actions, we help leadership teams make
          informed decisions to protect their brand and data assets.
        </p>

        {/* CTA */}
        <Link
          href="/#contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition"
        >
          Get Your Free 30-Minute Cybersecurity Audit
        </Link>

        <p className="text-sm text-muted-foreground mt-4">
          Click “Free Tech Audit,” fill out your details, and our security team
          will contact you to schedule your free cybersecurity consultation.
        </p>
      </div>
    </section>
  );
}
