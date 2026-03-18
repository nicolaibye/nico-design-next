import { Major_Mono_Display } from "next/font/google";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const fontMajorono = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-majorono",
});

const LandingPageHero = () => {
  return (
    <section
      className={`h-screen overflow-hidden flex flex-col items-center justify-center relative ${fontMajorono.variable}`}
    >
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default LandingPageHero;
