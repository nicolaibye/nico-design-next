import React from "react";
import { portfolioProjectsData as projects } from "../../../data/portfolioProjectsData.ts";
import { Lexend } from "next/font/google";
import BentoCard from "./BentoCard.tsx";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const BentoProjects = () => {
  return (
    <ul
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-screen-mobile sm:auto-rows-screen-4 gap-4 p-10 sm:p-16 my-auto ${lexend.variable}`}
    >
      {projects.map((project) => (
        <li key={project.href} className={project.gridClass}>
          <BentoCard project={project} />
        </li>
      ))}
    </ul>
  );
};

export default BentoProjects;
