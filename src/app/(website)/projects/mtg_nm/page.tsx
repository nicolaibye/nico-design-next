import ProjectNav from "@/app/(website)/comp/reuse/ProjectNav";
import ProjectHero from "@/app/(website)/comp/projects/project_focus/ProjectHero";
import ProjectHeroInfo from "@/app/(website)/comp/projects/project_focus/ProjectHeroInfo";
import ProjectHeroMedia from "@/app/(website)/comp/projects/project_focus/ProjectHeroMedia";
import { mtgInfo } from "@/data/projects/mtgNM";

export const metadata = {
  title: "NICO Design | NM:MTG",
  description:
    "The Oslo committee for Magic: The Gathering were looking for a visual identity for their upcoming National Championship for MTG.",
  openGraph: {
    title: "NICO Design | NM:MTG",
    description:
      "The Oslo committee for Magic: The Gathering were looking for a visual identity for their upcoming National Championship for MTG.",
    images: [
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777200194/mtg_construction_mockup_zdj2hj.jpg",
    ],
  },
};

const MTG = () => {
  return (
    <>
      <ProjectHero>
        <ProjectHeroMedia>
          <div className="w-full h-full gold-gradient relative">
            <video
              src="https://res.cloudinary.com/dg0c4lry9/video/upload/v1777200823/SC_MTGNM__loop_dsscaw.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-auto h-full md:h-150 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
            />
          </div>
        </ProjectHeroMedia>
        <ProjectHeroInfo info={mtgInfo} />
      </ProjectHero>
      <ProjectNav />
    </>
  );
};

export default MTG;
