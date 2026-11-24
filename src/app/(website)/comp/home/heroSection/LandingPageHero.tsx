import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const LandingPageHero = () => {
  return (
    <section
      className={`h-screen overflow-hidden flex flex-col items-center justify-center relative`}
    >
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default LandingPageHero;
