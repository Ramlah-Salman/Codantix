import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-br from-gray-900 to-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="mb-3">© {new Date().getFullYear()} Aurora Labs — Crafted with care</p>
        <div className="text-sm">
          <a className="mx-2 hover:text-white" href="#hero">Home</a>
          <a className="mx-2 hover:text-white" href="#products">Services</a>
          <a className="mx-2 hover:text-white" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
