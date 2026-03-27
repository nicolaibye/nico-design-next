"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "../../data/navLinks";
import { Lexend } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const NavTabletBar = () => {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Tablet Navigation Bar"
      className="sm:block hidden lg:hidden"
    >
      <div
        id="tablet-nav"
        className="fixed bottom-5 w-full flex justify-center z-999"
      >
        <ul className={`flex flex-row gap-2 ${lexend.variable}`}>
          {navlinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <li
                key={link.name}
                className={`flex flex-col items-center justify-center aspect-square ${link.color} shadow-md shadow-black-Mirage/30 ${isActive ? "rounded-3xl" : "rounded-lg"} transition-all`}
              >
                <Link
                  href={link.href}
                  className={`flex flex-col w-20 h-full items-center justify-center gap-1  text-sm font-lexend uppercase tracking-wider text-white-LinkWater`}
                >
                  {link.image ? (
                    <Image
                      src={link.image}
                      alt={`${link.name} icon`}
                      className="p-4"
                    />
                  ) : (
                    <>
                      <Icon size={22} weight="bold" />
                      <span>{link.name}</span>
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavTabletBar;
