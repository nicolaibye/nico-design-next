// collections/Posts.ts
import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: { useAsTitle: "title" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    {
      name: "coverImageUrl",
      type: "text",
      required: true,
      admin: { description: "Cloudinary URL" },
    },
    { name: "coverImageAlt", type: "text" },
    { name: "excerpt", type: "textarea" },
    { name: "content", type: "richText" },
    { name: "publishedDate", type: "date" },
    {
      name: "status",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "draft",
    },
    {
      name: "tools",
      type: "select",
      options: ["draft", "published"],
      defaultValue: "draft",
    },
  ],
};

export default Posts;
