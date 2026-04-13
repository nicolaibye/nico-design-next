"use client";
import NavMobileButton from "./NavMobileButton";
import NavTabletBar from "./NavTabletBar";
import NavDesktopBar from "./NavDesktopBar";
import Link from "next/link";
import Image from "next/image";
import { useNavVisibility } from "@/app/hook/useNavVisibility";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";

const Nav = () => {
  useNavVisibility();
  const sunRef = useRef<SVGSVGElement>(null);
  const moonRef = useRef<SVGSVGElement>(null);
  const isDark = useRef(
    typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    if (isDark.current) {
      gsap.set(sunRef.current, { x: "-140%", opacity: 0 });
      gsap.set(moonRef.current, { x: "-40%", opacity: 0 });
    } else {
      gsap.set(sunRef.current, { x: "0%", opacity: 0 });
      gsap.set(moonRef.current, { x: "100%", opacity: 0 });
    }

    // Fade in the active icon after positions are set
    const activeRef = isDark.current ? moonRef.current : sunRef.current;
    gsap.to(activeRef, { opacity: 1, duration: 0.3, delay: 0.1 });
  }, []);

  const toggleDarkmode = () => {
    const html = document.documentElement;
    const goingDark = !isDark.current;
    isDark.current = goingDark;

    gsap.killTweensOf(sunRef.current);
    gsap.killTweensOf(moonRef.current);

    if (goingDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      gsap.to(sunRef.current, {
        x: "-140%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(moonRef.current, {
        x: "-40%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      gsap.to(moonRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(sunRef.current, {
        x: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <>
      <div>
        <Link
          href="/"
          className="z-999 fixed top-5 left-5 w-10 h-10 mix-blend-difference"
        >
          <Image
            src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1774619709/nico_new_logo_linkwater_scgw9s.svg"
            alt="NICO Design icon"
            fill
          />
        </Link>
        <button
          onClick={toggleDarkmode}
          aria-label="Toggle dark mode"
          className="z-999 fixed top-18 left-6 w-8 h-8 p-1.5 bg-black-Mirage dark:bg-white-LinkWater rounded-full flex items-center overflow-hidden"
        >
          <SunIcon
            ref={sunRef}
            size={24}
            weight="bold"
            className="w-5 h-5 shrink-0 text-red-CoralRed opacity-0"
          />
          <MoonIcon
            ref={moonRef}
            size={24}
            weight="bold"
            className="w-5 h-5 ml-2 shrink-0 text-red-CoralRed absolute opacity-0"
          />
        </button>
      </div>
      <NavDesktopBar />
      <NavTabletBar />
      <NavMobileButton />
    </>
  );
};

export default Nav;
