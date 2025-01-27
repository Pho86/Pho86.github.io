"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Section from "../Section";
import { MdEmail } from "react-icons/md";
import ContactForm from "./form";
import { motion } from "motion/react";
import IconButton from "../IconButton";
export default function ContactSection({}: {
  active?: number;
  home?: boolean;
  mode?: string;
}) {
  return (
    <Section title="Contact" id="contact" grid="md:grid-cols-2">
      <motion.div
        className="w-full min-w-[100px] h-full mt-2"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
      >
        <ContactForm />
      </motion.div>
      <motion.div
        className="flex flex-col h-full gap-4"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          If you see a project you&apos;d like to discuss or want to have a chat
          with me, feel free to contact me via any platform or by using the
          contact form provided. I&apos;m always open to building or
          contributing to new projects, including open-source projects!
        </p>
        <div className="flex gap-4">
          <IconButton href="https://github.com/pho86" target="__blank" passHref>
            <FaGithub aria-label="Click For Philip Ho's Github" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/philippho/"
            target="__blank"
            passHref
          >
            <FaLinkedin
              aria-label="Click to Open Philip Ho's Linkedin"
            />
          </IconButton>
          <IconButton
            href="mailto:philip.huyho@gmail.com"
            target="__blank"
            passHref
          >
            <MdEmail
              aria-label="Click to email Philip Ho"
            />
          </IconButton>
        </div>
      </motion.div>
    </Section>
  );
}
