"use client"
import Section from "../Section";
import Button from "../Button";
import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <Section
      className="w-full min-h-[80dvh] md:min-h-[100dvh] h-full justify-start mt-64"
      bg="bg-primary-50"
    >
      <div className="flex h-full gap-5 w-full ">
        <div className="flex flex-col gap-3 h-full">
          <motion.h1
            className="text-5xl font-bold text-pretty leading-tight"
            initial={{ opacity: 0, y: 8, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi I&apos;m Philip <br /> a Full-Stack Developer
          </motion.h1>
          <motion.blockquote initial={{
            opacity: 0,
            y: 8,
          }} whileInView={{
            opacity: 1,
            y: 0,
          }} transition={{
            duration: 0.45,
            delay: 0.6,
          }}>
            Creating interactive and intuitive adventures digitally.
          </motion.blockquote>
          <div className="flex gap-3">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7 }}
            >
              <motion.div>
                <Link href="/">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.8 }}
            >
              <Button primary={false}>Learn More</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
