"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Authentication", href: "/product-verification" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-[9999] bg-zinc-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-9 w-auto"
              src="/images/logo-evolion.png"
              alt="Evolion Pharma"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-200 hover:text-[#d3a96f] transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-zinc-200 hover:text-[#d3a96f] transition z-[99999]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
     <AnimatePresence>
  {menuOpen && (
    <motion.div
      key="menu"
      initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
      animate={{
        clipPath: "circle(150% at 50% 50%)",
        opacity: 1,
        transition: { duration: 0.55, ease: "easeInOut" },
      }}
      exit={{
        clipPath: "circle(0% at 100% 0%)",
        opacity: 0,
        transition: { duration: 0.45, ease: "easeInOut" },
      }}
      className="fixed inset-0 z-[9998] bg-gradient-to-br from-black via-zinc-950 to-black"
    >
      {/* Ambient glow */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#d3a96f]/20 rounded-full blur-[140px]" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between px-8 py-14 text-[#d3a96f]">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <span className="tracking-[0.35em] text-xs uppercase text-zinc-400">
            Evolion Pharma
          </span>
        </motion.div>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
            >
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  text-3xl sm:text-4xl font-semibold tracking-tight
                  hover:text-[#e3c084] transition
                "
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="
              px-8 py-3 rounded-xl
              bg-gradient-to-r from-[#e3c084] to-[#c89b5e]
              text-black font-semibold
              shadow-lg
              active:scale-[0.97]
              transition
            "
          >
            Explore Products
          </Link>

          <span className="text-xs text-zinc-500">
            Science • Performance • Wellness
          </span>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
};
