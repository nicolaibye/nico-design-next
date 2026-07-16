import Image from "next/image";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const media: MediaItem[] = [
  {
    type: "image",
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_some_Snitt-6_hqowqa.png",
    alt: "Soria Moria main artwork 1",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_some_Snitt-4_c8iqxb.png",
    alt: "Soria Moria main artwork 2",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_some_Snitt-3_xpuizk.png",
    alt: "Soria Moria main artwork 3",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dg0c4lry9/video/upload/t_blog_header/bk_some_mockup_epq6eh.mp4",
    alt: "Soria Moria SOME mockup video",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_some_Snitt-1_hpcen6.png",
    alt: "Soria Moria main artwork 4",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_some_Snitt-2_qr9tlo.png",
    alt: "Soria Moria main artwork 5",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_some_Snitt-7_burir2.png",
    alt: "Soria Moria main artwork 6",
  },
];

const SoMoMediaShowcase = () => (
  <div className="w-full my-10 xl:my-20 px-0 md:px-20 relative overflow-hidden">
    <ul className="flex flex-row gap-5 md:gap-10 items-center w-full px-5 overflow-x-auto md:overflow-visible no-scrollbar md:justify-center snap-x snap-mandatory scroll-smooth">
      {media.map((item) => (
        <li key={item.src} className="shrink-0 snap-center">
          {item.type === "video" ? (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-64 h-auto object-cover rounded-xl"
            />
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              width={256}
              height={256}
              className="w-64 h-auto object-cover rounded-xl"
            />
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default SoMoMediaShowcase;
