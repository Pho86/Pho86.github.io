"use client";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import ProjectTags from "../ProjectTags";
import IconButton from "../IconButton";
export default function ProjectCard({
  title,
  description,
  tags,
  external,
  github,
//   href,
  projectname,
  mockup,
}: {
  title: string;
  description: string;
  tags?: string[];
  github: string;
  external: string;
  href: string;
  projectname: string;
  mockup: string;
}) {
  return (
    <div className={twMerge("flex gap-3 group flex-col ")}>
      <Link
        href={external}
        target={"_blank"}
        className="overflow-hidden transition-all duration-200 rounded-xl"
      >
        <Image
          width={1080}
          height={720}
          alt={`Mockup Design for the project of ${title}, click to view more details`}
          src={`/projects/${projectname}${mockup}`}
          className="w-full transition-all duration-200 hover:scale-[103%] object-cover"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="">
            <Link href={github} className="w-full flex">
              {/* <Link href={href} className="w-full flex"> */}
              <h3 className="transition-all text-3xl font-bold hover:text-primary-600">
                {title}
              </h3>
            </Link>
          </div>
          <div className="flex gap-2 font-bold text-3xl items-center">
            <IconButton target="_blank" href={github}>
              <FaGithub />
            </IconButton>
            <IconButton target="_blank" href={external}>
              <FiExternalLink />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-full justify-between">
          <p>{description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <ProjectTags text={tags} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
