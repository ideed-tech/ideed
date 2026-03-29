import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Monitor, Pen, Wifi, Megaphone, ShoppingCart, Plus } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web/App Dev",
    description: "Ultra-fast, responsive ecosystems built with React, Vue, and high-performance backend architectures.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Pen,
    title: "UI/UX Design",
    description: "Ethereal interfaces that prioritize human intuition and aesthetic depth through tonal layering.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Wifi,
    title: "IoT & Hardware",
    description: "Connecting physical reality with digital intelligence through seamless firmware integration.",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Narrative-driven growth strategies that leverage data to find your tribe in the digital noise.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Next-generation storefronts designed for conversion without compromising on luxury feel.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export function Solutions() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="solutions" ref={containerRef} className="bg-[#050914] py-24 md:py-32 w-full relative overflow-hidden">
      
      {/* Header */}
      <div className="w-full px-6 md:px-16 mb-12 md:mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-400 font-medium text-lg lg:text-xl max-w-xl"
          >
            Multidisciplinary expertise synthesized into a singular scalable execution engine.
          </motion.p>
        </div>
      </div>

      {/* Native Horizontal Scrolling Track */}
      <div className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 md:pl-16 pr-6 md:pr-16 pb-12 gap-6 md:gap-10">
          
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="snap-start w-[320px] md:w-[420px] shrink-0 bg-[#0B0F19] rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between h-[360px] md:h-[420px]"
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl ${service.iconBg.replace('100', '900/30')} flex items-center justify-center mb-8 border border-white/5`}
            >
              <service.icon className={`w-8 h-8 md:w-10 md:h-10 ${service.iconColor.replace('600', '400')}`} strokeWidth={1.8} />
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed md:text-lg">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Custom Request Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="snap-start w-[320px] md:w-[420px] shrink-0 bg-gradient-to-br from-[#0B0F19] to-blue-900/10 rounded-[2rem] p-8 md:p-12 shadow-2xl border-2 border-dashed border-white/10 hover:border-blue-400/50 hover:bg-blue-900/20 transition-all flex flex-col justify-between h-[360px] md:h-[420px] cursor-pointer group"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl border-2 border-white/10 flex items-center justify-center group-hover:border-blue-400/50 group-hover:bg-blue-500/10 transition-colors mb-8">
            <Plus className="w-8 h-8 md:w-10 md:h-10 text-gray-500 group-hover:text-blue-400 transition-colors" />
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Custom Request
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed md:text-lg">
              Looking for something incredibly specific? Tell us about your unique vision.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
