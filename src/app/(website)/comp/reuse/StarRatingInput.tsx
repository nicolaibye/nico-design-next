// components/reuse/StarRatingInput.tsx
"use client";

import { useState } from "react";
import { DiamondIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type Option = { label: string; value: string; id?: string | null };

type StarRatingInputProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const StarRatingInput = ({
  options,
  value,
  onChange,
}: StarRatingInputProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  // sort numerically since option order in /admin isn't guaranteed to be 1,2,3,4,5
  const sorted = [...options].sort((a, b) => Number(a.value) - Number(b.value));

  const activeValue = hovered ?? (value ? Number(value) : 0);

  return (
    <div
      role="radiogroup"
      aria-label="Rating"
      className="flex gap-1"
      onMouseLeave={() => setHovered(null)}
    >
      {sorted.map((opt) => {
        const starValue = Number(opt.value);
        const filled = starValue <= activeValue;

        return (
          <button
            key={opt.id ?? opt.value}
            type="button"
            role="radio"
            aria-checked={value === opt.value}
            aria-label={`${opt.label} star${starValue === 1 ? "" : "s"}`}
            onMouseEnter={() => setHovered(starValue)}
            onFocus={() => setHovered(starValue)}
            onBlur={() => setHovered(null)}
            onClick={() => onChange(opt.value)}
            className="cursor-pointer"
          >
            <DiamondIcon
              size={28}
              weight={filled ? "fill" : "regular"}
              className={cn(
                "transition-colors",
                filled
                  ? "text-red-CoralRed"
                  : "text-black-Mirage/30 dark:text-white-LinkWater/30",
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
export default StarRatingInput;
