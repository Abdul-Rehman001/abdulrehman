"use client";
import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Check, Download } from "lucide-react";

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
  const [isDownloading, setIsDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isJourneyInView = useInView(journeyRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -200px 0px",
  });

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
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
      role: "FULL STACK",
      roleSecondary: "developer",
      company: "BUGRAID.AI",
      period: "JULY 2024 - PRESENT",
      description: [
        "Worked on Developing and Enhancing existing Incident Response platform.",
        "Revamped incident and RCA dashboards using React.js, TypeScript, and Next.js, reducing investigation time by ~25% through improved UI and data visibility.",
        "Developed reusable React components and integrated Redux for state management across multiple microservices.",
        "Built and optimized backend microservices with Node.js and Express.js, implementing Pino logger and Sentry monitoring, cutting bug resolution time by ~20%.",
        "Integrated third-party platforms (Splunk, ElasticStack, Sentry) via webhooks and REST APIs for automated telemetry data ingestion.",
        "Designed and developed end-to-end notification customization system based on Priority.",
        "Optimized backend repositories and services for better Efficiency and Performance.",
      ],
      technologies: "React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, Redux, Sentry, Tailwind CSS, Microservices",
    },
    {
      role: "FULL STACK",
      roleSecondary: "developer",
      company: "FREELANCE",
      period: "JUNE 2024 - JULY 2024 | REMOTE",
      companySubtitle: "RetconSoft & Independent Clients",
      description: [
        "Developed complete React Native mobile application \"Deen Call\" - an Islamic utility app with prayer times, Qibla direction, and Islamic content features.",
        "Built cross-platform mobile solution with responsive UI and seamless user experience.",
        "Collaborated directly with clients on requirements gathering, design implementation, and deployment.",
        "Delivered projects on tight timelines while maintaining high code quality standards.",
      ],
      technologies: "React Native, JavaScript, Mobile Development, REST APIs, Git",
    },
    {
      role: "FRONTEND",
      roleSecondary: "developer",
      company: "ALAZKA.AI",
      period: "SEPTEMBER 2024 - JUNE 2025",
      companySubtitle: "Frontend Developer (Full-time) - December 2024 to June 2025 | Frontend Developer Intern - September 2024 to December 2024",
      description: [
        "Delivered production-ready e-commerce platform with real-time updates, Redux state management, and seamless third-party API integrations.",
        "Designed and developed 5+ client websites (SaaS, e-commerce), reducing delivery timelines by ~25% through reusable component architecture.",
        "Migrated database services from MongoDB to PostgreSQL, improving query performance and data consistency.",
        "Deployed and maintained applications across multiple cloud platforms: Vercel, Netlify, AWS Amplify, and Azure.",
        "Collaborated with design team using Figma to implement pixel-perfect, responsive interfaces.",
      ],
      technologies: "React.js, Next.js, Redux, TypeScript, MongoDB, PostgreSQL, REST APIs, Vercel, AWS, Azure, Tailwind CSS, Figma",
    },
    {
      role: "REACT DEVELOPER",
      roleSecondary: "intern",
      company: "PROVEN ROBOTICS",
      period: "JULY 2024 - OCTOBER 2024",
      description: [
        "Built interactive features for the Bot Builder platform, enhancing workflow automation and node-based flow connections for robotics applications.",
        "Collaborated with robotics engineers to improve UI/UX, increasing platform usability and user engagement.",
        "Optimized frontend performance through reusable React components, custom hooks, and code refactoring.",
        "Implemented drag-and-drop functionality and visual flow builders for intuitive robot programming interface.",
      ],
      technologies: "React.js, JavaScript, UI/UX Design, Component Architecture, React Flow",
    },
  ];

  // Elegant container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ease,
      },
    },
  };

  // Simple fade up for all elements
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease,
      },
    }),
  };

  const backgroundStyle = {
    backgroundColor: usePrimaryBackground
      ? themeColors.background
      : themeColors.backgroundAlt,
  };

  // Experience Item Component
  function ExperienceItem({ 
    exp, 
    index, 
    isLast 
  }: { 
    exp: typeof experiences[0]; 
    index: number; 
    isLast: boolean;
  }) {
    const itemRef = useRef(null);
    const isItemInView = useInView(itemRef, {
      once: true,
      amount: 0.2,
      margin: "0px 0px -150px 0px",
    });

    return (
      <motion.div
        ref={itemRef}
        className="relative"
        initial="hidden"
        animate={isItemInView ? "visible" : "hidden"}
        variants={experienceVariants}
        custom={index}
      >
        {/* Experience number - more subtle */}
        <motion.div
          className="absolute -left-1 lg:left-0 top-0 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold opacity-[0.03] select-none pointer-events-none"
          style={{ color: themeColors.foreground }}
          whileHover={{
            opacity: 0.06,
            transition: { duration: 0.3, ease },
          }}
        >
          0{index + 1}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start pl-0 sm:pl-4 lg:pl-0">
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

            {/* Company Subtitle (if exists) */}
            {exp.companySubtitle && (
              <motion.p
                className="text-sm lg:text-base font-medium opacity-70 mt-2"
                style={{ color: themeColors.foreground }}
                variants={fadeUpVariants}
              >
                {exp.companySubtitle}
              </motion.p>
            )}
          </motion.div>

          {/* Right side - Period, Description, and Technologies */}
          <motion.div
            className="lg:col-span-5 space-y-6 lg:mt-4"
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

            {/* Description - Bullet Points */}
            <motion.div
              className="space-y-3"
              variants={containerVariants}
            >
              {(Array.isArray(exp.description) ? exp.description : [exp.description]).map((point, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  variants={fadeUpVariants}
                >
                  <motion.span
                    className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: themeColors.accent }}
                    initial={{ scale: 0 }}
                    animate={isItemInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      delay: index * 0.1 + idx * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  />
                  <motion.p
                    className="text-sm sm:text-base lg:text-lg leading-relaxed flex-1"
                    style={{ color: `${themeColors.foreground}CC` }}
                    whileHover={{
                      x: 2,
                      transition: { duration: 0.2, ease },
                    }}
                  >
                    {point}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            {/* Technologies */}
            {exp.technologies && (
              <motion.div
                className="pt-4 border-t"
                style={{ borderColor: `${themeColors.foreground}15` }}
                variants={fadeUpVariants}
              >
                <motion.p
                  className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 opacity-60"
                  style={{ color: themeColors.foreground }}
                >
                  Technologies
                </motion.p>
                <motion.p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: `${themeColors.foreground}AA` }}
                >
                  {exp.technologies}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Elegant divider line */}
        {!isLast && (
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
    );
  }

  return (
    <div
      ref={journeyRef}
      className="w-full min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 lg:py-32 px-6 lg:px-20 relative overflow-hidden"
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

      <div className="space-y-16 sm:space-y-24 lg:space-y-32 max-w-7xl mx-auto w-full relative z-10">
        {/* Main headline with parallax */}
        <motion.div
          ref={titleRef}
          className="overflow-hidden"
          style={{ y: titleY }}
        >
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-wide text-left mb-12 sm:mb-16 lg:mb-20 break-words">
            {"Experience".split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={titleInView ? "visible" : "hidden"}
                className="inline-block"
                style={{ color: themeColors.foreground }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Experience entries */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-40">
          {experiences.map((exp, i) => (
            <ExperienceItem
              key={i}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          className="flex justify-center mt-32 relative"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isJourneyInView ? "visible" : "hidden"}
        >
          <motion.a
            href="/Resume.pdf"
            download="Abdul_Rehman_Tahir_Resume.pdf"
            className="group relative"
            onClick={() => {
              setIsDownloading(true);
              setShowToast(true);
              
              // Hide toast after 3 seconds
              setTimeout(() => {
                setShowToast(false);
                setTimeout(() => {
                  setIsDownloading(false);
                }, 300); // Wait for exit animation
              }, 3000);
            }}
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
              className="px-8 py-4 rounded-lg border-2 font-medium text-base relative flex items-center justify-center gap-2"
              style={{ 
                color: themeColors.accent,
                backgroundColor: "transparent",
                borderColor: themeColors.accent
              }}
              whileHover={{
                backgroundColor: `${themeColors.accent}10`,
                scale: 1.05,
                transition: { duration: 0.3, ease },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {isDownloading ? (
                <>
                  <Download size={18} className="animate-bounce" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <span>Download Resume</span>
                  <Download size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </motion.div>
          </motion.a>

          {/* Toast Notification */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-50"
              >
                <motion.div
                  className="flex items-center gap-3 px-6 py-4 rounded-lg border backdrop-blur-sm shadow-lg"
                  style={{
                    backgroundColor: `${themeColors.background}95`,
                    borderColor: `${themeColors.accent}40`,
                    boxShadow: `0 10px 40px ${themeColors.accent}20`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                    style={{ backgroundColor: `${themeColors.accent}20` }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Check
                      size={18}
                      style={{ color: themeColors.accent }}
                    />
                  </motion.div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: themeColors.foreground }}
                    >
                      Download Started
                    </p>
                    <p
                      className="text-xs opacity-70"
                      style={{ color: themeColors.foreground }}
                    >
                      Resume.pdf
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
