import React from "react";
import { portfolioProjectsData } from "@/data/portfolioProjectsDataNew";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ul className="flex flex-col gap-20 md:gap-30 w-full h-auto max-w-6xl px-5 sm:px-16">
        {portfolioProjectsData.map((project, index) => (
          <li key={project.href} className="mx-auto">
            <ProjectCard project={project} reverse={index % 2 !== 0} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsGrid;
