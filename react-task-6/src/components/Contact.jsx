import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[linear-gradient(to_bottom,#18261E,#2F4636)] py-20 text-[#FDF5E6] overflow-hidden"
    >
      {/* Decorative Circles - Same style as Hero */}
      <div className="absolute w-[300px] h-[300px] bg-[#E9F5EF] rounded-full opacity-10 top-[-120px] left-[-100px]"></div>
      <div className="absolute w-[250px] h-[250px] bg-[#F4E3B2] rounded-full opacity-10 bottom-[-100px] right-[-80px]"></div>
      <div className="absolute w-[200px] h-[200px] bg-[#D7E8D2] rounded-full opacity-10 top-[50%] left-[15%]"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold mb-6 relative">
          Contact Me
          <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
        </h2>

        {/* Info */}
        <p className="mb-8 text-lg opacity-90">
          Phone: <span className="font-semibold">03327341134</span> | Email:{" "}
          <span className="font-semibold">ramlahsalman@gmail.com</span>
        </p>

        {/* Button */}
        <a
          href="https://linkedin.com/in/ramlah-salman-01aa17336"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#F4A300] text-[#18261E] px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
        >
          Connect on LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
