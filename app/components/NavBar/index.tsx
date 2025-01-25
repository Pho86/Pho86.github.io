"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
        <motion.nav className={"w-full bg-bg-primary border-b-2 justify-center flex py-1"}
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
          <motion.div
            className={`flex max-w-default gap-4 w-full px-6 lg:px-2 drop-shadow-sm justify-between h-max pointer-events-auto`}
          >
            <h2 className="text-2xl font-bold py-3 cursor-pointer">Philip</h2>
            <ul className="w-full flex justify-end items-center gap-8">
              {navigation.map((item, index) => {
                const isSelected = item.name === selectedLink;
                return (
                  <motion.li
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: .05 + 0.1 * index }}
                    key={item.name}
                    className={`relative flex leading-6 no-underline cursor-pointer transition-all hover:text-primary-950 hover:font-bold ${
                      isSelected
                        ? "font-semibold text-primary-700"
                        : "text-primary-500"
                    }`}
                    onClick={() => {
                      setSelectedLink(item.name);
                      handleScroll(item.id)();
                    }}
                  >
                    {item.name}
                    {isSelected ? (
                      <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                        <svg
                          width="45"
                          height="8"
                          viewBox="0 0 37 8"
                          fill="none"
                        >
                          <motion.path
                            d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                            stroke="#757C7C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{
                              strokeDasharray: 84.20591735839844,
                              strokeDashoffset: 84.20591735839844,
                            }}
                            animate={{
                              strokeDashoffset: 0,
                            }}
                            transition={{
                              duration: 1,
                            }}
                          />
                        </svg>
                      </motion.div>
                    ) : null}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </motion.nav>
      </div>
    </>
  );
}
