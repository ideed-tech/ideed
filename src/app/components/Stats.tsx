import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50+", label: "Projects Delivered", desc: "Across 12+ countries worldwide" },
  { value: "98%", label: "Client Satisfaction", desc: "Based on post-project reviews" },
  { value: "5+", label: "Years of Excellence", desc: "Building digital products" },
  { value: "22+", label: "Team Specialists", desc: "Designers, engineers & strategists" },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-gray-950"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            By the Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-base max-w-sm mx-auto"
          >
            Metrics that reflect our commitment to digital excellence.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#f8faff" }}
              className="stat-item bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-2 transition-colors"
            >
              <span
                className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-950 leading-none"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-gray-900 font-semibold text-sm">{stat.label}</span>
              <span className="text-gray-400 text-xs leading-relaxed">{stat.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Horizontal rule */}
        <div className="mt-12 md:mt-20 pt-12 md:pt-20 border-t border-gray-100 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Trusted by Startups",
              desc: "From pre-seed to Series B, we've been the technical backbone for ambitious founding teams.",
            },
            {
              title: "Enterprise-Grade Quality",
              desc: "Code quality, security standards, and scalability that enterprises rely on.",
            },
            {
              title: "Global Reach",
              desc: "Clients across North America, Europe, Middle East, and Asia-Pacific.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="space-y-3"
            >
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-violet-500" />
              <h4
                className="font-bold text-gray-900 text-base"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
