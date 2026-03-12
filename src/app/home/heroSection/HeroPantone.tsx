const HeroPantone = () => {
  return (
    <div className="z-20">
      <ul
        className="group grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4.5 gap-4 md:mt-24 h-[240px] md:h-[252px] xl:h-[276px] md:max-w-[726px] lg:max-w-[1024px]"
        id="hero-nav"
      >
        <li
          id="welcome-scroll"
          className="cursor-pointer lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-[1.02] transition-all duration-500 bg-white-LinkWater/10 backdrop-filter backdrop-blur-md outline outline-2 outline-red-CoralRed rounded-lg flex flex-col justify-end"
        >
          <div className="bg-red-CoralRed p-3 text-white rounded-b-md">
            <p className="uppercase font-lexend h-5">Welcome</p>
            <p className="uppercase font-lexend h-5" id="welcome-time">
              00:00:00
            </p>
            <p className="font-lexend font-light h-4 xs:h-5 text-sm xs:text-base">
              Have a look
            </p>
          </div>
        </li>
        <li>
          <a
            href="/project"
            className="lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-[1.02] transition-all duration-500 bg-white-LinkWater/10 backdrop-filter backdrop-blur-md outline outline-2 outline-green-RiverBed rounded-lg flex flex-col justify-end h-full"
            data-transition
            data-color="green"
            data-link
          >
            <div className="bg-green-RiverBed p-3 text-white rounded-b-md">
              <p className="uppercase font-lexend h-5">Projects</p>
              <p className="uppercase font-lexend h-5">2015-2025</p>
              <p className="font-lexend font-light h-4 xs:h-5 text-sm xs:text-base">
                Creative thinker
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-[1.02] transition-all duration-500 bg-white-LinkWater/10 backdrop-filter backdrop-blur-md outline outline-2 outline-blue-NileBlue rounded-lg flex flex-col justify-end h-full"
            data-transition
            data-color="blue"
            data-link
          >
            <div className="bg-blue-NileBlue p-3 text-white rounded-b-md">
              <p className="uppercase font-lexend h-5">About</p>
              <p className="uppercase font-lexend h-5">21-06-1998</p>
              <p className="font-lexend font-light h-4 xs:h-5 text-sm xs:text-base">
                Chicken expert
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className="lg:group-hover:opacity-50 lg:hover:!opacity-100 lg:hover:scale-[1.02] transition-all duration-500 bg-white-LinkWater/10 backdrop-filter backdrop-blur-md outline outline-2 outline-black-Mirage dark:outline-white-LinkWater rounded-lg flex flex-col justify-end h-full"
            data-transition
            data-color="black"
            data-link
          >
            <div className="bg-black-Mirage dark:bg-white-LinkWater p-3 text-white dark:text-black-Mirage rounded-b-md duration-500">
              <p className="uppercase font-lexend h-5">Blog</p>
              <p className="uppercase font-lexend h-5">ENFP</p>
              <p className="font-lexend font-light h-4 xs:h-5 text-sm xs:text-base">
                Social Optimist
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeroPantone;
