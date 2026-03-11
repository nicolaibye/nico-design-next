"use client";
import React, { use, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "../../data/navLinks";
import Image from "next/image";
import { BackpackIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const orderedLinks = [...navlinks].sort(
  (a, b) => (a.name === "Gold" ? 1 : 0) - (b.name === "Gold" ? 0 : 1),
);

const NavMobileButton = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useGSAP(
    () => {
      const items = navRef.current?.querySelectorAll("li");
      if (!items) return;

      gsap.to(items, {
        y: isNavOpen ? (i: number) => -i * 50 : 0,
        bottom: 70,
        scale: isNavOpen ? 1 : 0.8,
        opacity: isNavOpen ? 1 : 0,
        duration: 0.2,
        stagger: { each: 0.1, from: isNavOpen ? "end" : "start" },
      });
    },
    { scope: navRef, dependencies: [isNavOpen] },
  );

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  return (
    <nav aria-label="Mobile Navigation Bar" className="block sm:hidden">
      <ul ref={navRef}>
        {orderedLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <li
              key={link.name}
              className={`fixed bottom-5 right-5 aspect-square ${link.image ? "" : `${link.color}`} ${isActive ? "rounded-3xl" : "rounded-lg"} transition-all opacity-0 ${isNavOpen ? "" : "pointer-events-none"} ${link.name !== "Gold" ? "shadow-md shadow-black-Mirage/30" : ""}`}
            >
              <Link
                href={link.href}
                className={`w-10 h-full flex flex-col items-center justify-center text-white-LinkWater`}
              >
                {link.image ? (
                  <Image
                    src={link.image}
                    alt={`${link.name} icon`}
                    loading="eager"
                  />
                ) : (
                  <>
                    <Icon size={22} weight="bold" />
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        aria-label="Mobile nav toggle button"
        className={`fixed bottom-5 right-5 w-10 h-10 bg-white ${isNavOpen ? "rounded-3xl" : "rounded-lg"} flex flex-col items-center justify-center text-black-Mirage shadow-md shadow-black-Mirage/30 z-51 duration-750!`}
        onClick={toggleNav}
      >
        <BackpackIcon size={22} weight="bold" />
      </button>
    </nav>
  );
};

export default NavMobileButton;
