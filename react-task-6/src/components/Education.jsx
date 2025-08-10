import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  { year: "2023 - 2027", degree: "BS Software Engineering", place: "Karachi University - UBIT" },
  { year: "2022", degree: "Intermediate (Computer Science)", place: "Sir Syed Govt Girls College" },
  { year: "2020", degree: "Matriculation (Computer Science)", place: "CharterHouse Public School" },
];

// card colors 
const cardColors = ["#F8F6F1", "#ECE6DA", "#F5E9D3"];

export default function Education() {
  return (
    <section className="relative bg-[linear-gradient(to_bottom,#18261E,#2F4636)] py-16 text-[#FDF5E6] overflow-hidden">
      
      {/* Circles */}
      <div className="absolute w-[320px] h-[320px] bg-[#E9F5EF] rounded-full opacity-10 top-[-120px] left-[-100px]"></div>
      <div className="absolute w-[260px] h-[260px] bg-[#F4E3B2] rounded-full opacity-10 bottom-[-100px] right-[-80px]"></div>
      <div className="absolute w-[200px] h-[200px] bg-[#D7E8D2] rounded-full opacity-10 top-[45%] left-[20%]"></div>

      <motion.div
        id="education"
        className="max-w-4xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-center mb-10 relative">
          Education
          <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-[#F4A300] pl-6 space-y-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="relative rounded-xl p-6 shadow-lg hover:shadow-[0_8px_24px_rgba(244,163,0,0.3)] transition"
              style={{ backgroundColor: cardColors[i % cardColors.length] }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-8 top-6 w-6 h-6 bg-[#F4A300] rounded-full flex items-center justify-center text-white text-xs font-bold">
                <FaGraduationCap />
              </div>

              {/* Details */}
              <span className="inline-block bg-[#25392B] text-[#F4A300] text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {edu.year}
              </span>
              <h3 className="text-xl font-bold text-[#25392B] mb-2">{edu.degree}</h3>
              <p className="text-gray-700">{edu.place}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
