"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../layout/themes/ThemeContext";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// Define the project type
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

// Define category type
interface Category {
  title: string;
  projects: Project[];
  layout: "left" | "right"; // image position
}

export default function WorkSection() {
  const { themeColors } = useTheme();

  // Organized project data by categories
  const categories: Category[] = [
    {
      title: "Platforms",
      layout: "left",
      projects: [
        {
          id: 1,
          title: "Portfolio Management Dashboard",
          description:
            "Interactive dashboard for financial portfolio tracking with real-time data visualization and performance metrics. Built with modern technologies for seamless user experience.",
          technologies: ["React", "D3.js", "Firebase", "Material UI"],
          image: "/1.jpg",
          liveLink: "https://project1.com",
          githubLink: "https://github.com/username/project1",
        },
        {
          id: 2,
          title: "Real-time Collaboration App",
          description:
            "Cloud-based collaborative workspace with real-time document editing, task management, and team communication features for enhanced productivity.",
          technologies: ["React", "Socket.io", "Redux", "MongoDB"],
          image: "/2.jpg",
          liveLink: "https://project2.com",
          githubLink: "https://github.com/username/project2",
        },
      ],
    },
    {
      title: "E-commerce",
      layout: "right",
      projects: [
        {
          id: 3,
          title: "Modern E-Commerce Platform",
          description:
            "A fully responsive e-commerce solution with seamless checkout experience, product management system, and advanced search capabilities.",
          technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
          image: "/1.jpg",
          liveLink: "https://project3.com",
          githubLink: "https://github.com/username/project3",
        },
        {
          id: 4,
          title: "Marketplace Mobile App",
          description:
            "Cross-platform mobile marketplace with intuitive design, secure payments, and real-time notifications for buyers and sellers.",
          technologies: ["React Native", "GraphQL", "AWS", "TypeScript"],
          image: "/2.jpg",
          liveLink: "https://project4.com",
          githubLink: "https://github.com/username/project4",
        },
      ],
    },
    {
      title: "Websites",
      layout: "left",
      projects: [
        {
          id: 5,
          title: "AI Content Generator",
          description:
            "Web application that leverages AI to generate various types of content including blog posts, social media captions, and marketing copy with advanced customization.",
          technologies: ["Vue.js", "Node.js", "OpenAI API", "MongoDB"],
          image: "/1.jpg",
          liveLink: "https://project5.com",
          githubLink: "https://github.com/username/project5",
        },
        {
          id: 6,
          title: "Social Media Analytics Tool",
          description:
            "Platform for tracking and analyzing social media performance across multiple platforms, featuring customizable reports and actionable insights.",
          technologies: ["React", "Express", "Chart.js", "PostgreSQL"],
          image: "/2.jpg",
          liveLink: "https://project6.com",
          githubLink: "https://github.com/username/project6",
        },
      ],
    },
  ];

  return (
    <motion.section
      className="py-20 px-4 lg:px-20 w-full"
      style={{ backgroundColor: themeColors.background }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-medium mb-4"
            style={{ color: `${themeColors.foreground}90` }}
          >
            My{" "}
            <span
              className={`bg-gradient-to-r ${themeColors.textGradient} bg-clip-text text-transparent`}
            >
              Work
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: `${themeColors.foreground}70` }}
          >
            A showcase of my projects across different categories, each crafted
            with attention to detail and purpose
          </p>
        </motion.div>

        <div className="space-y-24">
          {categories.map((category, categoryIndex) => (
            <CategorySection
              key={category.title}
              category={category}
              themeColors={themeColors}
              index={categoryIndex}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

interface CategorySectionProps {
  category: Category;
  themeColors: {
    background: string;
    foreground: string;
    accent: string;
    textGradient: string;
  };
  index: number;
}

function CategorySection({
  category,
  themeColors,
  index,
}: CategorySectionProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-slide between projects
  useEffect(() => {
    if (!isHovering) {
      const timer = setTimeout(() => {
        setCurrentProjectIndex((prevIndex) =>
          prevIndex === category.projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // 4 second intervals

      return () => clearTimeout(timer);
    }
  }, [currentProjectIndex, isHovering, category.projects.length]);

  const currentProject = category.projects[currentProjectIndex];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: category.layout === "left" ? -30 : 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: category.layout === "left" ? 30 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Category Title */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-2xl md:text-3xl font-medium text-left mb-2"
          style={{ color: themeColors.foreground }}
        >
          {category.title}
        </h3>
        <div
          className="w-20 h-1 rounded-full"
          style={{ backgroundColor: themeColors.accent }}
        />
      </motion.div>

      {/* Project Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Image Section */}
        <motion.div
          className={`relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-2xl ${
            category.layout === "right" ? "lg:order-2" : "lg:order-1"
          }`}
          variants={imageVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={currentProject.image}
                alt={`${currentProject.title} showcase`}
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Project indicator dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {category.projects.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentProjectIndex
                    ? "w-6 bg-white"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => setCurrentProjectIndex(idx)}
              />
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className={`flex flex-col justify-center ${
            category.layout === "right"
              ? "lg:order-1 lg:pr-8"
              : "lg:order-2 lg:pl-8"
          }`}
          variants={contentVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="text-sm font-medium tracking-wider mb-3 block"
                style={{ color: themeColors.accent }}
              >
                Project {currentProject.id.toString().padStart(2, "0")}
              </span>

              <h4
                className="text-2xl md:text-3xl font-medium mb-4"
                style={{ color: themeColors.foreground }}
              >
                {currentProject.title}
              </h4>

              <p
                className="text-base md:text-lg mb-6 leading-relaxed"
                style={{ color: `${themeColors.foreground}80` }}
              >
                {currentProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                    className="px-3 py-1 text-sm rounded-full border"
                    style={{
                      backgroundColor: `${themeColors.accent}10`,
                      borderColor: `${themeColors.accent}30`,
                      color: themeColors.accent,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-6">
                <motion.a
                  href={currentProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                  style={{ color: themeColors.foreground }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span>Live Demo</span>
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.a>

                <motion.a
                  href={currentProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                  style={{ color: themeColors.foreground }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span>Source Code</span>
                  <Github
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-full max-w-xs mx-auto">
        <div
          className="h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: `${themeColors.accent}20` }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: themeColors.accent }}
            initial={{ width: "0%" }}
            animate={{
              width: `${
                ((currentProjectIndex + 1) / category.projects.length) * 100
              }%`,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
