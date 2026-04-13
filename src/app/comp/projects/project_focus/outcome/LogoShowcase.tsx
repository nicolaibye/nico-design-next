import Image from "next/image";
import SectionDivider from "@/app/comp/reuse/SectionDivider";

type LogoItem = {
  light: string;
  dark: string;
  alt: string;
  displayClass: string;
  label?: string;
};

type LogoShowcaseProps = {
  primary: LogoItem[];
  secondary: LogoItem[];
};

const DarkModeImage = ({ item }: { item: LogoItem }) => (
  <>
    <Image
      src={item.light}
      alt={item.alt}
      width={1000}
      height={1000}
      className={`${item.displayClass} block dark:hidden`}
    />
    <Image
      src={item.dark}
      alt={item.alt}
      width={1000}
      height={1000}
      className={`${item.displayClass} hidden dark:block`}
    />
  </>
);

const LogoShowcase = ({ primary, secondary }: LogoShowcaseProps) => (
  <div className="flex flex-col gap-8 items-center">
    <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
      <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
        Logo options
      </h2>
    </SectionDivider>
    <ul className="flex flex-row gap-20 items-start justify-center">
      {primary.map((logo) => (
        <li key={logo.alt}>
          <DarkModeImage item={logo} />
        </li>
      ))}
    </ul>
    <p className="font-lexend font-light text-black-Mirage dark:text-white">
      Primary logos
    </p>
    <ul className="flex flex-row flex-wrap gap-10 lg:gap-20 items-end justify-center">
      {secondary.map((logo) => (
        <li key={logo.alt} className="flex flex-col items-center gap-3">
          <DarkModeImage item={logo} />
          {logo.label && (
            <p className="font-lexend font-light text-black-Mirage text-center dark:text-white">
              {logo.label}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default LogoShowcase;
