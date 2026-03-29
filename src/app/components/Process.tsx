import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "1",
    title: "Idea",
    description: "Defining the core concept and goals.",
  },
  {
    num: "2",
    title: "Planning",
    description: "Structuring the roadmap and UX.",
  },
  {
    num: "3",
    title: "Design",
    description: "Visualizing the ethereal interface.",
  },
  {
    num: "4",
    title: "Development",
    description: "Architecting the robust engine.",
  },
  {
    num: "5",
    title: "Launch",
    description: "Deploying to the global ecosystem.",
  },
  {
    num: "6",
    title: "Growth",
    description: "Iterating for long-term impact.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blueprint-step",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blueprint-steps",
            start: "top 80%",
            once: true,
          },
        }
      );
      gsap.fromTo(
        ".connector-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: ".blueprint-steps",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-28 bg-[#F6F8FB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-950"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            The Blueprint
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 text-base"
          >
            Our systematic approach to building digital excellence.
          </motion.p>
        </div>

        {/* Steps — desktop horizontal */}
        <div className="blueprint-steps hidden md:grid grid-cols-6 gap-0 items-start">
          {steps.map((step, i) => (
            <div key={i} className="blueprint-step flex flex-col items-center text-center relative">
              {/* Step number */}
              <div className="flex items-center w-full mb-4">
                <span className="text-blue-600 text-base font-bold w-full text-center">{step.num}</span>
              </div>

              {/* Connector line + dot */}
              <div className="flex items-center w-full mb-6 relative">
                {/* Left line */}
                {i > 0 && (
                  <div className="connector-line flex-1 h-[1.5px] bg-blue-200" />
                )}
                {i === 0 && <div className="flex-1" />}

                {/* Center dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0 z-10" />

                {/* Right line */}
                {i < steps.length - 1 && (
                  <div className="connector-line flex-1 h-[1.5px] bg-blue-200" />
                )}
                {i === steps.length - 1 && <div className="flex-1" />}
              </div>

              {/* Content */}
              <div className="px-2">
                <p
                  className="text-sm font-bold text-gray-900 mb-1.5"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {step.title}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Steps — mobile vertical */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 pb-8 relative"
            >
              {/* Left column */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-[1.5px] bg-blue-200 mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-2">
                <p className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {step.title}
                </p>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
