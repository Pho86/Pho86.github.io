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
  const [signatureEnded, setSignatureEnded] = useState(false);

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
            (!signatureEnded ? "bg-bg-primary" : "")
        )}
      >
        <div className="w-full flex max-w-screen-xl">
          <nav
            className={
              signatureEnded
                ? "w-full justify-center flex py-2"
                : "py-2 max-w-screen-xl flex justify-center w-full"
            }
          >
            <motion.div
              className={
                signatureEnded
                  ? `flex bg-bg-primary rounded-xl gap-4 max-w-screen-xl w-full px-6 lg:px-4 drop-shadow-sm justify-between h-max pointer-events-auto`
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
                <ul className="w-full flex justify-end items-center gap-2">
                  {["About", "Projects", "Contact"].map((item, index) => (
                    <NavBarItem key={index} index={index} name={item} />
                  ))}
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
      transition={{ duration: 0.6, delay: .4 + index * 0.25 }}
    >
      {name}
    </motion.li>
  );
}
