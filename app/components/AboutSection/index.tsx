import Section from "../Section";
import { motion } from "motion/react";
import Link from "next/link";
import TechnologyCloud from "../TechnologySection";
export default function AboutSection() {
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
          enjoy creating projects that solve problems.
        </p>
        <p className="text-pretty">
          Feel free to explore my work on{" "}
          <Link
            href="https://github.com/pho86"
            target={"_blank"}
            className="text-primary-darker font-bold"
          >
            GitHub
          </Link>{" "}
          or reach out via email at{" "}
          <Link
            href="mailto:philip.huyho@gmail.com"
            target={"_blank"}
            className="text-primary-darker font-bold"
          >
            philip.huyho@gmail.com
          </Link>
          . I&apos;m always open to learning about new opportunities, and
          collaborating on creating innovative projects, especially open source.
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
        className="h-[400px] md:h-[400px] w-full"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <TechnologyCloud />
      </motion.div>
    </Section>
  );
}
