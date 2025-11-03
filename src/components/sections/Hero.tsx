"use client";

import Image from "next/image";
import { Search, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [vin, setVin] = useState("");

  const handleSearch = () => {
    console.log("Searching VIN:", vin);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading + CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
          {/* Main Heading with Inline Car */}
          <div className="flex-1">
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[84px] font-medium leading-tight lg:leading-normal text-black">
              Turn{" "}
              <span className="relative inline-block h-[50px] w-[125px] sm:h-[60px] sm:w-[150px] md:h-[75px] md:w-[190px] lg:h-[90px] lg:w-[225px] xl:h-[105px] xl:w-[265px] align-middle">
                <span className="absolute inset-0 overflow-hidden rounded-full lg:rounded-[205px] border border-black">
                  <Image
                    src="/assets/hero-car-inline.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </span>
              </span>{" "}
              History Reports Into Your Revenue Stream
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:flex-shrink-0">
            {/* Primary Button */}
            <button
              className="relative flex items-center justify-center gap-2 sm:gap-3 
                         overflow-hidden rounded-full bg-[#764ba2] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 
                         shadow-[2px_2px_10px_8px_rgba(118,75,162,0.3)] 
                         transition-all duration-200 hover:bg-[#6a4391] active:scale-95"
            >
              {/* Inner shadow layer */}
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_2px_2px_2px_rgba(255,255,255,0.4),inset_-2px_-2px_2px_rgba(255,255,255,0.4)]" />

              {/* Button Text */}
              <p
                className="relative font-roboto text-sm sm:text-[15px] lg:text-[16px] font-medium text-white whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Start Free 14 Days Trial
              </p>

              {/* Arrow Icon */}
              <ArrowUpRight className="relative w-4 sm:w-5 lg:w-6 text-white" />
            </button>

            {/* Secondary Button */}
            <button
              className="flex items-center justify-center gap-2.5 
                         rounded-full border border-black bg-transparent 
                         px-6 sm:px-8 lg:px-10 py-3 sm:py-4 
                         font-roboto text-sm sm:text-[15px] lg:text-[16px] font-medium text-black 
                         transition-all duration-200 hover:bg-black/5 active:scale-95 whitespace-nowrap"
            >
              Watch 2-Min Demo
            </button>
          </div>
        </div>

        {/* ================= Background Car Section ================= */}
        <div className="relative mx-auto mt-6 sm:mt-8 lg:mt-10 h-[280px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background Image */}
          <Image
            src="/assets/hero-car-bg.png"
            alt="Vehicle Background"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* ================= Content Wrapper ================= */}
          <div className="absolute inset-x-0 bottom-4 sm:bottom-6 lg:bottom-8 flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 px-4">
            {/* ================= VIN Search Section ================= */}
            <div className="w-full max-w-[700px] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Input Field */}
              <div className="relative flex h-12 sm:h-14 w-full flex-1 items-center gap-3 overflow-hidden rounded-full border border-white/30 bg-white/15 px-4 sm:px-5 backdrop-blur-md">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" />
                <input
                  type="text"
                  placeholder="Enter 17-digit VIN (e.g., 1HGBH41JXMN109186)"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  className="flex-1 bg-transparent text-xs sm:text-sm lg:text-base font-roboto text-white placeholder:text-[#c3c3c3] focus:outline-none"
                />
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="relative flex h-12 sm:h-14 w-full sm:w-fit items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-[#764ba2] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 shadow-[2px_2px_10px_8px_rgba(118,75,162,0.3)] transition-all duration-200 hover:bg-[#6a4391] active:scale-95"
              >
                {/* Inner shadow layer */}
                <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_2px_2px_2px_rgba(255,255,255,0.4),inset_-2px_-2px_2px_rgba(255,255,255,0.4)]" />

                {/* Button Text */}
                <p
                  className="relative font-roboto text-sm sm:text-[15px] lg:text-[16px] font-medium text-white"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Search VIN
                </p>

                {/* Arrow Icon */}
                <ArrowUpRight className="relative w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </button>
            </div>

            {/* ================= Avatars + Description ================= */}
            <div
              className="flex w-full max-w-[750px] flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 bg-white backdrop-blur-sm px-4 sm:px-5 lg:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl"
              style={{
                clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
              }}
            >
              {/* Overlapping Avatars */}
              <div className="flex items-center shrink-0">
                <div className="relative -mr-3 sm:-mr-4 h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                  <Image
                    src="/assets/hero-avatar1.png"
                    alt="User 1"
                    fill
                    className="rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                  <Image
                    src="/assets/hero-avatar2.svg"
                    alt="User 2"
                    fill
                    className="rounded-full object-cover border-2 border-white"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col text-center sm:text-left flex-1 min-w-0">
                <p className="font-roboto text-xs sm:text-sm lg:text-base font-normal leading-[1.5] text-black">
                  Launch your branded vehicle history business in 24 hours with
                  our complete white label solution. CARFAX integration, global
                  databases, and unlimited earning potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
