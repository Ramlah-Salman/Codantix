import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validEmail = (s) => /\S+@\S+\.\S+/.test(s);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !validEmail(form.email) || !form.message.trim()) {
      setStatus("err");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get in touch
        </h2>

        <form
          onSubmit={submit}
          className="space-y-4 bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="How can we help?"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send message"}
            </button>

            <div className="text-sm">
              {status === "ok" && (
                <span className="text-green-400 font-medium">
                  Message sent — thanks!
                </span>
              )}
              {status === "err" && (
                <span className="text-red-400 font-medium">
                  Please fill valid details.
                </span>
              )}
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
