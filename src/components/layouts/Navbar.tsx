"use client";

import Image from "next/image";
import Link from "next/link";

const imgEllipse2643 =
  "http://localhost:3845/assets/08dedbb5c2ecb10f07bd163945ac9407121680d5.png";
const imgEllipse2644 =
  "http://localhost:3845/assets/d45e4f914c108ea888fe8bacf7ad8b9a9a42a510.png";
const imgEllipse2645 =
  "http://localhost:3845/assets/c9c05ab30dc682aee262a81393ecbcfdba7279fe.png";
const Logo =
  "http://localhost:3845/assets/7882751f98bb060e14223d93a17047153aff47c4.svg";
const imgVector5325 =
  "http://localhost:3845/assets/f33c210151e1da77ff7ed774ad16651640006b94.svg";
const imgMagnifyingGlass =
  "http://localhost:3845/assets/d08036363f4311e53184c28d1172bb2b4ab38d28.svg";
const imgUser =
  "http://localhost:3845/assets/85a626d0e7bacdd9fd2524c779141ee82310edf0.svg";

export default function FigmaSelectedFrame() {
  return (
    <header className="flex items-center justify-between w-full px-4 md:px-10 py-3 md:py-5">
      {/* Left Section - Logo & Nav */}
      <div className="flex items-center gap-6 md:gap-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" width={40} height={48} />
          <p className="text-lg md:text-xl font-medium italic text-black">
            Globe VIN
          </p>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm md:text-base text-[#919193]">
          <p className="text-black cursor-pointer">Home</p>
          <p className="hover:text-black cursor-pointer">Sample Report</p>
          <p className="hover:text-black cursor-pointer">API Config</p>
          <Link href="/vinSearch" className="hover:text-black cursor-pointer">VIN Search</Link>
          <Link href="/dashboard" className="hover:text-black cursor-pointer">Dashboard</Link>
          <p className="hover:text-black cursor-pointer">About Us</p>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Customer Group */}
        <div className="flex items-center border border-[#c7c7c7] rounded-full px-3 py-2 md:px-4">
          <div className="flex -space-x-3">
            <Image
              src={imgEllipse2643}
              alt="customer1"
              width={32}
              height={32}
              className="rounded-full"
            />
            <Image
              src={imgEllipse2644}
              alt="customer2"
              width={32}
              height={32}
              className="rounded-full"
            />
            <Image
              src={imgEllipse2645}
              alt="customer3"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <p className="ml-3 text-sm md:text-base text-black">10K+ Customers</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-10 w-px bg-gray-300" />

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="bg-black rounded-full p-2 md:p-2.5 hover:opacity-80 transition">
            <Image
              src={imgMagnifyingGlass}
              alt="Search"
              width={24}
              height={24}
              className="invert"
            />
          </button>
          <button className="bg-white border border-[#c7c7c7] rounded-full p-2 md:p-2.5 hover:bg-gray-50 transition">
            <Image src={imgUser} alt="User" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
