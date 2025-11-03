import Image from "next/image";

export default function FranchiseAvailability() {
  return (
    <section className="mx-auto w-full max-w-[1872px] px-6 py-12">
      <div className="flex flex-col gap-12 items-center">
        <h2 className="font-poppins text-[84px] font-semibold leading-[1.2] text-gray-900 text-center">
          Check Franchise Availability in Your Area
        </h2>
        <div className="relative w-full h-[891px] rounded-[16px] overflow-hidden">
          <Image
            src="/assets/franchise-map.png"
            alt="Franchise Availability Map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
