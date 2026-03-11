"use client";
import React from "react";
import Link from "next/link";
import {
  HouseIcon,
  KanbanIcon,
  SmileyMeltingIcon,
  QuotesIcon,
} from "@phosphor-icons/react";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const navlinks = [
  {
    name: "Home",
    href: "/",
    icon: <HouseIcon size={20} weight="bold" />,
    color: "bg-red-CoralRed",
    hoverDistance: "hover:-translate-x-14.5",
  },
  {
    name: "Project",
    href: "/project",
    icon: <KanbanIcon size={20} weight="bold" />,
    color: "bg-green-RiverBed",
    hoverDistance: "hover:-translate-x-20",
  },
  {
    name: "About",
    href: "/about",
    icon: <SmileyMeltingIcon size={20} weight="bold" />,
    color: "bg-blue-NileBlue",
    hoverDistance: "hover:-translate-x-16",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <QuotesIcon size={20} weight="bold" />,
    color: "bg-black-Mirage",
    hoverDistance: "hover:-translate-x-13.5",
  },
];

const NavSideBar = () => {
  return (
    <nav className={`absolute -right-21 top-1/2 translate-y-[-50%] flex flex-col gap-1 ${lexend.variable}`}>
      {navlinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${link.hoverDistance}`}
        >
          <div
            className={`flex items-center gap-3 p-2 px-3 rounded w-fit ${link.color} font-lexend text-white-LinkWater uppercase font-normal text-sm tracking-wider`}
          >
            {link.icon}
            <span>{link.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavSideBar;
