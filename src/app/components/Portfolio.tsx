import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
  images: {
    project1: string;
    project2: string;
    project3: string;
    project4: string;
  };
}

const projects = [
  {
    title: "Nexus IoT Platform",
    subtitle: "Enterprise Hardware Management",
    tag: "IoT / Dashboard",
  },
  {
    title: "Verse Brand Studio",
    subtitle: "Digital Identity & Design System",
    tag: "UI/UX / Branding",
  },
];

export function Portfolio({ images }: PortfolioProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const imgKeys: (keyof typeof images)[] = ["project3", "project4"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-black text-gray-950"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-sm"
            >
              Crafting digital masterpieces for global brands.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-2 text-blue-600 text-sm font-medium hover:gap-3 transition-all"
          >
            See all projects <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Grid — 2 columns */}
        <div className="portfolio-grid grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="portfolio-card group cursor-pointer"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[4/3]">
                <ImageWithFallback
                  src={images[imgKeys[i]]}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                    {project.tag}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="mt-4 space-y-0.5">
                <p className="font-bold text-gray-950 text-base">
                  {project.title}
                </p>
                <p className="text-gray-400 text-sm">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile see all */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="flex items-center gap-2 text-blue-600 text-sm font-medium">
            See all projects <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
