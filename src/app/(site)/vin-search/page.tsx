"use client";

import PricingSection from "@/src/components/sections/PricingSection";
import { Search, AlertTriangle, CheckCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function VINSearchForm() {
  const [vin, setVin] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [showValidation, setShowValidation] = useState(false);

  const validateVIN = (value: string): boolean => {
    // VIN must be exactly 17 characters
    if (value.length !== 17) return false;

    // VIN cannot contain I, O, or Q
    if (/[IOQ]/.test(value)) return false;

    return true;
  };

  useEffect(() => {
    if (vin.length > 0) {
      const valid = validateVIN(vin);
      setIsValid(valid);
    } else {
      setIsValid(null);
      setShowValidation(false);
    }
  }, [vin]);

  const handleValidate = () => {
    setShowValidation(true);
    if (vin.length === 17 && isValid) {
      console.log("Validating VIN:", vin);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (value.length <= 17) {
      setVin(value);
      setShowValidation(false);
    }
  };

  const stats = [
    { value: "1M+", label: "Reports Delivered", color: "text-[#b69ad3]" },
    { value: "50+", label: "Data Sources", color: "text-[#764ba2]" },
    { value: "99.9%", label: "Accuracy Rate", color: "text-[#764ba2]" },
    { value: "24/7", label: "Customer Support", color: "text-[#764ba2]" },
  ];

  return (
    <section className="flex w-full flex-col items-center gap-12 py-16 sm:py-20 lg:py-24 px-4">
      {/* Heading */}
      <div className="flex max-w-7xl flex-col items-center gap-4 text-center leading-[1.2]">
        <h1 className="font-poppins text-3xl sm:text-5xl lg:text-[84px] font-semibold text-[#0f172b]">
          Enter Vehicle Identification Number
        </h1>
        <p
          className="font-roboto text-base sm:text-2xl lg:text-[42px] font-normal text-[#45556c]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Get instant access to comprehensive vehicle history reports
        </p>
      </div>

      {/* Search Form and Stats */}
      <div className="flex w-full max-w-7xl flex-col items-center gap-8">
        {/* Search Box */}
        <div className="flex w-full items-center justify-center rounded-2xl border border-[#dddddd] bg-[#f4f4f4] py-10 sm:py-12 lg:py-16">
          <div className="flex w-full max-w-4xl flex-col gap-2 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              {/* VIN Input */}
              <div className="relative flex-1 h-14 w-full overflow-hidden rounded-full border border-[#b69ad3] bg-white px-6">
                <div className="flex h-full items-center gap-3">
                  <Search className="w-5 h-5 text-[#764ba2] flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter 17-digit VIN (e.g., 1HGBH41JXMN109186)"
                    value={vin}
                    onChange={handleInputChange}
                    className="flex-1 bg-transparent font-roboto text-sm sm:text-base font-normal text-black placeholder:text-[#c3c3c3] focus:outline-none"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    maxLength={17}
                  />
                </div>
              </div>

              {/* Validate Button */}
              <button
                onClick={handleValidate}
                className="relative mt-3 sm:mt-0 flex items-center justify-center gap-2 sm:gap-3 
                         overflow-hidden rounded-full bg-[#764ba2] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 
                         shadow-[2px_2px_10px_8px_rgba(118,75,162,0.3)] 
                         transition-all duration-200 hover:bg-[#6a4391] active:scale-95"
              >
                <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_2px_2px_2px_rgba(255,255,255,0.4),inset_-2px_-2px_2px_rgba(255,255,255,0.4)]" />
                <p
                  className="relative font-roboto text-sm sm:text-[15px] lg:text-[16px] font-medium text-white whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Validate
                </p>
                <Search className="relative w-4 sm:w-5 lg:w-6 text-white" />
              </button>
            </div>

            {/* Character Counter and Validation Badge */}
            <div className="flex items-center justify-between">
              <p
                className="font-roboto text-sm font-normal leading-5 text-[#62748e]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {vin.length}/17 characters
              </p>

              {/* Validation Badge (only visible after clicking Validate) */}
              {showValidation && vin.length > 0 && (
                <div
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                    isValid === false
                      ? "bg-red-50 text-red-600"
                      : isValid === true
                      ? "bg-green-50 text-green-600"
                      : ""
                  }`}
                >
                  {isValid === false && (
                    <>
                      <X className="w-3.5 h-3.5" />
                      <span>Invalid VIN</span>
                    </>
                  )}
                  {isValid === true && (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Valid VIN</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Validation Messages */}
            {showValidation && (
              <>
                {/* Error Message */}
                {isValid === false && (
                  <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 mt-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="font-roboto text-sm font-normal text-red-800">
                      VIN must be exactly 17 characters and should not contain
                      I, O, or Q.
                    </p>
                  </div>
                )}

                {/* Success Message */}
                {isValid === true && (
                  <div className="flex items-start gap-3 rounded-lg bg-green-50 border border-green-200 px-4 py-3 mt-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="font-roboto text-sm font-normal text-green-800">
                      VIN validated successfully! Scroll down to view available
                      reports.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="flex flex-wrap justify-center lg:flex-nowrap items-center gap-10 sm:gap-16 lg:gap-[124px] 
                     w-full max-w-7xl"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2.5 text-center 
                         w-[140px] sm:w-[180px] md:w-[200px] lg:w-[243.5px] flex-shrink-0"
            >
              <p
                className={`font-roboto text-lg sm:text-xl font-normal leading-6 ${stat.color}`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {stat.value}
              </p>
              <p
                className="font-roboto text-sm sm:text-base font-medium leading-5 text-[#45556c]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Pricing section will show only after successful validation */}
      {showValidation && isValid === true && <PricingSection />}
    </section>
  );
}
