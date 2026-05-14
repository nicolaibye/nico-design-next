import React from "react";
import { Lexend } from "next/font/google";
import Image from "next/image";

const LexendFont = Lexend({ subsets: ["latin"] });

const ProjectNav = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white-LinkWater dark:bg-black-Mirage">
      <ul
        className={`flex justify-center items-center gap-10 h-20 ${LexendFont.className}`}
      >
        {["Identity", "Logofolio", "Website", "Archive"].map((project) => (
          <li key={project}>
            <button className="uppercase font-normal text-sm tracking-wider font-lexend">
              {project}
            </button>
          </li>
        ))}
      </ul>
      <div className="relative">
        <Image
          src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1778779416/navGradient_dark_yyenam.png"
          className="w-full h-45 absolute -top-0.5 opacity-0 dark:opacity-100"
          alt="Holidaze main logo yellow"
          width={1000}
          height={1000}
        />{" "}
        <Image
          src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1778779416/navGradient_light_ej0sgv.png"
          className="w-full h-45 absolute -top-0.5 opacity-100 dark:opacity-0"
          alt="Holidaze main logo yellow"
          width={1000}
          height={1000}
        />
      </div>
    </nav>
  );
};

export default ProjectNav;
