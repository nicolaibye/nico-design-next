import ProjectNav from "@/app/comp/reuse/ProjectNav";
import ProjectHero from "@/app/comp/projects/project_focus/ProjectHero";
import ProjectHeroInfo from "@/app/comp/projects/project_focus/ProjectHeroInfo";
import ProjectHeroMedia from "@/app/comp/projects/project_focus/ProjectHeroMedia";
import { mtgInfo } from "@/data/projects/mtgNM";
import Image from "next/image";

const MTG = () => {
  return (
    <>
      <ProjectHero>
        <ProjectHeroMedia>
          <div className="w-full h-full bg-[#760933] relative">
            <Image
              src="https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/NMMTG_Ikon_farge_26_bkfcdh.svg"
              className="w-auto h-50 md:h-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
              alt="MTG main logo"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-1 bg-[url(https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/SwirlPattern_fespsx.svg)] w-full h-full bg-repeat top-0 left-0 z-0"></div>
          </div>
        </ProjectHeroMedia>
        <ProjectHeroInfo info={mtgInfo} />
      </ProjectHero>
      <ProjectNav />
    </>
  );
};

export default MTG;
