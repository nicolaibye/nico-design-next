import React from "react";
import { Lexend, Major_Mono_Display, Leckerli_One } from "next/font/google";
import SectionDivider from "../../reuse/SectionDivider";

const fontLexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const fontMajorono = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-majorono",
});

const fontLeckerli = Leckerli_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-leckerli",
});

const HomeQuote = () => {
  return (
    <section
      className={`${fontLexend.variable} ${fontMajorono.variable} ${fontLeckerli.variable}`}
    >
      <div
        id="quote"
        className="max-w-230 mx-auto p-10 md:p-5 my-10 md:my-14 lg:my-24 flex flex-col gap-16 justify-center"
      >
        <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
          <p className="font-lexend uppercase text-xs min-w-fit tracking-widest">
            Inspirational quote&#8482;
          </p>
        </SectionDivider>

        <div className="flex flex-col items-center" aria-label="quote">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
            <p className="font-majorono text-4xl sm:text-5xl text-blue-NileBlue">
              eitHeR it
              <br />
              ends Well
            </p>
            <p className="font-lexend font-bold text-[2.5rem] sm:text-[3.35rem] leading-[0.9] md:text-5xl text-green-RiverBed">
              ... or it ends
            </p>
          </div>
          <div className="relative w-fit">
            <p className="font-leckerli text-[72px] sm:text-[92px] text-red-CoralRed uppercase leading-[0.9] pt-6 md:pt-0 md:leading-tight text-center w-[240px] sm:w-[310px] md:w-auto">
              event
              <wbr />
              ually
            </p>
            <cite className="font-lexend text-sm font-medium md:bottom-0 absolute">
              ~My mother, &apos;77 - Current
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuote;
