"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, type ThemeType, themes } from "./ThemeContext";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const tooltipTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimerRef.current) {
        clearTimeout(tooltipTimerRef.current);
      }
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  // Handle hover events
  const handleMouseEnter = (themeName: string) => {
    if (tooltipTimerRef.current) {
      clearTimeout(tooltipTimerRef.current);
    }
    setShowTooltip(themeName);
  };

  const handleMouseLeave = () => {
    tooltipTimerRef.current = setTimeout(() => {
      setShowTooltip(null);
    }, 300);
  };

  // Change theme with animation
  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    setShowTooltip(newTheme);
    setShowAnimation(true);

    // Clear any existing tooltip timer
    if (tooltipTimerRef.current) {
      clearTimeout(tooltipTimerRef.current);
    }

    tooltipTimerRef.current = setTimeout(() => {
      setShowTooltip(null);
    }, 1500);

    // Clear any existing animation timer
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }

    animationTimerRef.current = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  };

  return (
    <>
      {/* Theme change animation overlay */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none"
            style={{ backgroundColor: themes[theme].accent }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-20 z-50 bg-stone-800/50 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 flex flex-row items-center space-x-3">
        {(Object.keys(themes) as ThemeType[]).map((themeName) => (
          <div key={themeName} className="relative">
            <motion.button
              className={`w-4 h-4 rounded-full cursor-pointer relative border border-white/30 transition-transform duration-300 ${
                theme === themeName ? "scale-125 border-white" : ""
              }`}
              style={{ backgroundColor: themes[themeName].background }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => handleMouseEnter(themeName)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleThemeChange(themeName)}
              aria-label={`Switch to ${themeName} theme`}
            >
              {theme === themeName && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                  </span>
                </motion.div>
              )}
            </motion.button>

            <AnimatePresence>
              {showTooltip === themeName && (
                <motion.div
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-xs py-1 px-2 rounded whitespace-nowrap z-50"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
}
