// components/HeroPantone.tsx
import { Lexend } from "next/font/google";
import { heroCards } from "../../../../data/heroCards";
import HeroCard from "./HeroCard";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const HeroPantone = () => {
  return (
    <div className={`z-20 ${lexend.variable} w-screen sm:w-auto`}>
      <ul
        className="group grid grid-cols-2 sm:grid-cols-4 gap-4 sm:mt-12 h-auto sm:h-50 lg:h-69 w-full p-5 sm:p-0 sm:w-150 lg:w-200"
        id="hero-nav"
      >
        {heroCards.map((card, index) => (
          <HeroCard key={card.id || card.title} card={card} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default HeroPantone;
