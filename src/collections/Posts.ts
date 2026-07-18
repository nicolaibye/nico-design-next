// collections/Posts.ts
import type { CollectionConfig } from "payload";
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical";
import ImageGallery from "../blocks/ImageGallery";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: { useAsTitle: "title" },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { position: "sidebar" },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value;
            return data?.title
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
          },
        ],
      },
    },
    { name: "publishedDate", type: "date", admin: { position: "sidebar" } },
    {
      name: "status",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "draft",
      admin: { position: "sidebar" },
    },
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
              name: "stats",
              type: "array",
              minRows: 1,
              fields: [
                { name: "title", type: "text", required: true },
                { name: "text", type: "text" },
              ],
            },
            { name: "title", type: "text", required: true },
            {
              name: "ingress",
              type: "textarea",
              required: true,
              label: "Summary",
              admin: {
                description:
                  "Short summary shown on the blog card and post preview.",
              },
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
          ],
        },
      ],
    },
  ],
};

export default Posts;
