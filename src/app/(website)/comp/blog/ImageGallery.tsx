// components/ImageGallery.tsx
import Image from "next/image";
import type { ImageGalleryBlock } from "@/payload-types";
import { ImageGalleryExpand } from "./ImageGalleryExpand";
import { ImageGalleryMore } from "./ImageGalleryMore";

type GalleryImage = ImageGalleryBlock["images"][number];

export const ImageGallery = ({ images }: { images: GalleryImage[] }) => {
  const count = images.length;

  if (count === 0) return null;

  if (count === 1) {
    return (
      <div className="relative w-[85%] max-w-wide h-[75vh] lg:w-[75%] mx-auto my-10">
        <Image
          src={images[0].imageUrl}
          alt={images[0].imageAlt ?? ""}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    );
  }

  if (count === 2) {
    return <ImageGalleryExpand images={images} />;
  }

  if (count === 3) {
    return <ImageGalleryExpand images={images} />;
  }

  // 4+ images
  return <ImageGalleryMore images={images} />;
};
