"use client";
import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import IconButton from "../IconButton";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const handleScroll = (id: string) => () => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, { scrollTo: { y: `#${id}`, offsetY: 100 }, duration: 1 });
    }
  };
  useEffect(() => {
    function updateTime() {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Vancouver",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat([], options);
      const element = document.getElementById("pst-time");
      if (element) {
        element.textContent = formatter.format(new Date());
      }
    }
    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(intervalId);
  }, []);
  return (
    <motion.footer
      className="w-full flex flex-col gap-6 items-center justify-center bg-primary-100 border-t-2 pt-12 pb-32"
      initial={{ opacity: 0, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-default w-full px-6 lg:px-4">
        <div className="w-full flex flex-col md:flex-row max-w-default items-start gap-4 ">
          <div className="w-full flex flex-col gap-3 ">
            <h4 className="font-bold text-3xl">Philip Ho</h4>
            <blockquote className=" text-primary-600">
              Creating interactive and intuitive adventures digitally. <br />
            </blockquote>
            <div className="flex gap-4">
              <IconButton
                href="https://github.com/pho86"
                target="__blank"
                passHref
              >
                <FaGithub aria-label="Click For Philip Ho's Github" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/philippho/"
                target="__blank"
                passHref
              >
                <FaLinkedin aria-label="Click to Open Philip Ho's Linkedin" />
              </IconButton>
              <IconButton
                href="mailto:philip.huyho@gmail.com"
                target="__blank"
                passHref
              >
                <MdEmail aria-label="Click to email Philip Ho" />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <strong className="font-bold text-primary-600">General</strong>
            <ul className="flex flex-col gap-2">
              <Scroll id="home" onClick={handleScroll("home")}>
                Home
              </Scroll>
              <Scroll id="about" onClick={handleScroll("about")}>
                About
              </Scroll>
              <Scroll id="projects" onClick={handleScroll("projects")}>
                Projects
              </Scroll>
              <Scroll id="hobbies" onClick={handleScroll("hobbies")}>
                Hobbies
              </Scroll>
              <Scroll id="contact" onClick={handleScroll("contact")}>
                Contact
              </Scroll>
            </ul>
          </div>
        </div>

        <div className="max-w-default w-full flex flex-col md:flex-row gap-4 justify-between md:mt-8 ">
          <blockquote className="text-lg">
            &copy; {new Date().getFullYear()} Philip
          </blockquote>
          <div className="text-primary-600 font-bold">
            Current Time (PST):{" "}
            <span id="pst-time" className="font-mono font-normal"></span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

function Scroll({
  children,
  onClick,
  id,
}: {
  children: React.ReactNode;
  onClick?: (id: string) => void;
  id: string;
}) {
  return (
    <li
      className="hover:text-primary-700 hover:font-medium text-primary-600 cursor-pointer transition-all"
      onClick={() => onClick && onClick(id)}
    >
      {children}
    </li>
  );
}
