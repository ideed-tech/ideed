import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const projectTypes = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Digital Marketing",
  "IoT Solution",
  "E-commerce",
  "Custom Request",
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", projectType: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-violet-500" />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black text-gray-950"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Let's Talk
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 leading-relaxed"
              >
                Ready to bring your vision to life? Fill out the form and we'll respond within 24 hours.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { icon: Mail, label: "hello@ideed.io" },
                { icon: Phone, label: "+1 (555) 123-4567" },
                { icon: MapPin, label: "San Francisco, CA" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                  <item.icon size={16} className="text-gray-400" strokeWidth={1.5} />
                  {item.label}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3"
            >
              <p className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Free Initial Consultation
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every project starts with a complimentary discovery call where we understand your vision,
                technical needs, and set realistic expectations.
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 rounded-2xl bg-gray-50 border border-gray-100 p-12"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <Send size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  We've received your message and will be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm({ ...form, projectType: type })}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                          form.projectType === type
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, timeline, and budget..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gray-950 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
                >
                  <Send size={15} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
