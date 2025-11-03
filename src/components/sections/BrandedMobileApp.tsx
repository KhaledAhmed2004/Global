import Image from "next/image";

export default function BrandedMobileApp() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h2 className="text-center font-poppins text-4xl font-medium leading-[1.2] text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px]">
            Get your own branded Mobile App
          </h2>
          <p className="text-center font-roboto text-base leading-6 text-black sm:text-lg sm:leading-7 md:text-xl lg:text-2xl">
            Track VIN reports, manage customers, and view analytics from anywhere.
          </p>
        </div>

        {/* Content - Text and Image */}
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Left - Description Text */}
          <div className="flex w-full items-start lg:flex-1 lg:pt-[128px]">
            <p
              className="font-roboto text-base leading-[1.7] text-black sm:text-lg sm:leading-[1.75] md:text-xl md:leading-[1.8] lg:text-2xl"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Our mobile app empowers every franchise partner to manage their business from anywhere. From scanning vehicle VINs to generating instant reports, everything is just a tap away. Track real-time analytics, monitor customer activity, and sync all your data seamlessly with the main dashboard. Designed for flexibility, it helps you stay connected, informed, and in control—whether you're at the showroom or on the move.
            </p>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative aspect-[721/705] w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:h-[705px] lg:w-[721px] lg:shrink-0">
            <Image
              src="/assets/mobile-app-mockup.png"
              alt="Global VIN Branded Mobile App Mockup"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, (max-width: 1024px) 600px, 721px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}