"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  ShieldCheck,
  ScanLine,
  AlertTriangle,
} from "lucide-react";

export default function Authenticate() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE =
    "https://script.google.com/macros/s/AKfycbwlWmVGG6v9jAuTcdaCNMr_sqTnDfbVeXdTMsTJLjgSlivh-rNTpnkhqwNvlPCPcZAy/exec";
  const SECRET_KEY = "asdfghjkl";

  const handleCheck = async () => {
    if (!input.trim()) return setResult("empty");

    setLoading(true);
    setResult(null);

    try {
      const url = `${API_BASE}?barcode=${encodeURIComponent(
        input.trim().toLowerCase()
      )}&key=${encodeURIComponent(SECRET_KEY)}`;

      const res = await fetch(url);
      const data = await res.json();

      setResult(data.success ? "valid" : "invalid");
    } catch {
      setResult("invalid");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0b0b0b] text-zinc-200 overflow-hidden">
      {/* Ambient depth */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#d3a96f]/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-320px] right-[-320px] w-[520px] h-[520px] bg-[#d3a96f]/10 rounded-full blur-[160px]" />

      {/* ================= HERO ================= */}
      <section className="relative max-w-6xl mx-auto px-5 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-light tracking-wide text-[#d3a96f]"
        >
          Product Authentication
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-6 max-w-3xl mx-auto text-sm sm:text-base text-zinc-400 leading-relaxed"
        >
          Evolion’s secure authentication system helps customers and professionals
          verify the originality of our products and protect against counterfeit
          distribution.
        </motion.p>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck />,
              title: "Secure Database",
              text: "Codes are validated against internal manufacturing records.",
            },
            {
              icon: <ScanLine />,
              title: "Unique Per Unit",
              text: "Each genuine product carries a single-use authentication code.",
            },
            {
              icon: <AlertTriangle />,
              title: "Counterfeit Detection",
              text: "Helps identify unauthorized or fake products in circulation.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-[#111] border border-zinc-800 p-6 text-center"
            >
              <div className="flex justify-center mb-4 text-[#d3a96f]">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium text-zinc-100 mb-2">
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
      <section className="relative max-w-7xl mx-auto px-5 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT — HOW IT WORKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-zinc-400 leading-relaxed"
        >
          <h2 className="text-lg font-medium text-zinc-100 mb-6">
            How Authentication Works
          </h2>

          <ol className="space-y-4 list-decimal list-inside">
            <li>Locate the authentication code printed on the product packaging.</li>
            <li>Enter the code exactly as displayed in the verification field.</li>
            <li>
              The system checks the code against Evolion’s secure manufacturing
              database.
            </li>
          </ol>

          <p className="mt-10 text-xs text-zinc-500 max-w-md">
            This verification system is intended as an authenticity aid.
            Authentication results are generated using internal production
            records and are not a substitute for professional guidance.
          </p>
        </motion.div>

        {/* RIGHT — VERIFICATION PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-zinc-800 bg-[#0f0f0f] p-8 sm:p-10"
        >
          <h2 className="text-lg font-medium mb-8 text-zinc-100">
            Verify Authentication Code
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-zinc-500 mb-3">
                Authentication Code
              </label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter code exactly as shown"
                className="w-full bg-transparent border border-zinc-700 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#d3a96f]"
              />
            </div>

            <button
              onClick={handleCheck}
              disabled={loading}
              className="inline-flex items-center justify-center w-full border border-[#d3a96f] px-8 py-3 text-sm tracking-wide text-[#d3a96f] hover:bg-[#d3a96f] hover:text-black transition disabled:opacity-50"
            >
              {loading ? "Verifying…" : "Verify Product"}
            </button>
          </div>

          {/* RESULT */}
          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={result}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-10"
              >
                {result === "valid" && (
                  <div className="flex gap-4 text-sm">
                    <CheckCircle size={22} className="text-green-400 mt-0.5" />
                    <div>
                      <p className="text-green-400 font-medium">
                        Authentication Successful
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">
                        This product is confirmed as genuine.
                      </p>
                    </div>
                  </div>
                )}

                {result === "invalid" && (
                  <div className="flex gap-4 text-sm">
                    <XCircle size={22} className="text-red-400 mt-0.5" />
                    <div>
                      <p className="text-red-400 font-medium">
                        Authentication Failed
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">
                        The entered code is invalid or not recognized.
                      </p>
                    </div>
                  </div>
                )}

                {result === "empty" && (
                  <p className="text-xs text-zinc-500">
                    Please enter an authentication code to continue.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
