"use client";

import { Layers3 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CheckoutModal from "../CheckoutModal.";

export default function PricingSection() {
  const [openModal, setOpenModal] = useState(false);

  const pricingTiers = [
    {
      name: "Per-Report Sales",
      price: "$24.99",
      period: "/month",
      icon: Layers3,
      features: [
        "Vehicle history reports",
        "You set your retail price",
        "Instant digital delivery",
        "75% profit margin typical",
      ],
    },
    {
      name: "Dealer Packages",
      price: "$24.99",
      period: "/month",
      icon: Layers3,
      features: [
        "Monthly subscriptions",
        "Bulk report credits",
        "Recurring revenue",
        "Customer retention",
      ],
    },
    {
      name: "API Access",
      price: "$14.99",
      period: "/month",
      icon: Layers3,
      features: [
        "Per API call pricing",
        "Serve car listing sites",
        "Integrate dealer tools",
        "Scale volume business",
      ],
      featured: true,
    },
    {
      name: "White Label Resale",
      price: "$24.99",
      period: "/month",
      icon: Layers3,
      features: [
        "Resell to other B2B",
        "Create subfranchisees",
        "Enterprise partnerships",
        "Compound income",
      ],
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 md:py-24">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-center font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-medium leading-normal text-black">
          Pricing List
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col overflow-hidden rounded-[20px] transition-all duration-300 hover:scale-[1.02] ${
                  tier.featured
                    ? "bg-[#1d1d1d] text-white shadow-lg"
                    : "border border-[#c5c5c5] bg-white text-black"
                }`}
              >
                <div className="relative flex flex-col items-center gap-6 px-8 pt-8">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-3xl ${
                      tier.featured ? "bg-white" : "bg-[#764ba2]"
                    }`}
                  >
                    <IconComponent
                      className={`h-6 w-6 ${
                        tier.featured ? "text-black" : "text-white"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-center text-lg sm:text-xl font-semibold leading-[30px] ${
                      tier.featured ? "text-white" : "text-black"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-center font-roboto ${
                      tier.featured ? "text-white" : "text-black"
                    }`}
                  >
                    <span className="text-3xl sm:text-[32px] font-semibold leading-[60px] tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-lg font-semibold">{tier.period}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-4 px-8 pb-10 pt-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="h-6 w-6 shrink-0">
                        <Image
                          src={
                            tier.featured
                              ? "/assets/checkmark-white-icon.svg"
                              : "/assets/checkmark-icon.svg"
                          }
                          alt="check icon"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="font-roboto text-base font-medium leading-6">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative px-8 pb-8">
                  <button
                    onClick={() => setOpenModal(true)}
                    className={`w-full rounded-full px-[18px] py-4 text-base font-semibold transition-all ${
                      tier.featured
                        ? "bg-white text-[#080808] hover:bg-gray-100"
                        : "border border-[#d2d2d2] bg-transparent text-black hover:bg-gray-50"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Checkout Modal */}
      {openModal && <CheckoutModal onClose={() => setOpenModal(false)} />}
    </section>
  );
}
