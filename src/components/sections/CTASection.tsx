"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="py-12 sm:py-16 lg:py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== CTA Container ===== */}
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Background image with zoom animation */}
          <motion.img
            src="/assets/cta-background.png"
            alt="VIN promo background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={isInView ? { scale: 1 } : { scale: 1.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Dark overlay with fade-in */}
          <motion.div
            className="absolute inset-0 bg-black/50 sm:bg-black/40"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* ===== Content Section ===== */}
          <div className="relative px-6 py-14 sm:px-10 sm:py-20 md:px-16 md:py-24 text-white flex flex-col items-start justify-center">
            {/* Heading with staggered word animation */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get Accurate Vehicle Reports{" "}
              <motion.span
                className="italic text-[#d1b3ff]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Instantly
              </motion.span>
            </motion.h2>

            {/* Description with slide-up animation */}
            <motion.p
              className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Search any VIN and access trusted global data instantly. Build
              your business and empower clients with reliable vehicle insights.
            </motion.p>

            {/* ===== CTA Button with proper animations ===== */}
            <motion.button
              className="relative mt-8 flex w-fit items-center justify-center gap-2 sm:gap-3 
                         overflow-hidden rounded-full bg-[#764ba2] px-8 sm:px-10 py-3 sm:py-4 
                         shadow-[2px_2px_10px_8px_rgba(118,75,162,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "#6a4391",
                boxShadow: "2px 2px_15px 10px rgba(118,75,162,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
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

              {/* Arrow Icon with subtle hover animation */}
              <motion.div
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="relative size-5 sm:size-6 text-white" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
