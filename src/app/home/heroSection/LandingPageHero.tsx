import { Major_Mono_Display } from "next/font/google";
import HeroText from "./HeroText";
import HeroPantone from "./HeroPantone"
import HeroImage from "./HeroImage";

const fontMajorono = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-majorono",
});

const LandingPageHero = () => {
  return (
    <section
      className={`relative -top-5 -left-5 h-real-screen overflow-hidden flex flex-col items-center justify-center ${fontMajorono.variable}`}
    >
      <HeroText />
      <HeroPantone />
      <HeroImage />
    </section>
  );
};

export default LandingPageHero;
