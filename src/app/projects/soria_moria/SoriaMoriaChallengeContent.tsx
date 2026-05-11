"use client";
import { Lexend } from "next/font/google";
import SectionDivider from "@/app/comp/reuse/SectionDivider";
import AnimatedText from "@/app/comp/reuse/AnimatedText";
import { wrapText } from "@/app/js/helper/wrapText";
import SoMoMediaShowcase from "@/app/comp/projects/project_focus/outcome/SoMoMediaShowcase";
import Image from "next/image";

const fontLexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const HolidazeChallengeContent = () => {
  return (
    <section className={`${fontLexend.variable}`}>
      <div
        className={`flex justify-center items-center p-20 md:px-40 min-h-[50vh] ${fontLexend.variable}`}
      >
        <AnimatedText
          lines={wrapText(
            `Creating a vibrant and flexible visual identity that appeals to both children and teenagers while not being condescending.`,
            35,
          )}
          focusLine={2}
          size="md"
          align="left"
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center my-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Appealing to creativity
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 mt-10">
          The biggest and most pressing challenge with this brief was the
          targeted audience. While researching similar events, it became clear
          that one often lost one or the other end of it. Our target audience
          was children from the ages of 5 to 16, hitting both children who had
          barely started school, all the way to teenagers getting ready for high
          school.
          <br />
          <br />
          In our brainstorming and research sessions, it became apparent that we
          needed a visual identity rooted in something other than a mascot,
          something we had seen across other similar events. The issue we found
          with this approach was that it quickly lost the interest of older
          kids, coming across as “only for young children”.
          <br />
          <br />
          We needed to represent creative freedom, expression and inclusion,
          while having a distinct identity that would be instantly recognisable
          as the Soria Moria art exhibition.
        </p>
      </div>
      <SoMoMediaShowcase />
      <div
        className={`flex flex-col justify-center items-center mt-20 md:mt-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Text with a personality
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 my-10">
          Instead of having a mascot up in the audience&apos;s faces, we hid
          one. We created a typeface-based branding where we played with the
          text itself to create a recognisable figure amongst the lettermark.
          Making the main focus of the visual identity, the vibrant colours
          accompanying the lettermark.
          <br />
          <br />
          This way the identity became all about the bright and playful colours
          often associated with childrens&apos; imagination, while having a
          reaccuring figure that would be associated with the event itself. This
          also effectively opened for fun explorations in giving the lettermark
          a personality shown across socials and print, with it&apos;s
          characteristical big eyes looking at all the creativity made by the
          children.
        </p>
      </div>
    </section>
  );
};

export default HolidazeChallengeContent;
