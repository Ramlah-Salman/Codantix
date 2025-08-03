import { FaLinkedin, FaEnvelope, FaGithub, FaPaperPlane, FaFolderOpen } from "react-icons/fa";
import pcLaptop from "../assets/pc-laptop.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#fef3dc] min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Main Card */}
      <div className="flex shadow-[8px_8px_0px_#1f1f1f]">
        {/* Left: Image */}
        <div className="bg-[#bad7f2] p-12 flex items-center">
          <img src={pcLaptop} alt="Laptop" className="w-40 md:w-64" />
        </div>

        {/* Right: Text */}
        <div className="bg-[#880e0e] text-white p-12 md:p-16 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Hi, I am Ramlah Salman
          </h1>
          <p className="leading-relaxed text-xl md:text-2xl">
            A dedicated and detail-oriented software engineering student, with a strong passion for technology, coding, and continuous learning.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-8 mt-8">
        <a
          href="https://www.linkedin.com/in/ramlah-salman-01aa17336/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e2ccb3] p-4 rounded-md text-3xl hover:scale-110 transition cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:ramlahsalman@gmail.com"
          className="bg-[#e2ccb3] p-4 rounded-md text-3xl hover:scale-110 transition cursor-pointer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Ramlah-Salman"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e2ccb3] p-4 rounded-md text-3xl hover:scale-110 transition cursor-pointer"
        >
          <FaGithub />
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mt-8">
        <a
          href="#projects"
          className="flex items-center gap-2 bg-[#880e0e] text-white px-8 py-3 rounded-md shadow-md hover:opacity-90 hover:scale-105 transition duration-200"
        >
          <FaFolderOpen />
          View Projects
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 bg-white text-[#880e0e] border border-[#880e0e] px-8 py-3 rounded-md shadow-md hover:bg-[#880e0e] hover:text-white hover:scale-105 transition duration-200"
        >
          <FaPaperPlane />
          Contact Me
        </a>
      </div>
    </section>
  );
}
