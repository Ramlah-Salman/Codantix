export default function Skills() {
  return (
    <section className="bg-[#fef3dc] py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading (matching Projects style) */}
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#25392B]">
          Skills
          <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
        </h2>

        {/* Programming Languages */}
        <div className="bg-[#880e0e] shadow-[12px_12px_0px_black] p-6">
          <div className="bg-[#fef3dc] p-10 text-center">
            <h3 className="text-xl font-bold mb-6">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["JAVA", "PYTHON", "JAVA SCRIPT", "HTML", "CSS"].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#f9c6cc] text-black font-semibold px-4 py-2 rounded-full shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-[#880e0e] shadow-[12px_12px_0px_black] p-6">
          <div className="bg-[#fef3dc] p-10 text-center">
            <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["SQL", "JAVA SWING", "FIGMA", "CANVA", "REACT"].map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-[#f9c6cc] text-black font-semibold px-4 py-2 rounded-full shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
