import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[linear-gradient(to_bottom,#1B2A22,#25392B)] h-screen flex items-center justify-center relative overflow-hidden px-6">
      
      {/* Decorative Circles */}
      <div className="absolute w-[350px] h-[350px] bg-[#E9F5EF] rounded-full opacity-10 top-[-150px] left-[-100px]"></div>
      <div className="absolute w-[250px] h-[250px] bg-[#F4E3B2] rounded-full opacity-10 bottom-[-100px] right-[-50px]"></div>
      <div className="absolute w-[200px] h-[200px] bg-[#D7E8D2] rounded-full opacity-10 top-[150px] left-[50%]"></div>
      <div className="absolute w-[180px] h-[180px] bg-[#F7EFE1] rounded-full opacity-10 bottom-[50px] left-[20%]"></div>

      <motion.div
        className="text-center relative z-10 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-[#FDF5E6] drop-shadow-[2px_2px_10px_rgba(0,0,0,0.6)]">
          Hello, <br />
          I'm{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Ramlah</span>
            {/* Underline */}
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#BFD8B8] z-0"></span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 opacity-90 text-[#FDF5E6] drop-shadow-[1px_1px_8px_rgba(0,0,0,0.7)]">
          Software Engineering Student | Karachi University
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-[#F4A300] text-[#1B2A22] px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-[#F4A300] text-[#1B2A22] px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
