// components/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Project } from "../../../data/portfolioProjectsDataNew";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const ProjectCard = ({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) => (
  <Link
    href={project.href}
    className={`${lexend.variable} h-full flex ${reverse ? "flex-row-reverse" : "flex-row"} items-center gap-10`}
  >
    <div className="relative w-1/2 h-auto group">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={1000}
        height={1000}
        className="object-cover rounded-lg aspect-square"
      />
      <Image
        src={project.nav.icon}
        alt={project.nav.label}
        width={175}
        height={175}
        className="z-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
      />
      <div
        className={`absolute inset-0 bg-${project.color} opacity-0 group-hover:opacity-80 rounded-lg`}
      ></div>
    </div>

    <div
      className={`flex flex-col text-black-Mirage dark:text-white-LinkWater w-auto ${reverse ? "text-right" : "text-left"}`}
    >
      <p className="font-lexend font-light w-50">
        <span className="font-medium uppercase">{project.name}</span>
        <br />
        {project.subtitle}
      </p>
      <p className="font-lexend font-light">
        <span className="font-medium">Role</span>
        <br />
        {project.role}
      </p>
    </div>
  </Link>
);

export default ProjectCard;
