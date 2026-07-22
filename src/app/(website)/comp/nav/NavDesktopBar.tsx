"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "../../../../data/navLinks";
import Image from "next/image";

const orderedLinks = [...navlinks].sort(
  (a, b) => (a.name === "Contact" ? 1 : 0) - (b.name === "Contact" ? 1 : 0),
);

const NavDesktopBar = () => {
  const pathname = usePathname();
  return (
    <nav aria-label="Desktop Navigation Bar" className="hidden lg:block">
      <ul
        id="desktop-nav"
        className={`fixed -right-21 top-5 flex flex-col gap-1 z-999`}
      >
        {orderedLinks.map((link) => {
          const Icon = link.icon;
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <li key={link.name}>
              {link.image ? (
                <Link
                  href={link.href}
                  className={`${link.hoverDistance} flex items-center gap-2 w-fit font-lexend ${link.textColor ? link.textColor : "text-white-LinkWater"} uppercase font-normal text-sm tracking-wider`}
                >
                  <Image
                    src={link.image}
                    alt={`${link.name} icon`}
                    className="h-10 w-10 p-1"
                  />
                  <span>{link.name}</span>
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className={`${link.hoverDistance} flex items-center gap-3 p-2.25 w-fit ${link.color} font-lexend ${link.textColor ? link.textColor : "text-white-LinkWater"} uppercase font-normal text-sm tracking-wider ${isActive ? "rounded-l-3xl" : "rounded-l-lg"} transition-all`}
                >
                  {Icon && <Icon size={20} weight="bold" />}
                  <span>{link.name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavDesktopBar;
