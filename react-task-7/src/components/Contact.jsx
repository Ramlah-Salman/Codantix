export default function ContactMe() {
  return (
    <section
      id="contact"
      className="bg-[#fef3dc] py-20 px-6 flex flex-col items-center relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#ffccd5] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#bae6fd] opacity-50 rounded-full z-0"></div>
      <div className="absolute top-[55%] left-[15%] w-20 h-20 bg-[#fbcfe8] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-[30%] right-[25%] w-24 h-24 bg-[#d9f99d] opacity-50 rounded-full z-0"></div>
      <div className="absolute top-[15%] right-[20%] w-20 h-20 bg-[#ffe7cc] opacity-50 rounded-full z-0"></div>
      <div className="absolute bottom-[10%] left-[40%] w-28 h-28 bg-[#e4dfff] opacity-50 rounded-full z-0"></div>

      {/* Heading */}
      <h2 className="text-4xl font-serif font-bold text-center mb-10 text-[#25392B] relative z-10">
        Let's Connect
        <div className="w-24 h-1 bg-[#F4A300] rounded-full mx-auto mt-3"></div>
      </h2>

      {/* Contact Form */}
      <div className="bg-[#e2ccb3] rounded-2xl shadow-[8px_8px_0px_#1f1f1f] p-10 w-full max-w-2xl relative z-10">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="text-sm font-medium text-[#1f1f1f] mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="p-3 rounded-xl border border-[#d4bfa7] bg-[#fdf0d5] focus:outline-none focus:ring-2 focus:ring-[#880e0e]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="text-sm font-medium text-[#1f1f1f] mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded-xl border border-[#d4bfa7] bg-[#fdf0d5] focus:outline-none focus:ring-2 focus:ring-[#880e0e]"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col col-span-2">
            <label className="text-sm font-medium text-[#1f1f1f] mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="p-3 rounded-xl border border-[#d4bfa7] bg-[#fdf0d5] focus:outline-none focus:ring-2 focus:ring-[#880e0e]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#880e0e] text-white px-8 py-3 rounded-full hover:opacity-90 transition shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
