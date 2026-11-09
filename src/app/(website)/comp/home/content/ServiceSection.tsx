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
        First and foremost, I want to be honest with you. If you have just made
        your business, first of all, huge congrats! If you have yet to prove
        that your business works, then grab a nice font from{" "}
        <a
          href="https://fonts.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-CoralRed underline"
        >
          fonts.google
        </a>{" "}
        and some colors from{" "}
        <a
          href="https://coolors.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-CoralRed underline"
        >
          {" "}
          coolors.co
        </a>
        , and make sure this is what you wanna build.
        <br /> <br />
        Already done that? Then I am super excited to help you, this is what I
        can offer:
      </p>
      <ul className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <li className="font-lexend tracking-wide font-extralight text-md">
          <span className="font-redaction-50 tracking-normal leading-12 sm:leading-18 text-[2.65rem] sm:text-5xl md:text-6xl text-red-CoralRed">
            Starter Package
          </span>
          <p>
            Perfect for you who wants to get your business off the ground and
            start standing out amongst your competitors.
            <br />
            <br />
            This package includes logosuite, color palette, typography, basic
            graphic elements and a brand guidelines.
          </p>
          <br />
          <span>From: £1000</span>
        </li>
        <li className="font-lexend tracking-wide font-extralight text-md">
          <span className="font-redaction-50 tracking-normal leading-12 sm:leading-18 text-[2.65rem] sm:text-5xl md:text-6xl text-red-CoralRed">
            Branding Package
          </span>
          <p>
            Getting deep into who you are and what your business is about, this
            package is perfect for you who wants to get a strong brand identity
            and stand out from the crowd, both through your visuals but also
            your values.
            <br />
            <br />
            This package includes the starter package, with expanded graphic
            elements and a full brand identity which becomes part of a more
            comprehensive brand guidelines.
          </p>
          <br />
          <span>From: £2400</span>
        </li>
        <li className="font-lexend tracking-wide font-extralight text-md">
          <span className="font-redaction-50 tracking-normal leading-12 sm:leading-18 text-[2.65rem] sm:text-5xl md:text-6xl text-red-CoralRed">
            Website Starter
          </span>
          <p>
            Already got your brand identity and want to get your business
            online? This package is perfect for you who wants to get a website
            that reflects your brand and values.
            <br />
            <br />
            This package includes Figma designed website, pages and budget are
            adjusted to your needs.
          </p>
          <br />
          <span>£750 pr. page</span>
        </li>
        <li className="font-lexend tracking-wide font-extralight text-md">
          <span className="font-redaction-50 tracking-normal leading-12 sm:leading-18 text-[2.65rem] sm:text-5xl md:text-6xl text-red-CoralRed">
            Full Package
          </span>
          <p>
            Ready for a long term partnership? This package is perfect for you
            who wants to get a full brand identity and website.
            <br />
            <br />
            This package includes the Branding Package, with a Figma designed
            landing page for your business. (Website scope can be adjusted upon
            request).
          </p>
          <br />
          <span>From: £3000</span>
        </li>
      </ul>
    </section>
  );
};

export default ServiceSection;
