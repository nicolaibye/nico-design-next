// app/(website)/blog/[slug]/page.tsx
import { getPayload } from "payload";
import config from "@payload-config";
import Image from "next/image";
import { RichText } from "@/app/(website)/comp/blog/RichText";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    limit: 1,
  });

  const post = docs[0];
  if (!post) return null; // BUILD A FUNCTION THAT RETUSN 404 PAGE

  return (
    <>
      <section>
        <div>
          <Image
            src="https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/mirror_gang_b6k9ec"
            alt="The gang in the mirror in Japan"
            className="w-full h-[50vh] object-cover"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col w-[85%] max-w-wide lg:w-[75%] mx-auto pt-6 md:pt-10 gap-10 mb-5">
            <ul className="hidden md:flex flex-row justify-between w-full text-sm font-lexend font-light">
              <li className="capitalize">
                <strong className="uppercase font-medium">Category</strong>
                <br />
                {post.category}
              </li>
              <li>
                <strong className="uppercase font-medium">Period</strong>
                <br />
                {post.publishedDate
                  ? new Date(post.publishedDate).getFullYear()
                  : "N/A"}
              </li>
              {post.stats && post.stats.length > 0 && (
                <>
                  {post.stats.map(
                    (stat: { title: string; text: string }, index: string) => (
                      <li key={index}>
                        <strong className="uppercase font-medium">
                          {stat.title}
                        </strong>
                        <br />
                        {stat.text}
                      </li>
                    ),
                  )}
                </>
              )}
            </ul>
            <h1 className="font-lexend text-5xl">{post.title}</h1>
            <p className="font-lexend text-xl font-regular">{post.ingress}</p>
          </div>
        </div>
      </section>
      <section>
        <RichText data={post.content} />
      </section>
    </>
  );
}
