// components/ImageGallery.tsx
import Image from "next/image";
import type { ImageGalleryBlock } from "@/payload-types";
import { ImageGalleryThree } from "./ImageGalleryThree";

type GalleryImage = ImageGalleryBlock["images"][number];

export const ImageGallery = ({ images }: { images: GalleryImage[] }) => {
  const count = images.length;

  if (count === 0) return null;

  if (count === 1) {
    return (
      <div className="w-[85%] max-w-wide lg:w-[75%] mx-auto mb-5">
        <Image
          src={images[0].imageUrl}
          alt={images[0].imageAlt ?? ""}
          width={1600}
          height={900}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    );
  }

  if (count === 2) {
    return <ImageGalleryThree images={images} />;
  }

  if (count === 3) {
    return <ImageGalleryThree images={images} />;
  }

  // 4+ images
  return (
    <div className="w-[85%] max-w-wide lg:w-[75%] mx-auto mb-5 grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.imageUrl}
          alt={img.imageAlt ?? ""}
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-lg"
        />
      ))}
    </div>
  );
};
