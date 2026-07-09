export const metadata = {
  title: "User Data Deletion | Qorax AI",
  description:
    "Learn how to request deletion of your personal data collected by Qorax AI, including data from Facebook, Messenger, and WhatsApp.",
};

export default function UserDataDeletionPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        User Data Deletion
      </h1>

      <p className="text-black/90 mb-4">
        At <strong>Qorax AI</strong>, we respect your right to control your
        personal data. This page explains how you can request the deletion of
        any personal information we have collected about you, including data
        received through our website, Facebook, Messenger, or the WhatsApp
        Business API.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
        1. How to Request Data Deletion
      </h2>
      <p className="text-black/90 mb-4">
        To request deletion of your personal data, please send an email to{" "}
        <a
          href="mailto:info@qoraxai.com?subject=Data%20Deletion%20Request"
          className="text-blue-600 hover:underline"
        >
          info@qoraxai.com
        </a>{" "}
        with the subject line “Data Deletion Request.” Please include the name,
        email address, or phone number associated with your data so we can
        locate and remove it.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
        2. Deleting Data Linked to Facebook, Messenger & WhatsApp
      </h2>
      <p className="text-black/90 mb-4">
        If you contacted us through Facebook, Messenger, or WhatsApp, you can
        request deletion of that conversation data the same way — by emailing
        us at{" "}
        <a
          href="mailto:info@qoraxai.com?subject=Data%20Deletion%20Request"
          className="text-blue-600 hover:underline"
        >
          info@qoraxai.com
        </a>
        . You may also remove Qorax AI&apos;s access to your Facebook data at
        any time from your Facebook account under{" "}
        <strong>Settings &amp; Privacy &gt; Settings &gt; Apps and Websites</strong>,
        which will revoke our access to any data shared through that
        integration.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
        3. What Happens After a Deletion Request
      </h2>
      <p className="text-black/90 mb-4">
        Once we receive your request, we will verify your identity, locate the
        relevant data across our systems and connected automation workflows
        (such as n8n), and permanently delete it, except where we are legally
        required to retain certain records for accounting, compliance, or
        fraud-prevention purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
        4. Processing Time
      </h2>
      <p className="text-black/90 mb-4">
        We aim to process all data deletion requests within 30 days of
        receipt. You will receive a confirmation email once your data has been
        deleted.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3 text-black/90">
        5. Contact Us
      </h2>
      <p className="text-black/90 mb-4">
        If you have any questions about this page or your data, please contact
        us at{" "}
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
  );
}
