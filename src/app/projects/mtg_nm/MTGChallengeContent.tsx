import { Lexend } from "next/font/google";
import SectionDivider from "@/app/comp/reuse/SectionDivider";
import AnimatedText from "@/app/comp/reuse/AnimatedText";
import { wrapText } from "@/app/js/helper/wrapText";
import InteractiveLogoProcess from "@/app/comp/reuse/InteractiveLogoProcess";

const fontLexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const MTGChallengeContent = () => {
  return (
    <section className={`${fontLexend.variable}`}>
      <div
        className={`flex justify-center items-center p-20 md:px-40 min-h-[50vh] ${fontLexend.variable}`}
      >
        <div className="block md:hidden">
          <AnimatedText
            lines={wrapText(`"...“unmistakably” Norwegian."`, 10)}
            focusLine={2}
            uppercase
            size="md"
            align="left"
          />
        </div>
        <div className="hidden md:block">
          <AnimatedText
            lines={wrapText(`"...“unmistakably” Norwegian."`, 10)}
            focusLine={2}
            uppercase
            size="lg"
            align="left"
          />
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center my-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            The Moose
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 mt-10">
          The brief was concise and straightforward, but offered many
          possibilities. The biggest challenge was achieving an
          &quot;unmistakably Norwegian&quot; identity. While not required, I
          believed this was the key to standing out from competitors.
          <br />
          <br />
          Building on this challenge, during my sketching and research, I
          explored concepts inspired by landmarks, notable buildings,
          Norway&apos;s winter landscape, mountains, fjords, and the coat of
          arms. However, the design came together when I chose the moose as the
          central element.
          <br />
          <br />
          The moose is the largest mammal in Norwegian forests and the largest
          member of the cervid family worldwide. In Norway, it is known as
          &quot;The King of the forest.&quot; Due to this symbolism, the concept
          of the moose was merged with the idea of a Norwegian Champion, uniting
          both ideas.
        </p>
      </div>
      <InteractiveLogoProcess />
      <div
        className={`flex flex-col justify-center items-center mt-20 md:mt-auto min-h-[50vh] px-10 lg:px-40`}
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            The Brand
          </h2>
        </SectionDivider>
        <p className="font-lexend font-light text-black-Mirage dark:text-white-LinkWater lg:px-40 my-10">
          As a result, the final brand mark features two intertwined antlers
          symbolising the moose as &quot;king of the forest&quot;, with a
          crystal at the top representing Norway&apos;s winters. The design also
          references the card game Magic: The Gathering and is presented atop a
          trophy base, creating a distinctive prize for the winner.
        </p>
      </div>
    </section>
  );
};

export default MTGChallengeContent;
