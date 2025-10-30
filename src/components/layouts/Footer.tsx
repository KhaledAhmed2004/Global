import Link from "next/link";
import {
  FaAppStoreIos,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-400 max-w-xs">
              Create at the Speed of Thought — empowering students to turn ideas
              into websites and projects in minutes, no coding required.
            </p>
            <div className="flex items-center gap-4">
              <FaAppStoreIos className="text-2xl text-gray-500" />
              <FaGooglePlay className="text-2xl text-gray-500" />
              <FaInstagram className="text-2xl text-gray-500" />
              <FaLinkedinIn className="text-2xl text-gray-500" />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-2">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal / Policies */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Legal / Policies
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Contact Us
              </h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-items-start gap-3">
                  <FaMapMarkerAlt className="text-gray-500 mt-0.5 shrink-0" />
                  <span>
                    123 Business Street, Suite 100
                    <br />
                    New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-500" />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-white transition"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-500" />
                  <a
                    href="mailto:info@globalvn.com"
                    className="hover:text-white transition"
                  >
                    info@globalvn.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; 2025 Global VN. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-300 transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
