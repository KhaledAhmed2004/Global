"use client";

import { DollarSign, BarChart2, Clock, TrendingUp } from "lucide-react";

const requirements = [
  {
    icon: DollarSign,
    title: "Initial Investment",
    amount: "$50k - $75K",
    amountColor: "text-blue-600",
    description: "One-time franchise license fee",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #E0E7FF 70.71%)", // 1st card
    iconBg: "#2563EB",
  },
  {
    icon: BarChart2,
    title: "Total Investment Range",
    amount: "$150k - $300K",
    amountColor: "text-green-500",
    description: "Including setup, equipment, and working capital",
    gradient: "linear-gradient(135deg, #F0FDF4 0%, #D1FAE5 70.71%)", // 2nd card
    iconBg: "#22C55E",
  },
  {
    icon: Clock,
    title: "Setup Duration",
    amount: "3 - 4 Months",
    amountColor: "text-[#f75555]",
    description: "From approval to launch",
    gradient: "linear-gradient(135deg, #FFF5F5 0%, #FEE9E9 70.71%)", // 3rd card
    iconBg: "#F97316",
  },
  {
    icon: TrendingUp,
    title: "Expected ROI",
    amount: "12 - 18 Months",
    amountColor: "text-purple-500",
    description: "Based on average franchise performance",
    gradient: "linear-gradient(135deg, #FAF5FF 0%, #EDE9FE 70.71%)", // 4th card
    iconBg: "#A855F7",
  },
];

export default function InvestmentRequirements() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col gap-8 sm:gap-12 items-center">
        <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-snug text-gray-900 text-center">
          Investment Requirements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 w-full">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 flex flex-col items-center gap-3"
                style={{ background: req.gradient }}
              >
                <div
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
                  style={{ backgroundColor: req.iconBg }}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-inter text-lg sm:text-xl font-bold leading-snug text-gray-900 text-center">
                  {req.title}
                </h3>
                <p
                  className={`font-inter text-2xl sm:text-3xl font-bold leading-snug ${req.amountColor} text-center`}
                >
                  {req.amount}
                </p>
                <p className="font-inter text-sm sm:text-base font-normal leading-snug text-gray-600 text-center">
                  {req.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
