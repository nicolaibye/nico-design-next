import Image from "next/image";

type MasonryItem = {
  id: string;
  image: string;
  alt: string;
  title: string;
  description?: string;
};

const items: MasonryItem[] = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091819/ios-app-icon-iphone-17-pro-mockup-on-gradient-background-v6-front-view_pnvyzj.jpg",
    alt: "...",
    title: "Title",
    description: "Some text",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091817/Floating-Classic-Notebooks-Cover-Design-psd-Mockup_eaeglf.jpg",
    alt: "...",
    title: "Title",
    description: "Some text",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091819/ios-app-icon-iphone-17-pro-mockup-on-gradient-background-v6-front-view_pnvyzj.jpg",
    alt: "...",
    title: "Title",
    description: "Some text",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091816/Studio_Desk_iPhone_Mockup_ysmdxf.jpg",
    alt: "...",
    title: "Title",
    description: "Some text",
  },
    {
    id: "5",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091819/ios-app-icon-iphone-17-pro-mockup-on-gradient-background-v6-front-view_pnvyzj.jpg",
    alt: "...",
    title: "Title",
    description: "Some text",
  },
    {
    id: "3",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091819/ios-app-icon-iphone-17-pro-mockup-on-gradient-background-v6-front-view_pnvyzj.jpg",
    alt: "...",
    title: "Title",
    description: "Some text",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091816/Studio_Desk_iPhone_Mockup_ysmdxf.jpg",
    alt: "...",
    title: "Title",
    description: "Some text",
  },
    {
    id: "5",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091819/ios-app-icon-iphone-17-pro-mockup-on-gradient-background-v6-front-view_pnvyzj.jpg",
    alt: "...",
    title: "Title",
    description: "Some text",
  },
];

const MasonryArchiveGrid = () => (
  <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
    {items.map((item) => (
      <div key={item.id} className="break-inside-avoid">
        <div className="rounded-lg overflow-hidden bg-green-RiverBed shadow-sm">
          <Image
            src={item.image}
            alt={item.alt}
            className="w-full h-auto object-cover"
            width={1000}
            height={1000}
          />
          <div className="p-3">
            <h3 className="font-lexend text-sm font-medium">{item.title}</h3>
            {item.description && (
              <p className="font-lexend text-xs text-black-Mirage/60 mt-1">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MasonryArchiveGrid;
