import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2023 - 2027",
    degree: "BS Software Engineering",
    place: "Karachi University - UBIT",
    color: "#780000",
  },
  {
    year: "2022",
    degree: "Intermediate (Computer Science)",
    place: "Sir Syed Govt Girls College",
    color: "#B66E6E",
  },
  {
    year: "2020",
    degree: "Matriculation (Computer Science)",
    place: "CharterHouse Public School",
    color: "#715858",
  },
];

export default function Education() {
  return (
    <section className="bg-[#FEF3DC] py-16 text-[#1f1f1f]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-center mb-10 text-[#25392B]">
          Education
          <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
        </h2>

        <div className="bg-[#e8d7c2] rounded-2xl p-10">
          {/* Timeline */}
          <div className="relative border-l-4 border-[#F4A300] pl-4 space-y-10">
            {education.map((edu, i) => (
              <div
                key={i}
                className="relative w-full rounded-2xl p-8 shadow-lg hover:shadow-[0_10px_30px_rgba(244,163,0,0.3)] transition"
                style={{ backgroundColor: edu.color }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 top-8 w-6 h-6 bg-[#F4A300] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  <FaGraduationCap />
                </div>

                {/* Details */}
                <span className="inline-block bg-[#FDF0D5] text-[#25392B] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  {edu.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{edu.degree}</h3>
                <p className="text-lg text-[#f9eae0]">{edu.place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
