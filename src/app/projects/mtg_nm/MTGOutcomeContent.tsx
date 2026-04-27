"use client";
import { useState } from "react";
import { MTGOutcome } from "@/data/projects/mtgNM";
import LogoShowcase from "@/app/comp/projects/project_focus/outcome/LogoShowcase";
import MockupGrid from "@/app/comp/projects/project_focus/outcome/MockupGrid";
import Image from "next/image";

const MTGOutcomeContent = () => {
  const [expand, setExpand] = useState(false);

  const expandImage = () => {
    setExpand(!expand);
  };

  return (
    <>
      {/* Banner */}
      <div
        id="banner"
        className={`w-full h-[60vh] my-10 xl:my-20 px-5 md:px-20 relative max-w-wide mx-auto ${expand ? "md:h-[80vh] md:cursor-zoom-out" : "md:h-[40vh] md:cursor-zoom-in"}`}
        onClick={expandImage}
      >
        <div className="w-full h-full rounded-xl overflow-x-auto md:overflow-hidden no-scrollbar">
          <Image
            src={MTGOutcome.banner.mainImage.src}
            alt={MTGOutcome.banner.mainImage.alt}
            width={2000}
            height={2000}
            className="h-[60vh] w-auto md:h-full max-w-none md:w-full object-cover rounded-xl"
          />
        </div>
      </div>

      <section>
        <div className="w-[75%] max-w-wide mx-auto flex flex-col gap-20 my-16 xl:my-32">
          <LogoShowcase
            primary={MTGOutcome.logos.primary}
            secondary={MTGOutcome.logos.secondary}
          />
          <LogoShowcase
            label="Coloured"
            primary={MTGOutcome.colouredLogos.colour}
            secondary={[]}
          />
        </div>
      </section>
      <section>
        <div className="w-full max-w-wide mx-auto px-5 md:px-20 flex flex-col gap-5 xl:gap-10 md:my-16">
          <MockupGrid items={MTGOutcome.mockup} />
        </div>
      </section>
    </>
  );
};

export default MTGOutcomeContent;
