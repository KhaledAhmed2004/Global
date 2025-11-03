import Image from "next/image";
import FranchiseBenefits from "./components/FranchiseBenefits";
import FranchiseAvailability from "./components/FranchiseAvailability";
import InvestmentRequirements from "./components/InvestmentRequirements";
import TestimonialCarousel from "@/src/components/TestimonialCarousel";
import FranchiseApplication from "./components/FranchiseApplication";

export default function FranchiseHero() {
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
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
      <div className="flex flex-col gap-4 sm:gap-6">
        <h1
          className="font-roboto text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium leading-snug sm:leading-tight md:leading-[1.35] text-black w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Franchise Opportunity
        </h1>

        <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[911px] rounded-lg overflow-hidden">
          <Image
            src="/assets/franchise-hero.png"
            alt="Franchise Opportunity"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <FranchiseBenefits />
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <FranchiseAvailability />
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <InvestmentRequirements />
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <TestimonialCarousel testimonials={testimonials} />
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20">
        <FranchiseApplication />
      </div>
    </section>
  );
}
