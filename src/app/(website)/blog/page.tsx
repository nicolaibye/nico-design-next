import Link from "next/link";
import InfiniteScrollBackground from "@/app/(website)/comp/blog/InfiniteScrollBackground";
import { getPayload } from "payload";
import config from "../../../../payload.config";
import Image from "next/image";

const Blog = async () => {
  const payload = await getPayload({ config });
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { status: { equals: "draft" } },
  });
  console.log("posts", posts);
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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 p-12 min-h-1/2">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="flex flex-col gap-4">
            <Image
              src={post.coverImageUrl}
              alt={post.coverImageAlt || "Cover image"}
              width={1000}
              height={1000}
            />
            {post.title}
          </Link>
        ))}
      </section>
    </>
  );
};

export default Blog;
