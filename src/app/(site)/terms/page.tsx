export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Last updated: January 15, 2025
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-8 text-gray-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing or using Global Vin (the “Platform”), you agree to
              comply with and be bound by these Terms and Conditions and all
              applicable laws. If you do not agree with these Terms, you should
              not access or use our Platform or services.
            </p>
            <p className="mt-2 leading-relaxed">
              These Terms apply to all visitors, registered users, franchise
              applicants, and franchise partners (“Users”).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Eligibility and User Accounts
            </h2>
            <p className="leading-relaxed">
              To access certain features, Users may be required to create an
              account. You must provide accurate, complete, and up-to-date
              information. You are responsible for safeguarding your login
              credentials and for all activities that occur under your account.
            </p>
            <p className="mt-2 leading-relaxed">
              Global Vin reserves the right to suspend or terminate accounts
              that provide false information, misuse the Platform, or violate
              these Terms.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Franchise Application and Approval
            </h2>
            <p className="leading-relaxed">
              All franchise applications are subject to review and approval by
              Global Vin.
            </p>
            <p className="mt-2 leading-relaxed">
              Submitting an application does not guarantee acceptance. Approval
              may depend on factors including location, business experience,
              compliance with brand standards, and local requirements.
            </p>
            <p className="mt-2 leading-relaxed">
              Applicants must provide truthful and complete information. Global
              Vin reserves the right to reject or revoke franchise status at its
              discretion if false or misleading information is discovered.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Franchise Partner Obligations
            </h2>
            <p className="leading-relaxed">Franchise Partners agree to:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside leading-relaxed">
              <li>
                Operate their business in compliance with Global Vin’s brand
                standards, operational guidelines, and local laws.
              </li>
              <li>
                Use trademarks, branding, and marketing materials only as
                authorized.
              </li>
              <li>
                Refrain from engaging in deceptive, unethical, or illegal
                business practices.
              </li>
              <li>
                Pay all agreed-upon franchise, licensing, or renewal fees on
                time.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Failure to comply may result in suspension or termination of
              franchise rights.
            </p>
          </section>

          {/* Section 5 & 6 – Combined (since they are similar) */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Payments and Fees
            </h2>
            <p className="leading-relaxed">
              Certain services, franchise packages, or renewals may require
              payment of fees. All fees are non-refundable unless otherwise
              stated. Payment processing is handled by third-party providers.
              Users are responsible for providing accurate payment information.
              We reserve the right to change our fee structure with appropriate
              notice. Failure to pay fees may result in suspension of services.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Prohibited Activities
            </h2>
            <p className="leading-relaxed">
              Users and Franchise Partners may not:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside leading-relaxed">
              <li>
                Misuse or attempt to hack, disrupt, or gain unauthorized access
                to the Platform.
              </li>
              <li>Post or share false, misleading, or unlawful content.</li>
              <li>
                Engage in any activity that harms the reputation or operations
                of Global Vin.
              </li>
            </ul>
          </section>
        </div>

        {/* Footer Note */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© 2025 Global Vin. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
