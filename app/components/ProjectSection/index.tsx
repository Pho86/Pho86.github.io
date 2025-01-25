import React from "react";
import ProjectScroll from "../ProjectScroll";
import Section from "../Section";
import Projects from "../../utils/fetchProject";
import { useLayoutEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import { Project } from "@/app/utils/types";

export default function ProjectDemo() {
  const [projects, setProjects] = useState<Project[]>([]);

  const ProjectPull = async () => {
    const projects = await Projects();
    setProjects(projects);
  };

  useLayoutEffect(() => {
    ProjectPull();
  }, []);

  const mappedProjects = projects.map((project) => ({
    title: project.title,
    item: project,
    content: (
      <ProjectCard
        title={project.title}
        projectname={project.projectname}
        external={project.external}
        mockup={project.mockup}
        href={project.link}
        github={project.github}
        tags={project.tags}
        description={project.description}
      />
    ),
  }));

  return (
    <Section title="Featured Projects" id="projects" className="w-full">
      <ProjectScroll data={mappedProjects} />
    </Section>
  );
}
