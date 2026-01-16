import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Product Verification", href: "/product-verification" },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/images/logo-evolion.png" alt="Evolion Pharma" className="h-10 mb-4" />
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs text-center md:text-left">
            Evolion Pharma delivers premium nutraceutical formulations with a focus
            on science, safety, and efficacy. Trusted by professionals and
            consumers alike.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-[#d3a96f] font-semibold mb-2">Quick Links</h3>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-amber-300 transition text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-[#d3a96f] font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: info@evolionpharma.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Address: 123 Corporate Blvd, Mumbai, India</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800" />

      {/* Bottom */}
      <div className="py-4 text-center text-zinc-500 text-xs sm:text-sm">
        © {year} Evolion Pharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
