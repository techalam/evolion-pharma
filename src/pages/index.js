import { motion } from "framer-motion";
import Link from "next/link";
import Products from "../utils/products.json";
import { ProductCard } from "@/components/ProductCard";
import {
  Microscope,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Factory,
  FlaskConical,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-zinc-100 overflow-hidden">
      {/* ================= HERO ================= */}
      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center overflow-hidden min-h-[85vh] md:min-h-[90vh]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-top"
          style={{
            backgroundImage: "url('/images/bg-img.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_45%,rgba(0,0,0,0.35)_75%,rgba(0,0,0,0.15)_100%)]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-5 sm:px-6 text-center">
          {/* Pre-heading */}
          <span className="inline-block mb-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#d3a96f] font-semibold">
            Clinically Formulated Supplements
          </span>

          {/* Heading */}
          <h1 className="text-[2.2rem] leading-tight sm:text-4xl md:text-6xl xl:text-7xl font-extrabold mb-5">
            Evidence-Driven <br />
            <span className="text-[#d3a96f]">Performance Nutrition</span>
          </h1>

          {/* Description */}
          <p className="text-zinc-300 text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Precision-formulated nutraceuticals supporting muscle growth,
            recovery, metabolic health, and long-term performance — without
            unnecessary ingredients.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 overflow-x-auto snap-x snap-mandatory mb-8 px-1 sm:justify-center scrollbar-hide">
            {[
              "Muscle Growth",
              "Recovery",
              "Endurance",
              "Metabolic Health",
              "Daily Wellness",
            ].map((item, i) => (
              <span
                key={i}
                className="snap-start shrink-0 whitespace-nowrap px-4 py-2 text-xs sm:text-sm rounded-full border border-[#d3a96f]/40 text-[#d3a96f] bg-black/30"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#e3c084] to-[#c89b5e] text-black font-semibold rounded-xl shadow-lg transition active:scale-[0.98]"
            >
              Explore Products
            </Link>

            <Link
              href="/about-us"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#d3a96f] text-[#d3a96f] rounded-xl transition hover:bg-[#d3a96f] hover:text-black"
            >
              Our Philosophy
            </Link>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-zinc-400">
            <span>GMP-Aligned Manufacturing</span>
            <span>Quality-Tested Ingredients</span>
            <span>Trusted by Professionals</span>
          </div>
        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <InfoCard
            icon={<Activity />}
            title="Performance Nutrition"
            text="Purpose-built nutraceutical formulations supporting strength, endurance, recovery, and metabolic efficiency."
          />
          <InfoCard
            icon={<Microscope />}
            title="Research-Driven Formulation"
            text="Every ingredient and dosage is evaluated through scientific literature, safety data, and functional relevance."
          />
          <InfoCard
            icon={<ShieldCheck />}
            title="Quality & Compliance"
            text="Manufactured under controlled environments with documented testing, traceability, and compliance standards."
          />
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center">
          <div className="relative h-[260px] sm:h-[380px] rounded-2xl overflow-hidden">
            <img
              src="/images/athlete.png"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4 text-[#d3a96f]">
              Built for Real Training
            </h3>
            <p className="text-zinc-400 mb-4">
              Evolion supplements are designed to support serious training
              demands — before, during, and after workouts.
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Pre-workout and recovery support</li>
              <li>• Clinically structured dosing</li>
              <li>• Long-term usability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHY EVOLION ================= */}
      <section className="py-20 px-6 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Evolion Pharma
          </h2>
          <p className="text-zinc-400 max-w-3xl mb-12">
            Built for people who care about what they put into their body — and
            expect results without compromise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Scientifically Structured",
                desc: "No random blends or inflated ingredient lists — only what works.",
              },
              {
                title: "Regulatory-Aware",
                desc: "Developed with nutraceutical safety and compliance awareness.",
              },
              {
                title: "Traceable Sourcing",
                desc: "Ingredients sourced from verified suppliers with batch documentation.",
              },
              {
                title: "Transparent Guidance",
                desc: "Clear instructions so users know exactly how to use each product.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 bg-[#161616] border border-zinc-800 rounded-xl"
              >
                <CheckCircle2 className="text-[#d3a96f] mb-4" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* TEXT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Manufacturing & Quality Standards
      </h2>

      <p className="text-zinc-400 max-w-xl leading-relaxed mb-10">
        Evolion partners with qualified manufacturing facilities operating
        under controlled environments. Our approach prioritizes batch
        consistency, raw-material traceability, and controlled processing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <QualityItem
          icon={<Factory />}
          text="Controlled manufacturing environments"
        />
        <QualityItem
          icon={<FlaskConical />}
          text="Batch-wise quality testing"
        />
        <QualityItem
          icon={<ShieldCheck />}
          text="Documented audits & quality checks"
        />
      </div>
    </div>

    {/* IMAGE */}
    <div className="relative h-[260px] sm:h-[380px] rounded-2xl overflow-hidden">
      <img
        src="/images/lab.png"
        alt="Evolion manufacturing and quality control"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent" />
    </div>

  </div>
</section>


      {/* ================= MANUFACTURING ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Manufacturing & Quality Standards
        </h2>

        <p className="text-zinc-400 max-w-4xl leading-relaxed mb-10">
          Evolion Pharma partners with qualified manufacturing facilities
          operating under controlled environments. Our focus remains on
          consistency, traceability, and responsible production.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <QualityItem
            icon={<Factory />}
            text="Controlled manufacturing environments"
          />
          <QualityItem
            icon={<FlaskConical />}
            text="Batch-wise quality testing"
          />
          <QualityItem
            icon={<ShieldCheck />}
            text="Documented audits & quality checks"
          />
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-[#101010] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Responsible Product Philosophy
          </h2>
          <p className="text-zinc-400 max-w-4xl leading-relaxed mb-10">
            More ingredients don’t mean better results. Our products are
            designed to support long-term usage, clarity, and effectiveness —
            not trends.
          </p>

          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-3">
              <CheckCircle2 className="text-[#d3a96f]" />
              Evidence-based ingredient frameworks
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-[#d3a96f]" />
              Clear dosage and storage recommendations
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-[#d3a96f]" />
              Designed to complement professional medical advice
            </li>
          </ul>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Our Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Research & Review",
                desc: "Scientific screening and safety evaluation.",
              },
              {
                title: "Formulation Design",
                desc: "Balanced dosing for performance and safety.",
              },
              {
                title: "Manufacturing",
                desc: "Controlled production with quality checks.",
              },
              {
                title: "Validation & Release",
                desc: "Final review before market availability.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative p-6 bg-[#141414] border border-zinc-800 rounded-xl"
              >
                <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#d3a96f] text-black flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <h4 className="font-semibold mt-6 mb-2">{step.title}</h4>
                <p className="text-zinc-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Product Portfolio
          </h2>
          <p className="text-zinc-400 mb-12 max-w-3xl">
            A focused range of nutraceutical products designed for modern
            performance, recovery, and wellness needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Products.slice(0, 6).map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <ProductCard
                  image={product.images[0]}
                  title={product.name}
                  name={product.title}
                />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block px-10 py-4 border border-[#d3a96f] text-[#d3a96f] rounded-xl hover:bg-[#d3a96f] hover:text-black transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex items-start gap-4 mb-6">
          <Users className="text-[#d3a96f]" />
          <p className="text-zinc-400 max-w-4xl leading-relaxed">
            Evolion Pharma products are intended for informed consumers and
            should be used responsibly as part of a balanced lifestyle.
          </p>
        </div>

        <p className="text-sm text-zinc-500 max-w-4xl leading-relaxed">
          Disclaimer: Nutraceutical products are not intended to diagnose,
          treat, cure, or prevent any disease. Always consult a qualified
          healthcare professional before use.
        </p>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function InfoCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-8 rounded-2xl bg-[#1a1a1a] border border-zinc-800"
    >
      <div className="text-[#d3a96f] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}

function QualityItem({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex items-center gap-4 p-6 rounded-xl bg-[#161616] border border-zinc-800"
    >
      <div className="text-[#d3a96f]">{icon}</div>
      <p className="text-zinc-300 text-sm">{text}</p>
    </motion.div>
  );
}
