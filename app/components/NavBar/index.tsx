"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Squiggle from "../Squiggle";
gsap.registerPlugin(ScrollToPlugin);

export default function NavBar() {
  const handleScroll = (id: string) => () => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, { scrollTo: { y: `#${id}`, offsetY: 100 }, duration: 1 });
    }
  };
  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
  ];
  const [selectedLink, setSelectedLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";

      navigation.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;

          if (
            scrollPosition >= elementTop &&
            scrollPosition < elementTop + elementHeight
          ) {
            currentSection = section.name;
          }
        }
      });

      setSelectedLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <>
      <div
        className={twMerge(
          `fixed w-screen flex justify-center pointer-events-none top-0 left-0 z-50 `
        )}
      >
        <motion.nav className={"w-full bg-primary-100 border-b-2 justify-center flex py-1"}
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
          <motion.div
            className={`flex max-w-default gap-4 w-full px-6 md:px-2 drop-shadow-sm justify-between h-max pointer-events-auto`}
          >
            <h2 className="text-2xl font-bold py-3 cursor-pointer ">Philip</h2>
            <ul className="w-full flex justify-end items-center gap-8 md:px-2">
              {navigation.map((item, index) => {
                const isSelected = item.name === selectedLink;
                return (
                  <Squiggle
                    item={item}
                    index={index}
                    isSelected={isSelected}
                    setSelectedLink={setSelectedLink}
                    handleScroll={handleScroll}
                    key={index}
                    />
                );
              })}
            </ul>
          </motion.div>
        </motion.nav>
      </div>
    </>
  );
}
