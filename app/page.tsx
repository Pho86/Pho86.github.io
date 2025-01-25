"use client";
import HeroSection from "./components/HeroSection";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import HobbiesSection from "./components/HobbiesSection";
export default function Home() {
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
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
