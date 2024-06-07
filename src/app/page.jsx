"use client";
import React from "react";
import LandingSection from "./components/LandingSection";
import About from "./components/AboutSection";
import Banner from "./components/BannerSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#e4e7e8] dark:bg-[#1a1a1a] text-black dark:text-white flex flex-col">
      <LandingSection />
      <About />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}
