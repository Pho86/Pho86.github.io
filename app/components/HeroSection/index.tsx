"use client";
import Section from "../Section";
import { motion } from "motion/react";
import { TargetAndTransition, Transition } from "framer-motion";
// import AnimateSignature from "../AnimateSignature";
import { useEffect, useState } from "react";
import AnimateSign from "../AnimateSign";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Squiggle from "../Squiggle";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(ScrollToPlugin);

const handleScroll = (id: string) => () => {
  const element = document.getElementById(id);
  if (element) {
    gsap.to(window, { scrollTo: { y: `#${id}`, offsetY: 100 }, duration: 1 });
  }
};

export default function HeroSection() {
  const [signatureAnimation, setSignatureAnimation] = useState(true);
  const [selectedLink, setSelectedLink] = useState("");
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setSignatureAnimation(false);
    }, 6000);
  }, []);

  return (
    <Section
      className="w-full min-h-[90dvh] md:min-h-[100dvh] h-full flex items-center justify-center overflow-x-hidden"
      id="home"
    >
      <div className="flex h-full gap-5 w-full z-[100] md:z-auto">
        <div className="flex flex-col gap-2 h-full">
            {windowWidth !== null && (
              <motion.div
                initial={{
                  x: windowWidth > 768 ? "65%" : "10%",
                  scale: 1.1,
                  y: windowWidth < 768 ? "15vh" : "5vh",
                }}
                animate={{ x: 0, scale: 1, y: 0 }}
                transition={{ delay: 4, duration: 2 }}
              >
                <AnimateSign text="Hi I'm Philip," />
              </motion.div>
            )}
          <motion.h1
            className="text-3xl md:text-5xl font-medium text-pretty leading-tight -mt-6"
            initial={{ opacity: 0, y: -4, filter: "blur(4px)" }}
            animate={
              signatureAnimation
                ? {}
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            a full-stack developer.
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
            {["/about", "/projects", "/contact"].map((link, index) => (
              <Squiggle
                key={link}
                item={{ name: link, id: link.toLowerCase().substring(1) }}
                index={index}
                isSelected={selectedLink === link}
                animate={
                  signatureAnimation
                    ? {}
                    : {
                        opacity: 1,
                        filter: "blur(0px)",
                      }
                }
                transition={{ duration: 0.7, delay: 1.2 + 0.2 * index }}
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
      {!signatureAnimation && <motion.div
        className="absolute left-0 -bottom-5 lg:left-auto  lg:bottom-auto flex flex-col items-center gap-6 md:gap-12 pointer-events-auto"
        initial={{ x: 0, y: 0 }}
        animate={{ x: "15vw", y: windowWidth && windowWidth < 768 ? "0vh" : "5vh" }}
      >
        <div className="flex justify-center gap-3 md:gap-6 items-center">
          <LogoImage
            src="/logos/typescript.svg"
            className="rotate-6 hover:-rotate-3 "
            alt="TypeScript Logo, click to scroll to technologies section"
            animate={
              signatureAnimation
                ? {}
                : { y: 0, x: 5, opacity: 1, scale: 1, filter: "blur(0px)" }
            }
            transition={{ delay: 2, duration: 0.5 }}
          />
          <LogoImage
            src="/logos/react.svg"
            className="-rotate-3 hover:rotate-3 "
            alt="React.js Logo, click to scroll to technologies section"
            animate={
              signatureAnimation
                ? {}
                : { y: 25, x: 35, opacity: 1, scale: 1, filter: "blur(0px)" }
            }
            transition={{ delay: 2.4, duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between gap-3 md:gap-6 w-full">
          <LogoImage
            src="/logos/prisma.svg"
            className=" -rotate-3 hover:rotate-3 "
            alt="Prisma Logo, click to scroll to technologies section"
            animate={
              signatureAnimation
                ? {}
                : { y: 10, x: 35, opacity: 1, scale: 1, filter: "blur(0px)" }
            }
            transition={{ delay: 2.8, duration: 0.5 }}
          />
          <LogoImage
            src="/logos/nextjs.svg"
            alt="Next.js Logo, click to scroll to technologies section"
            className="rotate-3 hover:-rotate-3 "
            animate={
              signatureAnimation
                ? {}
                : { y: 25, x: 65, opacity: 1, scale: 1, filter: "blur(0px)" }
            }
            transition={{ delay: 3.2, duration: 0.5 }}
          />
        </div>
      </motion.div> }
    </Section>
  );
}

function LogoImage({
  src,
  className,
  animate,
  transition,
  alt,
}: {
  src: string;
  className?: string;
  animate?: TargetAndTransition;
  transition?: Transition;
  alt: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, filter: "blur(4px)" }}
      animate={animate}
      transition={transition}
      onClick={handleScroll("about")}
    >
      <Image
      src={src}
      title={alt}
      alt={alt}
      width={125}
      height={125}
      className={twMerge(
        "p-6 rounded-3xl border bg-bg-light border-bg-primary  shadow hover:shadow-md pb-6 transition-all duration-300 cursor-pointer",
        className
      )}
      />
    </motion.div>
  );
}
