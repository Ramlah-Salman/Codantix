export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-48 bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200 text-center overflow-hidden"
    >
      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-3xl md:text-4xl font-semibold text-blue-700 mb-4">
          Welcome to <span className="font-extrabold">Codantix</span>
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-snug">
          Building Modern Web Experiences
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Innovative, scalable, and beautifully designed solutions tailored for your brand.
        </p>

        <a
          href="#services"
          className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-xl hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
        >
          Explore Services
        </a>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,144C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
