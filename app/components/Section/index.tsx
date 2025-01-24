"use client"
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
export default function Section({
  children,
  className,
  bg,
  id,
  title,
}: {
  children?: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string;
  title?: string;
}) {
  return (
    <div
      id={id}
      className={twMerge(
        `${
          bg ? bg : ""
        } w-full flex flex-col items-center justify-center gap-3 h-full`
      )}
    >
      <section
        className={twMerge(
          `max-w-screen-lg w-full px-6 lg:px-4 h-full flex flex-col gap-3`,
          className
        )}
      >
        <motion.div
          className=""
          initial={{ opacity: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
        >
          {title && <h2 className="text-3xl font-bold">{title}</h2>}
        </motion.div>
        {children}
      </section>
    </div>
  );
}