import type React from "react";
import type { Metadata } from "next";
import { Urbanist, Satisfy } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/layout/themes/ThemeContext";
import ClientLayoutWrapper from "./components/layout/ClientLayout";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});
const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Abdul Rehman Tahir",
  description:
    "A passionate Front-End Developer crafting responsive, accessible, and user-centric web experiences with React, Next.js, and modern UI design principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${urbanist.className} ${satisfy.variable} tracking-wide overflow-x-hidden`}
      >
        <ThemeProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
