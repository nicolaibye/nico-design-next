import React from "react";

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="p-12 border-y border-black-Mirage dark:border-white-LinkWater"
    >
      <h2 className="font-lexend tracking-widest leading-11 sm:leading-13 md:leading-16 font-extralight text-[2.0rem] sm:text-[2.5rem] md:text-5xl">
        My
        <span className="font-redaction-50 tracking-normal leading-12 sm:leading-18 text-[2.65rem] sm:text-5xl md:text-6xl text-red-CoralRed">
          services <br />
        </span>
      </h2>
      <p>
        I help businesses stand out in a generated world by creating identities
        through strong collaboration, clear processes and human curiosity, so
        that people can feel excited about their brand and comfortable it has
        been created by someone who actually care about their business. Whether
        you are looking for a starter brand to get you started, or a full blown
        brand identity with launch, I am excited to be your next creative
        partner.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <li>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-black-Mirage dark:bg-white-LinkWater"></div>
            <h3>Starter</h3>
          </div>
          <p>
            Logosuite, colour palette, typography, one-pager brand guidelines.
          </p>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-black-Mirage dark:bg-white-LinkWater"></div>
            <h3>Full Brand Identity</h3>
          </div>
          <p>
            Starter pack + brand exploration, strategy, positioning, visual
            identity wrapped up in a brand book.
          </p>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-black-Mirage dark:bg-white-LinkWater"></div>
            <h3>The Full Launch</h3>
          </div>
          <p>
            Full Brand Identity + social media templates, website design and
            development/online implementation.
          </p>
        </li>
      </ul>
      <p>*if you have any questions, feel free to pop me a message!</p>
    </section>
  );
};

export default ServiceSection;
