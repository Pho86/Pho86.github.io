"use client";
import AnimateSignature from "../AnimateSignature";
import { motion } from "motion/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
export default function NavBar({
  setSignatureEnd,
}: {
  setSignatureEnd: (value: boolean) => void;
}) {
  const navigation = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
  ];
  const [signatureEnded, setSignatureEnded] = useState(false);
  const [selectedLink, setSelectedLink] = useState("Home");
  const handleAnimationEnd = () => {
    setTimeout(() => {
      setSignatureEnded(true);
      setSignatureEnd(true);
    }, 4000);
  };

  return (
    <>
      <div
        className={twMerge(
          `fixed w-screen h-screen flex justify-center pointer-events-none top-0 left-0 z-50 ` +
            (!signatureEnded ? "" : "")
        )}
      >
        <div className="w-full flex max-w-default">
          <nav
            className={
              signatureEnded
                ? "w-full justify-center flex py-2"
                : "py-2 max-default flex justify-center w-full"
            }
          >
            <motion.div
              className={
                signatureEnded
                  ? `flex bg-bg-primary rounded-xl gap-4 w-full px-6 lg:px-4 drop-shadow-sm justify-between h-max pointer-events-auto`
                  : "h-full w-full px-6 lg:px-4"
              }
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ x: "50%", y: "50vh" }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
              >
                <motion.span className="cursor-pointer">
                  <AnimateSignature
                    onAnimationEnd={() => handleAnimationEnd()}
                  />
                </motion.span>
              </motion.div>
              {signatureEnded && (
                <ul className="w-full flex justify-end items-center gap-8">
                  {navigation.map((item) => {
                    const isSelected = item.name === selectedLink;
                    return (
                      <li
                        key={item.name}
                        className={`relative flex leading-6 no-underline cursor-pointer ${
                          isSelected
                            ? "font-semibold text-primary-500"
                            : "text-gray-700"
                        }`}
                        onClick={() => setSelectedLink(item.name)}
                      >
                        {item.name}
                        {isSelected ? (
                          <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                            <svg
                              width="37"
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
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          </nav>
        </div>
      </div>
    </>
  );
}

function NavBarItem({ name, index }: { name: string; index: number }) {
  return (
    <motion.li
      className="cursor-pointer px-4 p-2 transition-all hover:bg-primary-200 rounded-xl"
      initial={{ opacity: 0, y: 1, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.25 }}
    >
      {name}
    </motion.li>
  );
}
