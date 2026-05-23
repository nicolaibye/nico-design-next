"use client";
import React, { useState } from "react";
import { Lexend } from "next/font/google";
import { ProjectNavProps } from "@/data/projectsContent";

const LexendFont = Lexend({ subsets: ["latin"] });

const ProjectNav = ({ info }: { info: ProjectNavProps }) => {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  return (
    <>
      <nav className="fixed top-0 left-0 z-10 w-full bg-white-LinkWater dark:bg-black-Mirage">
        <ul
          className={`flex justify-center items-center gap-10 h-20 ${LexendFont.className}`}
        >
          {info.navigation.map((navItem, i) => (
            <li key={navItem.title}>
              <button
                onClick={() => setActiveCard(activeCard === i ? null : i)}
                className={`uppercase font-lexend ${activeCard === i ? `text-red-CoralRed` : `text-black-Mirage dark:text-white-LinkWater`} hover:text-red-CoralRed cursor-pointer`}
              >
                {navItem.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="relative">
          <div className="w-full h-40 absolute -top-px bg-linear-to-b from-white-LinkWater via-white-LinkWater/50 to-transparent dark:bg-linear-to-b dark:from-black-Mirage dark:via-black-Mirage/50 dark:to-transparent pointer-events-none transition-colors duration-500" />
        </div>
      </nav>
      {/* Expanded content */}
      {activeCard !== null && (
        <div className="my-40">{info.navigation[activeCard].content}</div>
      )}
    </>
  );
};

export default ProjectNav;
