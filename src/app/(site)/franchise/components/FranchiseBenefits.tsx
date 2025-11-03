import Image from "next/image";

const benefits = [
  {
    icon: "/assets/training-icon.svg",
    title: "Training & Support",
    description:
      "Comprehensive training programs and ongoing support to ensure your success.",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 70.71%)",
    iconBg: "#2563EB",
  },
  {
    icon: "/assets/business-icon.svg",
    title: "Proven Business Model",
    description:
      "Tested and refined business strategies with consistent growth results.",
    gradient: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 70.71%)",
    iconBg: "#22C55E",
  },
  {
    icon: "/assets/marketing-icon.svg",
    title: "Marketing Assistance",
    description:
      "Professional marketing campaigns and brand support to drive customer acquisition.",
    gradient: "linear-gradient(135deg, #FAF5FF 0%, #F5F3FF 70.71%)",
    iconBg: "#A855F7",
  },
  {
    icon: "/assets/territory-icon.svg",
    title: "Exclusive Territory Rights",
    description:
      "Protected territory with exclusive operating rights in your designated area.",
    gradient: "linear-gradient(135deg, #FFF7ED 0%, #FEF2F2 70.71%)",
    iconBg: "#F97316",
  },
];

export default function FranchiseBenefits() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col gap-6 sm:gap-8 items-center">
        <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-snug text-black text-center">
          Franchise benefits
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 w-full">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6"
              style={{ background: benefit.gradient }}
            >
              <div
                className="rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
                style={{ backgroundColor: benefit.iconBg }}
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="font-inter text-lg sm:text-xl font-semibold leading-snug sm:leading-snug text-gray-900">
                  {benefit.title}
                </h3>
                <p className="font-inter text-sm sm:text-base font-normal leading-snug sm:leading-normal text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
