"use client";
import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useTheme } from "../layout/themes/ThemeContext";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiAmazon,
  SiDocker,
} from "react-icons/si";
import {
  Smartphone,
  Layout,
  Webhook,
  Plug,
  Database,
  Search,
  Network,
  Cloud,
  Code,
  Sparkles,
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: React.ReactNode;
  }[];
}

export default function SkillsSection() {
  const { themeColors } = useTheme();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // Intersection observers
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -100px 0px",
  });

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.3,
  });

  // Parallax effects
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

  // Professional easing
  const smoothEase = [0.25, 0.1, 0.25, 1];

  // Letter animation variants
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
        ease: smoothEase,
      },
    }),
  };

  // Skills organized by category
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <SiReact size={20} /> },
        { name: "Next.js", icon: <SiNextdotjs size={20} /> },
        { name: "React Native", icon: <Smartphone size={20} /> },
        { name: "TypeScript", icon: <SiTypescript size={20} /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript size={20} /> },
        { name: "HTML5", icon: <SiHtml5 size={20} /> },
        { name: "CSS3", icon: <SiCss3 size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
        { name: "Redux", icon: <SiRedux size={20} /> },
        { name: "Responsive Design", icon: <Layout size={20} /> },
        { name: "Framer Motion", icon: <Sparkles size={20} /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
        { name: "Express.js", icon: <SiExpress size={20} /> },
        { name: "REST APIs", icon: <Plug size={20} /> },
        { name: "Microservices", icon: <Network size={20} /> },
        { name: "Webhooks", icon: <Webhook size={20} /> },
        { name: "API Integration", icon: <Plug size={20} /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={20} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
        { name: "Database Design", icon: <Database size={20} /> },
        { name: "Query Optimization", icon: <Search size={20} /> },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: <SiGit size={20} /> },
        { name: "GitHub", icon: <SiGithub size={20} /> },
        { name: "Figma", icon: <SiFigma size={20} /> },
        { name: "Postman", icon: <SiPostman size={20} /> },
        { name: "VS Code", icon: <Code size={20} /> },
        { name: "Vercel", icon: <SiVercel size={20} /> },
        { name: "Netlify", icon: <SiNetlify size={20} /> },
        { name: "AWS", icon: <SiAmazon size={20} /> },
      ],
    },
    {
      title: "Currently Exploring",
      skills: [
        { name: "System Design", icon: <Network size={20} /> },
        { name: "Docker", icon: <SiDocker size={20} /> },
        { name: "AWS Services", icon: <Cloud size={20} /> },
      ],
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: smoothEase,
      },
    },
  };

  const categoryVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: smoothEase,
      },
    },
  };

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: smoothEase,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center px-6 lg:px-20 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: themeColors.backgroundAlt }}
      id="skills"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title Section */}
        <motion.div
          ref={titleRef}
          className="mb-12 sm:mb-16 lg:mb-20 overflow-hidden"
          style={{ y: titleY }}
        >
          <motion.h1
            className="text-6xl lg:text-8xl xl:text-9xl font-bold tracking-wide text-center md:text-left mb-6"
            style={{ perspective: "1000px" }}
          >
            {"Skills".split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={titleInView ? "visible" : "hidden"}
                className="inline-block origin-bottom"
                style={{
                  color: themeColors.foreground,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: smoothEase },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto md:mx-0 text-center md:text-left"
            style={{ color: `${themeColors.foreground}80` }}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Technologies and tools I use to build scalable, performant
            applications
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="space-y-12 lg:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="space-y-6"
            >
              {/* Category Title */}
              <motion.div className="flex items-center gap-4">
                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-center md:text-left"
                  style={{ color: themeColors.foreground }}
                >
                  {category.title}
                </motion.h2>
                <motion.div
                  className="hidden md:block flex-1 h-px"
                  style={{ backgroundColor: `${themeColors.foreground}15` }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
                />
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    custom={skillIndex}
                    variants={skillItemVariants}
                    className="group"
                    whileHover={{
                      y: -2,
                      transition: { duration: 0.2, ease: smoothEase },
                    }}
                  >
                    <div
                      className="relative flex flex-col items-center justify-center p-4 lg:p-5 rounded-lg border transition-all duration-300 overflow-hidden"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: `${themeColors.foreground}10`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${themeColors.accent}30`;
                        e.currentTarget.style.backgroundColor = `${themeColors.backgroundAlt}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${themeColors.foreground}10`;
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {/* Subtle hover effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${themeColors.accent}08 0%, transparent 100%)`,
                        }}
                      />
                      
                      <motion.div
                        className="relative z-10 mb-2.5"
                        style={{ color: themeColors.accent }}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <motion.span
                        className="relative z-10 text-xs sm:text-sm font-medium text-center leading-tight"
                        style={{ color: `${themeColors.foreground}90` }}
                      >
                        {skill.name}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
