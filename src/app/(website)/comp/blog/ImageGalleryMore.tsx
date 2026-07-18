"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { ImageGalleryBlock } from "@/payload-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type GalleryImage = ImageGalleryBlock["images"][number];

export const ImageGalleryMore = ({ images }: { images: GalleryImage[] }) => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const openFullscreen = (img: GalleryImage) => {
    setActiveImage(img);
    document.body.classList.add("overflow-hidden");
  };

  const closeFullscreen = () => {
    setActiveImage(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="relative">
        <Carousel
          opts={{ duration: 20 }}
          className="w-[85%] max-w-wide lg:w-[75%] mx-auto my-10 rounded-lg"
          setApi={setApi}
        >
          <CarouselContent className="transition-none">
            {images.map((img, i) => (
              <CarouselItem key={i} className="basis-full sm:basis-1/2">
                <div
                  className="relative w-full aspect-square cursor-pointer"
                  onClick={() => openFullscreen(img)}
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.imageAlt ?? ""}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div
          className="flex gap-2 absolute -bottom-5 left-1/2 -translate-x-1/2"
          role="tablist"
          aria-label="Slide navigation"
        >
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={currentSlide === index + 1}
              aria-controls={`slide-${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index + 1
                  ? "bg-red-CoralRed"
                  : "bg-gray-400 hover:bg-gray-600 cursor-pointer"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        onClick={closeFullscreen}
        className={`fixed inset-0 bg-black-Mirage/80 flex items-center justify-center z-5000 ${
          activeImage
            ? "opacity-100 pointer-events-auto cursor-zoom-out"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {activeImage && (
          <div className="relative w-[calc(100%-3.25rem)] sm:w-3/4 h-full p-5 md:p-10 lg:p-20">
            <Image
              src={activeImage.imageUrl}
              alt={activeImage.imageAlt ?? ""}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </>
  );
};
