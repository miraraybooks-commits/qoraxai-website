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
        <h1 className="text-4xl font-bold mb-6 text-white">
          Privacy Policy
        </h1>

        <p className="text-white/90 mb-4">
          At <strong>Qorax AI</strong>, your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your personal
          information when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect personal data such as your name, email address, company
          information, and any details you provide through contact forms or
          subscriptions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use your information to provide services, communicate with you, and
          improve our offerings. We never sell your personal information to
          third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
          3. Data Security
        </h2>
        <p className="text-gray-700 mb-4">
          We use modern security measures to protect your data from
          unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
          4. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy periodically. Updates will be
          reflected on this page with a new “Last Updated” date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
          5. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
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

        <p className="text-sm text-gray-500 mt-10">
          Last Updated: November 1, 2025
        </p>
      </main>
    </>
  );
}
