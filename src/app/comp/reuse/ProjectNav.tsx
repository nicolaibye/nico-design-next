"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { portfolioProjectsData as projects } from "../../../data/portfolioProjectsDataNew.ts";

const ProjectNav = () => {
  const pathname = usePathname();

  const currentIndex = projects.findIndex((p) => p.href === pathname);
  if (currentIndex === -1) return null;

  const prev = projects.at(currentIndex - 1)!; // wraps to last when index is 0
  const next = projects.at((currentIndex + 1) % projects.length)!;

  const prevBgColor = `${prev.color}`; // bg-prev.color;
  const nextBgColor = `${next.color}`; // bg-next.color;

  return (
    <div className="w-full px-5 pb-6 md:pb-0 md:px-20 md:mb-10 text-black-Mirage">
      <div className={`flex flex-row justify-between items-center mt-5`}>
        {/* Prev */}
        <Link
          href={prev.href}
          data-transition
          data-color={prev.color}
          data-link
          className={`group flex w-auto rounded-lg outline-2 outline-offset-4 outline-white-LinkWater dark:outline-black-Mirage ${prevBgColor} h-20 transition-all`}
        >
          <div className="px-4 self-center hidden md:block">
            <p className="font-lexend uppercase">{prev.nav.label}</p>
            <p className="font-lexend font-light leading-4">{prev.subtitle}</p>
          </div>
          <div className="relative w-20 h-full shrink-0">
            <Image
              src={prev.nav.icon}
              alt={prev.nav.label}
              fill
              className="object-contain p-4 opacity-80"
            />
          </div>
        </Link>

        {/* Next */}
        <Link
          href={next.href}
          data-transition
          data-color={next.color}
          data-link
          className={`group flex justify-end w-auto rounded-lg outline-2 outline-offset-4 outline-white-LinkWater dark:outline-black-Mirage ${nextBgColor} h-20 transition-all`}
        >
          <div className="relative w-20 h-full shrink-0">
            <Image
              src={next.nav.icon}
              alt={next.nav.label}
              fill
              className="object-contain p-4 opacity-80"
            />
          </div>
          <div className="px-4 self-center text-right hidden md:block">
            <p className="font-lexend uppercase">{next.nav.label}</p>
            <p className="font-lexend font-light leading-4">{next.subtitle}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectNav;
