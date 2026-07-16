// blocks/ImageGallery.ts
import type { Block } from "payload";

export const ImageGallery: Block = {
  slug: "imageGallery",
  interfaceName: "ImageGalleryBlock",
  fields: [
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "imageUrl",
          type: "text",
          required: true,
          admin: { description: "Cloudinary URL" },
        },
        { name: "imageAlt", type: "text" },
      ],
    },
  ],
};

export default ImageGallery;