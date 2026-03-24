"use client";
import { useRevealAnimation } from "@/app/hook/useRevealAnimation";

const AnimatedDegree = ({
  text1,
  text2,
  children,
}: {
  text1: string;
  text2: string;
  children: React.ReactNode;
}) => {
  const containerRef = useRevealAnimation();

  return (
    <div
      ref={containerRef}
      className="flex md:flex-col items-end justify-around md:items-start"
    >
      <div>
        <p
          className={`font-lexend text-[4.5rem] text-blue-Cerulean leading-[0.9] h-12.25 opacity-0 transition-opacity duration-700!`}
          data-reveal-el
          data-reveal-delay="100"
        >
          {text1}
        </p>
        <p
          className={`font-lexend text-[2rem] font-medium uppercase pl-1 h-10.25 opacity-0 transition-opacity duration-700!`}
          data-reveal-el
          data-reveal-delay="250"
        >
          {text2}
        </p>
      </div>
      <p className="font-lexend font-medium text-sm pl-4 md:pl-1 mt-[0.15rem]">
        {children}
      </p>
    </div>
  );
};

export default AnimatedDegree;
