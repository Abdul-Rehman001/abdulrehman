"use client";

import React from "react";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WorkSection from "./components/sections/Work";
import ServicesSection from "./components/sections/Services";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <WorkSection />
      <ServicesSection />
    </>
  );
}
