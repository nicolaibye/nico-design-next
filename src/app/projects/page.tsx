import ProjectNav from "../comp/projects/ProjectNav";
import { portfolioProjectsData } from "../../data/portfolioProjectsDataNew";
import ProjectCard from "../comp/projects/ProjectCard";

const Project = () => {
  return (
    <>
      <h1 className="visually-hidden">Projects Page</h1>
      <ProjectNav />
      <div className="my-[25vh] w-full flex flex-col justify-center items-center">
        <ul className="flex flex-col gap-40 w-full h-auto max-w-6xl px-10 sm:px-16">
          {portfolioProjectsData.map((project, index) => (
            <li key={project.href} className="mx-auto">
              <ProjectCard project={project} reverse={index % 2 !== 0} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Project;
