import { ArrowUpRight } from "lucide-react";

const imgFrame = "http://localhost:3845/assets/06a3753c65fbda7f2f15706465bbfbe77083dc11.png";

export default function FigmaSelectedSection() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={imgFrame}
            alt="VIN promo background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative bg-black/40">
            <div className="px-8 py-16 sm:px-12 sm:py-20 text-white max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Get Accurate Vehicle Reports <span className="italic">Instantly</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-200">
                Search any VIN and access trusted global data instantly. Build your business and empower clients with reliable vehicle insights.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-md">
                <span>Search VIN</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}