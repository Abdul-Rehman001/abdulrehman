"use client";
import { useTheme } from "../layout/themes/ThemeContext";
import AboutInfo from "./About/AboutInfo";
import JourneySection from "./About/MyJourney";
import WhoAmISection from "./About/WhoAmI";
import { motion, useScroll } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useScroll();

  // Define theme colors that will be consistent across all sections
  const { themeColors } = useTheme();

  return (
    <motion.div className="w-full">
      {/* About Info Section */}
      <AboutInfo themeColors={themeColors} scrollYProgress={scrollYProgress} />

      {/* Who Am I Section */}
      <WhoAmISection themeColors={themeColors} />
      {/* Journey Section */}
      <JourneySection themeColors={themeColors} />
    </motion.div>
  );
}
