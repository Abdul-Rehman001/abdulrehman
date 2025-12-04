/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { useTheme } from "../layout/themes/ThemeContext";

export default function CTASection({ usePrimaryBackground = false }) {
  const { themeColors, theme } = useTheme();
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: false, amount: 0.2 });

  // Determine which background to use based on the flag
  const backgroundStyle = {
    backgroundColor: usePrimaryBackground
      ? themeColors.background
      : themeColors.backgroundAlt,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <section
      ref={ctaRef}
      style={backgroundStyle}
      className="py-24 lg:py-32 px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-transparent to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          {/* Main headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="text-sm uppercase tracking-widest font-medium"
              style={{ color: themeColors.accent }}
            >
              Let's Collaborate
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 max-w-4xl"
            style={{ color: themeColors.foreground }}
          >
            Ready to transform your{" "}
            <span
              className={`bg-gradient-to-r ${themeColors.textGradient} bg-clip-text text-transparent italic`}
            >
              digital vision
            </span>{" "}
            into reality?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl max-w-2xl mb-10"
            style={{ color: `${themeColors.foreground}90` }}
          >
            I'm passionate about crafting exceptional user experiences that
            drive results. Let's discuss how we can bring your next project to
            life.
          </motion.p>

          {/* Animated underline */}
          <motion.div
            variants={lineVariants}
            className="h-[3px] w-24 rounded-full mb-10 origin-center"
            style={{ backgroundColor: themeColors.accent }}
          />

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              className={`relative overflow-hidden group px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium text-white ${
                theme === "default" || theme === "velvet"
                  ? ""
                  : `bg-gradient-to-r ${themeColors.textGradient}`
              }`}
              style={
                theme === "default"
                  ? {
                      backgroundColor: themeColors.foreground,
                      color: themeColors.background,
                      textShadow: "none",
                    }
                  : theme === "velvet"
                  ? {
                      backgroundColor: themeColors.foreground,
                      color: themeColors.background,
                      textShadow: "none",
                    }
                  : {
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                    }
              }
            >
              <span className="relative z-10">Start a Project</span>
              <Send size={18} className="relative z-10" />
              <span
                className={`absolute inset-0 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-lg bg-gradient-to-r ${themeColors.textGradient}`}
                style={{ opacity: 0.85 }}
              />
            </motion.a>

            <motion.a
              href="#work"
              variants={buttonVariants}
              whileHover="hover"
              className="px-6 py-3 rounded-lg border-2 flex items-center justify-center gap-2 group font-medium"
              style={{
                backgroundColor: "transparent",
                color: themeColors.accent,
                borderColor: themeColors.accent,
              }}
            >
              <span>View My Work</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={
          isInView ? { opacity: 0.05, scale: 1, rotate: 0 } : { opacity: 0 }
        }
        transition={{ duration: 1.2 }}
        className="absolute top-20 left-20 w-64 h-64 rounded-full hidden lg:block"
        style={{
          background: `radial-gradient(circle, ${themeColors.accent} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={
          isInView ? { opacity: 0.05, scale: 1, rotate: 0 } : { opacity: 0 }
        }
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full hidden lg:block"
        style={{
          background: `radial-gradient(circle, ${themeColors.accent} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
    </section>
  );
}
