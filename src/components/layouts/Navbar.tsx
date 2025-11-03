"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Get the current pathname
  const pathname = usePathname();

  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sample-report", label: "Sample Report" },
    { href: "/api-config", label: "API Config" },
    { href: "/vin-search", label: "VIN Search" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/franchise", label: "Franchise Opportunity" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top section: logo + nav + actions */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-10">
            <Image
              src="/assets/logo.svg"
              alt="Globe VIN Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-medium italic text-black font-poppins">
            Globe VIN
          </span>
        </Link>

        {/* Desktop Nav (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            // Partial match for nested routes
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-normal tracking-tight transition-colors hover:text-black font-roboto ${
                  isActive ? "text-black font-semibold" : "text-[#919193]"
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Customer Badge - visible on tablet and desktop (md and above) */}
          <div className="hidden md:flex items-center gap-[10px] rounded-[87px] border border-[#c7c7c7] px-4 py-2">
            <div className="flex -space-x-5">
              {["customer1.png", "customer2.png", "customer3.png"].map(
                (img, idx) => (
                  <div key={idx} className="relative h-8 w-8">
                    <Image
                      src={`/assets/${img}`}
                      alt="Customer"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
            <span className="text-base font-normal text-black tracking-tight font-inter">
              10K+ Customers
            </span>
          </div>

          {/* Divider - visible on md and above */}
          <div className="hidden md:block h-10 w-px bg-gray-300"></div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition hover:bg-black/80">
              <Image
                src="/assets/search-icon.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>

            {/* User Button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c7c7c7] bg-white transition hover:bg-zinc-50">
              <Image
                src="/assets/user-icon.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>

            {/* Mobile Menu Toggle - visible on mobile only */}
            <button
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - slide down animation */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out bg-white shadow-md ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 gap-2">
          {navLinks.map((link, index) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)} // close menu when clicked
                className={`flex items-center px-4 py-3 rounded-lg font-roboto text-base font-normal transition-all duration-300 transform ${
                  isActive
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                  transitionDelay: `${index * 75}ms`, // stagger effect
                  transitionProperty: "opacity, transform",
                }}
              >
                {/* Accent bar on the left for active link */}
                {isActive && (
                  <div className="w-1 h-full bg-purple-600 rounded-l-lg mr-3"></div>
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
