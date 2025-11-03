import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== CTA Container ===== */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          {/* Background image */}
          <img
            src="/assets/cta-background.png"
            alt="VIN promo background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

          {/* ===== Content Section ===== */}
          <div className="relative px-6 py-14 sm:px-10 sm:py-20 md:px-16 md:py-24 text-white flex flex-col items-start justify-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Get Accurate Vehicle Reports{" "}
              <span className="italic text-[#d1b3ff]">Instantly</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
              Search any VIN and access trusted global data instantly. Build
              your business and empower clients with reliable vehicle insights.
            </p>

            {/* ===== CTA Button ===== */}
            <button
              className="relative mt-8 flex w-fit items-center justify-center gap-2 sm:gap-3 
                         overflow-hidden rounded-full bg-[#764ba2] px-8 sm:px-10 py-3 sm:py-4 
                         shadow-[2px_2px_10px_8px_rgba(118,75,162,0.3)] 
                         transition-all duration-200 hover:bg-[#6a4391] active:scale-95"
            >
              {/* Inner shadow layer */}
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_2px_2px_2px_rgba(255,255,255,0.4),inset_-2px_-2px_2px_rgba(255,255,255,0.4)]" />

              {/* Button Text */}
              <p
                className="relative font-roboto text-[15px] sm:text-[16px] font-medium text-white"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Search VIN
              </p>

              {/* Arrow Icon */}
              <ArrowUpRight className="relative size-5 sm:size-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
