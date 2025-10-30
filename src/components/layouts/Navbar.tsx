"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "VIN Search", href: "/vinSearch" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Globe VIN</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"} font-medium transition-colors`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Customers Badge */}
            <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-sm font-semibold text-gray-700">
                10K+ Customers
              </span>
            </div>

            {/* User Avatar */}
            <button className="w-9 h-9 rounded-full bg-gray-300 border-2 border-dashed border-gray-400"></button>

            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href ? "text-blue-600 bg-gray-100" : "text-gray-700 hover:bg-gray-100"}`}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center space-x-3 px-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <span className="text-sm font-semibold text-gray-700">
                  10K+ Customers
                </span>
              </div>

              <div className="mt-3 px-3 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-dashed border-gray-400"></div>
                <span className="text-sm font-medium text-gray-700">
                  My Account
                </span>
              </div>

              <div className="mt-3 px-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
