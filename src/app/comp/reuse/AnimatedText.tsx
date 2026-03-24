"use client";
import { useRevealAnimation } from "@/app/hook/useRevealAnimation";

const AnimatedText = ({
  lines,
  uppercase = false,
  focusLine = 0,
}: {
  lines: string[];
  uppercase?: boolean;
  focusLine?: number;
}) => {
  const containerRef = useRevealAnimation();

  return (
    <div ref={containerRef} className="flex flex-col">
      {lines.map((line, i) => (
        <p
          key={line}
          className={`${uppercase ? "uppercase" : ""} ${focusLine === i ? "text-red-CoralRed font-black" : "font-medium"} font-lexend text-[4.5rem] text-blue-Cerulean leading-[0.9] opacity-0 transition-opacity duration-700 ease-in-out`}
          data-reveal-el
          data-reveal-delay={i * 150}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default AnimatedText;
