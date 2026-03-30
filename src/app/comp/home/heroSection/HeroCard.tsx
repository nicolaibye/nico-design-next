"use client";
import Link from "next/link";
import { HeroCard } from "../../../data/heroCards.js";
import { Lexend } from "next/font/google";
import { useCurrentTime } from "../../../hook/useCurrentTime.ts";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

interface HeroCardProps {
  card: HeroCard;
}

const scrollToContent = (id: string) => {
  gsap.to(window, {
    duration: 1.25,
    scrollTo: {
      y: `#${id}`,
      offsetY: 90,
    },
    ease: "power3.inOut",
  });
};

const HeroCardComponent = ({ card }: HeroCardProps) => {
  // In HeroCard component, add:
  const currentTime = useCurrentTime();

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const {
    id,
    title,
    year,
    date,
    personality,
    subtitle,
    color,
    outlineColor,
    href = "#",
    timeId,
    textColor = "text-white",
  } = card;

  const content = (
    <>
      <div
        className={`${color} p-3 ${textColor} rounded-md sm:rounded-t-none sm:rounded-b-md`}
      >
        <p className="uppercase font-lexend h-5">
          {title}
          {timeId && <span id={timeId}></span>}
        </p>
        {id === "welcome-scroll" ? (
          <p className="uppercase font-lexend h-5" id="welcome-time">
            {currentTime}
          </p>
        ) : (
          <p className="uppercase font-lexend h-5">
            {year || date || personality || ""}
          </p>
        )}
        <p className="font-lexend font-light h-4 xs:h-5 text-sm xs:text-base">
          {subtitle}
        </p>
      </div>
    </>
  );

  const cardClasses = `
    lg:group-hover:opacity-50 
    lg:hover:opacity-100! 
    lg:hover:scale-[1.02] 
    transition-all 
    bg-white-LinkWater/10 
    backdrop-filter 
    backdrop-blur-md 
    ${outlineColor} 
    outline-2 
    rounded-lg 
    flex 
    flex-col 
    justify-end 
    h-full
  `;

  // Special case for welcome card (not a link)
  if (id === "welcome-scroll") {
    return (
      <li
        id={id}
        className={`cursor-pointer ${cardClasses}`}
        onClick={() => scrollToContent("quote")}
      >
        <div>{content}</div>
      </li>
    );
  }

  // Regular cards as links
  return (
    <li>
      <Link
        href={href}
        className={cardClasses}
        data-transition
        data-color={card.color.replace("bg-", "").split("-")[1]?.toLowerCase()}
        data-link
      >
        {content}
      </Link>
    </li>
  );
};

export default HeroCardComponent;
