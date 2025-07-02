/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../layout/themes/ThemeContext";

export default function Hero() {
  const { themeColors } = useTheme();

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen w-full px-4 lg:px-20 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: themeColors.background }}
      initial="hidden"
      animate="visible"
      variants={backgroundVariants}
    >
      {/* Background gradient based on theme */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-tr ${themeColors.backgroundGradient} z-0 `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <div className="relative z-10 text-center ">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center justify-center gap-4 md:gap-6"
            variants={textVariants}
          >
            <motion.h2
              className="text-xl md:text-2xl font-light tracking-wider"
              style={{ color: `${themeColors.foreground}90` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Creating with{" "}
              <span
                className="font-medium"
                style={{ color: themeColors.foreground }}
              >
                Clarity
              </span>
            </motion.h2>

            <motion.div className="overflow-hidden">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-medium"
                style={{ color: `${themeColors.foreground}70` }}
                variants={textVariants}
              >
                {["I", "m", "Abdul"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3"
                    custom={i}
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  className={`inline-block bg-gradient-to-b ${themeColors.textGradient} bg-clip-text text-transparent`}
                  custom={3}
                  variants={wordVariants}
                >
                  Rehman
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-2xl max-w-2xl mt-4"
              style={{ color: `${themeColors.foreground}70` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              A Front End Developer based in Lucknow,India. Turning ideas into
              stunning, user-friendly websites. Let's build something amazing!
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <button
                className={`px-6 rounded-full py-2 border-2 ${themeColors.buttonBorder} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                style={{ color: themeColors.foreground }}
              >
                Get in touch
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="relative -bottom-15"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="flex flex-col items-center cursor-pointer">
            <h2
              className="text-xl mt-1"
              style={{ color: `${themeColors.foreground}80` }}
            >
              Designer & Developer
            </h2>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
