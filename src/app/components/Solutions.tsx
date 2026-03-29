import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, Pen, Wifi, Megaphone, ShoppingCart, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Monitor,
    title: "Web/App Dev",
    description:
      "Ultra-fast, responsive ecosystems built with React, Vue, and high-performance backend architectures.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Pen,
    title: "UI/UX Design",
    description:
      "Ethereal interfaces that prioritize human intuition and aesthetic depth through tonal layering.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Wifi,
    title: "IoT & Hardware",
    description:
      "Connecting physical reality with digital intelligence through seamless firmware integration.",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Narrative-driven growth strategies that leverage data to find your tribe in the digital noise.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Next-generation storefronts designed for conversion without compromising on luxury feel.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solution-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".solutions-grid",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="py-28 bg-white">
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
            Our Solutions Core
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-blue-600 text-base max-w-md mx-auto"
          >
            Multidisciplinary expertise synthesized into a singular glass-focused execution engine.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="solutions-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="solution-item group space-y-4 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center`}
              >
                <service.icon size={20} className={service.iconColor} strokeWidth={1.8} />
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-gray-950 mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Custom Request */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="solution-item group space-y-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors">
              <Plus size={18} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <div>
              <h3
                className="text-lg font-bold text-gray-950 mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Custom Request
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">Tell us about your unique vision</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
