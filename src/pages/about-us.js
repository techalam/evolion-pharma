import { motion } from "framer-motion";
import {
  FlaskRound,
  ShieldCheck,
  Zap,
  Users,
  Factory,
  Microscope,
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative px-5 py-20 sm:py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
        >
          About <span className="text-[#d3a96f]">Evolion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed"
        >
          Evolion is a performance-driven nutraceutical brand built at the
          intersection of clinical science and modern fitness — focused on
          precision, consistency, and long-term results.
        </motion.p>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="max-w-7xl mx-auto px-5 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden"
        >
          <img
            src="/images/evolion.png"
            alt="Evolion Research"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#d3a96f] mb-5">
            Our Foundation
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4 text-sm sm:text-base">
            Evolion was created in response to an industry crowded with
            over-promising labels, under-dosed formulas, and trend-driven
            supplements. We believe performance nutrition deserves the same
            discipline and responsibility as pharmaceutical development.
          </p>

          <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
            Every Evolion product is designed with purpose — balancing efficacy,
            safety, bioavailability, and long-term use. Nothing is added for
            marketing appeal. Nothing is removed for cost-cutting.
          </p>
        </motion.div>
      </section>

      {/* ================= WHAT WE STAND FOR ================= */}
      <section className="py-16 sm:py-24 px-5 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[#d3a96f]">
            What We Stand For
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Our philosophy is built on clarity, responsibility, and measurable
            outcomes — not hype.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FlaskRound size={28} />,
              title: "Science-Led Formulation",
              text: "Ingredient selection and dosing guided by research, not trends.",
            },
            {
              icon: <ShieldCheck size={28} />,
              title: "Uncompromising Quality",
              text: "Strict quality checks, traceability, and manufacturing controls.",
            },
            {
              icon: <Zap size={28} />,
              title: "Performance First",
              text: "Designed to support strength, recovery, endurance, and consistency.",
            },
            {
              icon: <Users size={28} />,
              title: "User Responsibility",
              text: "Clear guidance so users understand exactly how to use each product.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-[#111] border border-zinc-800 p-6 text-center"
            >
              <div className="flex justify-center mb-4 text-[#d3a96f]">
                {item.icon}
              </div>
              <h3 className="text-base font-medium mb-2 text-zinc-100">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE BUILD PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-5 py-16 sm:py-24">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#d3a96f]">
            How Evolion Products Are Built
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            A disciplined, transparent development process — from concept to
            consumer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Microscope />,
              title: "Research & Evaluation",
              text: "Scientific literature review, ingredient safety assessment, and functional validation.",
            },
            {
              icon: <Factory />,
              title: "Manufacturing & Testing",
              text: "Produced in controlled facilities with batch-wise testing and documentation.",
            },
            {
              icon: <ShieldCheck />,
              title: "Quality Validation",
              text: "Final audits, stability checks, and release approval before distribution.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-[#111] border border-zinc-800 p-6"
            >
              <div className="text-[#d3a96f] mb-4">{step.icon}</div>
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-[#0e0e0e] py-16 sm:py-24 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-[#111] border border-zinc-800 p-7">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#d3a96f] mb-4">
              Our Mission
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              To deliver performance-focused nutraceuticals that meet
              professional standards, prioritize user safety, and earn trust
              through consistency — not claims.
            </p>
          </div>

          <div className="rounded-2xl bg-[#111] border border-zinc-800 p-7">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#d3a96f] mb-4">
              Our Vision
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              To establish Evolion as a globally respected name in precision
              nutrition — where formulation integrity defines the brand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
