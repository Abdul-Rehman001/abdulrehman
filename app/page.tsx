"use client";

import React from "react";
import { useTheme } from "./components/layout/themes/ThemeContext";
import { useScroll } from "framer-motion";

import Hero from "./components/sections/Hero";
import AboutInfo from "./components/sections/About/AboutInfo";
import WhoAmISection from "./components/sections/About/WhoAmI";
import JourneySection from "./components/sections/About/MyJourney";
import SkillsSection from "./components/sections/Skills";
import WorkSection from "./components/sections/Work";
import ServicesSection from "./components/sections/Services";
import ContactSection from "./components/sections/Contact";

export default function Page() {
  const { themeColors } = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Hero />
      <AboutInfo themeColors={themeColors} scrollYProgress={scrollYProgress} />
      <WhoAmISection themeColors={themeColors} />
      <SkillsSection />
      <JourneySection themeColors={themeColors} />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
