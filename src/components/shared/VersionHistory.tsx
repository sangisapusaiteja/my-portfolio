"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { History, ExternalLink, X } from "lucide-react";
import { portfolioVersions } from "@/lib/data";

export default function VersionHistory() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 glass p-3 sm:p-4 rounded-full group cursor-pointer glow-blue will-change-transform"
        aria-label="View portfolio version history"
      >
        <History className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-secondary transition-colors duration-300" />

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="glass px-3 py-1.5 rounded-lg whitespace-nowrap">
            <span className="text-xs text-gray-300 font-medium">Version History</span>
          </div>
        </div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass p-4 sm:p-6 md:p-8 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto glow-purple"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-linear-to-br from-primary to-secondary">
                    <History className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold gradient-text">
                    Portfolio Evolution
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-400">
                  Explore how my portfolio has evolved over time, showcasing my growth as a developer
                </p>
              </div>

              {/* Version Timeline */}
              <div className="space-y-6">
                {portfolioVersions.map((version, index) => (
                  <motion.div
                    key={version.version}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Connecting Line */}
                    {index !== portfolioVersions.length - 1 && (
                      <div className="absolute left-[19px] top-12 w-0.5 h-[calc(100%+1rem)] bg-linear-to-b from-primary/50 to-transparent" />
                    )}

                    <div className="flex gap-3 sm:gap-6">
                      {/* Version Badge */}
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-linear-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm glow-blue">
                          {version.version.replace("v", "")}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 glass p-3 sm:p-4 md:p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300 will-change-transform">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">
                              {version.version}
                            </h3>
                            <span className="text-xs sm:text-sm text-gray-400 font-mono">
                              {version.year}
                            </span>
                          </div>

                          {version.url !== "#" && (
                            <a
                              href={version.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 transition-colors duration-300"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span className="hidden sm:inline">View Live</span>
                            </a>
                          )}
                        </div>

                        <p className="text-sm text-gray-300 mb-4">
                          {version.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {version.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  Each version represents a milestone in my development journey 🚀
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
