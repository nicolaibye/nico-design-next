import HeroPantone from "./HeroPantone";

const HeroContent = () => {
  return (
    <div className="flex items-center justify-center h-full sm:h-auto">
      <div className="w-auto flex flex-col gap-24 justify-between items-center md:items-end h-full sm:h-auto">
        <h1 className="z-20 -rotate-90 custom-text-origin sm:rotate-0 font-majorono text-5xl sm:text-[5.5rem] leading-10 sm:leading-20 xl:leading-24 lg:text-8xl xl:text-9xl flex flex-col md:flex-row sm:w-full sm:justify-center self-end text-right mix-blend-difference md:gap-20 lg:gap-32 text-white">
          <span id="hero-target">
            nico
          </span>
          <span className="flex flex-col justify-center">
            <span>desiGn</span>
          </span>
        </h1>
        <HeroPantone />
      </div>
    </div>
  );
};

export default HeroContent;
