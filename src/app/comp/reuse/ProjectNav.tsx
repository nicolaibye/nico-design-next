"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { portfolioProjectsData as projects } from "../../data/portfolioProjectsData.ts";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const ProjectNav = () => {
  const pathname = usePathname();

  const currentIndex = projects.findIndex((p) => p.href === pathname);
  if (currentIndex === -1) return null;

  const prev = projects.at(currentIndex - 1)!; // wraps to last when index is 0
  const next = projects.at((currentIndex + 1) % projects.length)!;

  return (
    <div className="w-full px-5 pb-6 md:pb-0 md:px-20">
      <div
        className={`flex flex-row justify-between items-center mt-5 gap-4 ${lexend.variable}`}
      >
        {/* Prev */}
        <Link
          href={prev.href}
          data-transition
          data-color={prev.color}
          data-link
          className="group flex w-full md:w-auto rounded-xl rounded-r-none md:rounded-r-xl h-20 outline-2 transition-all duration-300"
          style={{
            backgroundColor: prev.outlineColor,
            outlineColor: prev.outlineColor,
          }}
        >
          <div className="px-4 self-center">
            <p className="font-lexend uppercase">{prev.nav.label}</p>
            <p className="font-lexend font-light leading-1">{prev.subtitle}</p>
          </div>
          <div className="relative w-20 h-full hidden md:block shrink-0">
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
          className="group flex w-full justify-end md:w-auto rounded-xl rounded-l-none md:rounded-l-xl h-20 outline-2 transition-all duration-300"
          style={{
            backgroundColor: next.outlineColor,
            outlineColor: next.outlineColor,
          }}
        >
          <div className="relative w-20 h-full hidden md:block shrink-0">
            <Image
              src={next.nav.icon}
              alt={next.nav.label}
              fill
              className="object-contain p-4 opacity-80"
            />
          </div>
          <div className="px-4 self-center text-right">
            <p className="font-lexend uppercase">{next.nav.label}</p>
            <p className="font-lexend font-light leading-1">{next.subtitle}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectNav;
