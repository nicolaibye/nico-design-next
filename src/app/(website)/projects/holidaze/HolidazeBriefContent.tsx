import AnimatedText from "@/app/(website)/comp/reuse/AnimatedText";
import SectionDivider from "@/app/(website)/comp/reuse/SectionDivider";
import { wrapText } from "@/app/(website)/js/helper/wrapText";

const HolidazeBriefContent = () => {
  return (
    <section className="px-5 md:px-0 flex flex-col gap-10">
      <div
        className={`flex justify-center items-center p-10 lg:pt-40 lg:px-40`}
      >
        <div className="block xl:hidden">
          <AnimatedText
            lines={wrapText(
              `"...Holidaze is an online booking market in need of a new brand identity along with a complete website, both design and development."`,
              22,
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
              `"...Holidaze is an online booking market in need of a new brand identity along with a complete website, both design and development."`,
              22,
            )}
            uppercase
            focusLine={1}
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
          While finishing up my studies at Noroff, our final project was to
          design and develop a full website for an online marketing company named
          Holidaze. It was a website that would host both regular hotels and
          hosts offering their houses and apartments. We also stood freely to
          develop a profile befitting the company.
          <br />
          <br />I took this opportunity to develop a comprehensive brand
          identity to guide my design decisions, as well as how we approached
          our positioning in relation to our competitors. Along with fully
          developing and designing Holidazes&apos; website.
        </p>
      </div>
    </section>
  );
};

export default HolidazeBriefContent;
