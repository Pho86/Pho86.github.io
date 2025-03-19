"use client";
import HeroSection from "./components/HeroSection";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import HobbiesSection from "./components/HobbiesSection";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      } else {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDarkMode;
      }
    }
    return false; 
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  useEffect(() => {
    const htmlClassList = document.documentElement.classList; 
    if (isDarkMode) {
      htmlClassList.add("dark");
    } else {
      htmlClassList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  

  return (
    <main className="flex w-full h-full flex-col gap-24">
      <NavBar
        onChangeDarkMode={() => {
          setIsDarkMode(!isDarkMode);
        }}
      />
      <HeroSection />
      <AboutSection isDarkMode={isDarkMode} />
      <ProjectSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
