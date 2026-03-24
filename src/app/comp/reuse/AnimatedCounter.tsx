"use client";
import useCounterAnimation from "@/app/hook/useCounterAnimation";
import React from "react";

const AnimatedCounter = ({
  children,
  target = 0,
  textColor = "text-red-CoralRed",
}: {
  children: React.ReactNode;
  target?: number;
  textColor?: string;
}) => {
  
  useCounterAnimation();
  return (
    <>
      <p
        className={`font-sofiasans text-8xl ${textColor} h-17`}
        data-target={target}
      >
        00
      </p>
      <div className="flex flex-row items-center gap-2">
        <p className={`font-sofiasans text-8xl ${textColor}`}>+</p>
        <p className="font-lexend font-medium text-sm">{children}</p>
      </div>
    </>
  );
};

export default AnimatedCounter;
