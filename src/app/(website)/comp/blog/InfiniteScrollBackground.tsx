import Image from "next/image";

interface InfiniteScrollTrackProps {
  src: string;
  alt: string;
  repeat?: number;
}

function InfiniteScrollTrack({
  src,
  alt,
  repeat = 2,
}: InfiniteScrollTrackProps) {
  return (
    <div className="flex gap-2 h-full w-max animate-scroll-x will-change-transform motion-reduce:animate-none">
      {Array.from({ length: repeat }).map((_, i) => (
        <Image
          key={i}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i !== 0}
          className="h-full object-contain w-fit shrink-0"
          width={4000}
          height={4000}
        />
      ))}
    </div>
  );
}

interface InfiniteScrollBackgroundProps {
  src: string;
  alt: string;
  durationSeconds?: number;
}

function InfiniteScrollBackground({
  src,
  alt,
  durationSeconds = 40,
}: InfiniteScrollBackgroundProps) {
  return (
    <div
      className="absolute inset-0 h-full w-full"
      style={
        { "--scroll-duration": `${durationSeconds}s` } as React.CSSProperties
      }
    >
      <div className="absolute top-0 left-0 h-full z-10">
        <InfiniteScrollTrack src={src} alt={alt} />
      </div>
    </div>
  );
}

export default InfiniteScrollBackground;
