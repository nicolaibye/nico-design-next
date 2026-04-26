import ProjectNav from "@/app/comp/reuse/ProjectNav";
import ProjectHero from "@/app/comp/projects/project_focus/ProjectHero";
import ProjectHeroInfo from "@/app/comp/projects/project_focus/ProjectHeroInfo";
import ProjectHeroMedia from "@/app/comp/projects/project_focus/ProjectHeroMedia";
import { sablaBraInfo } from "@/data/projects/sablaBra";

const Neiro = () => {
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

export default Neiro;
