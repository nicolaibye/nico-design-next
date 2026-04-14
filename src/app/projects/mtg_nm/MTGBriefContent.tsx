import AnimatedText from "@/app/comp/reuse/AnimatedText";
import SectionDivider from "@/app/comp/reuse/SectionDivider";
import { Lexend } from "next/font/google";
import { wrapText } from "@/app/js/helper/wrapText";

const fontLexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const HolidazeBriefContent = () => {
  return (
    <section>
      <div
        className={`flex justify-center items-center p-20 md:px-40 h-screen ${fontLexend.variable}`}
      >
        <div className="block xl:hidden">
          <AnimatedText
            lines={wrapText(
              `"…a brand mark that is “unmistakably” Norwegian to represent a Magic: The Gathering tournament."`,
              24,
            )}
            uppercase
            focusLine={1}
            size="md"
            align="left"
          />
        </div>
        <div className="hidden xl:block">
          <AnimatedText
            lines={wrapText(
              `"…a brand mark that is “unmistakably” Norwegian to represent a Magic: The Gathering tournament."`,
              24,
            )}
            uppercase
            focusLine={1}
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
          The Magic: The Gathering committee in Oslo, Norway, sought a Graphic
          Designer to create a logo for their Norwegian championship. After a
          brief email exchange and portfolio review, they were happy to be
          working with me on this project.
          <br />
          <br />
          We started working on a brief together, and due to a limited budget,
          we decided to focus primarily on the tournament&apos;s logo, featuring
          a brand mark and a horizontal lock-up they could use for the 2026
          tournament. From the brief, the committee wanted a simple and
          recognisable mark they could use for the coming years. Further, they
          added that they would like for the logo to be “unmistakably”
          Norwegian, but this wasn’t a requirement.
        </p>
      </div>
    </section>
  );
};

export default HolidazeBriefContent;
