"use client";

import Image from "next/image";
import { Search, Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading + CTAs */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
            Turn
            <span className="mx-2 inline-block align-middle">
              {/* Optional inline image/icon */}
              <Image
                src="/about-page.jpg"
                alt="Car"
                width={68}
                height={40}
                className="rounded-lg object-cover inline-block align-middle"
              />
            </span>
            History Reports
            <br />
            Into Your Revenue Stream
          </h1>

          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
            <a
              href="#trial"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black transition"
            >
              Star Free 14 Days Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-gray-200 text-gray-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-300 transition"
            >
              Watch 2-Min Demo
              <Play className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero media with overlays */}
        <div className="relative h-[420px] sm:h-[500px] overflow-hidden rounded-2xl bg-black">
          <Image
            src="/about-page.jpg"
            alt="Hero car"
            fill
            priority
            className="object-cover opacity-90"
          />

          {/* dark vignette */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Search bar overlay */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[92%] sm:w-[80%] md:w-[70%] flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white rounded-full px-4 py-2 w-full max-w-xl">
              <Search className="w-4 h-4 opacity-80" />
              <input
                type="text"
                placeholder="Enter 17-digit VIN (e.g., 1HGCM82633A123456)"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/70"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white px-5 py-2 text-sm font-medium shadow-lg hover:bg-purple-500 transition">
              Search VIN
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom pill card */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-xl text-xs sm:text-sm">
              <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                24
              </div>
              <div className="text-gray-700">
                Launch your branded vehicle history business in 24 hours with
                our complete white label solution. CARFAX integration, global
                datasets, and unlimited earning potential.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
