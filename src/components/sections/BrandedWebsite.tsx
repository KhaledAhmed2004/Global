import Image from "next/image";

export default function BrandedWebsite() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 px-2 sm:px-0">
          <h2 className="text-center font-poppins text-[48px] sm:text-[64px] md:text-[82px] font-medium leading-[1.2] text-black">
            Get Your Own Branded Website
          </h2>
          <p className="text-center font-roboto text-lg sm:text-xl md:text-2xl leading-7 text-black max-w-3xl">
            Seamless online experiences, instant VIN checks, and trusted vehicle
            reports — accessible anywhere, anytime.
          </p>
        </div>

        {/* Content - Image and Text */}
        <div className="flex flex-col lg:flex-row w-full items-start gap-8 lg:gap-12">
          {/* Left - Mockup Image */}
          <div className="relative w-full lg:w-[708px] h-[300px] sm:h-[400px] md:h-[507px] flex-shrink-0">
            <Image
              src="/assets/website-mockup.png"
              alt="Global VIN Branded Website Mockup"
              fill
              className="object-contain"
            />
          </div>

          {/* Right - Description Text */}
          <div className="flex flex-1 items-start pt-6 lg:pt-[91px]">
            <p className="font-arial text-base sm:text-lg md:text-2xl leading-[1.6] md:leading-[1.8] text-black">
              Our website platform helps franchise owners offer a seamless
              online experience to their customers. From instant VIN checks to
              detailed vehicle history reports, everything is designed with
              clarity and trust in mind. The responsive design ensures users can
              access reports on any device, while integrated APIs connect local
              and global data sources for maximum accuracy. It's not just a
              website — it's a complete digital identity for every Global VIN
              franchise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
