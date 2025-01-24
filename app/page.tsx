"use client";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const [animation, setAnimation] = useState(false);
  return (
    <main>
      <NavBar setSignatureEnd={() => setAnimation(true)} />
      {animation && (
        <>
          <HeroSection />
          <Section className="py-12" bg="bg-light">
            hello world
          </Section>
        </>
      )}
    </main>
  );
}
