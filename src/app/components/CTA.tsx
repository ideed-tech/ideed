import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta" className="py-16 bg-[#F6F8FB]">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-[0_8px_48px_rgba(0,0,0,0.06)] px-8 py-20 text-center"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-blue-100/60 to-violet-100/60 blur-[60px] pointer-events-none" />

          <div className="relative space-y-6 max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 leading-[1.05] tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Let's Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 60%, #C026D3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Amazing Together
              </span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed">
              Your vision deserves the Ethereal Architect approach. Let's define the future today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 rounded-full bg-gray-950 text-white font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
