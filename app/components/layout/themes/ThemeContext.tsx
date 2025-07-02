"use client";

import type React from "react";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";

// Define theme types
export type ThemeType = "default" | "light" | "olive" | "velvet";

// Define theme colors with expanded properties for gradients and alternate backgrounds
export const themes = {
  default: {
    background: "#0a0a0a",
    backgroundAlt: "#121212",
    foreground: "#ededed",
    accent: "#00b4d8",
    gradientFrom: "#ffffff",
    gradientTo: "#a1a1aa",
    navBackground: "transparent",
    navScrolledBackground: "rgba(10, 10, 10, 0.8)",
    backgroundGradient: "from-neutral-800 via-black to-neutral-900",
    textGradient: "from-white via-neutral-200 to-neutral-800",
    buttonBorder: "border-neutral-500",
    menuLayerPrimary: "#ffffff",
    menuLayerSecondary: "#6b7280",
    menuLayerTertiary: "#0a0a0a",
  },
  light: {
    background: "#f5f5f5",
    backgroundAlt: "#e5e7eb",
    foreground: "#121212",
    accent: "#2563eb",
    gradientFrom: "#121212",
    gradientTo: "#52525b",
    navBackground: "transparent",
    navScrolledBackground: "rgba(245, 245, 245, 0.8)",
    backgroundGradient: "from-blue-50 via-gray-100 to-sky-100",
    textGradient: "from-blue-900 via-gray-800 to-blue-500",
    buttonBorder: "border-blue-500",
    menuLayerPrimary: "#bfdbfe",
    menuLayerSecondary: "#93c5fd",
    menuLayerTertiary: "#f5f5f5",
  },
  olive: {
    background: "#3b4a3f",
    backgroundAlt: "#4a634f",
    foreground: "#f1f5f2",
    accent: "#a3b97b",
    gradientFrom: "#4e5f52",
    gradientTo: "#3b4a3f",
    navBackground: "transparent",
    navScrolledBackground: "rgba(59, 74, 63, 0.85)",
    backgroundGradient: "from-[#556b57] via-[#3e5142] to-[#2f3e34]",
    textGradient: "from-[#e1f4d4] via-[#a3b18a] to-[#6b7f6a]",
    buttonBorder: "border-[#a3b18a]",
    menuLayerPrimary: "#a3b18a",
    menuLayerSecondary: "#8a9e78",
    menuLayerTertiary: "#3b4a3f",
  },
  velvet: {
    background: "#3a1f1f",
    backgroundAlt: "#4b2a30",
    foreground: "#fef4ea",
    accent: "#f29e85",
    gradientFrom: "#5a2e35",
    gradientTo: "#3a1f24",
    navBackground: "transparent",
    navScrolledBackground: "rgba(58, 31, 36, 0.85)",
    backgroundGradient: "from-[#5a2e35] via-[#442026] to-[#2e1417]",
    textGradient: "from-[#fef4ea] via-[#f5d6c6] to-[#d1a398]",
    buttonBorder: "border-[#f29e85]",
    menuLayerPrimary: "#f5d6c6",
    menuLayerSecondary: "#e4b5a9",
    menuLayerTertiary: "#3a1f24",
  },
};

// Define ThemeColors type explicitly
export type ThemeColors = {
  background: string;
  backgroundAlt: string;
  foreground: string;
  accent: string;
  gradientFrom: string;
  gradientTo: string;
  navBackground: string;
  navScrolledBackground: string;
  backgroundGradient: string;
  textGradient: string;
  buttonBorder: string;
  menuLayerPrimary: string;
  menuLayerSecondary: string;
  menuLayerTertiary: string;
};

// Define theme context type
type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themeColors: ThemeColors;
  isHydrated: boolean;
};

// Create theme context
const ThemeContext = createContext<ThemeContextType>({
  theme: "default",
  setTheme: () => {},
  themeColors: themes.default,
  isHydrated: false,
});

// Theme context provider
type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("default");
  const [themeColors, setThemeColors] = useState(themes.default);
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize theme with local storage when component mounts (client-side only)
  useEffect(() => {
    setIsHydrated(true);

    // Only access localStorage after hydration
    try {
      const storedTheme = localStorage.getItem("theme") as ThemeType;
      if (storedTheme && themes[storedTheme]) {
        setTheme(storedTheme);
      }
    } catch (error) {
      console.warn("Failed to load theme from localStorage:", error);
    }
  }, []);

  // Apply theme to document and set CSS variables
  useEffect(() => {
    const currentTheme = themes[theme];
    setThemeColors(currentTheme);

    // Set CSS variables
    const root = document.documentElement;
    root.style.setProperty("--background", currentTheme.background);
    root.style.setProperty("--background-alt", currentTheme.backgroundAlt);
    root.style.setProperty("--foreground", currentTheme.foreground);
    root.style.setProperty("--accent", currentTheme.accent);
    root.style.setProperty("--gradient-from", currentTheme.gradientFrom);
    root.style.setProperty("--gradient-to", currentTheme.gradientTo);
    root.style.setProperty(
      "--nav-scrolled-bg",
      currentTheme.navScrolledBackground
    );

    // Set body background
    document.body.style.backgroundColor = currentTheme.background;
    document.body.style.color = currentTheme.foreground;

    // Add/remove theme class from body
    document.body.classList.remove(
      "theme-default",
      "theme-light",
      "theme-olive",
      "theme-velvet"
    );
    document.body.classList.add(`theme-${theme}`);

    // Store theme preference (only if hydrated)
    if (isHydrated) {
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error);
      }
    }
  }, [theme, isHydrated]);

  const handleSetTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        themeColors,
        isHydrated,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
