import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "VIN Search", href: "/vin-search" },
    { name: "Vehicle History Reports", href: "/reports" },
    { name: "Accident Reports", href: "/accident-reports" },
    { name: "Title Information", href: "/title-info" },
    { name: "Franchise Opportunities", href: "/franchise" },
  ];

  const socialLinks = [
    { icon: "/assets/social-facebook.svg", href: "#", label: "Facebook" },
    { icon: "/assets/social-twitter.svg", href: "#", label: "Twitter" },
    { icon: "/assets/social-instagram.svg", href: "#", label: "Instagram" },
    { icon: "/assets/social-linkedin.svg", href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-24 pb-0 pt-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-0 pb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 max-w-[400px]">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <div className="relative h-[30px] w-[25px]">
                <Image
                  src="/assets/logo.svg"
                  alt="Globe VIN"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-poppins text-base italic leading-6 text-[#101828]">
                Globe VIN
              </span>
            </div>

            {/* Description */}
            <p className="font-roboto text-sm font-normal leading-[22.75px] text-[#4a5565]">
              Your trusted partner for comprehensive vehicle history reports
              worldwide. We deliver authentic data from international sources.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d1d5dc] transition-colors hover:bg-gray-100"
                  aria-label={social.label}
                >
                  <Image src={social.icon} alt="" width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-poppins text-base font-semibold text-[#101828]">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="font-roboto text-sm text-[#4a5565] transition-colors hover:text-[#101828]"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h3 className="font-poppins text-base font-semibold text-[#101828]">
                Services
              </h3>
              <nav className="flex flex-col gap-3">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="font-roboto text-sm text-[#4a5565] transition-colors hover:text-[#101828]"
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-poppins text-base font-semibold text-[#101828]">
                Contact Us
              </h3>
              <div className="flex flex-col gap-4">
                {/* Address */}
                <div className="flex items-start gap-2">
                  <Image
                    src="/assets/icon-location.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p className="font-roboto text-sm text-[#4a5565]">
                    123 Business Street, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2">
                  <Image
                    src="/assets/icon-phone.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p className="font-roboto text-sm text-[#4a5565]">
                    +1 (234) 567-890
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2">
                  <Image
                    src="/assets/icon-email.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p className="font-roboto text-sm text-[#4a5565]">
                    info@globalvin.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 py-6 gap-4 sm:gap-0">
          <p className="font-roboto text-sm text-[#4a5565] text-center sm:text-left">
            © 2025 Global VIN. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
            <Link
              href="/privacy"
              className="font-roboto text-sm text-[#4a5565] transition-colors hover:text-[#101828]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-roboto text-sm text-[#4a5565] transition-colors hover:text-[#101828]"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="font-roboto text-sm text-[#4a5565] transition-colors hover:text-[#101828]"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
