import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const GLASS = "backdrop-blur-lg border border-white/10";

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`${GLASS} fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl p-3 rounded-2xl z-50 shadow-xl`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between gap-4 px-3">
        <a href="#hero" className="flex items-center gap-2 text-white">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-300 to-indigo-500 flex items-center justify-center text-black font-bold">A</span>
          <div className="font-extrabold tracking-tight text-lg md:text-xl">
            <span className="text-cyan-300">Aurora</span>
            <span className="text-gray-200"> Labs</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-gray-200">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#features" className="hover:text-white transition">Why</a>
          <a href="#products" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center">
          <button
            className="md:hidden p-1 text-2xl text-gray-200"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden mt-3 transition-[max-height] duration-300 overflow-hidden ${open ? "max-h-48" : "max-h-0"}`}>
        <ul className="flex flex-col gap-3 px-3 pb-3 text-gray-200">
          <li><a href="#hero" onClick={() => setOpen(false)} className="block py-2">Home</a></li>
          <li><a href="#features" onClick={() => setOpen(false)} className="block py-2">Why</a></li>
          <li><a href="#products" onClick={() => setOpen(false)} className="block py-2">Services</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)} className="block py-2">Contact</a></li>
        </ul>
      </div>
    </motion.header>
  );
}
