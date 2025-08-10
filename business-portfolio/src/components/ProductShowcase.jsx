import React from "react";
import { motion } from "framer-motion";
import { FaBox } from "react-icons/fa";

const projects = [
  { title: "Portfolio Website", subtitle: "Personal branding & case studies", img: "" },
  { title: "E-Commerce Store", subtitle: "Fast shopping experience", img: "" },
  { title: "Landing Page", subtitle: "Conversion-focused design", img: "" },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Services we ship</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12 }}
              className="relative p-6 rounded-2xl bg-white/6 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden hover:translate-y-[-6px] hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-300 to-indigo-400 text-black">
                  <FaBox />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-300 text-sm">{p.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">We design, build, and ship. Clean code, clear goals, real results.</p>

              <div className="flex gap-3">
                <a className="px-4 py-2 rounded-full bg-cyan-300 text-black font-semibold hover:scale-105 transition">Learn</a>
                <a className="px-4 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition">Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
