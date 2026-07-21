import Link from "next/link";
import InfiniteScrollBackground from "@/app/(website)/comp/blog/InfiniteScrollBackground";
import { getPayload } from "payload";
import config from "../../../../payload.config";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { BlogCard } from "../comp/blog/BlogCard";

const Blog = async () => {
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

  return (
    <>
      <section>
        <div className="h-screen w-auto relative overflow-hidden">
          <InfiniteScrollBackground
            src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1783532387/blog_collage_high_xshucj.webp"
            alt="Life panorama"
            durationSeconds={80}
          />

          <div className="absolute flex flex-col md:flex-row items-center justify-center md:gap-12 w-full h-full z-10 mix-blend-difference  font-redaction-50 font-bold text-[10rem] leading-[1.2] text-red-CoralRed uppercase">
            <h1
              aria-label="Blog"
              className="flex flex-col md:flex-row items-center md:gap-12"
            >
              <span
                aria-hidden="true"
                className="flex flex-row gap-16 md:gap-12"
              >
                <span>b</span>
                <span>l</span>
              </span>
              <span aria-hidden="true" className="flex flex-row gap-12">
                <span>o</span>
                <span>g</span>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="min-h-[50vh] items-center flex my-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[calc(100%-40px)] md:max-w-[80%] h-fit mx-auto mb-5 dark:text-black-Mirage">
          {postsByDate.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Blog;
