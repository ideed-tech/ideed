import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A standard web application typically takes 8–14 weeks from discovery to launch. Mobile apps range from 12–20 weeks, and IoT integrations can extend to 24 weeks. We'll provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely. All projects include a 30-day post-launch warranty. Beyond that, we offer flexible maintenance retainer packages that cover monitoring, performance optimization, security patches, and feature iterations.",
  },
  {
    question: 'What is "Glassmorphism" in your design language?',
    answer:
      "It's our signature style—using semi-transparent layers and background blurs to create depth and hierarchy without the clutter of heavy borders and shadows.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes React, Next.js, Vue, Node.js, Python, and Flutter for cross-platform mobile. For IoT, we work with MQTT, embedded C/C++, and AWS IoT. We're technology-agnostic and will recommend the best fit for your specific requirements.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "We assign a dedicated project manager to every engagement. Communication happens via Slack, weekly video check-ins, and live project dashboards. You'll always have full visibility into progress, blockers, and upcoming milestones.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section id="faq" ref={sectionRef} className="py-16 md:py-28 bg-[#F6F8FB]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-gray-950 text-center mb-10 md:mb-14"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Common Queries
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-0 divide-y divide-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span
                    className={`font-semibold text-sm md:text-base transition-colors ${
                      isOpen ? "text-gray-950" : "text-gray-800 group-hover:text-gray-950"
                    }`}
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-colors ${isOpen ? "text-gray-950" : "text-gray-400"}`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed pb-6 max-w-xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
