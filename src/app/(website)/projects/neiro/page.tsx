import ProjectNav from "@/app/(website)/comp/reuse/ProjectNav";
import ProjectHero from "@/app/(website)/comp/projects/project_focus/ProjectHero";
import ProjectHeroInfo from "@/app/(website)/comp/projects/project_focus/ProjectHeroInfo";
import ProjectHeroMedia from "@/app/(website)/comp/projects/project_focus/ProjectHeroMedia";
import { neiroInfo } from "@/data/projects/neiro";

export const metadata = {
  title: "NICO Design | NEIRO",
  description:
    "A passion project from university imagening a new EDM festival focused around the Eastern rave scene for the Western audience.",
  openGraph: {
    title: "NICO Design | NEIRO",
    description:
      "A passion project from university imagening a new EDM festival focused around the Eastern rave scene for the Western audience.",
    images: [
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1751567180/3_hoodies_ayf7vf.jpg",
    ],
  },
};

const Neiro = () => {
  return (
    <>
      <ProjectHero>
        <ProjectHeroMedia>
          <video
            src="https://res.cloudinary.com/dg0c4lry9/video/upload/t_blog_header/header_neiro_oe0mgj.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </ProjectHeroMedia>
        <ProjectHeroInfo info={neiroInfo} />
      </ProjectHero>
      <ProjectNav />
    </>
  );
};

export default Neiro;
