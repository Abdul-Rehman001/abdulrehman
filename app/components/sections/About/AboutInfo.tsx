"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, MotionValue } from "framer-motion";

interface IntroSectionProps {
  themeColors: {
    foreground: string;
    accent: string;
    textGradient: string;
    background: string; // Primary background
    backgroundAlt: string; // Alternate background
  };
  scrollYProgress: MotionValue<number>;
  usePrimaryBackground?: boolean; // Flag to determine which background to use
}

export default function AboutInfo({
  themeColors,
  usePrimaryBackground = false, // Default to primary background
}: IntroSectionProps) {
  const introRef = useRef(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const isIntroInView = useInView(introRef, { once: false, amount: 0.2 });
  const [scrollPosition, setScrollPosition] = useState(0);

  // Text lines with alternating styling
  const textLines = [
    { text: "CRAFTING DIGITAL", italic: false },
    { text: "interfaces that", italic: true },
    { text: "ELEVATE USER", italic: false },
    { text: "experiences with", italic: true },
    { text: "PRECISION & VISION", italic: false },
  ];

  // Simplified scroll handler to avoid transform errors
  useEffect(() => {
    const handleScroll = () => {
      if (textContainerRef.current) {
        const scrollY = window.scrollY;
        const containerTop =
          textContainerRef.current.getBoundingClientRect().top + scrollY;
        const containerHeight = textContainerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate relative position (0 when element enters viewport, 1 when it leaves)
        const relativePosition =
          (scrollY + viewportHeight - containerTop) /
          (containerHeight + viewportHeight);
        setScrollPosition(Math.max(0, Math.min(1, relativePosition)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate text offset based on scroll position with smoother transitions
  const getTextOffset = (index: number) => {
    const direction = index % 2 === 0 ? -1 : 1;
    const baseOffset = 30; // Reduced for smoother movement

    // When scrollPosition is 0.5, offset should be 0
    // As it approaches 0 or 1, offset increases
    const factor = Math.abs(scrollPosition - 0.5) * 2;
    return direction * baseOffset * factor;
  };

  // Determine which background to use based on the flag
  const backgroundStyle = {
    backgroundColor: usePrimaryBackground
      ? themeColors.background
      : themeColors.backgroundAlt,
  };

  return (
    <div
      ref={introRef}
      id="about"
      className="w-full min-h-screen flex flex-col justify-center items-center py-32 px-6 lg:px-20"
      style={backgroundStyle}
    >
      <div ref={textContainerRef} className="space-y-16 max-w-full mx-auto">
        {/* Main headline with smoother text animations */}
        <div className="overflow-hidden">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-wide text-center">
            {textLines.map((line, i) => (
              <motion.div key={i} className="overflow-visible my-6 px-6">
                <motion.span
                  className={`inline-block ${
                    line.italic ? "italic font-normal" : "font-bold"
                  }`}
                  initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                  animate={{
                    x: isIntroInView
                      ? getTextOffset(i)
                      : i % 2 === 0
                      ? -100
                      : 100,
                    opacity: isIntroInView ? 1 : 0,
                  }}
                  transition={{
                    x: { duration: 1.5, ease: "easeOut" },
                    opacity: { duration: 1.8, ease: "easeOut" },
                  }}
                  style={{
                    color: i === 2 ? "transparent" : themeColors.foreground,
                  }}
                >
                  {i === 2 ? (
                    <span
                      className={`bg-gradient-to-r ${themeColors.textGradient} bg-clip-text`}
                    >
                      {line.text}
                    </span>
                  ) : (
                    line.text
                  )}
                </motion.span>
              </motion.div>
            ))}
          </h1>
        </div>

        {/* Animated underline - with slower animation */}
        <div className="flex justify-center">
          <motion.div
            className="h-[3px] rounded-full"
            style={{ backgroundColor: themeColors.accent }}
            initial={{ width: 0 }}
            animate={isIntroInView ? { width: 180 } : { width: 0 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Simple background gradient for depth */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-transparent to-black"></div>
      </div>
    </div>
  );
}
