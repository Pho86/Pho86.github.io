"use client"
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import {motion} from "motion/react";

export default function Footer() {
    return (
      <motion.footer className="w-full flex flex-col md:flex-row gap-6 justify-center bg-primary-100 border-t-2 pt-8  px-4 pb-12 "
        initial={{ opacity: 0, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-default w-full flex flex-col gap-3 ">
          <h4 className="font-bold text-3xl">Philip Ho</h4>
          <blockquote className=" text-primary-600">
            Creating interactive and intuitive adventures digitally. <br />
            Developed and designed by Philip &copy; {new Date().getFullYear()}{" "}
          </blockquote>
          <div className="flex gap-4">
            <Link href="https://github.com/pho86" target="__blank" passHref>
              <FaGithub
                className="text-4xl hover:text-primary-600 transition-all hover:drop-shadow-primary"
                aria-label="Click For Philip Ho's Github"
                title="Click For Philip Ho's Github"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/philippho/"
              target="__blank"
              passHref
            >
              <FaLinkedin
                className="text-4xl hover:text-primary-600 transition-all hover:drop-shadow-primary"
                aria-label="Click to Open Philip Ho's Linkedin"
                title="Click to Open Philip Ho's Linkedin"
              />
            </Link>
            <Link
              href="mailto:philip.huyho@gmail.com"
              target="__blank"
              passHref
            >
              <MdEmail
                className="text-4xl hover:text-primary-600 transition-all hover:drop-shadow-primary"
                aria-label="Click to email Philip Ho"
                title="Click to email Philip Ho"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <strong className="font-medium text-primary-600">General</strong>
          <ul className="flex flex-col gap-2">
            <Scroll>Home</Scroll>
            <Scroll>About</Scroll>
            <Scroll>Projects</Scroll>
          </ul>
        </div>
      </motion.footer>
    );
}


function Scroll({ children }: { children: React.ReactNode }) {
    return <li className="hover:text-primary-600 cursor-pointer transition-all">
        {children}
    </li>
}