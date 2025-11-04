// import Image from "next/image";

// export default function BrandedMobileApp() {
//   return (
//     <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 overflow-hidden">
//       {/* Header */}
//       <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 md:mb-12 lg:mb-16">
//         <h2 className="text-center font-poppins text-3xl font-medium leading-[1.2] text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[82px] px-4">
//           Get your own branded Mobile App
//         </h2>
//         <p className="text-center font-roboto text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 md:text-lg lg:text-xl xl:text-2xl max-w-3xl px-4">
//           Track VIN reports, manage customers, and view analytics from anywhere.
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8 lg:gap-12 xl:gap-16">
//         {/* Left side: Text */}
//         <div className="w-full md:w-2/5 flex flex-col justify-center space-y-4 md:space-y-6 z-10">
//           <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
//             Our mobile app empowers every franchise partner to manage their
//             business from anywhere. From scanning vehicle VINs to generating
//             instant reports, everything is just a tap away. Track real-time
//             analytics, monitor customer activity, and sync all your data
//             seamlessly with the main dashboard. Designed for flexibility, it
//             helps you stay connected, informed, and in control—whether you're at
//             the showroom or on the move.
//           </p>
//         </div>

//         {/* Right side: Image */}
//         <div className="w-full md:w-3/5 relative -mx-4 sm:mx-0">
//           {/* Responsive container with proper aspect ratios */}
//           <div className="relative w-full aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/5] lg:aspect-[4/5] max-w-2xl mx-auto md:max-w-none">
//             <Image
//               src="/assets/mobile-app-mockup.png"
//               alt="Mobile app mockup showing franchise management interface"
//               fill
//               className="object-contain scale-110 sm:scale-115 md:scale-105 lg:scale-110 xl:scale-125"
//               sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 60vw, 50vw"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function BrandedMobileApp() {
  // Framer Motion variants for the image
  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: ["easeOut"] },
    },
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-center font-poppins text-3xl font-medium leading-[1.2] text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[82px] px-4">
          Get your own branded Mobile App
        </h2>
        <p className="text-center font-roboto text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 md:text-lg lg:text-xl xl:text-2xl max-w-3xl px-4">
          Track VIN reports, manage customers, and view analytics from anywhere.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8 lg:gap-12 xl:gap-16">
        {/* Left side: Text */}
        <div className="w-full md:w-2/5 flex flex-col justify-center space-y-4 md:space-y-6 z-10">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Our mobile app empowers every franchise partner to manage their
            business from anywhere. From scanning vehicle VINs to generating
            instant reports, everything is just a tap away. Track real-time
            analytics, monitor customer activity, and sync all your data
            seamlessly with the main dashboard. Designed for flexibility, it
            helps you stay connected, informed, and in control—whether you're at
            the showroom or on the move.
          </p>
        </div>

        {/* Right side: Animated Image */}
        <motion.div
          className="w-full md:w-3/5 relative -mx-4 sm:mx-0"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/5] lg:aspect-[4/5] max-w-2xl mx-auto md:max-w-none">
            <Image
              src="/assets/mobile-app-mockup.png"
              alt="Mobile app mockup showing franchise management interface"
              fill
              className="object-contain scale-110 sm:scale-115 md:scale-105 lg:scale-110 xl:scale-125"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 60vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
