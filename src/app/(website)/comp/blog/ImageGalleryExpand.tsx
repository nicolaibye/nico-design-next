"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types/payloadTypes.ts";

export const ImageGalleryExpand = ({ images }: { images: GalleryImage[] }) => {
  const [active, setActive] = useState<number | undefined>(undefined);

  return (
    <ul className="flex flex-col lg:flex-row h-[75vh] lg:h-140 gap-5 w-[85%] lg:w-[75%] mx-auto my-10">
      {images.map((img, i) => {
        const alignmentClass =
          img.alignment === "top-left"
            ? "object-top-left"
            : img.alignment === "top"
              ? "object-top"
              : img.alignment === "top-right"
                ? "object-top-right"
                : img.alignment === "left"
                  ? "object-left"
                  : img.alignment === "center"
                    ? "object-center"
                    : img.alignment === "right"
                      ? "object-right"
                      : img.alignment === "bottom-left"
                        ? "object-bottom-left"
                        : img.alignment === "bottom"
                          ? "object-bottom"
                          : img.alignment === "bottom-right"
                            ? "object-bottom-right"
                            : "object-center";

        return (
          <li
            key={i}
            onClick={() => setActive((prev) => (prev === i ? undefined : i))}
            className={`overflow-hidden rounded-lg cursor-pointer duration-700! basis-0 ${
              active === i ? "grow-4" : "grow"
            }`}
          >
            <Image
              src={img.imageUrl}
              alt={img.imageAlt ?? ""}
              width={800}
              height={800}
              className={`w-full h-full object-cover ${alignmentClass}`}
            />
          </li>
        );
      })}
    </ul>
  );
};
