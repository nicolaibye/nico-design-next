import Image from "next/image";

type MockupItem = {
  image: { src: string; alt: string; bg?: string };
  video?: { src: string };
  label?: string;
  description?: string;
  labelPosition?: "above" | "below";
};

const MockupGrid = ({ items }: { items: MockupItem[] }) => (
  <div className="flex flex-col md:flex-row flex-wrap gap-5 xl:gap-10">
    {items.map((item, i) => (
      <div
        key={i}
        className="flex flex-col items-center gap-5 xl:gap-10 mx-auto w-[90%] md:w-[calc(50%-1.25rem)]"
      >
        {item.label && item.labelPosition === "above" && (
          <div className="flex flex-col xl:flex-row gap-3 xl:gap-20 w-[90%]">
            <h3 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
              {item.label}
            </h3>
            {item.description && (
              <p className="font-lexend text-sm">{item.description}</p>
            )}
          </div>
        )}
        <div
          className={`relative aspect-square w-full rounded-xl overflow-hidden`}
        >
          {item.video ? (
            <video
              src={item.video.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover ${item.image.bg ?? ""}`}
            />
          )}
        </div>
        {item.label && item.labelPosition === "below" && (
          <div className="flex flex-col-reverse xl:flex-row gap-3 xl:gap-20 w-[90%]">
            {item.description && (
              <p className="font-lexend text-sm">{item.description}</p>
            )}
            <h3 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
              {item.label}
            </h3>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default MockupGrid;
