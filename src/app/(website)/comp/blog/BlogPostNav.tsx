import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPayload } from "payload";
import config from "@payload-config";

const BlogPostNav = async ({ slug }: { slug: string }) => {
  const categoryColour: Record<string, string> = {
    design: "text-red-CoralRed",
    lifestyle: "text-green-RiverBed",
    career: "text-blue-NileBlue",
    other: "text-black-Mirage",
  };
  const payload = await getPayload({ config });

  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
  });

  const postsByDate = posts.sort((a, b) => {
    const dateA = new Date(a.publishedDate ?? 0);
    const dateB = new Date(b.publishedDate ?? 0);
    return dateB.getTime() - dateA.getTime();
  });

  const currentIndex = postsByDate.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) return null;

  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  const prev = prevIndex >= 0 ? postsByDate[prevIndex] : null;
  const next = nextIndex < postsByDate.length ? postsByDate[nextIndex] : null;

  return (
    <div className="w-[85%] lg:w-[75%] pb-5 mx-auto max-w-wide text-black-Mirage pt-10 md:pt-20">
      <div
        className={`flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center`}
      >
        {/* Next */}
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="flex flex-row items-center w-full sm:w-fit md:w-85! md:h-25 rounded-2xl bg-white overflow-hidden relative drop-shadow-[0_4px_6px_rgba(0,0,0,0.14)] lg:hover:scale-105"
          >
            <Image
              src={prev.cardImageUrl}
              alt={prev.cardImageAlt || "Cover image"}
              className="w-35 h-35 object-cover object-bottom hidden md:block"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col justify-center h-full p-5">
              <h2 className="font-lexend font-regular leading-[1.2] text-base">
                {prev.cardTitle}
              </h2>
              <p
                className={`font-lexend font-light text-base capitalize ${categoryColour[prev.category] ?? "text-black-Mirage"}`}
              >
                {prev.category}
              </p>
            </div>
          </Link>
        ) : (
          <p className="font-lexend text-sm text-center sm:text-left italic max-w-50 text-black-Mirage/50">
            Stay tuned for future thoughts and writeups!
          </p>
        )}

        {/* Prev */}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="flex flex-row items-center w-full sm:w-fit md:w-85! md:h-25 rounded-2xl bg-white overflow-hidden relative drop-shadow-[0_4px_6px_rgba(0,0,0,0.14)] lg:hover:scale-105"
          >
            <Image
              src={next.cardImageUrl}
              alt={next.cardImageAlt || "Cover image"}
              className="w-35 h-35 object-cover object-bottom hidden md:block"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col justify-center h-full p-5">
              <h2 className="font-lexend font-regular leading-[1.2] text-base">
                {next.cardTitle}
              </h2>
              <p
                className={`font-lexend font-light text-base capitalize ${categoryColour[next.category] ?? "text-black-Mirage"}`}
              >
                {next.category}
              </p>
            </div>
          </Link>
        ) : (
          <p className="font-lexend text-sm italic text-center sm:text-right max-w-50 text-black-Mirage/50">
            This is as far back as it goes on this blog!
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPostNav;
