"use client";
import { Lexend } from "next/font/google";
import SectionDivider from "@/app/comp/reuse/SectionDivider";
import AnimatedText from "@/app/comp/reuse/AnimatedText";
import { wrapText } from "@/app/js/helper/wrapText";
import { useDraggable } from "@/app/hook/useDraggable";
import DraggableItem from "@/app/comp/reuse/DraggableItem";
import Image from "next/image";

const fontLexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const sketches = [
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1775750817/fmp_mindmap_snfnap.jpg",
    alt: "Festival Mindmap Sketch",
    width: "w-60",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1775750816/words_2_huqt6a.jpg",
    alt: "Words_2 Sketch",
    width: "w-60",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1775750816/logo_sketches_c46q5t.jpg",
    alt: "Logo Sketch",
    width: "w-45",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1775750815/asia_mindmap_yscod5.jpg",
    alt: "Asia Mindmap Sketch",
    width: "w-60",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1775750815/words_1_svukgp.jpg",
    alt: "Words_1 Sketch",
    width: "w-45",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
];

const SablaBraChallengeContent = () => {
  useDraggable("sketches");

  return (
    <section className={`${fontLexend.variable}`}>
      <div
        className={`flex justify-center items-center p-20 md:px-40 min-h-[50vh] ${fontLexend.variable}`}
      >
        <AnimatedText
          lines={wrapText(
            `The identity should allude to strong
          fundamentals. As creatives, we should be bold and proud of our
          boldness, and how we see things in a nuanced way that non-creatives
          often don't.`,
            50,
          )}
          size="md"
          align="left"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center my-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Three main concepts
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 mt-10">
          When approaching this project, I established fundamental guiding
          principles to reference throughout my design process. I developed
          three main concepts. The identity should allude to strong
          fundamentals. As creatives, we should be bold and proud of our
          boldness, and how we see things in a nuanced way that non-creatives
          often don&apos;t. Through collaboration with a second designer on the
          committee, we exchanged rounds of visual suggestions privately before
          coming together to provide feedback and brainstorm ideas based on each
          of our developments of the identity.
          <br />
          <br />
          Each element takes shape as part of the greater visual identity.
          Instead of a single main logo lockup, the identity features three,
          each with its own distinct basic shape. Much creativity can emerge
          from three simple shapes: triangles, squares, and circles. This pays
          homage to the fundamentals all creatives start with for their future
          work.
        </p>
      </div>
      <div id="sketches" className="relative flex m-10 md:mx-20 min-h-[75vh]">
        {sketches.map((sketch, index) => (
          <DraggableItem
            key={index}
            className={`absolute ${sketch.width} h-fit ${sketch.position}`}
          >
            <Image src={sketch.src} alt={sketch.alt} width={500} height={500} />
          </DraggableItem>
        ))}
      </div>
      <div
        className={`flex flex-col justify-center items-center mt-10 md:mt-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Neon and 3d
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 my-10">
          Building on this, I developed a colour palette meant to be jarring. I
          chose a sharp, neon-based palette to allude to the endless Post-it
          Notes used in brainstorming, and to stand out with a strong, loud
          visual identity. It serves as a calling card for creatives, saying “we
          are here and proud” to be colourful and “extra.”
          <br />
          <br />
          Finally, the concept of seeing things through a different lens, or
          looking through the looking glass, if you will. As creatives, we are
          constantly challenged to communicate with many people we have never
          met, and to ensure we can, we have to adapt, twist, and adjust our
          communication in ways that have never been seen or heard of before. To
          create truly uniqe experiencess that stay with people. This is where
          the supporting graphics of 3D glass form came into play, as a nod to
          the lens through which we develop our concepts and ideas.
          <br />
          <br />
          The visual identity was used throughout our communication for Sabla
          Bra 2023 and received general excitement and vocal approval from
          several local creatives.
        </p>
      </div>
    </section>
  );
};

export default SablaBraChallengeContent;
