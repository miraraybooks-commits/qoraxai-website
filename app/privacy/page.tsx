import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Qorax AI</title>
        <meta
          name="description"
          content="Learn how Qorax AI collects, uses, and protects your personal information in our Privacy Policy."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
          Privacy Policy
        </h1>

        <p className="text-blue-500/90 mb-4">
          At <strong>Qorax AI</strong>, your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your personal
          information when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          1. Information We Collect
        </h2>
        <p className="text-black/90 mb-4">
          We may collect personal data such as your name, email address, phone
          number, company information, and any details you provide through
          contact forms or subscriptions. When you interact with us through
          Meta Platforms (Facebook, Messenger, or WhatsApp Business API), we
          may also collect your Meta profile name, phone number, and the
          content of the messages you send us in order to respond to your
          inquiries.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          2. How We Use Your Information
        </h2>
        <p className="text-black/90 mb-4">
          We use your information to provide services, communicate with you,
          respond to support and business inquiries, and improve our
          offerings, including Business Growth Consulting, Full-Stack AI Web
          & App Development, ERPNext Implementation, Courier Management
          Software, AI SEO/GEO/AEO Optimization, and Database Optimization. We
          never sell your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          3. Data Security
        </h2>
        <p className="text-black/90 mb-4">
          We use modern security measures to protect your data from
          unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          4. Facebook, Messenger & WhatsApp Business API Data
        </h2>
        <p className="text-black/90 mb-4">
          Qorax AI uses Meta Platforms services (including Facebook Login,
          Messenger, and the WhatsApp Business API) integrated with our
          automation workflows, such as n8n, to communicate with customers and
          respond to inquiries. Data received through these channels —
          including your name, phone number, and message content — is used
          solely to provide customer support, process business inquiries, and
          deliver the services you request. We do not use this data for
          advertising purposes and do not share it with third parties other
          than the service providers (such as Meta and our workflow
          automation tools) strictly necessary to deliver these
          communications.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          5. Data Retention
        </h2>
        <p className="text-black/90 mb-4">
          We retain personal data only for as long as necessary to fulfill the
          purposes described in this Privacy Policy, including providing
          services, maintaining business records, and complying with legal
          obligations. You may request deletion of your data at any time as
          described in Section 7 below.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          6. Your Rights & Data Deletion
        </h2>
        <p className="text-black/90 mb-4">
          You have the right to access, correct, or request deletion of your
          personal data. To request deletion of your data, including any data
          collected through Facebook, Messenger, or WhatsApp, please email us
          at{" "}
          <a
            href="mailto:info@qoraxai.com"
            className="text-blue-600 hover:underline"
          >
            info@qoraxai.com
          </a>{" "}
          with the subject line “Data Deletion Request.” We will process your
          request within a reasonable timeframe.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          7. Cookies & Tracking
        </h2>
        <p className="text-black/90 mb-4">
          Our website may use cookies and similar technologies to improve your
          browsing experience, analyze site traffic, and understand where our
          visitors come from. You can control cookie preferences through your
          browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          8. Children's Privacy
        </h2>
        <p className="text-black/90 mb-4">
          Our services are not directed to individuals under the age of 18. We
          do not knowingly collect personal information from children.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          9. Changes to This Policy
        </h2>
        <p className="text-black/90 mb-4">
          We may update this Privacy Policy periodically. Updates will be
          reflected on this page with a new “Last Updated” date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
          10. Contact Us
        </h2>
        <p className="text-black/90 mb-4">
          If you have any questions about our Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:info@qoraxai.com"
            className="text-blue-600 hover:underline"
          >
            info@qoraxai.com
          </a>
          .
        </p>

        <p className="text-sm text-black/90 mt-10">
          Last Updated: July 10, 2026
        </p>
      </main>
    </>
  );
}
