"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Products from "../../utils/products.json";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = Products.find((p) => p.id === Number(id));
  const [index, setIndex] = useState(0);

  if (!product) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-black text-zinc-500">
        Product not found.
      </main>
    );
  }

  const nextImage = () =>
    setIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-zinc-200 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ================= LEFT — IMAGE CAROUSEL ================= */}
        <div className="relative w-full">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-[#111]">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={product.images[index]}
                alt={product.name}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-zinc-700 hover:border-[#d3a96f] transition"
              >
                <ChevronLeft size={20} className="text-[#d3a96f]" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-zinc-700 hover:border-[#d3a96f] transition"
              >
                <ChevronRight size={20} className="text-[#d3a96f]" />
              </button>
            </>
          )}

          {/* Dots */}
          {product.images.length > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === index ? "bg-[#d3a96f]" : "bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ================= RIGHT — PRODUCT INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#d3a96f] mb-4">
            {product.name}
          </h1>

          {product.subtitle && (
            <p className="text-sm text-zinc-400 mb-6">
              {product.subtitle}
            </p>
          )}

          <p className="text-zinc-300 leading-relaxed mb-10">
            {product.description}
          </p>

          {/* Athlete / Usage Image */}
          <div className="relative h-[220px] sm:h-[300px] rounded-2xl overflow-hidden mb-12">
            <img
              src="/images/athlete2.png"
              alt="Evolion product in training use"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          </div>

          {/* Benefits */}
          <ul className="space-y-4 mb-14">
            {product.benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-zinc-300"
              >
                <CheckCircle size={18} className="text-[#d3a96f] mt-0.5" />
                {benefit}
              </li>
            ))}
          </ul>

          {/* ================= CONTACT ================= */}
          <div className="rounded-2xl bg-[#111] border border-zinc-800 p-8">
            <h3 className="text-xl font-semibold text-[#d3a96f] mb-6">
              Orders & Enquiries
            </h3>

            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#d3a96f]" />
                <a
                  href="mailto:workinganabolic@gmail.com"
                  className="hover:text-[#d3a96f] transition"
                >
                  workinganabolic@gmail.com
                </a>
              </div>

              {/* <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#d3a96f]" />
                <a
                  href="tel:+919899646864"
                  className="hover:text-[#d3a96f] transition"
                >
                  +91 98996 46864
                </a>
              </div> */}

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#d3a96f]" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
