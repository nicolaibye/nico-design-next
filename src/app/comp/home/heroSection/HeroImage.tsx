"use client";
import Image from "next/image";
import { useHeroPosition } from "../../../hook/useHeroPosition.ts";
import { useState, useEffect } from "react";

const HeroImage = () => {
  const { width, height, x, y } = useHeroPosition();
  const [ready, setReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setReady(true);

    const update = () => setIsDesktop(window.innerWidth > 768);
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      id="hero-container"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {isDesktop && (
        <div
          className={`
          absolute
          transition-all duration-700 ease-in-out
          ${ready && isDesktop ? "opacity-100" : "opacity-0"}
        `}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform:
              ready && isDesktop
                ? `translate(${x}px, ${y}px)`
                : `translate(${x}px, ${y + 40}px)`,
          }}
        >
          <Image
            id="hero-img"
            src="https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/CTOJ5926_bmnxu6.png"
            alt="Picture of me, Nicolai"
            className="object-cover"
            width={1500}
            height={1552}
            quality={75}
            priority
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
      {!isDesktop && (
        <div
          className={`absolute w-auto h-250 sm:h-400 -left-125 sm:-left-200 -top-20 sm:-top-35`}
        >
          <Image
            id="hero-img"
            src="https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/CTOJ5926_bmnxu6.png"
            alt="Picture of me, Nicolai"
            className="object-cover"
            width={1500}
            height={1552}
            priority
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HeroImage;
