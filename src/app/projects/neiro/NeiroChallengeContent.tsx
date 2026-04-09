"use client";
import { Lexend } from "next/font/google";
import SectionDivider from "@/app/comp/reuse/SectionDivider";
import AnimatedText from "@/app/comp/reuse/AnimatedText";
import { wrapText } from "@/app/js/helper/wrapText";
import { gsap } from "gsap/gsap-core";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(Draggable, InertiaPlugin);

const fontLexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

function initDraggable() {
  Draggable.create("[data-dragable]", {
    bounds: "#sketches",
    type: "x,y",
    inertia: true,
    edgeResistance: 1,

    onPress() {
      this.target.style.zIndex = 10;
      this.target._floatTimeline?.pause();
    },

    onDrag() {
      InertiaPlugin.track(this.target, "x,y");
      const velocityX = InertiaPlugin.getVelocity(this.target, "x");
      gsap.to(this.target, {
        rotation: gsap.utils.clamp(-20, 20, velocityX * 0.01),
        duration: 0.2,
        overwrite: true,
      });
    },

    onRelease() {
      this.target.style.zIndex = 1;

      InertiaPlugin.track(this.target, "x,y");
      const velocityX = InertiaPlugin.getVelocity(this.target, "x");
      if (Math.abs(velocityX) < 20) return;

      // Rotate based on horizontal velocity
      const rotation = gsap.utils.clamp(-40, 40, velocityX * 0.01);
      const duration = gsap.utils.clamp(0.7, 1, Math.abs(velocityX) * 0.01);

      gsap.to(this.target, {
        rotation: rotation,
        duration: duration,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    },
  });
}

function fullView(target: HTMLElement) {
  gsap.to(target, {
    x: (window.innerWidth - target.offsetWidth) / 2,
    y: (window.innerHeight - target.offsetHeight) / 2,
    rotation: 0,
    duration: 0.5,
    ease: "power2.out",
    scale: 15,
  });
}

const NeiroChallengeContent = () => {
  useEffect(() => {
    initDraggable();
  }, []);

  return (
    <section className={`${fontLexend.variable}`}>
      <div
        className={`flex justify-center items-center p-20 md:px-40 min-h-[50vh] ${fontLexend.variable}`}
      >
        <AnimatedText
          lines={wrapText(
            `At the start of this project, I identified two research focuses: music festivals as an arena and the relationship between the East and the West.`,
            50,
          )}
          size="md"
          align="left"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center my-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider>
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Music festivals
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 mt-10">
          During my research into the space, it quickly became apparent that the
          music alone was no longer as important as the experience, unlike in
          the past. Today, we have endless choices when it comes to festivals,
          all competing for our attention in a tug of war. This has led to
          festivals differentiating themselves through strong brand identity and
          an emphasis on the experience economy. A great example of this is
          Tomorrowland, one of the world&apos;s largest music festivals, where
          everything from your ticket to the trash cans on site is carefully
          crafted to immerse you in their world.
          <br />
          <br />
          Due to my project focused on the brand, it was essential to create an
          identity that was strong and had a unique foundation, while also being
          expandable and applicable to every touchpoint at the festival.
        </p>
      </div>
      <div id="sketches" className={`relative flex m-20 md:mx-40 min-h-[75vh]`}>
        <div
          data-dragable
          className="absolute top-0 right-0 w-10 h-10 bg-blue-400 hover:bg-amber-50"
        />
        <div
          data-dragable
          className="absolute bottom-0 right-0 w-10 h-10 bg-amber-400 hover:bg-amber-50"
        />
        <div
          data-dragable
          className="absolute top-0 left-0 w-10 h-10 bg-red-400 hover:bg-amber-50"
          onDoubleClick={(e) => fullView(e.currentTarget)}
        />
        <div
          data-dragable
          className="absolute bottom-0 left-0 w-10 h-10 bg-lime-400 hover:h-20"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center mt-10 md:mt-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider>
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            The East and Orientalism
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 my-10">
          The West has a long history of alienating the East through different
          methods throughout the years. Shortly summarised, traditional
          orientalism is the depiction of temples, ninjas, geisha, kimono, etc.,
          fetishising the “exotic” East. Techno-orientalism is the depiction of
          the Japanese people as soulless machines working under an authority
          with no real emotions. Lastly, wacky-orientalism covers the modern
          form of orientalist thinking seen in memes like “because Japan” and
          “WTF Japan”, depicting them as weird people we don’t associate with. I
          would argue that we are moving into a new wave of orientalism.
          <br />
          <br />
          In recent years, post the pandemic, this alienation has started to
          lessen but also take on a new form. Tourism has grown exponentially in
          the East, particularly in Japan, which has brought its own problems.
          Today, many travel to Japan, being sold the idealistic world promised
          on social media, which in turn makes tourists treat the country like
          their own playground, resulting in annoyance and discomfort from the
          local population about how they are being treated.
          <br />
          <br />
          For my project, it was important to be aware and actively create with
          this history in mind, as the goal was to bring the West and East
          together. I decided to focus on the technological side of Japan, as I
          found it to be an easily recognisable visual landscape for the
          festival, but also to celebrate the incredible technological strides
          of Japan, instead of dehumanising them for it.
        </p>
      </div>
    </section>
  );
};

export default NeiroChallengeContent;
