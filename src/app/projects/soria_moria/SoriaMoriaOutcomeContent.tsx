"use client";
import { SoriaMoriaOutcome } from "@/data/projects/soriaMoria.tsx";
import ColorSwatches from "@/app/comp/projects/project_focus/outcome/ColorSwatches";
import LogoShowcase from "@/app/comp/projects/project_focus/outcome/LogoShowcase";
import MockupGrid from "@/app/comp/projects/project_focus/outcome/MockupGrid";
import Image from "next/image";
import IconGroup from "@/app/comp/projects/project_focus/outcome/IconGroup";
import { useState } from "react";

const SoriaMoriaOutcomeContent = () => {
  const [expand, setExpand] = useState(false);

  const expandImage = () => {
    setExpand(!expand);
  };

  return (
    <>
      {/* Banner */}
      <div
        id="banner"
        className={`w-full h-[60vh] my-10 xl:my-20 px-5 md:px-20 relative max-w-wide mx-auto ${expand ? "h-[80vh] cursor-zoom-out" : "md:h-[40vh] cursor-zoom-in"}`}
        onClick={expandImage}
      >
        <div className="w-full h-full rounded-xl overflow-x-auto md:overflow-hidden no-scrollbar">
          <Image
            src={SoriaMoriaOutcome.banner.mainImage.src}
            alt={SoriaMoriaOutcome.banner.mainImage.alt}
            width={2000}
            height={2000}
            className="h-[60vh] w-auto md:h-full max-w-none md:w-full object-cover rounded-xl"
          />
        </div>
      </div>

      <section>
        <div className="w-[75%] max-w-wide mx-auto flex flex-col gap-20 my-16 xl:my-32">
          <LogoShowcase
            primary={SoriaMoriaOutcome.logos.primary}
            secondary={SoriaMoriaOutcome.logos.secondary}
          />
          <ColorSwatches primary={SoriaMoriaOutcome.colors.primary} />
          <IconGroup groups={SoriaMoriaOutcome.iconGroups} />
        </div>
      </section>

      <section>
        <div className="w-full max-w-wide mx-auto px-5 md:px-20 flex flex-col gap-5 xl:gap-10 md:my-16">
          <MockupGrid items={SoriaMoriaOutcome.mockup} />
        </div>
      </section>
    </>
  );
};

export default SoriaMoriaOutcomeContent;
