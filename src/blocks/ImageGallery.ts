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
        {
          name: "alignment",
          type: "select",
          options: [
            "top-left",
            "top",
            "top-right",
            "left",
            "center",
            "right",
            "bottom-left",
            "bottom",
            "bottom-right",
          ],
          defaultValue: "center",
        },
      ],
    },
  ],
};

export default ImageGallery;
