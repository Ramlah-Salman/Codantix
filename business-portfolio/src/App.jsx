import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductShowcase from "./components/ProductShowcase";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-sansant dark:bg-gray-900">
      {/* keep some top padding so fixed navbar doesn't overlap content */}
      <div className="pt-20">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <ProductShowcase />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
