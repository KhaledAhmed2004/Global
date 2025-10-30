import Image from "next/image";
import TeamSection from "./components/TeamSection";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen p-2">
      {/* Top label */}
      <div className="max-w-7xl mx-auto w-full mt-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          About Us
        </h1>
      </div>

      <div className="mt-2">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-lg max-w-7xl mx-auto">
          <Image
            src="/about-page.jpg"
            alt="About Us Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To create a globally unified vehicle data network that empowers
              consumers, dealers, and franchise partners with accurate,
              transparent, and verifiable vehicle history insights — building
              trust in every transaction, everywhere.
            </p>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>

          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              To deliver trusted, data-driven vehicle history reports that
              empower buyers, sellers, and partners worldwide. We aim to build a
              transparent automotive ecosystem by connecting verified global
              databases with local expertise through our franchise network.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}
