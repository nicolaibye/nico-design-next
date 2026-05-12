import React from "react";
import { Lexend, Major_Mono_Display, Leckerli_One } from "next/font/google";
import ContactForm from "../../reuse/ContactForm";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const majorMonoDisplay = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-majorono",
});

const leckerliOne = Leckerli_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-leckerli",
});
const ContactSectionHome = () => {
  return (
    <section
      id="contact"
      className={`${lexend.variable} ${majorMonoDisplay.variable} ${leckerliOne.variable} bg-blue-NileBlue w-[calc(100%-4rem)] lg:max-w-5xl mx-auto p-5 sm:p-10 md:p-20 my-10 md:my-14 lg:my-24 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 justify-between rounded-lg text-white-LinkWater font-lexend`}
    >
      <div>
        <h2 className="font-lexend uppercase tracking-widest leading-9 text-center lg:text-left md:leading-none font-light text-[1.60rem] md:text-5xl">
          Lets make <br /> your brand <br />
          <span className="font-leckerli tracking-normal text-[2.65rem] md:text-6xl text-red-CoralRed uppercase">
            stand out <br />
          </span>
        </h2>
        <p className="mt-12 md:mt-4 md:max-w-lg font-lexend text-left text-sm hidden lg:block">
          I&apos;d love to hear from you! If you&apos;re interested in working
          together, have a project in mind, or just want to say hi, don&apos;t
          hesitate to reach out. Whether you have a specific project you want to
          discuss or just want to connect, I&apos;m all ears. Let&apos;s create
          something amazing together!
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSectionHome;
