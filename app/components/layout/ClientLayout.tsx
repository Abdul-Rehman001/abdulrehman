"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./themes/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeToggler from "./themes/ThemeToggler";

// Loading Screen Component
function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) {
  const [showContent, setShowContent] = useState(false);
  const { theme, themeColors } = useTheme();

  useEffect(() => {
    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Start exit animation after loading is complete
    const loadingTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3000); // Total loading time

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(loadingTimer);
    };
  }, [onLoadingComplete]);

  // Helper function to determine text color based on theme
  const getTextColor = () => {
    return theme === "light" ? "text-gray-800" : "text-white";
  };

  const getSecondaryTextColor = () => {
    return theme === "light" ? "text-gray-600" : "text-gray-400";
  };

  // Layer animation variants - Y-axis movement
  const primaryLayerVariants = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.9,
        delay: 0.4, // Last to exit
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const secondaryLayerVariants = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.9,
        delay: 0.2, // Second to exit
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const tertiaryLayerVariants = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.9,
        delay: 0, // First to exit
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.5 },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.5 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4 },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.3,
        duration: 0.6,
        ease: "backOut",
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 1.5,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      {/* Layer 1 (Primary - Background) */}
      <motion.div
        className="fixed inset-0 z-[100]"
        style={{ backgroundColor: themeColors.menuLayerPrimary }}
        variants={primaryLayerVariants}
        initial="initial"
        exit="exit"
        key="primary-layer"
      />

      {/* Layer 2 (Secondary) */}
      <motion.div
        className="fixed inset-0 z-[101]"
        style={{ backgroundColor: themeColors.menuLayerSecondary }}
        variants={secondaryLayerVariants}
        initial="initial"
        exit="exit"
        key="secondary-layer"
      />

      {/* Layer 3 (Tertiary - Content Layer) */}
      <motion.div
        className="fixed inset-0 z-[102] flex flex-col items-center justify-center"
        style={{ backgroundColor: themeColors.menuLayerTertiary }}
        variants={tertiaryLayerVariants}
        initial="initial"
        exit="exit"
        key="tertiary-layer"
      >
        {/* Main Content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="text-center px-6 max-w-2xl"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Main Name */}
              <motion.div
                className="mb-6"
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h1
                  className={`text-5xl md:text-7xl font-bold ${getTextColor()} leading-tight`}
                >
                  Abdul Rehman
                  <motion.span
                    className="text-6xl md:text-8xl font-bold ml-2"
                    style={{ color: themeColors.accent }}
                    variants={dotVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    .
                  </motion.span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <p
                  className={`text-lg md:text-xl ${getSecondaryTextColor()} font-light tracking-wide`}
                >
                  Portfolio Loading...
                </p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="mt-12 w-full max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <div
                  className="h-0.5 w-full rounded-full overflow-hidden"
                  style={{ backgroundColor: `${themeColors.accent}20` }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: themeColors.accent }}
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Text */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="absolute bottom-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
            >
              <p
                className={`text-sm ${getSecondaryTextColor()} tracking-wider uppercase`}
              >
                Welcome to my digital space
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

// Main Client Layout Wrapper
import { ReactNode } from "react";

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleLoadingComplete = () => {
    // Wait for exit animation to complete before showing main content
    setTimeout(() => {
      setIsLoading(false);
      setShowMainContent(true);
    }, 1500); // Duration of exit animation
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showMainContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar />
            {children}
            <Footer />
            <ThemeToggler />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
