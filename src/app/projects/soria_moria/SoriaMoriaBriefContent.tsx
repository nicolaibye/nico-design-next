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
              `"A creative collaboration between children and professional artists to create a space for expression, creativity, and inclusion."`,
              30,
            )}
            uppercase
            focusLine={3}
            size="md"
            align="left"
          />
        </div>
        <div className="hidden xl:block">
          <AnimatedText
            lines={wrapText(
              `"A creative collaboration between children and professional artists to create a space for expression, creativity, and inclusion."`,
              40,
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
          The year was 2022, after years plagued by the pandemic and global
          unrest, many children had been deeply affected by the world
          surrounding them. Blå Kors, in light of this, wanted to create the
          largest children&apos;s art exhibition in Norway. Through collaboration
          between children and professional artists, they wanted to create a
          space for expression, creativity and inclusion. Making room for
          children to express their emotions after these trying times.
          <br />
          <br />
          The agency I was working at, and I was tasked with helping them with
          the visual identity for their campaign, as well as creating
          collaterals like flyers for the parents, advertising posters and
          digital assets.
        </p>
      </div>
    </section>
  );
};

export default HolidazeBriefContent;
