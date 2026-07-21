"use client";

import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import useTypewriter from "../hook/useTypewriter";

const slides = [
  {
    title: "A boy born in the cold north",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755595786/NES_console_ovywjh.png",
    description:
      "I was born in Skien and grew up in the coastal town of Kragerø, Norway—surrounded by creativity from the very start. My mum was forever ordering every craft kit under the sun, while my grandmother wrote satirical plays for the local community alongside my granduncle, a devoted journalist and poet. It was a childhood full of colour, imagination, and stories. My mum always told me to chase whatever I wanted to be, and I proudly declared, “I don't want to be like everyone else”—a promise to myself I've been keeping ever since.",
  },
  {
    title: "He hungered for creativity beyond the fjords",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755595758/about_today_wv4c1h.png",
    description:
      "My creative path took shape in high school, where I studied Media and Communications. I got to explore the full spectrum of creative fields—film, photography, design—but it was design that truly clicked. With the encouragement of inspiring teachers and a chain of lucky breaks, I found myself in the UK studying Graphic Communications at the University for the Creative Arts in Farnham, Surrey. That experience not only sharpened my skills but also cemented my love for crafting visuals that connect with people.",
  },
  {
    title: "Building towards a colourful, minimalist future",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755595757/on_our_way_zp9ezh.png",
    description:
      "Today, I work at the intersection of design and development—crafting brands, websites, and experiences that balance clarity, creativity, and a touch of playfulness. Whether I'm refining a visual identity, coding an interactive interface, or exploring new creative tools, my goal is always the same: to create work that feels thoughtful, human, and memorable, while also enjoying my life to the fullest.",
  },
];

const About = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const count = slides.length;
  const { text: typedWord, isBlinking } = useTypewriter([
    "Colourful",
    "Creative",
    "Kind",
    "Quirky",
    "Weird*",
    "👁️👄👁️",
    "Dedicated",
  ]);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrentSlide = () => {
      setCurrentSlide(api.selectedScrollSnap() + 1);
    };

    const timeoutId = window.setTimeout(updateCurrentSlide, 0);

    api.on("select", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
      window.clearTimeout(timeoutId);
    };
  }, [api]);

  return (
    <>
      <h1 className="visually-hidden">About Page</h1>
      <div
        className={`flex flex-col justify-center items-center w-full min-h-screen`}
      >
        <div className="grid grid-cols-1 gap-5 sm:gap-10 w-full md:w-200 p-5 sm:p-10 md:p-20">
          <div className="flex gap-5 items-end justify-between">
            <h2 className="font-lexend uppercase text-3xl sm:text-6xl min-w-fit tracking-widest h-25 sm:h-46 sm:leading-16">
              The
              <br />
              <div className="text-red-CoralRed font-redaction-50 font-bold normal-case text-4xl sm:text-7xl sm:leading-18 translate-y-0.5">
                <span className="inline-block">
                  {typedWord}
                  <span
                    aria-hidden="true"
                    className={`inline-block w-0.75 sm:w-1 h-5.75 sm:h-10 bg-current ${
                      isBlinking ? "animate-cursor-blink" : "opacity-100"
                    }`}
                  />
                </span>
              </div>
              Minimalist
            </h2>
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Slide navigation"
            >
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={currentSlide === index + 1}
                  aria-controls={`slide-${index + 1}`}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index + 1
                      ? "bg-red-CoralRed"
                      : "bg-black-Mirage/20 dark:bg-white-LinkWater/20 hover:bg-black-Mirage/60 hover:dark:bg-white-LinkWater/60 cursor-pointer"
                  }`}
                />
              ))}
            </div>
          </div>
          <Carousel
            opts={{ duration: 20 }}
            className="w-full outline outline-black-Mirage dark:outline-white-LinkWater rounded-lg"
            setApi={setApi}
          >
            <CarouselContent
              viewportClassName="p-5 sm:p-10"
              className="-ml-5 sm:-ml-10 transition-none!"
            >
              {slides.map((slide, index) => (
                <CarouselItem
                  className="pl-5 sm:pl-10 rounded font-lexend grid gap-5 sm:gap-10"
                  key={index}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1000}
                    height={1000}
                    className="w-4/5 hidden md:block h-auto object-contain rounded-lg self-center justify-self-center"
                  />
                  <div className="flex flex-col gap-2 sm:gap-5  md:self-center">
                    <h3 className="font-semibold text-2xl sm:text-4xl">
                      {slide.title}
                    </h3>
                    <p className="leading-tight text-sm sm:text-base">
                      {slide.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default About;
