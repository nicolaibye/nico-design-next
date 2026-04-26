"use client";
import { neiroOutcome } from "@/data/projects/neiro";
import ColorSwatches from "@/app/comp/projects/project_focus/outcome/ColorSwatches";
import LogoShowcase from "@/app/comp/projects/project_focus/outcome/LogoShowcase";
import MockupGrid from "@/app/comp/projects/project_focus/outcome/MockupGrid";
import DraggableItem from "@/app/comp/reuse/DraggableItem";
import Image from "next/image";
import { useDraggable } from "@/app/hook/useDraggable";
import IconGroup from "@/app/comp/projects/project_focus/outcome/IconGroup";

const SablaBraOutcomeContent = () => (
  useDraggable("banner"),
  (
    <>
      {/* Banner with draggable pins */}
      <div
        id="banner"
        className="w-full h-[60vh] md:h-[40vh] my-10 xl:my-20 px-5 md:px-20 relative max-w-wide mx-auto"
      >
        <div className="w-full h-full rounded-xl overflow-x-auto md:overflow-hidden no-scrollbar">
          <Image
            src={neiroOutcome.banner.mainImage.src}
            alt={neiroOutcome.banner.mainImage.alt}
            width={2000}
            height={2000}
            className="h-[60vh] w-auto md:h-full max-w-none md:w-full object-cover md:object-top rounded-xl"
          />
        </div>
        {neiroOutcome.banner.floatingImages.map((img) => (
          <DraggableItem key={img.alt} className={img.className}>
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover rounded-xl"
            />
          </DraggableItem>
        ))}
      </div>

      <section>
        <div className="w-[75%] max-w-wide mx-auto flex flex-col gap-20 my-16 xl:my-32">
          <LogoShowcase
            primary={neiroOutcome.logos.primary}
            secondary={neiroOutcome.logos.secondary}
          />
          <ColorSwatches
            primary={neiroOutcome.colors.primary}
            secondary={neiroOutcome.colors.secondary}
          />
          <IconGroup groups={neiroOutcome.iconGroups} />
        </div>
      </section>

      <section>
        <div className="w-full max-w-wide mx-auto px-5 md:px-20 flex flex-col gap-5 xl:gap-10 md:my-16">
          <MockupGrid items={neiroOutcome.mockup} />
        </div>
      </section>
    </>
  )
);

export default SablaBraOutcomeContent;
