import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Eye, Rocket } from "lucide-react";
import { InteractiveImageAccordion } from "./ui/interactive-image-accordion";

const storyLines = [
  "We design digital experiences.",
  "We build scalable products.",
  "We turn ideas into reality.",
  "We help businesses grow with technology.",
];

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="story" ref={sectionRef} className="py-28 relative overflow-hidden bg-[#F6F8FB]">
      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
        <span
          className="text-[180px] md:text-[240px] font-black text-gray-200/60 leading-none"
        >
          iDEED
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="w-10 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-400 mb-5 origin-left"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-gray-950 mb-10"
            >
              Our Story
            </motion.h2>

            <div className="space-y-5">
              {storyLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="text-gray-500 text-lg md:text-xl"
                >
                  {line}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="text-blue-600 font-bold text-lg md:text-xl"
              >
                We are iDEED.
              </motion.p>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <InteractiveImageAccordion />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-6xl mx-auto px-6 mt-48 relative">
        <div className="grid md:grid-cols-2 gap-16">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "To define the next era of digital architecture where every interaction feels ethereal, intuitive, and boundlessly scalable.",
            },
            {
              icon: Rocket,
              title: "Our Mission",
              description:
                "Empowering creators and enterprises with cutting-edge tools and design systems that transform complex problems into elegant digital solutions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="space-y-5"
            >
              <item.icon size={22} className="text-gray-900" strokeWidth={1.5} />
              <h3
                className="text-2xl md:text-3xl font-black text-gray-950"
              >
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
