export const metadata = {
  title: "Cookie Policy | QoraxAI",
  description: "Learn about the cookies we use on our website and how we use them to improve your experience.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-primary mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Are Cookies?</h2>
          <p className="text-muted-foreground mb-6">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you
            visit our website. They help us remember information about your visit, such as your preferences and
            activities, which allows us to provide you with a better experience when you return to our site.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Cookies</h2>
          <p className="text-muted-foreground mb-6">We use cookies for the following purposes:</p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They
              enable core functionality such as security, network management, and accessibility.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors use our website.
              This helps us improve our content, user experience, and marketing efforts. These cookies track pages
              visited, time spent, and user journeys.
            </li>
            <li>
              <strong>Marketing & Advertising Cookies:</strong> We use Facebook Pixel and other advertising platforms to
              track conversions and measure the effectiveness of our marketing campaigns. These cookies help us deliver
              relevant advertisements to you.
            </li>
            <li>
              <strong>Preference Cookies:</strong> These cookies remember your choices and preferences, such as language
              settings and site preferences, to personalize your experience.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Third-Party Cookies</h2>
          <p className="text-muted-foreground mb-6">
            We use the following third-party services that may set cookies on your device:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>
              <strong>Google Analytics:</strong> Helps us understand visitor behavior and website performance. Learn more
              at{" "}
              <a href="https://policies.google.com/privacy" className="text-primary hover:underline">
                Google's Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google Tag Manager:</strong> Manages various tracking tags and scripts on our website for improved
              analytics and marketing measurement.
            </li>
            <li>
              <strong>Facebook Pixel:</strong> Tracks conversions and user interactions for Facebook advertising. Learn
              more at{" "}
              <a href="https://www.facebook.com/policies/cookies/" className="text-primary hover:underline">
                Facebook's Cookie Policy
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cookie Duration</h2>
          <p className="text-muted-foreground mb-6">
            Cookies can be either "session" cookies (which expire when you close your browser) or "persistent" cookies
            (which remain on your device for a specified period or until you delete them). Most of our cookies are
            persistent and remain on your device for 1-2 years, though this may vary.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground mb-6">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>
              <strong>Browser Settings:</strong> Most web browsers allow you to refuse cookies or alert you when a
              cookie is being sent. You can adjust your browser settings to disable cookies if you prefer. However,
              disabling some cookies may affect the functionality of our website.
            </li>
            <li>
              <strong>Cookie Consent Banner:</strong> You can accept or dismiss our cookie consent banner when you visit
              our website. Your preference will be stored for one year.
            </li>
            <li>
              <strong>Opt-Out Options:</strong> You can opt out of Google Analytics tracking by installing the Google
              Analytics opt-out browser extension.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Privacy Rights</h2>
          <p className="text-muted-foreground mb-6">
            We are committed to protecting your privacy. If you have any concerns about how we use cookies or your
            personal data, please refer to our full{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            . Under regulations like GDPR and local privacy laws, you may have rights to access, correct, or delete
            your personal data.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about our cookie policy or how we use cookies, please contact us at:
          </p>
          <ul className="list-none text-muted-foreground mb-6 space-y-2">
            <li>Email: sales@qoraxai.com</li>
            <li>Phone: +880 1718 723202</li>
            <li>Address: H#145, R#4, Mohakhali DOHS, Dhaka-1206, BD</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Policy Updates</h2>
          <p className="text-muted-foreground mb-6">
            We may update this cookie policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated
            policy on this page and updating the "Last updated" date.
          </p>

          <div className="mt-12 p-6 bg-card border border-border rounded-lg">
            <p className="text-sm text-muted-foreground">
              By continuing to use our website, you consent to our use of cookies as described in this policy. If you do
              not agree with our cookie practices, please do not use our website.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
