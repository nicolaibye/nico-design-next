import AnimatedText from "@/app/comp/reuse/AnimatedText";
import SectionDivider from "@/app/comp/reuse/SectionDivider";
import { Lexend } from "next/font/google";
import { wrapText } from "@/app/js/helper/wrapText";

const fontLexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const NeiroBriefContent = () => {
  return (
    <section>
      <div
        className={`flex justify-center items-center p-20 md:px-40 h-screen ${fontLexend.variable}`}
      >
        <div className="block xl:hidden">
          <AnimatedText
            lines={wrapText(
              `"...create a brand and visual identity for a new electronic dance music (EDM) festival with a Japanese theme that is aimed at young adults both in the West and East, creating an interest for both backgrounds."`,
              39,
            )}
            uppercase
            focusLine={0}
            size="md"
            align="left"
          />
        </div>
        <div className="hidden xl:block">
          <AnimatedText
            lines={wrapText(
              `"...create a brand and visual identity for a new electronic dance music (EDM) festival with a Japanese theme that is aimed at young adults both in the West and East, creating an interest for both backgrounds."`,
              39,
            )}
            uppercase
            focusLine={0}
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
          During my studies at UCA (University for the Creative Arts) I was
          given the opportunity to create my own project for our FMP (Final
          Major Project). At the time I was 21 years old and had recently
          discovered the wonderful world of music festivals. As an aspiring
          brand designer, I couldn’t imagine a better project than to work on
          the branding for a music festival.
          <br />
          <br />
          During my initial research into the project, I unveiled the huge EDM
          (Electronic Dance Music) scene in the East. Given my pre-existing
          interest in Eastern culture, this seemed like a perfect project to
          further explore and learn about a world I already was interested in.
        </p>
      </div>
    </section>
  );
};

export default NeiroBriefContent;
