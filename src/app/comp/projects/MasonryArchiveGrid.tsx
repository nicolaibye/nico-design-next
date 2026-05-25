import Image from "next/image";
import { items } from "@/data/archiveData.ts";
import { useState } from "react";

// Setup div with setState, transition with opactiy, getting item.image from click, showing the image from click in div for fullscreen.

const MasonryArchiveGrid = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const fullscreenImage = (image: string) => {
    setActiveImage(image);
    document.body.classList.add("overflow-hidden");
  };

  const closeFullscreen = () => {
    setActiveImage(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 max-w-6xl px-10 sm:px-16 mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid"
            onClick={() => fullscreenImage(item.image)}
          >
            <div className="rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-cover"
                width={1000}
                height={1000}
              />
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
        id="fullscreen"
        onClick={closeFullscreen}
        className={`fixed inset-0 bg-black-Mirage/80 flex items-center justify-center ${activeImage ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-9999`}
      >
        {activeImage ? (
          <Image
            src={activeImage}
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
