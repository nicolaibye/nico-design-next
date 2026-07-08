import Link from "next/link";
import InfiniteScrollBackground from "@/app/comp/blog/InfiniteScrollBackground";

const Blog = () => {
  return (
    <>
      <section>
        <div className="h-screen w-auto relative overflow-hidden">
          <InfiniteScrollBackground
            src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1783532387/blog_collage_high_xshucj.webp"
            alt="Life panorama"
            durationSeconds={80}
          />

          <div className="absolute flex flex-col md:flex-row items-center justify-center md:gap-12 w-full h-full z-10 mix-blend-difference">
            <h1
              aria-label="Blog"
              className="flex flex-col md:flex-row items-center md:gap-12"
            >
              <span
                aria-hidden="true"
                className="flex flex-row gap-16 md:gap-12 font-lexend font-bold text-[10rem] leading-[1.2] text-red-CoralRed uppercase"
              >
                <span>b</span>
                <span>l</span>
              </span>
              <span
                aria-hidden="true"
                className="flex flex-row gap-12 font-lexend font-bold text-[10rem] leading-[1.2] text-red-CoralRed uppercase"
              >
                <span>o</span>
                <span>g</span>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-12 min-h-1/2">
        <Link href="/blog/blog_post_1">Blog Post 1</Link>
      </section>
    </>
  );
};

export default Blog;
