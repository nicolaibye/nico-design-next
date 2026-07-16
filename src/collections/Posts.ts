// collections/Posts.ts
import type { CollectionConfig } from "payload";
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical";
import ImageGallery from "../blocks/ImageGallery";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: { useAsTitle: "title" },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Card",
          fields: [
            { name: "cardTitle", type: "text", required: true },
            {
              name: "category",
              type: "select",
              options: ["design", "career", "lifestyle", "other"],
              defaultValue: "design",
              required: true,
            },
            {
              name: "cardImageUrl",
              type: "text",
              required: true,
              admin: { description: "Cloudinary URL" },
            },
            { name: "cardImageAlt", type: "text" },
          ],
        },
        {
          label: "Content",
          fields: [
            {
              name: "coverImageUrl",
              type: "text",
              required: true,
              admin: { description: "Cloudinary URL" },
            },
            { name: "coverImageAlt", type: "text" },
            {
              name: "Info",
              type: "group",
              fields: [
                { name: "Custom Title 1", type: "text", required: true },
                { name: "Custom Text 1", type: "text" },
                { name: "Custom Title 2", type: "text", required: true },
                { name: "Custom Text 2", type: "text" },
              ],
            },
            { name: "title", type: "text", required: true },
            {
              name: "ingress",
              type: "textarea",
              required: true,
              unique: true,
              index: true,
            },
            {
              name: "content",
              type: "richText",
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  BlocksFeature({ blocks: [ImageGallery] }),
                ],
              }),
            },
            { name: "publishedDate", type: "date" },
            {
              name: "status",
              type: "select",
              options: ["draft", "published"],
              defaultValue: "draft",
            },
          ],
        },
      ],
    },
  ],
};

export default Posts;
