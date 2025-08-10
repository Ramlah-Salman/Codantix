import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-6 p-10 rounded-3xl"
      >
        {/* layered glass panels for depth */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-500/6 via-indigo-500/4 to-transparent blur-[36px] pointer-events-none"></div>

        <div className="relative p-8 rounded-2xl bg-white/6 backdrop-blur-xl border border-white/8 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            We craft <span className="text-cyan-300">beautiful</span> and <span className="text-indigo-300">usable</span> web experiences.
          </h1>
          <p className="max-w-2xl text-gray-200 mb-6">
            Design-forward websites, fast performance, and delightful interactions — built with care, shipped with confidence.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400 text-black font-semibold shadow hover:scale-105 transition">
              See Services
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition">
              Let's Talk
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
