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
              `"...Holidaze is a SaaS service in need of a new brand identity along with a complete website, both design and development."`,
              36,
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
              `"...Holidaze is a SaaS service in need of a new brand identity along with a complete website, both design and development."`,
              36,
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
          While finishing up my studies at Noroff, our final project was to
          design and develop a full website for a SaaS service company named
          Holidaze. It was a website that would host both regular hotels and
          hosts offering their houses and apartments. We also stood freely to
          develop a profile befitting the company.
          <br />
          <br />I took this opportunity to develop a comprehensive brand
          identity to guide my design decisions, as well as how we approached
          our positioning in relation to our competitors. Along with fully
          developing and designing Holidazes’ website.
        </p>
      </div>
    </section>
  );
};

export default HolidazeBriefContent;
