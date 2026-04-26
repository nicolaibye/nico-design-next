"use client";
import { useState } from "react";
import { ProjectInfo } from "../../../../types/projectDataType.ts";

const CARD_COLORS_ACTIVE = ["bg-white", "bg-blue-NileBlue", "bg-red-CoralRed"];

const CARD_COLORS = [
  "bg-white/10",
  "bg-blue-NileBlue/10",
  "bg-red-CoralRed/10",
];

const CARD_TEXT_COLORS = [
  "text-black-Mirage dark:text-white-LinkWater",
  "text-black-Mirage dark:text-white-LinkWater",
  "text-black-Mirage dark:text-white-LinkWater",
];

const CARD_TEXT_COLORS_ACTIVE = [
  "text-black-Mirage",
  "text-white-LinkWater",
  "text-white-LinkWater",
];

const CARD_OUTLINE_COLORS = [
  "outline outline-1 outline-white",
  "outline outline-1 outline-blue-NileBlue",
  "outline outline-1 outline-red-CoralRed",
];

const ProjectHeroInfo = ({ info }: { info: ProjectInfo }) => {
  const [activeCard, setActiveCard] = useState<number | null>(2);

  return (
    <div className="w-full h-auto">
      {/* Desktop stats */}
      <ul className="hidden md:flex flex-row justify-between w-full text-sm font-lexend font-light text-black-Mirage my-10 dark:text-white-LinkWater px-20">
        {info.stats.map((stat) => (
          <li key={stat.label}>
            <strong className="uppercase font-medium">{stat.label}</strong>
            <br />
            {stat.value}
          </li>
        ))}
      </ul>

      {/* Mobile stats */}
      <ul className="md:hidden flex flex-col gap-3 w-full text-sm font-lexend font-light text-black-Mirage my-10 dark:text-white-LinkWater px-5">
        {info.stats.map((stat) => (
          <li key={stat.label} className="flex flex-row justify-between">
            <p className="uppercase font-medium">{stat.label}</p>
            <p className="max-w-[70%] text-right">{stat.value}</p>
          </li>
        ))}
      </ul>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center w-full h-full px-5 md:px-20">
        {info.cards.map((card, i) => (
          <button
            key={card.title}
            onClick={() => setActiveCard(activeCard === i ? null : i)}
            className={`${CARD_OUTLINE_COLORS[i]} h-full p-8 xl:p-12 rounded-xl w-full backdrop-blur-[9px] font-lexend ${activeCard === i ? `${CARD_TEXT_COLORS_ACTIVE[i]}` : `${CARD_TEXT_COLORS[i]}`} text-left w-full hover:scale-[1.02] cursor-pointer ${activeCard === i ? `${CARD_COLORS_ACTIVE[i]}` : `${CARD_COLORS[i]}`}`}
          >
            <h2 className="uppercase text-sm tracking-widest">{card.title}</h2>
            <p className="text-sm mt-3">{card.body}</p>
          </button>
        ))}
      </div>

      {/* Expanded content */}
      {activeCard !== null && (
        <div className="mt-5">{info.cards[activeCard].content}</div>
      )}
    </div>
  );
};

export default ProjectHeroInfo;
