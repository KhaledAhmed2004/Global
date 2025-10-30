import { Layers } from "lucide-react";
import Hero from "../components/sections/Hero";
import PricingCard from "../components/Pricing-card";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Image from "next/image";

export default function Home() {
  const plans = [
    {
      name: "General",
      price: 24.99,
      icon: <Layers className="w-6 h-6" />,
      featured: false,
      features: [
        "Yearly subscriptions",
        "Unlimited Web Create",
        "App Creation Unlimited",
        "Re Function",
      ],
    },
    {
      name: "Premium",
      price: 14.99,
      icon: <Layers className="w-6 h-6" />,
      featured: true,
      features: [
        "Yearly subscriptions",
        "Unlimited Web Create",
        "App Creation Unlimited",
        "Re Function",
      ],
    },
    {
      name: "Extra",
      price: 24.99,
      icon: <Layers className="w-6 h-6" />,
      featured: false,
      features: [
        "Yearly subscriptions",
        "Unlimited Web Create",
        "App Creation Unlimited",
        "Re Function",
      ],
    },
  ];

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

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Vehicle History Market Booming
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Problems */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">
                The Problem Most Entrepreneurs Face
              </h2>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> Building a
                  vehicle history platform from scratch costs $200K+ and takes
                  18 months
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> CARFAX API
                  requires huge volume commitments and enterprise contracts
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> International
                  data sources are nearly impossible to access independently
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> Technical
                  infrastructure and maintenance requires a full dev team
                </li>
              </ul>
            </div>
            {/* Right: Solution */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Our Solution: Everything Ready On Day One
              </h2>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span> Complete white
                  label platform ready in 24 hours—no coding required
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span> CARFAX
                  integration already negotiated and included in your package
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span> China and
                  Japanese vehicle databases pre-integrated and ready to use
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span> Add unlimited
                  local APIs through our flexible connector framework
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600">
            Building from scratch: $200K+ & 18 months | With us: Ready in 24
            hours
          </p>
        </div>
      </section>
      <section className="w-full bg-transparent py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
            Drive Now
          </h1>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/dashboard-pic.png"
              alt="Hero image"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-black text-white">
        {/* Header */}
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-balance">
            Pricing List
          </h1>
        </div>
        <section className="bg-black py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16">
              What Our Students Say
            </h2>

            {/* Testimonial Carousel */}
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 pb-16 sm:pb-20 md:pb-24">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </section>
    </main>
  );
}
