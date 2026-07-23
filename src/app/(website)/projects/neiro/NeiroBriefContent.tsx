import AnimatedText from "@/app/(website)/comp/reuse/AnimatedText";
import SectionDivider from "@/app/(website)/comp/reuse/SectionDivider";
import { wrapText } from "@/app/(website)/js/helper/wrapText";

const NeiroBriefContent = () => {
  return (
    <section className="px-5 md:px-0 flex flex-col gap-10">
      <div
        className={`flex justify-center items-center p-10 lg:pt-40 sm:px-40`}
      >
        <div className="block xl:hidden">
          <AnimatedText
            lines={wrapText(
              `"...create a brand and visual identity for a new electronic dance music (EDM) festival with an Eastern theme that is aimed at young adults both in the West and East, creating an interest for both backgrounds."`,
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
              `"...create a brand and visual identity for a new electronic dance music (EDM) festival with an Eastern theme that is aimed at young adults both in the West and East, creating an interest for both backgrounds."`,
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
        className={`flex flex-col justify-center items-center sm:px-10 md:py-40 lg:px-40`}
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
          brand designer, I couldn&apos;t imagine a better project than to work
          on the branding for a music festival.
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
