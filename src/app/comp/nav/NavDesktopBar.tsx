"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "../../data/navLinks";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const desktopNavLinks = navlinks.filter((link) => link.name !== "Gold");

const NavDesktopBar = () => {
  const pathname = usePathname();
  return (
    <nav aria-label="Desktop Navigation Bar" className="hidden lg:block">
      <ul
        className={`fixed -right-21 top-5 flex flex-col gap-1 ${lexend.variable} z-999`}
      >
        {desktopNavLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`${link.hoverDistance} flex items-center gap-3 p-2.5 w-fit ${link.color} font-lexend text-white-LinkWater uppercase font-normal text-sm tracking-wider ${isActive ? "rounded-l-3xl" : "rounded-l-lg"} transition-all`}
              >
                <Icon size={20} weight="bold" />
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavDesktopBar;
