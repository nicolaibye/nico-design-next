"use client";

import { useState, useRef } from "react";
import SectionDivider from "@/app/(website)/comp/reuse/SectionDivider";

type Swatch = {
  hex: string;
  darkOutline?: boolean;
  lightOutline?: boolean;
};

type ColorSwatchesProps = {
  primary: Swatch[];
  secondary?: Swatch[];
};

const ColorSwatches = ({ primary, secondary }: ColorSwatchesProps) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function copyHex(hex: string) {
    return () => {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedHex(null), 1500);
    };
  }

  function renderSwatchList(swatches: Swatch[]) {
    return (
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
        {swatches.map((swatch) => (
          <li key={swatch.hex} className="flex flex-col items-center gap-3">
            <div className="relative">
              <div
                className={`w-20 h-20 rounded-full ${swatch.darkOutline ? "dark:outline-1 dark:outline-white-LinkWater" : ""} ${swatch.lightOutline ? "outline-1 outline-black-Mirage dark:outline-none" : ""} cursor-copy`}
                onClick={copyHex(swatch.hex)}
                style={{ backgroundColor: swatch.hex }}
              />
              <span
                className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-lexend text-xs uppercase tracking-widest bg-black-Mirage text-white-LinkWater dark:bg-white-LinkWater dark:text-black-Mirage px-2 py-1 rounded-md transition-all duration-200 pointer-events-none ${
                  copiedHex === swatch.hex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                }`}
              >
                Copied!
              </span>
            </div>
            <p className="font-lexend font-light text-black-Mirage uppercase dark:text-white">
              {swatch.hex.replace("#", "")}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  if (primary.length === 0) return null;

  return (
    <div className="flex flex-col gap-20">
      <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
        <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
          Primary colours
        </h2>
      </SectionDivider>
      {renderSwatchList(primary)}

      {secondary && (
        <>
          <h2 className="max-w-230 mx-auto w-full font-lexend uppercase text-xs min-w-fit tracking-widest">
            Secondary colours
          </h2>
          {renderSwatchList(secondary)}
        </>
      )}
    </div>
  );
};

export default ColorSwatches;