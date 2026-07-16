import React from "react";
import SectionDivider from "../../reuse/SectionDivider";
import { Lexend, Sofia_Sans } from "next/font/google";
import AnimatedCounter from "../../reuse/AnimatedCounter";
import AnimatedDegree from "../../reuse/AnimatedDegree";

const fontLexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const fontSofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sofiasans",
});

const LifeAchievements = () => {
  return (
    <section className={`${fontLexend.variable} ${fontSofiaSans.variable}`}>
      <div className="max-w-230 mx-auto p-10 md:p-5 my-10 md:my-14 lg:my-24 flex flex-col gap-16 justify-center">
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Life achievements
          </h2>
        </SectionDivider>
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-10 md:gap-18 lg:20 md:items-start max-w-205 mx-auto">
          <li className="flex flex-col w-62">
            <AnimatedCounter target={30} textColor="text-red-CoralRed">
              Clients worked with on various projects and roles
            </AnimatedCounter>
          </li>
          <li className="flex flex-col w-61">
            <AnimatedCounter target={6} textColor="text-green-RiverBed dark:text-white-LinkWater">
              Years of working as a freelancer and co-worker
            </AnimatedCounter>
          </li>
          <li className="flex items-end md:items-start gap-3 md:gap-0 md:flex-col w-28">
            <AnimatedDegree text1="BA" text2="Hons">
              Graphic Communication
            </AnimatedDegree>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LifeAchievements;
