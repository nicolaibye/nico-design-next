"use client";
import { useRevealAnimation } from "@/app/hook/useRevealAnimation";

const AnimatedText = ({
  lines,
  uppercase = false,
  focusLine = 0,
  size = "lg",
  align = "left",
}: {
  lines: string[];
  uppercase?: boolean;
  focusLine?: number;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
}) => {
  const containerRef = useRevealAnimation();

  return (
    <div ref={containerRef} className={`flex flex-col text-${align}`}>

      {lines.map((line, i) => (
        <p
          key={line}
          className={`${uppercase ? "uppercase leading-[0.9]" : ""} ${focusLine === i ? "text-red-CoralRed font-black" : "font-medium"} font-lexend ${size === "sm" ? "text-2xl" : size === "md" ? "text-3xl" : "text-[4.5rem]"}  text-blue-Cerulean opacity-0 transition-opacity duration-700 ease-in-out`}
          data-reveal-el
          data-reveal-delay={i * 200}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default AnimatedText;
