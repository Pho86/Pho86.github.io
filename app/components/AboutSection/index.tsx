import Section from "../Section";
import { motion } from "motion/react";
import Link from "next/link";
import TechnologyCloud from "../TechnologySection";
export default function AboutSection({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <Section id="about" bg="bg-light" title="About Me" grid="md:grid-cols-2">
      <motion.div
        className="self-baseline relative w-full space-y-2 overflow-hidden"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <p className="text-pretty">
          Hey, I&apos;m Philip, I love developing web and mobile products
          focusing on providing users with seamless and responsive experiences.
          Creating interactive digital products is a passion of mine, and I
          enjoy building a solution to solve problems.
        </p>
        <p className="text-pretty">
          Feel free to explore my work on{" "}
          <Link
            href="https://github.com/pho86"
            target={"_blank"}
            className="text-primary-800 font-bold transition-all hover:text-primary-600"
          >
            GitHub
          </Link>{" "}
          or reach out via email at{" "}
          <Link
            href="mailto:philip.huyho@gmail.com"
            target={"_blank"}
            className="text-primary-800 font-bold transition-all hover:text-primary-600"
          >
            philip.huyho@gmail.com
          </Link>
          . I&apos;m always open to learning about new opportunities, and
          collaborating on creating innovative projects.
        </p>
        <p>
          Some of my favourite technologies currently and ones that I often use,
          can be seen in the model displayed{" "}
          <span className="md:inline-block hidden">on the right.</span>{" "}
          <span className="md:hidden inline-block">below.</span>
        </p>
        <Link href="https://github.com/pho86" target={"_blank"} className="">
          <img
            src={"https://ghchart.rshah.org/409ba5/pho86"}
            width={720}
            height={360}
            alt="GithubChart for Philip Ho"
            className="mt-5 "
          />
        </Link>
      </motion.div>
      <motion.div
        className="h-[400px] md:h-[400px] w-full text-primary-950"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <TechnologyCloud isDarkMode={isDarkMode} />
      </motion.div>
    </Section>
  );
}
