"use client";
import HeroSection from "./components/HeroSection";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import Section from "./components/Section";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
export default function Home() {
  useEffect(() => {
    
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const [animation, setAnimation] = useState(true);
  return (
    <main className="flex w-full h-full flex-col gap-12">
      <NavBar setSignatureEnd={() => setAnimation(true)} />
      {animation && (
        <>
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <Section className="my-24 mb-[500px]"></Section>
          <Footer />
        </>
      )}
    </main>
  );
}
