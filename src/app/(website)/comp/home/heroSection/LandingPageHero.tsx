import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const LandingPageHero = () => {
  return (
    <section
      className={`h-screen overflow-hidden flex flex-col items-center justify-center relative`}
    >
      <HeroContent />
      <HeroImage />
      <div className="absolute -z-10 inset-0 h-full w-full lg:bg-[radial-gradient(circle,#73737333_1px,transparent_1px)] lg:bg-size-[22px_22px] lg:mask-[linear-gradient(to_bottom,#000_0%,transparent_100%)]" />
    </section>
  );
};

export default LandingPageHero;
