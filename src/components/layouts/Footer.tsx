import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Global VIN</h3>
            <p className="text-sm text-gray-400 max-w-sm">
              Trusted vehicle history and VIN data platform. Empowering buyers,
              dealers, and franchise partners worldwide with accurate insights.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Twitter className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Instagram className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Linkedin className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Facebook className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/vinSearch"
                  className="text-gray-400 hover:text-white transition"
                >
                  VIN Search
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/dashboard/admin/reports"
                  className="text-gray-400 hover:text-white transition"
                >
                  VIN Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/admin/franchises"
                  className="text-gray-400 hover:text-white transition"
                >
                  Franchise Program
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/admin/api"
                  className="text-gray-400 hover:text-white transition"
                >
                  API Access
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/admin/resellers"
                  className="text-gray-400 hover:text-white transition"
                >
                  Resellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                <span>
                  123 Auto Tech Blvd, Suite 500
                  <br /> San Francisco, CA 94105
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <a
                  href="tel:+10123456789"
                  className="hover:text-white transition"
                >
                  +1 (012) 345-6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <a
                  href="mailto:support@globalvin.com"
                  className="hover:text-white transition"
                >
                  support@globalvin.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Global VIN. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-gray-300 transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
