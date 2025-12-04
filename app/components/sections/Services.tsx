/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "../layout/themes/ThemeContext";
import {
  Code2,
  Palette,
  Zap,
  Globe,
  Layers,
  Database,
  Server,
  Brush,
  Sparkles,
  Rocket,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  tech?: string;
  clientType?: string;
  result?: string;
  number: string;
  fontStyle?: "normal" | "italic" | "bold" | "semibold" | "light";
}

export default function ServicesSection() {
  const { themeColors, theme } = useTheme();
  const [activeService, setActiveService] = useState<number>(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.3,
  });

  const [currentPage, setCurrentPage] = useState(0);

  const services: Service[] = [
    {
      id: 1,
      number: "01",
      title: "Custom Website Development",
      subtitle: "Modern web experiences that convert",
      description:
        "I craft responsive, high-performance websites tailored to your business needs. From sleek landing pages to complex web applications, every project is built with modern technologies and best practices.",
      icon: <Code2 size={24} />,
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Cross-browser Compatible",
      ],
      tech: "Next.js, React, Tailwind CSS",
      result: "Professional web presence",
      fontStyle: "bold",
    },
    {
      id: 2,
      number: "02",
      title: "UI/UX Implementation",
      subtitle: "Pixel-perfect design to code",
      description:
        "Transform your designs into flawless, interactive experiences. I specialize in converting Figma, Adobe XD, and Sketch designs into clean, maintainable code with attention to every detail.",
      icon: <Palette size={24} />,
      features: [
        "Figma to Code",
        "Design Systems",
        "Component Libraries",
        "Responsive Layouts",
      ],
      clientType: "Designers & Agencies",
      result: "Seamless design implementation",
      fontStyle: "italic",
    },
    {
      id: 3,
      number: "03",
      title: "Web Application Front-End",
      subtitle: "Interactive user interfaces",
      description:
        "Build powerful, interactive web applications with smooth user experiences. From dashboards to complex SPAs, I create interfaces that are both beautiful and functional.",
      icon: <Globe size={24} />,
      features: [
        "Single Page Apps",
        "Admin Dashboards",
        "Interactive Forms",
        "Real-time Updates",
      ],
      tech: "React, TypeScript, Redux",
      result: "Enhanced user engagement",
      fontStyle: "semibold",
    },
    {
      id: 4,
      number: "04",
      title: "Performance Optimization",
      subtitle: "Lightning-fast web experiences",
      description:
        "Optimize your website's performance to achieve perfect Lighthouse scores. I focus on Core Web Vitals, loading speeds, and overall user experience improvements.",
      icon: <Zap size={24} />,
      features: [
        "Core Web Vitals",
        "Image Optimization",
        "Code Splitting",
        "Caching Strategies",
      ],
      result: "90+ Lighthouse scores, Better SEO rankings",
      fontStyle: "light",
    },
    {
      id: 5,
      number: "05",
      title: "Design Systems & Libraries",
      subtitle: "Scalable component ecosystems",
      description:
        "Create comprehensive design systems and component libraries that ensure consistency across your products while accelerating development workflows.",
      icon: <Layers size={24} />,
      features: [
        "Component Libraries",
        "Design Tokens",
        "Documentation",
        "Version Control",
      ],
      clientType: "Growing teams & enterprises",
      result: "Faster development cycles",
      fontStyle: "normal",
    },
    {
      id: 6,
      number: "06",
      title: "CMS Integration",
      subtitle: "Content management made simple",
      description:
        "Integrate headless CMS solutions that give you full control over your content while maintaining exceptional performance and developer experience.",
      icon: <Database size={24} />,
      features: [
        "Headless CMS",
        "Content APIs",
        "Admin Dashboards",
        "Multi-language Support",
      ],
      tech: "Sanity, Strapi, Directus",
      clientType: "Content-heavy websites",
      fontStyle: "bold",
    },
    {
      id: 7,
      number: "07",
      title: "API Integration & Data",
      subtitle: "Seamless data connectivity",
      description:
        "Connect your frontend to any backend service or API. I handle everything from REST to GraphQL integrations with proper error handling and data management.",
      icon: <Server size={24} />,
      features: [
        "REST & GraphQL",
        "Real-time Data",
        "Error Handling",
        "Data Caching",
      ],
      tech: "Firebase, Supabase, Custom APIs",
      result: "Reliable data flow",
      fontStyle: "italic",
    },
    {
      id: 8,
      number: "08",
      title: "Website Redesign",
      subtitle: "Modernize your digital presence",
      description:
        "Transform outdated websites into modern, conversion-focused experiences. I migrate legacy systems to current technologies while preserving your brand identity.",
      icon: <Brush size={24} />,
      features: [
        "Legacy Migration",
        "Modern Frameworks",
        "Brand Consistency",
        "SEO Preservation",
      ],
      result: "Fresh, modern brand image",
      fontStyle: "semibold",
    },
    {
      id: 9,
      number: "09",
      title: "Animations & Interactions",
      subtitle: "Engaging micro-experiences",
      description:
        "Add life to your interfaces with carefully crafted animations and micro-interactions that enhance usability and create memorable user experiences.",
      icon: <Sparkles size={24} />,
      features: [
        "Scroll Animations",
        "Hover Effects",
        "Page Transitions",
        "Loading States",
      ],
      tech: "Framer Motion, GSAP",
      clientType: "Premium brands",
      fontStyle: "light",
    },
    {
      id: 10,
      number: "10",
      title: "Deployment & Hosting",
      subtitle: "Reliable, scalable infrastructure",
      description:
        "Get your projects live with optimized hosting solutions. I handle deployment, domain setup, SSL certificates, and ongoing maintenance support.",
      icon: <Rocket size={24} />,
      features: [
        "Automated Deployment",
        "CDN Integration",
        "SSL Setup",
        "Performance Monitoring",
      ],
      tech: "Vercel, Netlify, AWS",
      result: "99.9% uptime guarantee",
      fontStyle: "normal",
    },
  ];

  const servicesPerPage = 5;
  const totalPages = Math.ceil(services.length / servicesPerPage);

  const canGoLeft = currentPage > 0;
  const canGoRight = currentPage < totalPages - 1;

  const goLeft = () => {
    if (canGoLeft) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goRight = () => {
    if (canGoRight) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const startIndex = currentPage * servicesPerPage;
  const endIndex = Math.min(startIndex + servicesPerPage, services.length);
  const displayedServices = services.slice(startIndex, endIndex);

  // Make sure activeService is within the current page, if not set to first service of current page
  React.useEffect(() => {
    const currentPageServiceIds = displayedServices.map((s) => s.id);
    if (!currentPageServiceIds.includes(activeService)) {
      setActiveService(displayedServices[0]?.id || 1);
    }
  }, [currentPage, displayedServices, activeService]);

  const activeService3D = services.find((s) => s.id === activeService);

  const getFontWeight = (fontStyle?: string) => {
    switch (fontStyle) {
      case "light":
        return "font-light";
      case "normal":
        return "font-normal";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      case "italic":
        return "font-normal italic";
      default:
        return "font-medium";
    }
  };

  // Letter animation variants for heading (matching About section style)
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

  return (
    <motion.section
      id="services"
      className="py-16 sm:py-24 lg:py-32 px-6 lg:px-20 w-full overflow-hidden relative"
      style={{ backgroundColor: themeColors.backgroundAlt }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${themeColors.accent} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header - Left aligned matching About section */}
        <motion.div
          ref={titleRef}
          className="mb-12 sm:mb-16 lg:mb-20 overflow-hidden"
        >
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-wide text-left mb-4 sm:mb-6 break-words">
            {"Services".split("").map((letter, i) => (
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
            Comprehensive frontend solutions designed to elevate your digital
            presence and drive meaningful business results.
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-start w-full">
          {/* Services List with Left/Right Navigation */}
          <div className="relative w-full min-w-0">
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mb-6">
              <span
                className="text-sm font-mono tracking-wider opacity-50"
                style={{ color: themeColors.foreground }}
              >
                {String(startIndex + 1).padStart(2, "0")} -{" "}
                {String(endIndex).padStart(2, "0")} of{" "}
                {String(services.length).padStart(2, "0")}
              </span>

              <div className="flex gap-2">
                <motion.button
                  onClick={goLeft}
                  disabled={!canGoLeft}
                  className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 disabled:opacity-30"
                  style={{
                    borderColor: `${themeColors.accent}40`,
                    backgroundColor: canGoLeft
                      ? `${themeColors.accent}10`
                      : "transparent",
                    color: themeColors.accent,
                  }}
                  whileHover={canGoLeft ? { scale: 1.1 } : {}}
                  whileTap={canGoLeft ? { scale: 0.95 } : {}}
                >
                  <ChevronLeft size={16} />
                </motion.button>

                <motion.button
                  onClick={goRight}
                  disabled={!canGoRight}
                  className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 disabled:opacity-30"
                  style={{
                    borderColor: `${themeColors.accent}40`,
                    backgroundColor: canGoRight
                      ? `${themeColors.accent}10`
                      : "transparent",
                    color: themeColors.accent,
                  }}
                  whileHover={canGoRight ? { scale: 1.1 } : {}}
                  whileTap={canGoRight ? { scale: 0.95 } : {}}
                >
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>

            {/* Services Container */}
            <div className="relative min-h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-0 w-full"
                >
                  {displayedServices.map((service, index) => (
                    <div
                      key={service.id}
                      className={`group cursor-pointer transition-all duration-300 p-6 ${
                        index < displayedServices.length - 1 ? "border-b" : ""
                      } ${
                        activeService === service.id
                          ? "bg-opacity-20 border-opacity-60"
                          : hoveredCard === service.id
                          ? "bg-opacity-10 border-opacity-30"
                          : "border-opacity-10"
                      }`}
                      style={{
                        borderColor:
                          activeService === service.id
                            ? themeColors.accent
                            : `${themeColors.foreground}20`,
                        backgroundColor:
                          activeService === service.id
                            ? `${themeColors.accent}50`
                            : hoveredCard === service.id
                            ? `${themeColors.foreground}03`
                            : `${themeColors.background}40`,
                      }}
                      onClick={() => setActiveService(service.id)}
                      onMouseEnter={() => setHoveredCard(service.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                          <span
                            className="text-sm font-mono tracking-wider opacity-40"
                            style={{ color: themeColors.foreground }}
                          >
                            {service.number}
                          </span>

                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                            style={{
                              backgroundColor:
                                activeService === service.id
                                  ? `${themeColors.accent}25`
                                  : `${themeColors.foreground}10`,
                              color:
                                activeService === service.id
                                  ? themeColors.accent
                                  : themeColors.foreground,
                            }}
                          >
                            {service.icon}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3
                            className={`text-xl md:text-2xl mb-2 group-hover:translate-x-2 transition-transform duration-300 ${getFontWeight(
                              service.fontStyle
                            )}`}
                            style={{ color: themeColors.foreground }}
                          >
                            {service.title}
                          </h3>
                          <p
                            className="text-sm font-light opacity-70"
                            style={{ color: themeColors.foreground }}
                          >
                            {service.subtitle}
                          </p>
                        </div>

                        <div
                          className={`transition-opacity duration-300 ${
                            activeService === service.id ||
                            hoveredCard === service.id
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                          style={{ color: themeColors.accent }}
                        >
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Page Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }, (_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      currentPage === index
                        ? themeColors.accent
                        : `${themeColors.foreground}20`,
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Active Service Detail */}
          <div className="sticky top-8 w-full min-w-0">
            <AnimatePresence mode="wait">
              {activeService3D && (
                <motion.div
                  key={activeService3D.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-6 sm:p-8 md:p-12 border backdrop-blur-sm relative overflow-hidden w-full"
                  style={{
                    backgroundColor: `${themeColors.background}50`,
                    borderColor: `${themeColors.accent}30`,
                  }}
                >
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `linear-gradient(135deg, ${themeColors.accent}20 0%, transparent 50%, ${themeColors.accent}10 100%)`,
                    }}
                  />

                  {/* Service Header */}
                  <div className="mb-8 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${themeColors.accent}25`,
                          color: themeColors.accent,
                        }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        {activeService3D.icon}
                      </motion.div>
                      <span
                        className="text-6xl font-mono font-light opacity-15"
                        style={{ color: themeColors.foreground }}
                      >
                        {activeService3D.number}
                      </span>
                    </div>

                    <motion.h3
                      className={`text-3xl md:text-4xl mb-4 leading-tight ${getFontWeight(
                        activeService3D.fontStyle
                      )}`}
                      style={{ color: themeColors.foreground }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {activeService3D.title}
                    </motion.h3>

                    <motion.p
                      className="text-lg md:text-xl font-light leading-relaxed"
                      style={{ color: `${themeColors.foreground}85` }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {activeService3D.description}
                    </motion.p>
                  </div>

                  {/* Features Grid */}
                  <div className="mb-8 relative z-10">
                    <h4
                      className="text-sm font-medium uppercase tracking-wider mb-4 opacity-60"
                      style={{ color: themeColors.foreground }}
                    >
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeService3D.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          className="flex items-center gap-3"
                        >
                          <Check
                            size={16}
                            style={{ color: themeColors.accent }}
                          />
                          <span
                            className="text-sm font-light"
                            style={{ color: `${themeColors.foreground}80` }}
                          >
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-4 relative z-10">
                    {activeService3D.tech && (
                      <motion.div
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span
                          className="text-xs font-medium uppercase tracking-wider opacity-60 min-w-fit"
                          style={{ color: themeColors.foreground }}
                        >
                          Tech Stack:
                        </span>
                        <span
                          className="text-sm font-light"
                          style={{ color: `${themeColors.foreground}90` }}
                        >
                          {activeService3D.tech}
                        </span>
                      </motion.div>
                    )}

                    {activeService3D.clientType && (
                      <motion.div
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <span
                          className="text-xs font-medium uppercase tracking-wider opacity-60 min-w-fit"
                          style={{ color: themeColors.foreground }}
                        >
                          Perfect for:
                        </span>
                        <span
                          className="text-sm font-light"
                          style={{ color: `${themeColors.foreground}90` }}
                        >
                          {activeService3D.clientType}
                        </span>
                      </motion.div>
                    )}

                    {activeService3D.result && (
                      <motion.div
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span
                          className="text-xs font-medium uppercase tracking-wider opacity-60 min-w-fit"
                          style={{ color: themeColors.foreground }}
                        >
                          Result:
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: themeColors.accent }}
                        >
                          {activeService3D.result}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="mt-32 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xl font-light mb-12"
            style={{ color: `${themeColors.foreground}70` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to transform your digital presence?
          </motion.p>

          <motion.button
            className={`group relative px-8 py-4 rounded-lg font-medium text-base overflow-hidden backdrop-blur-sm flex items-center justify-center gap-2 text-white mx-auto ${
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              className={`absolute inset-0 rounded-lg bg-gradient-to-r ${themeColors.textGradient}`}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-400">
              Let's Start Your Project
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
