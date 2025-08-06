export default function Skills() {
  return (
    <section className="bg-[#fef3dc] py-20 px-4 relative overflow-hidden">
      {/* Decorative Circles - same as Projects */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#ffccd5] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#bae6fd] opacity-50 rounded-full z-0"></div>
      <div className="absolute top-[55%] left-[15%] w-20 h-20 bg-[#fbcfe8] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-[30%] right-[25%] w-24 h-24 bg-[#d9f99d] opacity-50 rounded-full z-0"></div>
      <div className="absolute top-[15%] right-[20%] w-20 h-20 bg-[#ffe7cc] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-[10%] left-[40%] w-28 h-28 bg-[#e4dfff] opacity-50 rounded-full z-0"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Section Heading */}
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#25392B]">
          Skills
          <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
        </h2>

        {/* Programming Languages */}
        <div className="bg-[#880e0e] shadow-[12px_12px_0px_black] p-6">
          <div className="bg-[#fef3dc] p-10 text-center">
            <h3 className="text-xl font-bold mb-6">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "JAVA",
                "PYTHON",
                "JAVASCRIPT",
                "HTML",
                "CSS",
                "SQL",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#f4a3a3] text-black font-semibold px-4 py-2 rounded-full shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md"
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
              {[
                "JAVA SWING",
                "FIGMA",
                "CANVA",
                "REACT",
                "GIT",
                "GITHUB",
                "WIRE-FRAMING",
              ].map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-[#f4a3a3] text-black font-semibold px-4 py-2 rounded-full shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md"
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
