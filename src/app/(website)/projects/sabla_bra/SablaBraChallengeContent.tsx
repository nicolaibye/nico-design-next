"use client";
import SectionDivider from "@/app/(website)/comp/reuse/SectionDivider";
import AnimatedText from "@/app/(website)/comp/reuse/AnimatedText";
import { wrapText } from "@/app/(website)/js/helper/wrapText";
import { useDraggable } from "@/app/(website)/hook/useDraggable";
import DraggableItem from "@/app/(website)/comp/reuse/DraggableItem";
import Image from "next/image";

const sketches = [
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777300910/3d_draggable_cube_2_wodqcc.png",
    alt: "3d cube",
    width: "w-40 sm:w-60",
    position: "top-3/4 left-2/5 -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777300911/3d_draggable_sphere_i4ub4i.png",
    alt: "3d sphere",
    width: "w-36 sm:w-56",
    position: "top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777300911/3d_draggable_triangle_2_ixbcff.png",
    alt: "3d triangle",
    width: "w-42 sm:w-62",
    position: "top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2",
  },
];

const SablaBraChallengeContent = () => {
  useDraggable("sketches");

  return (
    <section className="px-5 md:px-0 flex flex-col gap-10">
      <div
        className={`flex justify-center items-center p-10 lg:px-40`}
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
        className={`flex flex-col justify-center items-center sm:px-10 lg:px-40`}
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
          Instead of a single main logo, the identity features three, each with
          its own distinct basic shape. Much creativity can emerge from three
          simple shapes: triangles, squares, and circles. This pays homage to
          the fundamentals all creatives start with for their future work.
        </p>
      </div>
      <div
        id="sketches"
        className="relative flex m-10 md:mb-30 md:mx-20 min-h-[75vh]"
      >
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
        className={`flex flex-col justify-center items-center sm:px-10 md:py-40 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Neon and 3d
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 mt-10">
          Building on this, I developed a colour palette meant to be jarring. I
          chose a sharp, neon-based palette to allude to the endless Post-it
          Notes used in brainstorming, and to stand out with a strong, loud but
          visually clear identity.
          <br />
          <br />
          Finally, the concept of seeing things through a different lens, or
          looking through the looking glass, if you will. As creatives, we are
          constantly challenged to communicate with audiences we have never met,
          and to ensure we can, we have to adapt, twist, and adjust our
          communication in ways that have never been seen or heard of before. To
          create truly unique experiencess that stay with people. This is where
          the supporting graphics of 3D glass came into play, as a nod to the
          lens through which we develop our concepts and ideas.
          <br />
          <br />
          The visual identity was used throughout our communication for Sabla
          Bra 2023 and received general excitement and vocal approval from
          several leading local creatives.
        </p>
      </div>
    </section>
  );
};

export default SablaBraChallengeContent;
