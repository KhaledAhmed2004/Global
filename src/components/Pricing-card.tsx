"use client";

import { IoCheckmarkCircleOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

interface Plan {
  name: string;
  price: number;
  icon: ReactNode;
  featured: boolean;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`relative w-[280px] rounded-2xl border transition-all duration-300 hover:scale-105 ${
        plan.featured
          ? "border-orange-500/30 shadow-2xl shadow-orange-500/20 lg:scale-105"
          : "border-gray-700/50 bg-gray-900/40 hover:border-gray-600/50"
      }`}
      style={
        plan.featured
          ? {
              backgroundImage: "url(/images/BG-Pricing.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {/* Card Content */}
      <div className="flex flex-col h-full p-6 sm:p-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-full ${
              plan.featured ? "bg-white text-black" : "bg-orange-500 text-white"
            }`}
          >
            <span className="text-2xl">{plan.icon}</span>
          </div>
        </div>

        {/* Plan Name */}
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-2">
          {plan.name}
        </h3>

        {/* Price */}
        <div className="text-center mb-6">
          <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
          <span className="text-gray-400 text-sm sm:text-base">/month</span>
        </div>

        {/* Features */}
        <div className="flex-1 space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <IoCheckmarkCircleOutline
                className={`w-5 h-5 shrink-0 mt-0.5 ${
                  plan.featured ? "text-white" : "text-orange-500"
                }`}
              />
              <span className="text-sm sm:text-base text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button
          className={`w-full py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
            plan.featured
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-transparent border border-gray-500/50 text-gray-300 hover:border-orange-500/70 hover:bg-orange-500/10 hover:text-white"
          }`}
          variant={plan.featured ? "default" : "outline"}
        >
          Get started
        </Button>
      </div>
    </div>
  );
}
