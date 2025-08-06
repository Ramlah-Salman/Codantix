import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaPaperPlane,
  FaFolderOpen,
} from "react-icons/fa";
import pcLaptop from "../assets/pc-laptop.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#fef3dc] min-h-[calc(100vh-64px)] relative overflow-hidden flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Decorative Circles*/}
      <div className="absolute w-full h-full top-0 left-0 z-0">
        {/* Top Left */}
        <div className="absolute top-6 left-4 w-20 h-20 md:w-32 md:h-32 bg-[#ffccd5] opacity-70 rounded-full" />
        {/* Bottom Right */}
        <div className="absolute bottom-10 right-4 w-24 h-24 md:w-40 md:h-40 bg-[#bae6fd] opacity-70 rounded-full" />
        {/* Center Left */}
        <div className="absolute top-[40%] left-[5%] w-16 h-16 md:w-24 md:h-24 bg-[#fbcfe8] opacity-70 rounded-full" />
        {/* Top Right */}
        <div className="absolute top-[20%] right-[10%] w-12 h-12 md:w-20 md:h-20 bg-[#d9f99d] opacity-70 rounded-full" />
        {/* Bottom Center */}
        <div className="absolute bottom-[8%] left-[30%] w-16 h-16 md:w-28 md:h-28 bg-[#fecaca] opacity-70 rounded-full" />
        {/* Lower Right */}
        <div className="absolute top-[75%] right-[20%] w-12 h-12 md:w-16 md:h-16 bg-[#c7d2fe] opacity-70 rounded-full" />
        </div>


      {/* Main Card */}
      <div className="relative z-10 flex flex-col md:flex-row shadow-[8px_8px_0px_#1f1f1f]">
        {/* Left: Image */}
        <div className="bg-[#bad7f2] p-12 flex justify-center items-center">
          <img src={pcLaptop} alt="Laptop" className="w-40 md:w-64" />
        </div>

        {/* Right: Text */}
        <div className="bg-[#880e0e] text-white p-12 md:p-16 max-w-2xl flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Hi, I am Ramlah Salman
          </h1>
          <p className="leading-relaxed text-xl md:text-2xl">
            A dedicated and detail-oriented software engineering student, with a
            strong passion for technology, coding, and continuous learning.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 flex gap-8 mt-8 flex-wrap justify-center">
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
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
        <a
          href="#projects"
          className="flex items-center justify-center gap-2 bg-[#880e0e] text-white px-8 py-3 rounded-md shadow-md hover:opacity-90 hover:scale-105 transition duration-200"
        >
          <FaFolderOpen />
          View Projects
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 bg-white text-[#880e0e] border border-[#880e0e] px-8 py-3 rounded-md shadow-md hover:bg-[#880e0e] hover:text-white hover:scale-105 transition duration-200"
        >
          <FaPaperPlane />
          Contact Me
        </a>
      </div>
    </section>
  );
}
