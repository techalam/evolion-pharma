"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Users,
  FlaskRound,
} from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const result = await emailjs.send(
        "service_65yhktk",
        "template_32vr81h",
        formData,
        "R4BjEA3Pi3Plvavxn"
      );

      if (result.text === "OK") {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0b0b0b] text-zinc-200 overflow-hidden">

      {/* Ambient accents */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#d3a96f]/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-300px] right-[-300px] w-[520px] h-[520px] bg-[#d3a96f]/10 rounded-full blur-[160px]" />

      {/* ================= HERO ================= */}
      <section className="relative px-5 pt-28 pb-16 sm:pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-light tracking-widest text-[#d3a96f]"
        >
          Contact Evolion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-5 text-sm sm:text-base text-zinc-400 max-w-3xl mx-auto leading-relaxed"
        >
          For corporate inquiries, distribution opportunities, formulation
          discussions, or general brand communication. Our team reviews all
          submissions during standard business hours.
        </motion.p>
      </section>

      {/* ================= WHO SHOULD CONTACT ================= */}
      <section className="max-w-6xl mx-auto px-5 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Users />,
              title: "Corporate & Distribution",
              text: "Retailers, distributors, and institutional partners.",
            },
            {
              icon: <FlaskRound />,
              title: "Product & Formulation",
              text: "Questions related to ingredients, usage, or formulation philosophy.",
            },
            {
              icon: <ShieldCheck />,
              title: "Brand & Compliance",
              text: "Regulatory, documentation, or brand-related discussions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-[#111] border border-zinc-800 p-6 text-center"
            >
              <div className="flex justify-center mb-4 text-[#d3a96f]">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium mb-2 text-zinc-100">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative max-w-7xl mx-auto px-5 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-xl font-medium text-[#d3a96f] tracking-wide mb-4">
              Corporate Contact Information
            </h2>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Evolion operates with a structured communication process. Please
              ensure your message includes relevant context for faster review.
            </p>
          </div>

          <div className="space-y-6 text-sm text-zinc-300">
            <div className="flex items-start gap-4">
              <Mail className="text-[#d3a96f] mt-1" size={18} />
              <div>
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:workinganabolic@gmail.com"
                  className="hover:text-[#d3a96f] transition"
                >
                  workinganabolic@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#d3a96f] mt-1" size={18} />
              <div>
                <p className="font-medium text-white">Phone</p>
                <a
                  href="tel:+919899646864"
                  className="hover:text-[#d3a96f] transition"
                >
                  +91 98996 46864
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-[#d3a96f] mt-1" size={18} />
              <div>
                <p className="font-medium text-white">Location</p>
                <p className="text-zinc-400">Delhi, India</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
            Medical inquiries should be addressed to qualified healthcare
            professionals. Evolion products are intended for responsible,
            informed use.
          </p>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111] border border-zinc-800 p-8 sm:p-10 rounded-2xl space-y-6"
        >
          <h2 className="text-lg font-medium text-[#d3a96f] tracking-wide mb-2">
            Send a Message
          </h2>
          <p className="text-sm text-zinc-400 mb-4">
            Please provide clear and complete details to help us respond
            efficiently.
          </p>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 text-sm bg-[#0b0b0b] border border-zinc-700 text-zinc-200 rounded-lg focus:outline-none focus:border-[#d3a96f]"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 text-sm bg-[#0b0b0b] border border-zinc-700 text-zinc-200 rounded-lg focus:outline-none focus:border-[#d3a96f]"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 text-sm bg-[#0b0b0b] border border-zinc-700 text-zinc-200 rounded-lg focus:outline-none focus:border-[#d3a96f] resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-3 px-8 py-3 text-sm font-medium tracking-wide border border-[#d3a96f] text-[#d3a96f] hover:bg-[#d3a96f] hover:text-black transition disabled:opacity-50"
          >
            {loading ? "Sending…" : "Submit Message"}
            <Send size={16} />
          </button>

          {success && (
            <p className="text-sm text-green-400 mt-2">
              Your message has been sent successfully.
            </p>
          )}
        </motion.form>
      </section>
    </main>
  );
}
