import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full">
      <Image
        id="hero-img"
        src="https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/CTOJ5926_bmnxu6.png"
        alt="Picture of me, Nicolai"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default HeroImage;
