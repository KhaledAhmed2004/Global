"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { Globe, LayoutDashboard, BarChart2, Cpu, MessageSquare } from "lucide-react";

export default function WhatMakesDifferent() {
  // Motion variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: easeOut } 
    },
  };

  // Features data
  const features = [
    {
      title: "Global API Integration",
      desc: "Connect local and international databases seamlessly with our unified API infrastructure.",
      icon: Globe,
    },
    {
      title: "White-Label Dashboard",
      desc: "Fully branded franchise interface that matches your business identity and local market.",
      icon: LayoutDashboard,
    },
    {
      title: "Real-Time Reports",
      desc: "Generate comprehensive VIN insights in seconds with our high-performance data engine.",
      icon: BarChart2,
    },
    {
      title: "AI-Powered Data Cleaning",
      desc: "Ensure accuracy and consistency with machine learning-driven data validation.",
      icon: Cpu,
    },
    {
      title: "Multi-Language Support",
      desc: "Localize reports per region with support for 40+ languages and regional formats.",
      icon: MessageSquare,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 bg-white">
      <motion.div
        className="flex flex-col items-center gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="flex flex-col items-center gap-4" variants={fadeUpVariant}>
          <h2 className="text-center font-poppins text-4xl sm:text-5xl md:text-[75px] font-medium leading-normal text-black">
            What Makes Global VIN Different
          </h2>
          <p className="text-center font-roboto text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
            A comprehensive platform built for global scalability and local
            customization
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 sm:p-8 hover:scale-105 transition-transform duration-300"
                variants={fadeUpVariant}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6B46C1]">
                  <Icon size={28} color="white" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="font-roboto text-sm sm:text-base leading-relaxed text-gray-600">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
