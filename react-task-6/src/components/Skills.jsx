import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase, FaFigma } from "react-icons/fa";

const codingSkills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
];

const tools = [
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Java Swing", icon: "🎨" },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Canva", icon: "🖌️" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-[linear-gradient(to_bottom,#FDF5E6,#F6F2E7)]"
    >
      {/* Heading */}
      <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#25392B] relative">
        Skills
        <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Programming Languages */}
        <div className="bg-[#FAF8F3] rounded-2xl shadow-lg p-8 hover:shadow-[0_8px_24px_rgba(244,163,0,0.3)] transition">
          <h3 className="text-2xl font-bold mb-6 text-[#25392B]">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            {codingSkills.map((skill, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-[linear-gradient(to_right,#FFF8E1,#F4E3B2,#E7F3EC)] text-[#25392B] px-5 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition transform"
              >
                <span className="text-xl">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-[#FAF8F3] rounded-2xl shadow-lg p-8 hover:shadow-[0_8px_24px_rgba(244,163,0,0.3)] transition">
          <h3 className="text-2xl font-bold mb-6 text-[#25392B]">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-[#E7F3EC] text-[#25392B] px-5 py-3 rounded-full shadow-md hover:bg-[#D4EBDD] hover:scale-105 hover:shadow-lg transition transform"
              >
                <span className="text-xl">{tool.icon}</span>
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
