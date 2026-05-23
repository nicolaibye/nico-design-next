import { projectsContent } from "@/data/projectsContent";
import ProjectNav from "../comp/projects/ProjectNav";

const Project = () => {
  return (
    <>
      <h1 className="visually-hidden">Projects Page</h1>
      <ProjectNav info={projectsContent} />
    </>
  );
};

export default Project;
