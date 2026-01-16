"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Products from "../utils/products.json";
import Link from "next/link";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = Products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="relative min-h-screen bg-[#0b0b0b] text-zinc-100 px-6 sm:px-10 py-20 overflow-hidden">
      {/* Ambient Gold Depth */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#d3a96f]/20 rounded-full blur-[140px]" /> */}
      <div className="absolute bottom-[-300px] right-[-300px] w-[600px] h-[600px] bg-[#d3a96f]/10 rounded-full blur-[160px]" />

      {/* ================= PAGE HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-7xl mx-auto text-center mb-4"
      >
        <span className="uppercase tracking-widest text-sm text-[#d3a96f] font-semibold">
          Product Portfolio
        </span>

        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">
          Precision-Crafted
          <br />
          <span className="text-[#d3a96f]">Nutraceutical Formulations</span>
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Explore our range of scientifically structured nutraceutical products,
          developed with an emphasis on safety, quality, and consistency.
        </p>
      </motion.div>

      <img
        src="/images/product-lineup.png"
        alt="Evolion nutraceutical product lineup"
        className="w-full max-w-6xl mx-auto rounded-2xl"
      />

      {/* ================= SEARCH ================= */}
      <div className="relative z-10 max-w-xl mx-auto mb-20">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="
            w-full pl-11 pr-5 py-4 rounded-xl
            bg-[#141414] border border-zinc-800
            text-zinc-200 placeholder-zinc-500
            focus:outline-none focus:border-[#d3a96f]
            transition
          "
        />
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <motion.div
        layout
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {filtered.length > 0 ? (
          filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative h-[480px] overflow-hidden cursor-pointer rounded-2xl"
            >
              {/* Background Image */}
              <motion.img
                src={product.images[0]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Dark Shade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-zinc-300">
                  Nutraceutical
                </span>

                <h3 className="text-2xl font-semibold text-[#d3a96f] leading-tight">
                  {product.name}
                </h3>

                <p className="text-sm text-zinc-200 leading-relaxed line-clamp-2 max-w-sm">
                  {product.title}
                </p>

                <Link
                  href={`/product/${product.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-white font-medium"
                >
                  View Product →
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-zinc-500 text-lg"
          >
            No products match your search.
          </motion.p>
        )}
      </motion.div>
    </main>
  );
}
