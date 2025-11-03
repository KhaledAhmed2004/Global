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
    <section className="mx-auto w-full max-w-[1872px] px-6 py-16 md:py-24">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-center font-poppins text-4xl md:text-5xl lg:text-[84px] font-medium leading-tight md:leading-snug text-black">
          Vehicle History Market Booming
        </h2>

        {/* Comparison Cards */}
        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 lg:gap-[21px]">
          {/* Problem Card */}
          <div className="h-auto lg:h-[415px] w-full lg:w-[45%] shrink-0 overflow-hidden rounded-2xl border border-[#ed1c24] p-6 lg:p-0">
            <div className="flex flex-col items-center gap-8 pt-8 lg:pt-12">
              <h3 className="w-full lg:w-[90%] font-poppins text-xl md:text-2xl lg:text-[32px] font-semibold leading-snug text-[#e22e2e] text-center lg:text-left">
                The Problem Most Entrepreneurs Face
              </h3>
              <div className="flex flex-col gap-4 lg:gap-[30px] w-full lg:w-[90%]">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="relative h-6 w-6 shrink-0 flex-none">
                      <Image
                        src="/assets/icon-x.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p
                      className="text-left font-roboto text-sm md:text-base font-normal leading-snug text-[#151515]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {problem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="h-auto lg:h-[415px] w-full lg:w-[45%] shrink-0 overflow-hidden rounded-2xl border border-[#008f05] p-6 lg:p-0">
            <div className="flex flex-col items-center gap-8 pt-8 lg:pt-12">
              <h3 className="w-full lg:w-[90%] font-poppins text-xl md:text-2xl lg:text-[32px] font-semibold leading-snug text-[#008f05] text-center lg:text-left">
                Our Solution: Everything Ready On Day One
              </h3>
              <div className="flex flex-col gap-4 lg:gap-[30px] w-full lg:w-[90%]">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="relative h-6 w-6 shrink-0 flex-none">
                      <Image
                        src="/assets/icon-check.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p
                      className="text-left font-roboto text-sm md:text-base font-normal leading-snug text-[#151515]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
