import React from "react";
import Image from "next/image";
import { featuredProjects as projects } from "../../../../data/featuredProjectsData.ts";
import { Lexend } from "@next/font/google";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const FeaturedProjects = () => {
  return (
    <section
      className={`${lexend.variable} min-h-screen my-auto flex flex-col justify-center`}
    >
      <div className="w-full flex justify-center">
        <h2 className="font-lexend font-light uppercase text-3xl tracking-[0.3em] my-16 text-center">
          Featured Projects
        </h2>
      </div>
      <div>
        <ul className="flex flex-col lg:flex-row lg:h-[75vh] max-w-wide mx-auto">
          {projects.map((project) => (
            <li
              key={project.href}
              className={`group lg:grow lg:hover:grow-4 lg:transition-all lg:duration-500`}
            >
              <a
                href={project.href}
                data-transition
                data-color={project.color}
                data-link
                className={`overflow-hidden relative p-5 min-h-40 flex flex-col justify-center lg:justify-start h-full ${project.border} ${project.borderGradient}`}
              >
                <div className="-z-10 dark:z-0">
                  <p className="font-lexend text-2xl uppercase text-center leading-[0.9]">
                    {project.name}
                    <br />
                    <span className="text-lg normal-case font-light">
                      {project.subtitle}
                    </span>
                  </p>
                </div>

                <div className="absolute w-54 lg:w-60 lg:group-hover:w-102 -bottom-5 -right-24 lg:right-1/2 lg:translate-x-1/2 lg:bottom-[5%] rotate-[-20deg] lg:group-hover:rotate-10">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="100%"
                      className="object-contain lg:grayscale lg:group-hover:grayscale-0 lg:transition-all"
                    />
                  </div>
                </div>
                <ArrowUpRightIcon
                  size={32}
                  weight="regular"
                  className={`flex items-center justify-center absolute bottom-5 left-5 lg:-bottom-8 lg:group-hover:bottom-5 ${project.color} text-black-Mirage rounded-full p-2`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProjects;
