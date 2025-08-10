import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaPalette, FaShieldAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
};

export default function Features() {
  const items = [
    { icon: <FaRocket className="w-8 h-8 text-cyan-300" />, title: "Fast & Reliable", desc: "Optimized builds and fast loading UX." },
    { icon: <FaPalette className="w-8 h-8 text-pink-300" />, title: "Design That Stands Out", desc: "Modern glassmorphism & purposeful typography." },
    { icon: <FaShieldAlt className="w-8 h-8 text-green-300" />, title: "Secure By Default", desc: "Best practices and simple maintainability." },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Aurora Labs</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-gray-800/70 backdrop-blur-md border border-gray-700 shadow-xl text-left hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 rounded-lg bg-gray-700/50">{it.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{it.title}</h3>
                  <p className="text-gray-300 mt-1">{it.desc}</p>
                </div>
              </div>
              <div className="mt-3">
                <a href="#contact" className="text-sm font-semibold text-cyan-400 hover:underline">Talk to us →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
