import ProjectNav from "@/app/comp/reuse/ProjectNav";
import ProjectHero from "@/app/comp/projects/project_focus/ProjectHero";
import ProjectHeroInfo from "@/app/comp/projects/project_focus/ProjectHeroInfo";
import ProjectHeroMedia from "@/app/comp/projects/project_focus/ProjectHeroMedia";
import { soriaMoriaInfo } from "@/data/projects/soriaMoria";
import Image from "next/image";

const SoriaMoria = () => {
  return (
    <>
      <ProjectHero>
        <ProjectHeroMedia>
          <div className="w-full h-full relative">
            <Image
              src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1778440589/desk_logo_spj7rk.gif"
              alt="Soria Moria Logotype animation"
              className="hidden md:block w-1/3 h-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute z-5"
              width={1000}
              height={1000}
              priority
            />
            <Image
              src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1778439934/mob_logo_t090c6.gif"
              alt="Soria Moria Icon animation"
              className="block md:hidden -rotate-90 w-3/5 h-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute z-5"
              width={1000}
              height={1000}
              priority
            />
            <video
              src="https://res.cloudinary.com/dg0c4lry9/video/upload/v1778438880/SoMo_bg_gradient_e85gnc.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover object-left md:object-center absolute top-0 left-0 z-0"
            />
          </div>
        </ProjectHeroMedia>
        <ProjectHeroInfo info={soriaMoriaInfo} />
      </ProjectHero>
      <ProjectNav />
    </>
  );
};

export default SoriaMoria;
