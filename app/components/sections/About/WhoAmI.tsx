/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

interface ThemeColors {
  foreground: string;
  accent: string;
  textGradient: string;
  background: string;
  backgroundAlt: string;
}

export default function WhoAmISection({
  themeColors,
}: {
  themeColors: ThemeColors;
}) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // More sensitive intersection observers
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

  // Enhanced parallax scroll effects with spring physics
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
  const bounceEase = [0.68, -0.55, 0.265, 1.55];

  // Enhanced container animations
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
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

  // Refined fade up animation with blur
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

  // Enhanced status dot animation
  const pulseVariants = {
    initial: {
      scale: 1,
      opacity: 1,
      boxShadow: `0 0 0 0 ${themeColors.accent}40`,
    },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.9, 1],
      boxShadow: [
        `0 0 0 0 ${themeColors.accent}40`,
        `0 0 0 8px ${themeColors.accent}00`,
        `0 0 0 0 ${themeColors.accent}40`,
      ],
      transition: {
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  // Professional social link animations
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
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center px-6 lg:px-20 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: themeColors.background }}
    >
      {/* Enhanced Animated Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Floating gradient orbs with enhanced movement */}
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

        {/* Additional subtle background elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full blur-2xl opacity-[0.02]"
          style={{ backgroundColor: themeColors.accent }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Enhanced Large ABOUT ME Title */}
        <motion.div
          ref={titleRef}
          className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24 overflow-hidden"
          style={{ y: titleY }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-wide text-left mb-6 break-words"
            style={{
              wordBreak: "break-word",
              hyphens: "auto",
              perspective: "1000px",
            }}
          >
            {"About Me".split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                className="inline-block origin-bottom"
                style={{
                  marginRight: letter === " " ? "0.2em" : "0",
                  transformStyle: "preserve-3d",
                  color: themeColors.foreground,
                }}
                whileHover={{
                  y: -12,
                  rotateX: 15,
                  scale: 1.05,
                  transition: {
                    duration: 0.3,
                    ease: bounceEase,
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Enhanced Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ y: contentY }}
        >
          {/* Left Column - Enhanced Description */}
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
                A FULL STACK DEVELOPER FOCUSED ON THE MAIN AIM — BRINGING DIGITAL
                IDEAS TO LIFE, WHILE I'LL MAKE SURE THAT YOUR APPLICATIONS ARE
                SCALABLE, PERFORMANT, AND ENGAGING IN THE DIGITAL ENVIRONMENT AND
                STAND OUT FROM THE COMPETITORS.
              </motion.span>
            </motion.p>

            {/* Enhanced Status Indicator */}
            <motion.div
              className="flex items-center gap-3"
              variants={fadeUpVariants}
            >
              <motion.div
                className="w-3 h-3 rounded-full flex-shrink-0 relative"
                style={{ backgroundColor: themeColors.accent }}
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
              <motion.span
                className="text-sm sm:text-base font-medium uppercase tracking-wider"
                style={{ color: themeColors.foreground }}
                whileHover={{
                  letterSpacing: "0.2em",
                  x: 5,
                  transition: {
                    duration: 0.3,
                    ease: smoothEase,
                  },
                }}
              >
                AVAILABLE
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Social Links */}
          <motion.div variants={fadeUpVariants} className="space-y-6">
            <motion.h3
              className="text-sm sm:text-base font-medium uppercase tracking-wider"
              style={{ color: themeColors.foreground }}
              variants={fadeUpVariants}
            >
              FIND ME ON:
            </motion.h3>

            <motion.div
              className="flex flex-wrap items-center gap-6"
              variants={containerVariants}
            >
              {[
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
              ].map((social) => (
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
      </div>
    </section>
  );
}
