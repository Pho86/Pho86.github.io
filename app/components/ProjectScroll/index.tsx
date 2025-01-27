"use client";
import {
  motion,
} from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "@/app/utils/types";
import IconButton from "../IconButton";
interface ProjectEntry {
  title: string;
  item: Project;
  content: React.ReactNode;
}

export default function ProjectScroll({ data }: { data: ProjectEntry[] }) {

  return (
    <div className="w-full">
      <div className="relative flex flex-col gap-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start md:pt-16 gap-10"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block sticky hidden flex-col justify-center top-40 self-start max-w-xs lg:max-w-xs md:w-full">
              <h3 className="hidden md:block text-5xl font-semibold text-primary-950 ">
                {item.title}
              </h3>
              <div className="flex gap-4 mt-2 font-bold text-4xl items-center">
                <IconButton target="_blank" href={item.item.github}>
                  <FaGithub />
                </IconButton>
                <IconButton target="_blank" href={item.item.external}>
                  <FiExternalLink />
                </IconButton>
              </div>
            </div>

            <div className="relative w-full">{item.content} </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
