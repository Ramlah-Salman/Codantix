export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Responsive, modern, and fast websites built using the latest technologies.",
      icon: "💻",
      bg: "bg-blue-50",
    },
    {
      title: "UI/UX Design",
      desc: "Crafting intuitive and stunning user interfaces for a better experience.",
      icon: "🎨",
      bg: "bg-teal-50",
    },
    {
      title: "SEO Optimization",
      desc: "Boost your search engine rankings and drive organic traffic effortlessly.",
      icon: "🚀",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Our Premium Services
        </h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-[2px] bg-gradient-to-r from-teal-500 to-blue-900 transition-all duration-500 hover:scale-105"
            >
              {/* Inner Card */}
              <div
                className={`${service.bg} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500`}
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
