/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const { themeColors } = useTheme();
  const [activeService, setActiveService] = useState<number>(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.section
      className="py-32 px-4 lg:px-20 w-full overflow-hidden relative"
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

      <div className="max-w-full mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="mb-24 text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-normal mb-8 tracking-normal leading-none"
            style={{ color: `${themeColors.foreground}90` }}
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"Services That ".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ duration: 0.5, delay: index * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
            <span
              className={`font-semibold bg-gradient-to-r ${themeColors.textGradient} bg-clip-text text-transparent`}
            >
              {"Deliver".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ duration: 0.5, delay: (index + 13) * 0.03 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl font-light leading-relaxed"
            style={{ color: `${themeColors.foreground}70` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Comprehensive frontend solutions designed to elevate your digital
            presence and drive meaningful business results.
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Services List with Left/Right Navigation */}
          <div className="relative">
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
          <div className="sticky top-8">
            <AnimatePresence mode="wait">
              {activeService3D && (
                <motion.div
                  key={activeService3D.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-8 md:p-12 border backdrop-blur-sm relative overflow-hidden"
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
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xl font-light mb-12"
            style={{ color: `${themeColors.foreground}70` }}
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
          >
            {"Ready to transform your digital presence?"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>

          <motion.button
            className="group relative px-12 py-6 rounded-xl font-light text-xl overflow-hidden border backdrop-blur-sm"
            style={{
              backgroundColor: "transparent",
              borderColor: themeColors.accent,
              color: themeColors.foreground,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ backgroundColor: themeColors.accent }}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-400">
              Let's Start Your Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
