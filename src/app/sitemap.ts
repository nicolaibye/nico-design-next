// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config });
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
  });

  const staticRoutes = ["", "/about", "/projects", "/blog", "/contact"].map((path) => ({
    url: `https://nicodesign.no${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((post) => ({
    url: `https://nicodesign.no/blog/${post.slug}`,
    lastModified: post.updatedAt,
  }));

  return [...staticRoutes, ...postRoutes];
}