import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiGit,
  SiExpress,
  SiPython,
} from "react-icons/si";

export interface SkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Languages" | "Tools";
  icon: React.ReactNode;
  description: string;
  yearsExp: string;
  proficiency: number; // 1-100
  color: string;
  featured?: boolean;
}

export const skillsData: SkillItem[] = [
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    icon: <SiReact size={32} />,
    description:
      "Advanced component architecture, hooks, context, and state management patterns",
    yearsExp: "1+ Years",
    proficiency: 90,
    color: "#61DAFB",
    featured: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs size={28} />,
    description: "SSR, SSG, App Router & performance optimization",
    yearsExp: "1+ Years",
    proficiency: 85,
    color: "#000000",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Languages",
    icon: <SiTypescript size={28} />,
    description: "Type-safe development & advanced patterns",
    yearsExp: "1+ Years",
    proficiency: 88,
    color: "#3178C6",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss size={28} />,
    description: "Utility-first styling & custom design systems",
    yearsExp: "1+ Years",
    proficiency: 92,
    color: "#06B6D4",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Languages",
    icon: <SiJavascript size={28} />,
    description: "ES6+, async patterns & modern JS",
    yearsExp: "1+ Years",
    proficiency: 87,
    color: "#F7DF1E",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: <SiNodedotjs size={28} />,
    description: "Server-side development & API creation",
    yearsExp: "1+ Years",
    proficiency: 82,
    color: "#339933",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Backend",
    icon: <SiMongodb size={28} />,
    description: "NoSQL database design & optimization",
    yearsExp: "1+ Years",
    proficiency: 78,
    color: "#47A248",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Tools",
    icon: <SiFigma size={28} />,
    description: "UI/UX design & prototyping",
    yearsExp: "1+ Years",
    proficiency: 85,
    color: "#F24E1E",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    icon: <SiGit size={28} />,
    description: "Version control & workflows",
    yearsExp: "1+ Years",
    proficiency: 80,
    color: "#F05032",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress size={28} />,
    description: "RESTful APIs & middleware",
    yearsExp: "1+ Years",
    proficiency: 83,
    color: "#000000",
  },
  {
    id: "python",
    name: "Python",
    category: "Languages",
    icon: <SiPython size={28} />,
    description: "Automation & backend integration",
    yearsExp: "1+ Years",
    proficiency: 75,
    color: "#3776AB",
  },
];

export const experienceStats = [
  { label: "Years Coding", value: "3+" },
  { label: "Technologies", value: skillsData.length.toString() },
  { label: "Projects Built", value: "15+" },
  { label: "Code Commits", value: "2K+" },
];
