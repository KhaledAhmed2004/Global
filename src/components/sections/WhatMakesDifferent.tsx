export default function WhatMakesDifferent() {
  return (
    <section className="mx-auto w-full max-w-[1872px] px-6 py-24 bg-white">
      <div className="flex flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-poppins text-4xl sm:text-5xl md:text-[84px] font-medium leading-normal text-black">
            What Makes Global VIN Different
          </h2>
          <p className="text-center font-roboto text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
            A comprehensive platform built for global scalability and local
            customization
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6B46C1]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-black">
                Global API Integration
              </h3>
              <p className="font-roboto text-sm sm:text-base leading-relaxed text-gray-600">
                Connect local and international databases seamlessly with our
                unified API infrastructure.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6B46C1]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-black">
                White-Label Dashboard
              </h3>
              <p className="font-roboto text-sm sm:text-base leading-relaxed text-gray-600">
                Fully branded franchise interface that matches your business
                identity and local market.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6B46C1]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-black">
                Real-Time Reports
              </h3>
              <p className="font-roboto text-sm sm:text-base leading-relaxed text-gray-600">
                Generate comprehensive VIN insights in seconds with our
                high-performance data engine.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6B46C1]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="m16.24 7.76-2.12-2.12M16.24 16.24l2.12 2.12M7.76 16.24l-2.12 2.12M7.76 7.76 5.64 5.64" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-black">
                AI-Powered Data Cleaning
              </h3>
              <p className="font-roboto text-sm sm:text-base leading-relaxed text-gray-600">
                Ensure accuracy and consistency with machine learning-driven
                data validation.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6B46C1]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-black">
                Multi-Language Support
              </h3>
              <p className="font-roboto text-sm sm:text-base leading-relaxed text-gray-600">
                Localize reports per region with support for 40+ languages and
                regional formats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
