"use client";

import React, { useEffect, useRef, useState } from "react";
import { Lexend } from "next/font/google";
import { Leckerli_One } from "next/font/google";
import gsap from "gsap";

const fontLexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const leckerliOne = Leckerli_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-leckerli",
});

const slides = [
  {
    title: "A boy born in the cold north",
    description:
      "I was born in Skien and grew up in the coastal town of Kragerø, Norway—surrounded by creativity from the very start. My mum was forever ordering every craft kit under the sun, while my grandmother wrote satirical plays for the local community alongside my granduncle, a devoted journalist and poet. It was a childhood full of colour, imagination, and stories. My mum always told me to chase whatever I wanted to be, and I proudly declared, “I don't want to be like everyone else”—a promise to myself I've been keeping ever since.",
  },
  {
    title: "He hungered for creativity beyond the fjords",
    description:
      "My creative path took shape in high school, where I studied Media and Communications. I got to explore the full spectrum of creative fields—film, photography, design—but it was design that truly clicked. With the encouragement of inspiring teachers and a chain of lucky breaks, I found myself in the UK studying Graphic Communications at the University for the Creative Arts in Farnham, Surrey. That experience not only sharpened my skills but also cemented my love for crafting visuals that connect with people.",
  },
  {
    title: "Building towards a colourful, minimalist future",
    description:
      "Today, I work at the intersection of design and development—crafting brands, websites, and experiences that balance clarity, creativity, and a touch of playfulness. Whether I'm refining a visual identity, coding an interactive interface, or exploring new creative tools, my goal is always the same: to create work that feels thoughtful, human, and memorable, while also enjoying my life to the fullest.",
  },
];

const About = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const slideCount = slides.length;

  const goTo = (next: number) => {
    // wrap around in both directions
    const wrapped = (next + slideCount) % slideCount;
    setIndex(wrapped);
  };

  const handleNext = () => goTo(index + 1);
  const handlePrev = () => goTo(index - 1);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -100 * index,
        duration: 0.7,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    }, trackRef);

    return () => ctx.revert();
  }, [index]);

  // Arrow key navigation while the carousel is focused
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  return (
    <>
      <h1 className="visually-hidden">About Page</h1>
      <div
        className={`flex flex-col justify-center items-center w-full h-screen ${fontLexend.variable} ${leckerliOne.variable}`}
      >
        <div className="grid grid-cols-1 gap-10 lg:gap-10 w-200 p-5 sm:p-10 md:p-20">
          <h2 className="font-lexend uppercase text-6xl min-w-fit tracking-widest">
            The
            <br />
            <div className="text-red-CoralRed">
              <span className="block">Colourfull</span>
              <span className="hidden">Creative</span>
              <span className="hidden">Goofy</span>
              <span className="hidden">Quirky</span>
              <span className="hidden">Weird</span>
              <span className="hidden">Dedicated</span>
            </div>
            Minimalist
          </h2>

          <div
            ref={carouselRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="About me"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="relative outline-1 outline-black-Mirage rounded-md overflow-hidden focus:outline-2 focus:outline-red-CoralRed"
          >
            <div ref={trackRef} className="flex">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slideCount}`}
                  aria-hidden={i !== index}
                  className="p-5 rounded font-lexend w-full shrink-0"
                >
                  <h3 className="font-semibold text-4xl">{slide.title}</h3>
                  <p className="leading-thight">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="cursor-pointer"
              >
                Next
              </button>
            </div>

            <div className="flex gap-2" role="tablist" aria-label="Slide navigation">
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
                    i === index
                      ? "bg-red-CoralRed"
                      : "bg-black-Mirage/30 dark:bg-white-LinkWater/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
