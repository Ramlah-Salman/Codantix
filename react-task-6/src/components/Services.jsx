import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";

const services = [
  { title: "Web Development", desc: "Modern responsive websites and apps", icon: <FaCode /> },
  { title: "UI/UX Design", desc: "Creative and user-focused designs", icon: <FaPaintBrush /> },
  { title: "SEO Optimization", desc: "Boost your online presence", icon: <FaChartLine /> },
];

export default function Services() {
  return (
    <section className="py-20 bg-[linear-gradient(to_bottom,#FDF5E6,#EDE8DC)]">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold mb-12 text-[#25392B] relative">
          Services
          <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const bgColor = index === 1 ? "#ECE6DA" : "#F8F6F1";

            return (
              <motion.div
                key={index}
                className="rounded-3xl p-8 shadow-lg hover:shadow-[0_8px_24px_rgba(244,163,0,0.3)] transition text-center"
                style={{ backgroundColor: bgColor }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F4A300] text-white text-3xl shadow-md">
                  {service.icon}
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-[#25392B] mb-3">{service.title}</h3>
                {/* Description */}
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
