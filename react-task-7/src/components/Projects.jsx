import { FaStar } from "react-icons/fa";

const projects = [
  {
    title: "E-COMMERCE WEBSITE (HTML, CSS)",
    desc: "An e-commerce website for goods, made during internship.",
    color: "#F4B9B8",
  },
  {
    title: "PHONE-BOOK",
    desc: "Built using Java Swing and DSA structures for managing contacts.",
    color: "#E9D6B2",
  },
  {
    title: "WORDPRESS WEBSITE",
    desc: "A custom landing page for an embroidery brand.",
    color: "#E9A8A8",
  },
  {
    title: "ALL-ROUNDER SCHOOL PLATFORM",
    desc: "Wireframe designed in FigJam, later built in Figma.",
    color: "#DCCFD1",
  },
  {
    title: "TIC TAC TOE",
    desc: "A console-based Java game implementation.",
    color: "#C9BABD",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#FEF3DC] py-12 md:py-16 text-[#1f1f1f] relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#ffccd5] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#bae6fd] opacity-50 rounded-full z-0"></div>
      <div className="absolute top-[55%] left-[15%] w-20 h-20 bg-[#fbcfe8] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-[30%] right-[25%] w-24 h-24 bg-[#d9f99d] opacity-50 rounded-full z-0"></div>
      <div className="absolute top-[15%] right-[20%] w-20 h-20 bg-[#ffe7cc] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-[10%] left-[40%] w-28 h-28 bg-[#e4dfff] opacity-50 rounded-full z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-10 sm:mb-12 text-[#25392B]">
          Projects
          <div className="w-20 sm:w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 place-items-center">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 sm:p-8 w-full max-w-xs min-h-[230px] text-center shadow-md flex flex-col justify-start transform hover:-translate-y-2 hover:shadow-lg transition duration-300"
              style={{ backgroundColor: p.color }}
            >
              {/* Star Icon */}
              <div className="text-[#780000] text-4xl sm:text-5xl mb-3 sm:mb-4 flex justify-center">
                <FaStar />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold font-serif uppercase mb-2 tracking-wide leading-snug text-[#1f1f1f]">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base font-medium leading-relaxed text-[#1f1f1f]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
