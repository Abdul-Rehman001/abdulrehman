"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "../layout/themes/ThemeContext";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import {
  projectSummaries,
  getProjectDetails,
  getCategories,
  getProjectsByCategory,
  type ProjectSummary,
  type ProjectDetails,
} from "../../data/workData";

export default function WorkSection() {
  const { themeColors, theme } = useTheme();
  const titleRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.3,
  });

  
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
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const categories = getCategories();

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);

    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = "unset";

    setTimeout(() => {
      setSelectedProject(null);
    }, 900);
  };

  const selectedProjectDetails = selectedProject
    ? getProjectDetails(selectedProject)
    : null;

  return (
    <>
      <motion.section
        id="work"
        className="py-20 px-6 lg:px-20 w-full overflow-x-hidden"
        style={{ backgroundColor: themeColors.background }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
      
          <motion.div
            ref={titleRef}
            className="mb-16 lg:mb-20 overflow-hidden"
          >
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-wide text-left mb-4 sm:mb-6 break-words">
              {"My Work".split("").map((letter, i) => (
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
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl text-left"
              style={{ color: `${themeColors.foreground}80` }}
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A showcase of my projects across different categories, each crafted
              with attention to detail and purpose
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {categories.map((category, categoryIndex) => {
              const projects = getProjectsByCategory(category);
              return (
                <CategorySection
                  key={category}
                  category={category}
                  projects={projects}
                  themeColors={themeColors}
                  index={categoryIndex}
                  onProjectClick={handleProjectClick}
                />
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Project Detail Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        projectDetails={selectedProjectDetails}
        onClose={handleCloseModal}
        themeColors={themeColors}
      />
    </>
  );
}

interface CategorySectionProps {
  category: string;
  projects: ProjectSummary[];
  themeColors: {
    background: string;
    foreground: string;
    accent: string;
    textGradient: string;
  };
  index: number;
  onProjectClick: (projectId: number) => void;
}

function CategorySection({
  category,
  projects,
  themeColors,
  index,
  onProjectClick,
}: CategorySectionProps) {
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

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
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
          {category}
        </h3>
        <div
          className="w-20 h-1 rounded-full"
          style={{ backgroundColor: themeColors.accent }}
        />
      </motion.div>

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((project, projectIndex) => {
          const layout = projectIndex % 2 === 0 ? "left" : "right";
          return (
            <ProjectCard
              key={project.id}
              project={project}
              layout={layout}
              themeColors={themeColors}
              onClick={() => onProjectClick(project.id)}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

interface ProjectCardProps {
  project: ProjectSummary;
  layout: "left" | "right";
  themeColors: {
    background: string;
    foreground: string;
    accent: string;
  };
  onClick: () => void;
}

function ProjectCard({
  project,
  layout,
  themeColors,
  onClick,
}: ProjectCardProps) {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: layout === "left" ? -30 : 30,
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
    hidden: { opacity: 0, x: layout === "left" ? 30 : -30 },
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
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <motion.div
        className={`relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-2xl ${
          layout === "right" ? "lg:order-2" : "lg:order-1"
        }`}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <span
            className="text-4xl font-bold opacity-20"
            style={{ color: themeColors.foreground }}
          >
            {project.title}
          </span>
        </div>
        {/* Placeholder - will be replaced with actual image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`flex flex-col justify-center ${
          layout === "right"
            ? "lg:order-1 lg:pr-8"
            : "lg:order-2 lg:pl-8"
        }`}
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span
          className="text-sm font-medium tracking-wider mb-3 block"
          style={{ color: themeColors.accent }}
        >
          Project {project.id.toString().padStart(2, "0")}
        </span>

        <h4
          className="text-2xl md:text-3xl font-medium mb-4 group-hover:opacity-80 transition-opacity"
          style={{ color: themeColors.foreground }}
        >
          {project.title}
        </h4>

        <p
          className="text-base md:text-lg mb-6 leading-relaxed"
          style={{ color: `${themeColors.foreground}80` }}
        >
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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

        <motion.div
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: themeColors.accent }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <span>View Details</span>
          <ExternalLink size={16} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface ProjectModalProps {
  isOpen: boolean;
  projectDetails: ProjectDetails | null | undefined;
  onClose: () => void;
  themeColors: {
    background: string;
    backgroundAlt: string;
    foreground: string;
    accent: string;
    menuLayerPrimary: string;
    menuLayerSecondary: string;
    menuLayerTertiary: string;
  };
}

function ProjectModal({
  isOpen,
  projectDetails,
  onClose,
  themeColors,
}: ProjectModalProps) {
  // Layer animation variants - bottom to top (reverse of loading screen)
  const primaryLayerVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: "100%",
      transition: {
        duration: 0.9,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const secondaryLayerVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: "100%",
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const tertiaryLayerVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: "100%",
      transition: {
        duration: 0.9,
        delay: 0,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.3 },
    },
  };

  if (!projectDetails) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Layer 1 (Primary - Background) */}
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: themeColors.menuLayerPrimary }}
            variants={primaryLayerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="primary-layer"
          />

          {/* Layer 2 (Secondary) */}
          <motion.div
            className="fixed inset-0 z-[101]"
            style={{ backgroundColor: themeColors.menuLayerSecondary }}
            variants={secondaryLayerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="secondary-layer"
          />

          {/* Layer 3 (Tertiary - Content Layer) */}
          <motion.div
            className="fixed inset-0 z-[102] flex flex-col"
            style={{
              backgroundColor: themeColors.menuLayerTertiary,
              height: "85%",
              top: "15%",
            }}
            variants={tertiaryLayerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="tertiary-layer"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
              style={{ color: themeColors.foreground }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {/* Content */}
            <motion.div
              className="flex-1 overflow-y-auto px-6 lg:px-20 py-12"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="max-w-7xl mx-auto">
                {/* Project Title */}
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                  style={{ color: themeColors.foreground }}
                >
                  {projectDetails.title}
                </motion.h1>

                {/* Overview */}
                <motion.div className="mb-12">
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: themeColors.foreground }}
                  >
                    Overview
                  </h2>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: `${themeColors.foreground}CC` }}
                  >
                    {projectDetails.overview}
                  </p>
                </motion.div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <motion.div>
                    <h2
                      className="text-xl font-bold mb-3"
                      style={{ color: themeColors.foreground }}
                    >
                      The Problem
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: `${themeColors.foreground}AA` }}
                    >
                      {projectDetails.problem}
                    </p>
                  </motion.div>
                  <motion.div>
                    <h2
                      className="text-xl font-bold mb-3"
                      style={{ color: themeColors.foreground }}
                    >
                      The Solution
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: `${themeColors.foreground}AA` }}
                    >
                      {projectDetails.solution}
                    </p>
                  </motion.div>
                </div>

                {/* What I Built */}
                <motion.div className="mb-12">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: themeColors.foreground }}
                  >
                    What I Built
                  </h2>
                  <ul className="space-y-3">
                    {projectDetails.whatIBuilt.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                      >
                        <span
                          className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: themeColors.accent }}
                        />
                        <p
                          className="text-base leading-relaxed flex-1"
                          style={{ color: `${themeColors.foreground}CC` }}
                        >
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Key Features */}
                <motion.div className="mb-12">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: themeColors.foreground }}
                  >
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectDetails.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.05 }}
                      >
                        <span
                          className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: themeColors.accent }}
                        />
                        <p
                          className="text-base"
                          style={{ color: `${themeColors.foreground}CC` }}
                        >
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technical Highlights */}
                <motion.div className="mb-12">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: themeColors.foreground }}
                  >
                    Technical Highlights
                  </h2>
                  <ul className="space-y-3">
                    {projectDetails.technicalHighlights.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.05 }}
                      >
                        <span
                          className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: themeColors.accent }}
                        />
                        <p
                          className="text-base leading-relaxed flex-1"
                          style={{ color: `${themeColors.foreground}CC` }}
                        >
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Impact & Results */}
                <motion.div className="mb-12">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: themeColors.foreground }}
                  >
                    Impact & Results
                  </h2>
                  <ul className="space-y-3">
                    {projectDetails.impactResults.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 + index * 0.05 }}
                      >
                        <span
                          className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: themeColors.accent }}
                        />
                        <p
                          className="text-base leading-relaxed flex-1"
                          style={{ color: `${themeColors.foreground}CC` }}
                        >
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies & Role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t"
                  style={{ borderColor: `${themeColors.foreground}15` }}
                >
                  <motion.div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ color: themeColors.foreground }}
                    >
                      Technologies Used
                    </h3>
                    <p
                      className="text-base"
                      style={{ color: `${themeColors.foreground}AA` }}
                    >
                      {projectDetails.technologiesUsed}
                    </p>
                  </motion.div>
                  <motion.div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ color: themeColors.foreground }}
                    >
                      My Role
                    </h3>
                    <p
                      className="text-base"
                      style={{ color: `${themeColors.foreground}AA` }}
                    >
                      {projectDetails.myRole}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
