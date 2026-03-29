import { motion } from "motion/react";
import { DollarSign, AtSign, Share2 } from "lucide-react";

const footerCols = {
  Company: ["About", "Services", "Projects"],
  Support: ["Contact", "Privacy Policy", "Terms of Service"],
  Ecosystem: ["Newsletter", "Insights", "Studio"],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <span
              className="text-lg font-bold text-gray-950"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              iDEED
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
              Crafting digital experiences through the lens of depth, transparency, and architectural precision.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {[DollarSign, AtSign, Share2].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"
                >
                  <Icon size={13} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerCols).map(([col, links]) => (
            <div key={col} className="space-y-3">
              <p className="text-gray-950 font-semibold text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {col}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-gray-700 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-xs">
            © 2024 iDEED Digital Ecosystem. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-gray-400">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
