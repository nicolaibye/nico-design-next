import ProjectNav from "@/app/comp/reuse/ProjectNav";
import ProjectHero from "@/app/comp/projects/project_focus/ProjectHero";
import ProjectHeroInfo from "@/app/comp/projects/project_focus/ProjectHeroInfo";
import ProjectHeroMedia from "@/app/comp/projects/project_focus/ProjectHeroMedia";
import { holidazeInfo } from "@/data/projects/holidaze";
import Image from "next/image";

const Holidaze = () => {
  return (
    <>
      <ProjectHero>
        <ProjectHeroMedia>
          <div className="w-full h-full bg-[#760933] relative">
            <Image
              src="https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/6_2k_p_ck946q.png"
              alt="Holidaze tree shadow hero"
              className="w-full h-full object-cover object-center absolute top-0 left-0 z-10 opacity-75"
              width={1000}
              height={1000}
            />
            <Image
              src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1768398020/Holidaze_main_yellow_onmjxs.svg"
              className="w-auto h-14 md:h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
              alt="Holidaze main logo yellow"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-1 bg-[url(https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/SwirlPattern_fespsx.svg)] w-full h-full bg-repeat top-0 left-0 z-0"></div>
          </div>
        </ProjectHeroMedia>
        <ProjectHeroInfo info={holidazeInfo} />
      </ProjectHero>
      <ProjectNav />
    </>
  );
};

export default Holidaze;
