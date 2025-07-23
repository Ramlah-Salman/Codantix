import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section className="relative bg-[linear-gradient(to_bottom,#FDF5E6,#E9F5EF)] py-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute w-56 h-56 bg-[#E9F5EF] rounded-full opacity-20 top-[-50px] left-[-80px]"></div>
      <div className="absolute w-40 h-40 bg-[#F4E3B2] rounded-full opacity-20 bottom-[-50px] right-[-60px]"></div>

      <motion.div
        id="about"
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading with Underline */}
        <h2 className="text-4xl font-serif font-bold mb-6 text-[#25392B] relative inline-block">
          About Me
          <span className="absolute left-0 bottom-0 w-full h-2 bg-[#F4A300] opacity-50 rounded"></span>
        </h2>

        {/* Text */}
        <p className="text-lg leading-relaxed text-gray-700 bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
          A dedicated and detail-oriented Software Engineering student with a passion for technology, coding, and continuous learning.
          Strong teamwork, communication, and adaptability skills. Seeking opportunities to apply technical knowledge and gain hands-on experience.
        </p>
      </motion.div>
    </section>
  );
}
