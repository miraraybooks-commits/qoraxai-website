export const metadata = {
  title: "Terms of Service | Qorax AI",
  description:
    "Read the Terms of Service for Qorax AI — the conditions under which we provide our website and services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Terms of Service</h1>

      <p className="text-gray-700 mb-4">
        Welcome to <strong>Qorax AI</strong>. By accessing or using our website
        and services, you agree to comply with and be bound by these Terms of
        Service. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
        1. Acceptance of Terms
      </h2>
      <p className="text-gray-700 mb-4">
        By using our site, you confirm that you are at least 18 years old and
        that you accept these Terms in full. If you do not agree, please
        discontinue using our site.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
        2. Use of Services
      </h2>
      <p className="text-gray-700 mb-4">
        You agree to use our services only for lawful purposes and in a way that
        does not infringe the rights of others or restrict anyone’s use of our
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
        3. Intellectual Property
      </h2>
      <p className="text-gray-700 mb-4">
        All content, designs, text, and graphics on this site are the
        intellectual property of <strong>Qorax AI</strong> and are protected by
        copyright laws. You may not reproduce or distribute any materials
        without prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
        4. Limitation of Liability
      </h2>
      <p className="text-gray-700 mb-4">
        Qorax AI is not liable for any direct, indirect, or consequential
        damages arising from your use of our website or services. Use all
        resources and tools at your own discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
        5. Changes to These Terms
      </h2>
      <p className="text-gray-700 mb-4">
        We may update these Terms occasionally. Updates take effect upon being
        posted to this page. Continued use of the site means you accept the new
        Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-800">
        6. Contact Information
      </h2>
      <p className="text-gray-700 mb-4">
        If you have any questions about these Terms, please contact us at{" "}
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
  );
}
