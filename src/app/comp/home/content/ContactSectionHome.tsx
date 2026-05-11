import React from "react";
import { Lexend } from "next/font/google";
import ContactForm from "../../reuse/ContactForm";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const ContactSectionHome = () => {
  return (
    <section
      id="contact"
      className={`${lexend.variable} bg-green-RiverBed max-w-260 mx-auto p-14 my-10 md:my-14 lg:my-24 flex flex-row gap-16 justify-between rounded-lg text-white-LinkWater font-lexend`}
    >
      <div>
        <h2>Services</h2>
        <ul>
          <li>Brand Identity Design</li>
          <li>Web Design</li>
          <li>Motion Graphics</li>
        </ul>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSectionHome;
