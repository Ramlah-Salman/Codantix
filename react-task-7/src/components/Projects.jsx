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
    <section id="projects" className="bg-[#FEF3DC] py-16 text-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#25392B]">
          Projects
          <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 w-full max-w-[340px] h-[230px] text-center shadow-md flex flex-col justify-start transform hover:-translate-y-2 hover:shadow-lg transition duration-300"
              style={{ backgroundColor: p.color }}
            >
              {/* Star Icon */}
              <div className="text-[#780000] text-5xl mb-4 flex justify-center">
                <FaStar />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold font-serif uppercase mb-2 tracking-wide leading-tight text-[#1f1f1f]">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-base font-medium leading-relaxed text-[#1f1f1f]">
                {p.desc}
                </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
