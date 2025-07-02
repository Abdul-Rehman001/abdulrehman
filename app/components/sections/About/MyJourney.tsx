"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ThemeColors {
  foreground: string;
  accent: string;
  textGradient: string;
  background: string;
  backgroundAlt: string;
}

interface JourneySectionProps {
  themeColors: ThemeColors;
  usePrimaryBackground?: boolean;
}

export default function JourneySection({
  themeColors,
  usePrimaryBackground = false,
}: JourneySectionProps) {
  const journeyRef = useRef(null);
  const titleRef = useRef(null);

  const isJourneyInView = useInView(journeyRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.3,
  });

  // Gentle parallax for title
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Classic easing
  const ease = [0.25, 0.1, 0.25, 1];

  // Experience data
  const experiences = [
    {
      role: "FRONT END",
      roleSecondary: "developer",
      company: "ALAZKA.AI",
      period: "DECEMBER 2024 - PRESENT",
      description:
        "Developing the official website and customer support platform, contributing to ongoing projects aimed at improving customer experience and expanding platform functionality.",
    },
    {
      role: "FRONT END DEVELOPER",
      roleSecondary: "intern",
      company: "ALAZKA.AI",
      period: "SEPTEMBER 2024 - DECEMBER 2024",
      description:
        "Developed the official website for Alazka.ai, showcasing the company's services and offerings. Built a customer support platform tailored to handle client interactions and support queries.",
    },
    {
      role: "REACT DEVELOPER",
      roleSecondary: "intern",
      company: "PROVEN ROBOTICS",
      period: "JULY 2024 - SEPTEMBER 2024",
      description:
        "Worked on the Bot Builder platform, contributing to the development of an interactive bot-building interface for clients. Collaborated with cross-functional teams to enhance product features.",
    },
  ];

  // Elegant container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease,
      },
    },
  };

  // Simple fade up for all elements
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease,
      },
    },
  };

  // Title letter animation
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease,
      },
    }),
  };

  // Experience item animation
  const experienceVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.15,
        ease,
      },
    }),
  };

  const backgroundStyle = {
    backgroundColor: usePrimaryBackground
      ? themeColors.background
      : themeColors.backgroundAlt,
  };

  return (
    <div
      ref={journeyRef}
      className="w-full min-h-screen flex flex-col justify-center items-center py-32 px-4 lg:px-20 relative overflow-hidden"
      style={backgroundStyle}
      id="journey"
    >
      {/* Subtle background element */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.015]"
          style={{ backgroundColor: themeColors.accent }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.015, 0.025, 0.015],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="space-y-32 max-w-full mx-auto w-full relative z-10">
        {/* Main headline with parallax */}
        <motion.div
          ref={titleRef}
          className="overflow-hidden"
          style={{ y: titleY }}
        >
          <motion.h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold tracking-wide text-center mb-20">
            {"EXPERIENCE".split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={titleInView ? "visible" : "hidden"}
                className={`inline-block `}
                style={{ color: themeColors.foreground }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Experience entries */}
        <motion.div
          className="space-y-40"
          variants={containerVariants}
          initial="hidden"
          animate={isJourneyInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative"
              custom={i}
              variants={experienceVariants}
            >
              {/* Experience number - more subtle */}
              <motion.div
                className="absolute -left-1 lg:left-0 top-0 text-6xl lg:text-8xl xl:text-9xl font-bold opacity-[0.03] select-none"
                style={{ color: themeColors.foreground }}
                whileHover={{
                  opacity: 0.06,
                  transition: { duration: 0.3, ease },
                }}
              >
                0{i + 1}
              </motion.div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pl-4 lg:pl-0">
                {/* Left side - Role and Company */}
                <motion.div
                  className="lg:col-span-7 space-y-6"
                  variants={fadeUpVariants}
                >
                  {/* Role title */}
                  <motion.h2
                    className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-none"
                    style={{ color: themeColors.foreground }}
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.3, ease },
                    }}
                  >
                    {exp.role}
                  </motion.h2>

                  {/* Secondary role */}
                  <motion.h3
                    className="text-xl lg:text-2xl xl:text-3xl font-light italic"
                    style={{ color: `${themeColors.foreground}80` }}
                    variants={fadeUpVariants}
                  >
                    {exp.roleSecondary}
                  </motion.h3>

                  {/* Company name */}
                  <motion.h4
                    className={`text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r ${themeColors.textGradient} bg-clip-text text-transparent mt-8`}
                    variants={fadeUpVariants}
                    whileHover={{
                      y: -2,
                      transition: { duration: 0.3, ease },
                    }}
                  >
                    {exp.company}
                  </motion.h4>
                </motion.div>

                {/* Right side - Period and Description */}
                <motion.div
                  className="lg:col-span-5 space-y-8 lg:mt-4"
                  variants={fadeUpVariants}
                >
                  {/* Period */}
                  <motion.p
                    className="text-sm lg:text-base font-medium tracking-wider uppercase"
                    style={{ color: themeColors.accent }}
                    variants={fadeUpVariants}
                  >
                    {exp.period}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    className="text-base lg:text-lg leading-relaxed max-w-md"
                    style={{ color: `${themeColors.foreground}CC` }}
                    variants={fadeUpVariants}
                    whileHover={{
                      y: -1,
                      transition: { duration: 0.3, ease },
                    }}
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* Elegant divider line */}
              {i < experiences.length - 1 && (
                <motion.div
                  className="mt-20 flex justify-center"
                  variants={fadeUpVariants}
                >
                  <motion.div
                    className="h-px w-full rounded-full opacity-30"
                    style={{ backgroundColor: themeColors.accent }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          className="flex justify-center mt-32"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isJourneyInView ? "visible" : "hidden"}
        >
          <motion.a
            href="/resume.pdf"
            download="Abdul_Rehman_Tahir_Resume.pdf"
            className="group relative"
            whileHover={{
              y: -3,
              transition: { duration: 0.3, ease },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1, ease },
            }}
          >
            <motion.div
              className="text-2xl lg:text-3xl font-bold tracking-wide px-8 py-4 relative"
              style={{ color: themeColors.foreground }}
              whileHover={{
                color: themeColors.accent,
                transition: { duration: 0.3, ease },
              }}
            >
              RESUME
              {/* Elegant underline */}
              <motion.div
                className="absolute bottom-2 left-8 h-px w-0 rounded-full"
                style={{ backgroundColor: themeColors.accent }}
                whileHover={{
                  width: "calc(100% - 4rem)",
                  transition: { duration: 0.4, ease },
                }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
