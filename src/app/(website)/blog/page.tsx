import Link from "next/link";
import InfiniteScrollBackground from "@/app/(website)/comp/blog/InfiniteScrollBackground";
import { getPayload } from "payload";
import config from "../../../../payload.config";
import Image from "next/image";
import redArrow from "@/public/arrows/big_arrow_45_red.svg";
import greenArrow from "@/public/arrows/big_arrow_45_green.svg";
import blueArrow from "@/public/arrows/big_arrow_45_blue.svg";
import blackArrow from "@/public/arrows/big_arrow_45_black.svg";

const Blog = async () => {
  const payload = await getPayload({ config });
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
  });

  const categoryArrows: Record<string, typeof redArrow> = {
    design: redArrow,
    lifestyle: greenArrow,
    career: blueArrow,
    other: blackArrow,
  };

  console.log("posts", posts);

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
            <li key={post.id} className="w-full sm:w-auto">
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-row items-center w-full sm:w-85 h-35 rounded-2xl bg-white overflow-hidden relative drop-shadow-[0_4px_6px_rgba(0,0,0,0.14)] lg:hover:scale-105"
              >
                <Image
                  src={post.cardImageUrl}
                  alt={post.cardImageAlt || "Cover image"}
                  className="w-35 h-35 object-cover object-bottom"
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-start h-full p-5">
                  <h2 className="font-lexend font-regular leading-[1.2] text-base">
                    {post.cardTitle}
                  </h2>
                  <p className="font-lexend font-light text-base capitalize">
                    {post.category}
                  </p>
                  <Image
                    src={categoryArrows[post.category] ?? blackArrow}
                    alt={`Arrow for ${post.category} category`}
                    className="absolute bottom-2 right-2 w-6 h-6"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Blog;
