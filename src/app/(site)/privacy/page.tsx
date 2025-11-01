import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-600">
            Last updated: October 30, 2025
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-8 text-gray-700 leading-relaxed">
          <p>
            At <strong>Global Vin</strong>, we are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your data when you visit our website, use our Platform, or engage
            with our services.
          </p>
          <p className="mt-3">
            By using the Platform, you consent to the practices described in
            this Privacy Policy.
          </p>
        </section>

        {/* Sections */}
        <div className="space-y-8 text-gray-700">
          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, business details, payment information, and
                franchise application data.
              </li>
              <li>
                <strong>Vehicle Data:</strong> VIN numbers, vehicle history
                reports, registration details, and related queries.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, device
                information, pages visited, and time spent on the Platform.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> We use cookies and similar
                technologies to improve user experience and analyze traffic.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Provide, operate, and improve the Platform and services.</li>
              <li>
                Process franchise applications and manage partner relationships.
              </li>
              <li>Generate and deliver vehicle history reports.</li>
              <li>
                Communicate with you regarding updates, offers, and support.
              </li>
              <li>Comply with legal obligations and prevent fraud.</li>
              <li>Analyze usage trends and enhance user experience.</li>
            </ul>
          </section>

          {/* 3. Data Sharing & Disclosure */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Data Sharing & Disclosure
            </h2>
            <p>
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                <strong>Trusted Partners:</strong> CARFAX, China Auto Database,
                Japan Vehicle Registry, and other verified data providers.
              </li>
              <li>
                <strong>Service Providers:</strong> Payment processors, cloud
                hosting, analytics, and customer support tools.
              </li>
              <li>
                <strong>Franchise Network:</strong> Approved franchise partners
                for localized services.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                regulation, or court order.
              </li>
            </ul>
          </section>

          {/* 4. Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures including
              encryption, firewalls, and secure APIs to protect your data.
              However, no method of transmission over the internet is 100%
              secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* 5. Your Privacy Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Your Privacy Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request data portability.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <Link
                href="mailto:privacy@globalvin.com"
                className="text-blue-600 hover:underline"
              >
                privacy@globalvin.com
              </Link>
              .
            </p>
          </section>

          {/* 6. Cookies & Tracking */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Cookies & Tracking
            </h2>
            <p>
              We use cookies to enhance functionality and analyze performance.
              You can manage cookie preferences through your browser settings.
              Disabling cookies may limit Platform features.
            </p>
          </section>

          {/* 7. Third-Party Links */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Third-Party Links
            </h2>
            <p>
              Our Platform may contain links to third-party websites (e.g.,
              CARFAX, payment gateways). We are not responsible for their
              privacy practices. We encourage you to review their policies.
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not intended for individuals under 18. We do not
              knowingly collect data from children. If we become aware of such
              data, we will delete it immediately.
            </p>
          </section>

          {/* 9. International Data Transfers */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. International Data Transfers
            </h2>
            <p>
              Your data may be processed in the United States, Canada, China,
              Japan, or other countries. We ensure appropriate safeguards are in
              place for cross-border transfers.
            </p>
          </section>

          {/* 10. Changes to This Policy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated “Last updated” date.
              Continued use of the Platform constitutes acceptance of the
              revised policy.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:privacy@globalvin.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@globalvin.com
                </Link>
              </li>
              <li>
                <strong>Address:</strong> Global Vin HQ, 123 Auto Tech Blvd,
                Suite 500, San Francisco, CA 94105, USA
              </li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© 2025 Global Vin. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
