import AnimatedText from "@/app/comp/reuse/AnimatedText";
import SectionDivider from "@/app/comp/reuse/SectionDivider";
import { Lexend } from "next/font/google";
import { wrapText } from "@/app/js/helper/wrapText";

const fontLexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const SablaBraBriefContent = () => {
  return (
    <section>
      <div
        className={`flex justify-center items-center p-20 md:px-40 h-screen ${fontLexend.variable}`}
      >
        <div className="block xl:hidden">
          <AnimatedText
            lines={wrapText(
              `"...designing a visual identity that captures the essence of Sabla Bra ...aiming for a cohesive design language to be used for years."`,
              25,
            )}
            uppercase
            focusLine={2}
            size="md"
            align="left"
          />
        </div>
        <div className="hidden xl:block">
          <AnimatedText
            lines={wrapText(
              `"...designing a visual identity that captures the essence of Sabla Bra ...aiming for a cohesive design language to be used for years."`,
              25,
            )}
            uppercase
            focusLine={2}
            size="lg"
            align="left"
          />
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center my-auto h-screen px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Background
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 mt-10">
          During my time at S & B - N, I had the pleasure of working with a
          group of creative souls on the Sabla Bra committee. Sabla Bra is a
          southern Norwegian initiative/competition where we celebrate the great
          work created within MarCom. Everything, from TV campaigns to visual
          identities, gets its moment to shine once a year at the awards
          ceremony. My role on the committee involved being part of the design
          team, primarily working through our communication channels. However,
          there was also an opportunity to explore the committee&apos;s
          identity, as they did not have a set brand in place.
          <br />
          <br />I took on the challenge of designing a visual identity that
          captures the essence of Sabla Bra. I focused on the committee&apos;s
          logo, colour palette, and supporting graphics, aiming for a cohesive
          design language to be used for years.
        </p>
      </div>
    </section>
  );
};

export default SablaBraBriefContent;
