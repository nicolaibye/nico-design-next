import Image from "next/image";

const AboutMeHome = () => {
  return (
    <section
      className={`lg:min-h-screen w-fit flex items-center justify-center mx-auto p-10 md:p-5 my-10 md:my-14 lg:my-24`}
    >
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-12">
        <div>
          <h2 className="relative font-lexend uppercase tracking-widest leading-9 sm:leading-none font-extralight text-[1.60rem] sm:text-5xl sm:mt-5 md:mt-0">
            To not be like <br />
            <span className="font-redaction-50 sm:leading-18 font-bold tracking-normal text-[2.65rem] sm:text-6xl text-red-CoralRed uppercase">
              Every
              <wbr />
              one <br />
            </span>
          </h2>
          <p className="mt-5 md:max-w-lg font-lexend text-left text-sm">
            Hi!
            <br />
            I&apos;m Nicolai, but most people just call me Nico. A colourful
            creative from Norway, specialising in identity and web design with a
            sprinkle of the flavour of the month (sometimes motion graphics or
            even a bit of 3D exploration).
            <br />
            <br />
            Like many others, when I was a child, I was hit with the good old
            “what do you want to become when you grow up?” question. Policemen? Doctor?
            Singer? No thank you. There was only one thing I wanted in life. “To
            be not like everyone else.” A few decades later I would say I have
            successfully achieved my goal working with shapes and colours
            *circular hand motions* for a living.
            <br />
            <br />
            BUT, I know for a fact I am not the only one with this mindset, and
            that is where you come in. I want to connect and collaborate with
            people who think like me. Who wants to stand out from the
            competition, people who like to flaunt who they are while proudly
            banging on their chest, people who indeed strive “to not be like
            everyone else”.
            <br />
            <br />
            Whether you have an established business that could need a louder
            voice or a start-up with a burning soul, I would love to hear from
            you! I use a mixture of digital prowess along with a strong
            foundation in branding to create colourful branding that stays with
            your audience.
            <br />
            <br />
            <a
              href="/about"
              className="py-2 px-4 inline-block rounded-lg border no-underline border-black-Mirage dark:border-white-LinkWater hover:bg-black-Mirage dark:hover:bg-white-LinkWater hover:text-white-LinkWater dark:hover:text-black-Mirage font-lexend uppercase text-black-Mirage dark:text-white-LinkWater"
            >
              Dig deeper
            </a>
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1778532550/square_solo_camera_vwge5m_00c126.webp"
          alt=""
          width={1000}
          height={1000}
          className="object-cover object-center md:w-auto h-40 md:h-50 lg:h-100"
        />
      </div>
    </section>
  );
};

export default AboutMeHome;
