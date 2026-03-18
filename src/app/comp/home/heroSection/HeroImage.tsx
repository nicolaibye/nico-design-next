"use client";
import Image from "next/image";
import { useHeroPosition } from "../../../hook/useHeroPosition";

const HeroImage = () => {
  const { width, height, x, y } = useHeroPosition();

  return (
    <div
      id="hero-container"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <div
        style={{
          position: "absolute",
          width: `${width}px`,
          height: `${height}px`,
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        <Image
          id="hero-img"
          src="https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/CTOJ5926_bmnxu6.png"
          alt="Picture of me, Nicolai"
          width={1500}
          height={1552}
          priority
          style={{
            width: "120%",
            height: "120%",
          }}
        />
      </div>
    </div>
  );
};

export default HeroImage;
