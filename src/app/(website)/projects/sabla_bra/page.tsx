import ProjectNav from "@/app/(website)/comp/reuse/ProjectNav";
import ProjectHero from "@/app/(website)/comp/projects/project_focus/ProjectHero";
import ProjectHeroInfo from "@/app/(website)/comp/projects/project_focus/ProjectHeroInfo";
import ProjectHeroMedia from "@/app/(website)/comp/projects/project_focus/ProjectHeroMedia";
import { sablaBraInfo } from "@/data/projects/sablaBra";

export const metadata = {
  title: "NICO Design | Sabla Bra",
  description:
    "Sabla Bra is a committee with the mission to celebrate the great work created within market communication. Everything, from TV campaigns to visual identities gets its moment to shine once a year at the awards ceremony.",
  openGraph: {
    title: "NICO Design | Sabla Bra",
    description:
      "Sabla Bra is a committee with the mission to celebrate the great work created within market communication. Everything, from TV campaigns to visual identities gets its moment to shine once a year at the awards ceremony.",
    images: [
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1754577639/sb_some_mockup_ew0isa.jpg",
    ],
  },
};

const SablaBra = () => {
  return (
    <>
      <ProjectHero>
        <ProjectHeroMedia>
          <video
            src="https://res.cloudinary.com/dg0c4lry9/video/upload/v1754577419/sb_LoopFilmForNett_gfecm7.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </ProjectHeroMedia>
        <ProjectHeroInfo info={sablaBraInfo} />
      </ProjectHero>
      <ProjectNav />
    </>
  );
};

export default SablaBra;
