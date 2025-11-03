"use client";

import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion"; // import easeOut
import TeamSection from "./components/TeamSection";

// Explicitly type variants as Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut }, // <-- fix: use imported easing
  },
};

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen p-2">
      {/* Top label */}
      <motion.div
        className="max-w-7xl mx-auto w-full mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          About Us
        </h1>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="mt-2 relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-lg max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        <Image
          src="/about-page.jpg"
          alt="About Us Hero"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          {/* Vision */}
          <motion.div
            className="space-y-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To create a globally unified vehicle data network that empowers
              consumers, dealers, and franchise partners with accurate,
              transparent, and verifiable vehicle history insights — building
              trust in every transaction, everywhere.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="space-y-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To deliver trusted, data-driven vehicle history reports that
              empower buyers, sellers, and partners worldwide. We aim to build a
              transparent automotive ecosystem by connecting verified global
              databases with local expertise through our franchise network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TeamSection />
      </motion.div>
    </div>
  );
}
