import AnimatedText from "@/app/(website)/comp/reuse/AnimatedText";
import SectionDivider from "@/app/(website)/comp/reuse/SectionDivider";
import { wrapText } from "@/app/(website)/js/helper/wrapText";

const MTGBriefContent = () => {
  return (
    <section>
      <div
        className={`flex justify-center items-center p-10 sm:pt-40 sm:px-40`}
      >
        <div className="block xl:hidden">
          <AnimatedText
            lines={wrapText(
              `"…a brand mark that is “unmistakably” Norwegian to represent the Norwegian Magic: The Gathering national championship."`,
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
              `"…a brand mark that is “unmistakably” Norwegian to represent the Norwegian Magic: The Gathering national championship."`,
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
        className={`flex flex-col justify-center items-center lg:h-screen px-10 sm:py-40 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Background
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 mt-10">
          The Magic: The Gathering committee in Oslo, Norway, sought a Graphic
          Designer to create a logo for their upcoming Norwegian Championship.
          After a brief email exchange and portfolio review, they were happy to
          be working with me on this project.
          <br />
          <br />
          We started working on a brief together, and due to a limited budget,
          we decided to focus primarily on the tournament&apos;s logo, featuring
          a brand mark and a horizontal lock-up they could use for the 2026
          tournament. From the brief, the committee wanted a simple and
          recognisable mark they could use for the coming years. Further, they
          added that they would like for the logo to be “unmistakably”
          Norwegian, but this wasn&apos;t a requirement.
        </p>
      </div>
    </section>
  );
};

export default MTGBriefContent;
