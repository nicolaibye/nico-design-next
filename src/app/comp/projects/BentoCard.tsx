// components/BentoCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Project } from "../../../data/portfolioProjectsData";

const BentoCard = ({ project }: { project: Project }) => (
  <Link
    href={project.href}
    className="group outline-2 rounded-2xl relative overflow-hidden h-full block lg:grayscale hover:grayscale-0"
    style={{ outlineColor: project.outlineColor }}
  >
    {/* Image */}
    <Image
      src={project.image.src}
      alt={project.image.alt}
      fill
      sizes="100%"
      className="object-cover z-0 lg:group-hover:scale-105"
    />

    {/* Flat overlay */}
    <div
      className="absolute inset-0 z-10 lg:opacity-0 lg:group-hover:opacity-100"
      style={{ backgroundColor: `${project.outlineColor}20` }}
    />

    {/* Gradient overlay */}
    <div
      className={`absolute inset-0 bg-linear-to-t ${project.gradientColor} lg:opacity-0 lg:group-hover:opacity-100`}
    />

    {/* Text */}
    <div className="absolute flex justify-between items-end bottom-5 lg:bottom-0 left-5 lg:opacity-0 group-hover:bottom-5 group-hover:opacity-100 w-[calc(100%-2.5rem)] z-20 text-black-Mirage">
      <p className="font-lexend font-light">
        <span className="font-medium uppercase">{project.name}</span>
        <br />
        {project.subtitle}
      </p>
      <p className="font-lexend text-right font-light">
        <span className="font-medium">Role</span>
        <br />
        {project.role}
      </p>
    </div>
  </Link>
);

export default BentoCard;
