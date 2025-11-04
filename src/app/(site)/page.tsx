import Hero from "../../components/sections/Hero";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import CTASection from "@/src/components/sections/CTASection";
import PricingSection from "@/src/components/sections/PricingSection";
import MarketBooming from "@/src/components/sections/MarketBooming";
import DashboardShow from "@/src/components/sections/DashboardShow";
import WhatMakesDifferent from "@/src/components/sections/WhatMakesDifferent";
import BrandedWebsite from "@/src/components/sections/BrandedWebsite";
import BrandedMobileApp from "@/src/components/sections/BrandedMobileApp";

export default function Home() {
  const testimonials = [
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/one.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/two.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/three.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/four.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/four.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/four.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/four.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/four.png",
    },
  ];

  return (
    <main className="bg-zinc-50 dark:bg-black">
      <Hero />
      <WhatMakesDifferent />
      {/* <MarketBooming /> */}
      <DashboardShow />
      <BrandedWebsite />
      <BrandedMobileApp />

      <section className="bg-black py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 sm:mb-12 md:mb-16 text-center ">
            What Our Students Say
          </h2>

          {/* Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
      <PricingSection />
      <CTASection />
    </main>
  );
}
