import Image from "next/image";

const AboutMeHome = () => {
  return (
    <section className={`w-fit flex items-center justify-center mx-auto`}>
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-12">
        <div className="flex-2 min-w-0">
          <h2 className="relative font-lexend uppercase tracking-widest leading-9 sm:leading-none font-extralight text-[1.60rem] sm:text-5xl sm:mt-5 lg:mt-0">
            To not be like <br />
            <span className="font-redaction-50 sm:leading-18 font-bold tracking-normal text-[2.65rem] sm:text-6xl text-red-CoralRed uppercase">
              Every
              <wbr />
              one <br />
            </span>
          </h2>
          <p className="mt-5 font-lexend text-left text-sm">
            Hi!
            <br />
            My name is Nicolai, but most people just call me{" "}
            <a className="text-red-CoralRed" href="/about">
              Nico
            </a>
            . A Brand and Web Designer for over seven years across two agencies
            and freelancing. During my time, I have had the thrill of working
            with some amazingly talented people and 30+ clients, creating some
            absolutely stellar work along the way.
            <br />
            <br />
            My design ethos boils down to a mission statement that I created as
            a young child: &quot;To not be like everyone else&quot;. With a
            special interest in minimalism and colourful profiles, I work to
            ensure your business stands out in our generated world by being a
            creative partner you can trust and have fun creating with.
            <br />
            <br />
            What matters to me is mutual respect, empathy and a sense of giving
            a shit about what we are creating together. If you are ambitious and
            love what you are building like it is your own baby, then I might be
            your next creative partner.
            <br />
            <br />
            <a
              href="/contact"
              className="py-2 px-4 inline-block rounded-lg border no-underline border-black-Mirage dark:border-white-LinkWater hover:bg-black-Mirage dark:hover:bg-white-LinkWater hover:text-white-LinkWater dark:hover:text-black-Mirage font-lexend uppercase text-black-Mirage dark:text-white-LinkWater"
            >
              Let&apos;s see if we match!
            </a>
          </p>
        </div>
        <div className="w-full h-40 md:w-1/2 md:h-auto md:flex-1">
          <Image
            src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1778532550/square_solo_camera_vwge5m_00c126.webp"
            alt="Nicolai at Tomorrowland."
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeHome;
