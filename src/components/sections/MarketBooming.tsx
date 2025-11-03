import Image from "next/image";

export default function MarketBooming() {
  const problems = [
    "Building a vehicle history platform from scratch costs $200K+ and takes 18+ months",
    "CARFAX API access requires huge volume commitments and enterprise contracts",
    "International data sources are nearly impossible to access independently",
    "Technical infrastructure and maintenance requires a full development team",
  ];

  const solutions = [
    "Complete white label platform ready in 24 hours - no coding required",
    "CARFAX integration already negotiated and included in your package",
    "Chinese and Japanese vehicle databases pre-integrated and ready to use",
    "Add unlimited local APIs through our flexible connector framework",
  ];

  return (
    <section className="mx-auto w-full max-w-[1872px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col items-center gap-10 sm:gap-12">
        {/* Title */}
        <h2 className="text-center font-poppins text-[42px] sm:text-[60px] lg:text-[84px] font-medium leading-tight text-black">
          Vehicle History Market Booming
        </h2>

        {/* Comparison Cards */}
        <div className="flex flex-col lg:flex-row w-full items-stretch justify-center gap-6 lg:gap-[21px]">
          {/* Problem Card */}
          <div className="flex flex-col items-center border border-[#ed1c24] rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-12 w-full lg:w-1/2 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-center font-poppins text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-normal text-[#e22e2e] mb-4 sm:mb-8">
              The Problem Most Entrepreneurs Face
            </h3>

            <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-[715px]">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="relative h-6 w-6 shrink-0 mt-1">
                    <Image
                      src="/assets/icon-x.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base sm:text-lg font-roboto font-normal leading-normal text-[#151515] text-left">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="flex flex-col items-center border border-[#008f05] rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-12 w-full lg:w-1/2 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-center font-poppins text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-normal text-[#008f05] mb-4 sm:mb-8">
              Our Solution: Everything Ready On Day One
            </h3>

            <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-[715px]">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="relative h-6 w-6 shrink-0 mt-1">
                    <Image
                      src="/assets/icon-check.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base sm:text-lg font-roboto font-normal leading-normal text-[#151515] text-left">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
