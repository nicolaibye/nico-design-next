"use client";
import React, { useState } from "react";
import { Lexend } from "next/font/google";
import { ProjectNavProps } from "@/data/projectsContent";

const LexendFont = Lexend({ subsets: ["latin"] });

const ProjectNav = ({ info }: { info: ProjectNavProps }) => {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  return (
    <>
      <nav className="fixed top-0 left-0 z-10 w-full mix-blend-difference">
        <ul
          className={`flex flex-col md:flex-row justify-between md:justify-center mt-5 mr-5 items-end md:items-center md:gap-10 h-20 ${LexendFont.className}`}
        >
          {info.navigation.map((navItem, i) => (
            <li key={navItem.title}>
              <button
                onClick={() => setActiveCard(activeCard === i ? null : i)}
                className={`uppercase font-lexend ${activeCard === i ? `text-[#00D7AF]` : `text-white-LinkWater`} hover:text-[#00D7AF] cursor-pointer`}
              >
                {navItem.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* Expanded content */}
      {activeCard !== null && (
        <div className="my-30">{info.navigation[activeCard].content}</div>
      )}
    </>
  );
};

export default ProjectNav;
