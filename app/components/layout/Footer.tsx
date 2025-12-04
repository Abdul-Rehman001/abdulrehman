/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useTheme } from "../layout/themes/ThemeContext";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

export default function Footer({ usePrimaryBackground = false }) {
  const { themeColors } = useTheme();
  const year = new Date().getFullYear();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Intersection observers matching your other sections
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -50px 0px",
  });

  // Parallax effects matching your other sections
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const backgroundY = useTransform(smoothScrollY, [0, 1], ["0%", "20%"]);
  const titleY = useTransform(smoothScrollY, [0, 1], ["0%", "-8%"]);
  const contentY = useTransform(smoothScrollY, [0, 1], ["0%", "-3%"]);

  // Professional easing curves
  const smoothEase = [0.25, 0.1, 0.25, 1];
  const snappyEase = [0.4, 0, 0.2, 1];

  // Enhanced title letter animations
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
      scale: 0.8,
      filter: "blur(4px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.04,
        ease: smoothEase,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  // Enhanced container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        delayChildren: 0.2,
        ease: smoothEase,
      },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(6px)",
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: smoothEase,
      },
    },
  };

  // Social link animations
  const socialVariants = {
    initial: {
      y: 0,
      opacity: 0.85,
      scale: 1,
    },
    hover: {
      y: -4,
      opacity: 1,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: snappyEase,
      },
    },
  };

  // Trigger animation when title comes into view
  useEffect(() => {
    if (titleInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [titleInView, hasAnimated]);

  // Social Links
  const socialLinks = [
    {
      name: "GITHUB",
      href: "https://github.com/Abdul-Rehman001",
      icon: <Github size={18} />,
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/in/abdul-rehman-tahir-11298a217/",
      icon: <Linkedin size={18} />,
    },
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/abdul.rehman_____/",
      icon: <Instagram size={18} />,
    },
    {
      name: "EMAIL",
      href: "mailto:abdulrehman7619931243@gmail.com",
      icon: <Mail size={18} />,
    },
  ];

  // Determine background
  const backgroundStyle = {
    backgroundColor: usePrimaryBackground
      ? themeColors.background
      : themeColors.backgroundAlt,
  };

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center px-6 lg:px-20 py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden"
      style={backgroundStyle}
    >
      {/* Enhanced Animated Background matching your other sections */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full blur-3xl opacity-[0.04]"
          style={{ backgroundColor: themeColors.accent }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 rounded-full blur-3xl opacity-[0.04]"
          style={{ backgroundColor: themeColors.accent }}
          animate={{
            scale: [1, 0.85, 1],
            x: [0, -25, 0],
            y: [0, 25, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Large Typography Title matching your style */}
        <motion.div
          ref={titleRef}
          className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24 overflow-hidden"
          style={{ y: titleY }}
        >
          <motion.h1
            className="text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[11rem]
              font-bold leading-[0.85] sm:leading-[0.8] tracking-tight text-left break-words"
            style={{
              wordBreak: "break-word",
              hyphens: "auto",
              perspective: "1000px",
            }}
          >
            {"Abdul Rehman".split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                className="inline-block origin-bottom"
                style={{
                  marginRight: letter === " " ? "0.1em" : "0",
                  transformStyle: "preserve-3d",
                  color:
                    i < 5 || (i >= 6 && i < 12)
                      ? themeColors.foreground
                      : "transparent",
                }}
                whileHover={{
                  y: -12,
                  rotateX: 15,
                  scale: 1.05,
                  transition: {
                    duration: 0.3,
                    ease: [0.68, -0.55, 0.265, 1.55],
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              >
                {i >= 6 && i < 12 ? (
                  <span
                    className={`bg-gradient-to-r ${themeColors.textGradient} bg-clip-text`}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ) : letter === " " ? (
                  "\u00A0"
                ) : (
                  letter
                )}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Content Grid matching your layout style */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ y: contentY }}
        >
          {/* Left Column - Contact Info */}
          <motion.div
            variants={fadeUpVariants}
            className="space-y-6 sm:space-y-8"
          >
            <motion.p
              className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-none"
              style={{ color: themeColors.foreground }}
              variants={fadeUpVariants}
              whileHover={{
                scale: 1.01,
                y: -2,
                transition: {
                  duration: 0.4,
                  ease: smoothEase,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                },
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                READY TO CREATE SOMETHING EXTRAORDINARY TOGETHER? DROP ME A LINE
                AND LET'S DISCUSS YOUR NEXT PROJECT.
              </motion.span>
            </motion.p>

            {/* Email CTA */}
            <motion.div variants={fadeUpVariants} className="space-y-4">
              <motion.a
                href="mailto:abdulrehman7619931243@gmail.com"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight block group break-all sm:break-words"
                style={{ color: themeColors.foreground }}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3, ease: smoothEase },
                }}
              >
                <span
                  className={`bg-gradient-to-r ${themeColors.textGradient} bg-clip-text text-transparent`}
                >
                  abdulrehman7619931243@gmail.com
                </span>
                <ArrowUpRight
                  size={24}
                  className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: themeColors.accent }}
                />
              </motion.a>

              {/* Status indicator */}
              <motion.div
                className="flex items-center gap-3"
                variants={fadeUpVariants}
              >
                <motion.div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: themeColors.accent }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <span
                  className="text-sm sm:text-base font-medium uppercase tracking-wider"
                  style={{ color: themeColors.foreground }}
                >
                  AVAILABLE FOR NEW PROJECTS
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Social Links */}
          <motion.div variants={fadeUpVariants} className="space-y-6">
            <motion.h3
              className="text-sm sm:text-base font-medium uppercase tracking-wider"
              style={{ color: themeColors.foreground }}
              variants={fadeUpVariants}
            >
              FIND ME ON:
            </motion.h3>

            {/* Changed from space-y-4 to flex with gap */}
            <motion.div
              className="flex flex-wrap items-center gap-6" // Add flex here
              variants={containerVariants}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-4 text-lg sm:text-xl font-medium uppercase tracking-wider group relative overflow-hidden"
                  style={{ color: themeColors.foreground }}
                  variants={socialVariants}
                  initial="initial"
                  whileHover="hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="flex items-center justify-center w-8 h-8"
                    style={{ color: themeColors.accent }}
                  >
                    {social.icon}
                  </motion.div>
                  <span className="relative z-10">{social.name}</span>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-12 h-0.5 w-0 rounded-full"
                    style={{ backgroundColor: themeColors.accent }}
                    whileHover={{
                      width: "calc(100% - 3rem)",
                      transition: {
                        duration: 0.4,
                        ease: smoothEase,
                      },
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated divider line */}
        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: smoothEase }}
        >
          <div
            className="h-[3px] rounded-full origin-left"
            style={{ backgroundColor: themeColors.accent }}
          />
        </motion.div>

        {/* Bottom row - Copyright and Back to top */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="flex items-center gap-8 mb-4 md:mb-0"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <p
              style={{ color: `${themeColors.foreground}50` }}
              className="text-sm font-medium uppercase tracking-wider"
            >
              © {year} ABDUL REHMAN
            </p>
          </motion.div>

          <motion.a
            href="#top"
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider group"
            style={{ color: themeColors.foreground }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <span>BACK TO TOP</span>
            <motion.div
              className="w-6 h-6 flex items-center justify-center rounded-full"
              style={{ backgroundColor: `${themeColors.accent}20` }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: themeColors.accent }}
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* Simple background gradient for depth */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-transparent to-black"></div>
      </div>
    </footer>
  );
}
