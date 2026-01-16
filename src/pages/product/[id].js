"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import Products from "../../utils/products.json";
import { useRouter } from "next/router";


export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = Products.find((p) => p.id === Number(id));

  const [index, setIndex] = useState(0);

  if (!product) {
    return (
      <main className="flex items-center justify-center min-h-screen text-zinc-600 text-xl">
        Product not found.
      </main>
    );
  }

  const nextImage = () => setIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50 text-zinc-900 overflow-hidden">
      <section className="max-w-7xl mx-auto py-12 px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left - Image Carousel */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="overflow-hidden rounded-3xl shadow-lg w-full aspect-[4/3] relative border-zinc-100">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <img
                src={product.images[index]}
                alt={product.name}
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-2 bg-white/70 backdrop-blur-md rounded-full shadow-md hover:bg-white transition"
          >
            <ChevronLeft className="text-emerald-700" size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 p-2 bg-white/70 backdrop-blur-md rounded-full shadow-md hover:bg-white transition"
          >
            <ChevronRight className="text-emerald-700" size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 flex gap-2 justify-center w-full">
            {product.images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  i === index ? "bg-emerald-600" : "bg-zinc-300"
                }`}
              />
            ))}
          </div>

          {/* Floating Glow */}
          <motion.div
            className="absolute -z-10 blur-3xl opacity-40 bg-emerald-400 rounded-full w-[300px] h-[300px] top-20 left-10"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </div>

        {/* Right - Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 mb-3">
            {product.name}
          </h1>
          <p className="text-lg text-zinc-600 mb-6">{product.subtitle}</p>
          <p className="text-zinc-700 leading-relaxed mb-8">{product.description}</p>

          <ul className="space-y-3 mb-12">
            {product.benefits.map((benefit, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-zinc-700"
              >
                <CheckCircle className="text-emerald-600" size={20} />
                {benefit}
              </motion.li>
            ))}
          </ul>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-lg border border-zinc-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">
              Contact for Orders & Enquiries
            </h3>

            <div className="flex flex-col gap-4 text-zinc-700">
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-600" size={20} />
                <a href="mailto:workinganabolic@gmail.com" className="hover:text-emerald-600 transition">
                  workinganabolic@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-600" size={20} />
                <a href="tel:+919899646864" className="hover:text-emerald-600 transition">
                  +91 98996 46864
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-600" size={20} />
                <p>Delhi, India</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
