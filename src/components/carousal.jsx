"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CardSwipeCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 380, height: 440, gap: 45 });

  // 🔹 Auto-adjust size based on screen width
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) {
        setDimensions({ width: 240, height: 280, gap: 25 }); // mobile
      } else if (screenWidth < 768) {
        setDimensions({ width: 300, height: 340, gap: 30 }); // tablet
      } else if (screenWidth < 1024) {
        setDimensions({ width: 340, height: 400, gap: 35 }); // small laptop
      } else {
        setDimensions({ width: 380, height: 440, gap: 45 }); // desktop
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { width, height, gap } = dimensions;
  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  const swipeLeft = () => setIndex(nextIndex);
  const swipeRight = () => setIndex(prevIndex);

  return (
    <div
      className="w-full flex justify-center items-center mb-8 py-4 select-none overflow-hidden"
      style={{ perspective: 1200 }}
    >
      <div
        className="relative flex justify-center items-center"
        style={{ width: width + gap * 4, height }}
      >
        {/* Previous Card */}
        <motion.img
          key={"prev" + prevIndex}
          src={images[prevIndex]}
          alt={`Prev ${prevIndex}`}
          className="absolute top-0 rounded-2xl object-cover border border-zinc-200 bg-[#f7f7f7] shadow"
          style={{
            width,
            height,
            left: gap,
            zIndex: 1,
          }}
          initial={{ scale: 0.85, x: -gap, rotateY: 10, opacity: 0.6 }}
          animate={{ scale: 0.85, x: -gap, rotateY: 10, opacity: 0.6 }}
          transition={{ duration: 0.4 }}
        />

        {/* Center Card */}
        <motion.img
          key={"center" + index}
          src={images[index]}
          alt={`Center ${index}`}
          className="absolute top-0 rounded-3xl object-cover border border-zinc-100 shadow"
          style={{
            width,
            height,
            left: gap * 2,
            zIndex: 2,
          }}
          initial={{ scale: 0.95, opacity: 1 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          dragElastic={0.5}
          onDragEnd={(e, info) => {
            const threshold = 50;
            if (info.offset.x < -threshold) swipeLeft();
            else if (info.offset.x > threshold) swipeRight();
          }}
        />

        {/* Next Card */}
        <motion.img
          key={"next" + nextIndex}
          src={images[nextIndex]}
          alt={`Next ${nextIndex}`}
          className="absolute top-0 rounded-2xl object-cover border border-zinc-200 bg-[#f7f7f7] shadow"
          style={{
            width,
            height,
            left: gap * 3,
            zIndex: 1,
          }}
          initial={{ scale: 0.85, x: gap, rotateY: -10, opacity: 0.6 }}
          animate={{ scale: 0.85, x: gap, rotateY: -10, opacity: 0.6 }}
          transition={{ duration: 0.4 }}
        />

      </div>
    </div>
  );
}
