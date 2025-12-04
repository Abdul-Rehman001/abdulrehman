"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { useTheme } from "./themes/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, themeColors } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "HOME", path: "/", number: "01" },
    { title: "ABOUT", path: "#about", number: "02" },
    { title: "WORK", path: "#work", number: "03" },
    { title: "SERVICES", path: "#services", number: "04" },
    { title: "SKILLS", path: "#skills", number: "05" },
    { title: "CONNECT", path: "#contact", number: "06" },
  ];

  // Helper function to determine text color based on theme
  const getTextColor = () => {
    return theme === "light" ? "text-gray-800" : "text-white";
  };

  // Helper function for menu number color
  const getMenuNumberColor = () => {
    return theme === "light" ? "text-gray-600" : "text-gray-400";
  };

  // Variants for layered animations - made smoother with longer durations
  const whiteLayerVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.9,
        delay: 0.4, // Last to exit
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const grayLayerVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.9,
        delay: 0.2, // Second to exit
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const blackLayerVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.6,
        delay: 0, // First to exit
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        delay: 1, // Delay increased to account for slower layer animations
        duration: 0.3,
      },
    },
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 1 + i * 0.12, // Slightly increased delay for smoother appearance
        duration: 0.8, // Longer duration for smoother animation
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const lineVariants = {
    closed: { width: "2rem" },
    open: { width: "1.5rem" },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full px-6 lg:px-20 py-6 z-50 transition-all duration-300`}
        style={{
          backgroundColor: scrolled
            ? themeColors.navScrolledBackground
            : themeColors.navBackground,
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-left z-50">
            <Link href="/">
              <span
                className={`text-xl md:text-2xl font-semibold ${getTextColor()} cursor-pointer`}
              >
                Abdul Rehman
                <span
                  className="font-bold text-3xl animate-pulse"
                  style={{ color: themeColors.accent }}
                >
                  .
                </span>
              </span>
            </Link>
          </div>

          <div className="z-50">
            <button
              className="flex flex-col items-end space-y-1.5 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block h-0.5"
                style={{ backgroundColor: themeColors.foreground }}
                animate={
                  isOpen
                    ? { width: "1.5rem", rotate: 45, y: 8 }
                    : { width: "2rem", rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5"
                style={{ backgroundColor: themeColors.foreground }}
                variants={lineVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5"
                style={{ backgroundColor: themeColors.foreground }}
                animate={
                  isOpen
                    ? { width: "1.5rem", rotate: -45, y: -8 }
                    : { width: "1.5rem", rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Layer 1 (Primary) */}
            <motion.div
              className="fixed inset-0 z-40"
              style={{ backgroundColor: themeColors.menuLayerPrimary }}
              variants={whiteLayerVariants}
              initial="closed"
              animate="open"
              exit="exit"
              key="primary-layer"
            />

            {/* Layer 2 (Secondary) */}
            <motion.div
              className="fixed inset-0 z-41"
              style={{ backgroundColor: themeColors.menuLayerSecondary }}
              variants={grayLayerVariants}
              initial="closed"
              animate="open"
              exit="exit"
              key="secondary-layer"
            />

            {/* Layer 3 (Tertiary - main content) */}
            <motion.div
              className="fixed inset-0 z-42"
              style={{ backgroundColor: themeColors.menuLayerTertiary }}
              variants={blackLayerVariants}
              initial="closed"
              animate="open"
              exit="exit"
              key="tertiary-layer"
            >
              {/* Content container */}
              <motion.div
                className="relative w-full h-full flex flex-col justify-center items-center"
                variants={contentVariants}
                initial="closed"
                animate="open"
                exit="closed"
                key="content"
              >
                <ul className="text-center space-y-8 md:space-y-12">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.title}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit={{
                        opacity: 0,
                        y: 50,
                        transition: { duration: 0.4 },
                      }}
                    >
                      {link.path === "/" ? (
                        <a
                          href={link.path}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="group relative inline-block">
                            <div className="flex items-baseline">
                              <span
                                className={`${getMenuNumberColor()} text-sm mr-4 italic`}
                              >
                                {link.number}
                              </span>
                              <span
                                className={`text-4xl md:text-6xl font-bold ${getTextColor()} relative`}
                              >
                                {link.title}
                                <span
                                  className="block h-0.5 w-0 group-hover:w-full transition-all duration-500 absolute bottom-0 left-0"
                                  style={{ backgroundColor: themeColors.accent }}
                                ></span>
                              </span>
                            </div>
                          </div>
                        </a>
                      ) : link.path.startsWith("#") ? (
                        <a
                          href={link.path}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            const element = document.querySelector(link.path);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                          }}
                        >
                          <div className="group relative inline-block">
                            <div className="flex items-baseline">
                              <span
                                className={`${getMenuNumberColor()} text-sm mr-4 italic`}
                              >
                                {link.number}
                              </span>
                              <span
                                className={`text-4xl md:text-6xl font-bold ${getTextColor()} relative`}
                              >
                                {link.title}
                                <span
                                  className="block h-0.5 w-0 group-hover:w-full transition-all duration-500 absolute bottom-0 left-0"
                                  style={{ backgroundColor: themeColors.accent }}
                                ></span>
                              </span>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <Link href={link.path} onClick={() => setIsOpen(false)}>
                          <div className="group relative inline-block">
                            <div className="flex items-baseline">
                              <span
                                className={`${getMenuNumberColor()} text-sm mr-4 italic`}
                              >
                                {link.number}
                              </span>
                              <span
                                className={`text-4xl md:text-6xl font-bold ${getTextColor()} relative`}
                              >
                                {link.title}
                                <span
                                  className="block h-0.5 w-0 group-hover:w-full transition-all duration-500 absolute bottom-0 left-0"
                                  style={{ backgroundColor: themeColors.accent }}
                                ></span>
                              </span>
                            </div>
                          </div>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>

                <div className="absolute bottom-8 left-0 w-full flex justify-center">
                  <motion.div
                    className="flex gap-4 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    exit={{
                      opacity: 0,
                      y: 20,
                      transition: { duration: 0.4 },
                    }}
                  >
                    <a
                      href="https://github.com/Abdul-Rehman001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                      style={{ backgroundColor: `${themeColors.accent}30` }}
                    >
                      <Github className={`h-5 w-5 ${getTextColor()}`} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdul-rehman-tahir-11298a217/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                      style={{ backgroundColor: `${themeColors.accent}30` }}
                    >
                      <Linkedin className={`h-5 w-5 ${getTextColor()}`} />
                    </a>
                    <a
                      href="https://www.instagram.com/abdul.rehman_____/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                      style={{ backgroundColor: `${themeColors.accent}30` }}
                    >
                      <Instagram className={`h-5 w-5 ${getTextColor()}`} />
                    </a>
                    <a
                      href="mailto:abdulrehman7619931243@gmail.com"
                      className="p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                      style={{ backgroundColor: `${themeColors.accent}30` }}
                    >
                      <Mail className={`h-5 w-5 ${getTextColor()}`} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
