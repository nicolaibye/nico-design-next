const HeroText = () => {
  return (
    <div className="z-20 flex flex-col justify-between h-full w-full md:justify-center md:w-auto md:h-auto md:items-end">
      <h1 className="-rotate-90 origin-bottom-right -mt-30 md:rotate-0 font-majorono text-5xl md:text-[5.5rem] leading-10 md:leading-20 xl:leading-24 lg:text-8xl xl:text-9xl flex flex-col md:flex-row md:gap-24 lg:gap-36 xl:gap-40 self-end md:self-start text-right">
        <span className="md:text-white" id="hero-target">
          nico
        </span>
        <span className="flex flex-col align-baseline justify-start">
          <span>desiGn</span>
          <span className="md:text-[3.65rem] lg:text-[4rem] xl:text-[5.275rem]">
            portfolio
          </span>
        </span>
      </h1>
    </div>
  );
};

export default HeroText;
