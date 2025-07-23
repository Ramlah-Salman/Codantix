import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaGamepad } from "react-icons/fa";

const projects = [
  { title: "Phone Book App", desc: "Java Swing-based app for storing contacts", type: "Java", icon: <FaCode /> },
  { title: "All-Rounder School Platform", desc: "Figma wireframes and prototypes", type: "UI/UX", icon: <FaPaintBrush /> },
  { title: "Tic Tac Toe Game", desc: "Console-based game in Java", type: "Game", icon: <FaGamepad /> },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[linear-gradient(to_bottom,#1B2A22,#25392B)] py-20 text-[#FDF5E6] overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute w-[300px] h-[300px] bg-[#E9F5EF] rounded-full opacity-10 top-[-120px] left-[-100px]"></div>
      <div className="absolute w-[250px] h-[250px] bg-[#F4E3B2] rounded-full opacity-10 bottom-[-100px] right-[-80px]"></div>
      <div className="absolute w-[200px] h-[200px] bg-[#D7E8D2] rounded-full opacity-10 top-[50%] left-[20%]"></div>

      {/* Heading */}
      <h2 className="text-4xl font-serif font-bold text-center mb-12 relative z-10">
        Projects
        <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-8 shadow-lg hover:shadow-[0_8px_24px_rgba(244,163,0,0.4)] hover:scale-105 transition text-center"
            style={{ backgroundColor: "#F8F6F1" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-[#25392B] text-[#F4A300] shadow-md">
                {p.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#25392B] mb-3">{p.title}</h3>
            <p className="text-gray-700 mb-6">{p.desc}</p>

            {/* Button */}
            <a
              href="#"
              className="inline-block bg-[#F4A300] text-[#25392B] px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              View Details
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
