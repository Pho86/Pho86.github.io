"use client";
import Section from "../Section";
import { motion } from "motion/react";
// import AnimateSignature from "../AnimateSignature";
import { useEffect, useState } from "react";
import AnimateSign from "../AnimateSign";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Squiggle from "../Squiggle";
gsap.registerPlugin(ScrollToPlugin);

export default function HeroSection() {
  const [signatureAnimation, setSignatureAnimation] = useState(true);
  const [selectedLink, setSelectedLink] = useState("");
  const handleScroll = (id: string) => () => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, { scrollTo: { y: `#${id}`, offsetY: 100 }, duration: 1 });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setSignatureAnimation(false);
      // }, 7400);
    }, 1000);
  }, []);

  return (
    <Section
      className="w-full min-h-[80dvh] md:min-h-[100dvh] h-full flex items-center justify-center overflow-hidden"
      bg="bg-primary-50"
      id="home"
    >
      <div className="flex h-full gap-5 w-full ">
        <div className="flex flex-col gap-2 h-full">
          <motion.div
            initial={{ x: "50%", scale: 1.1, y: "5vh" }}
            animate={{ x: 0, scale: 1, y: 0 }}
            transition={{ delay: 4, duration: 2.5 }}
          >
            <AnimateSign text="Hi I'm Philip," />
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-pretty leading-tight -mt-6"
            initial={{ opacity: 0, y: -4, filter: "blur(4px)" }}
            animate={
              signatureAnimation
                ? {}
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            a Full-Stack Developer
          </motion.h1>
          <motion.blockquote
            initial={{
              opacity: 0,
              y: -4,
              filter: "blur(4px)",
            }}
            animate={
              signatureAnimation
                ? {}
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className=""
          >
            Creating interactive and intuitive adventures digitally.
          </motion.blockquote>
          <motion.ul
            className="flex gap-3"
            initial={{ opacity: 0, y: -4, filter: "blur(4px)" }}
            animate={
              signatureAnimation
                ? {}
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            {["/About", "/Projects", "/Contact"].map((link, index) => (
              <Squiggle
                key={link}
                item={{ name: link, id: link.toLowerCase().substring(1) }}
                index={index}
                isSelected={selectedLink === link}
                setSelectedLink={(link) => {
                  setSelectedLink(link);
                }}
                handleScroll={handleScroll}
                hero={true}
              />
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}
