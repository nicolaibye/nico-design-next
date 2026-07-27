import { projectsContent } from "@/data/projectsContent";
import ProjectNav from "../comp/projects/ProjectNav";

export const metadata = {
  title: "NICO Design | Projects",
  description:
    "A gathering of some of my latest works within Brand Identity. While showcasing an archive of older non-branding projects.",
  openGraph: {
    title: "NICO Design | Projects",
    description:
      "A gathering of some of my latest works within Brand Identity. While showcasing an archive of older non-branding projects.",
    images: [
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1756059541/preview_image_sxcv3p.jpg",
    ],
  },
};

const Project = () => {
  return (
    <>
      <h1 className="visually-hidden">Projects Page</h1>
      <ProjectNav info={projectsContent} />
    </>
  );
};

export default Project;
