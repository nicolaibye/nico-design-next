"use client";

import Image from "next/image";
import { items } from "@/data/archiveData.ts";
import { useState } from "react";

type ActiveMedia = { src: string; type: "image" | "video" } | null;

const MasonryArchiveGrid = () => {
  const [activeMedia, setActiveMedia] = useState<ActiveMedia>(null);

  const openFullscreen = (src: string, type: "image" | "video") => {
    setActiveMedia({ src, type });
    document.body.classList.add("overflow-hidden");
  };

  const closeFullscreen = () => {
    setActiveMedia(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 max-w-6xl px-10 sm:px-16 mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid"
            onClick={() => openFullscreen(
              item.type === "video" ? item.video! : item.image,
              item.type as "image" | "video"
            )}
          >
            <div className="rounded-lg overflow-hidden cursor-pointer">
              {item.type === "video" ? (
                <video
                  src={item.video}
                  poster={item.image}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto object-cover"
                />
              ) : (
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto object-cover"
                  width={1000}
                  height={1000}
                />
              )}
              <div className="p-4 dark:bg-white-LinkWater bg-black-Mirage">
                <h3 className="font-lexend font-medium text-white-LinkWater dark:text-black-Mirage leading-3">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="font-lexend text-white-LinkWater/60 dark:text-black-Mirage/60 leading-3 mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={closeFullscreen}
        className={`fixed inset-0 bg-black-Mirage/80 flex items-center justify-center z-9999 ${activeMedia ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {activeMedia?.type === "video" ? (
          <video
            src={activeMedia.src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="p-5 md:p-10 lg:p-20 w-auto h-full object-contain"
          />
        ) : activeMedia?.type === "image" ? (
          <Image
            src={activeMedia.src}
            alt="Fullscreen"
            className="p-5 md:p-10 lg:p-20 w-auto h-full object-contain"
            width={1000}
            height={1000}
          />
        ) : (
          <div className="w-16 h-16 border-4 border-white-LinkWater border-t-transparent rounded-full animate-spin" />
        )}
      </div>
    </>
  );
};

export default MasonryArchiveGrid;