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
  label?: string;
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

const LogoShowcase = ({ primary, secondary, label }: LogoShowcaseProps) => (
  <div className="flex flex-col gap-16 items-center">
    <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
      <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
        {label ? label : "Logo suite"}
      </h2>
    </SectionDivider>
    <ul className="flex flex-row flex-wrap gap-16 h-full items-start justify-center">
      {primary.map((logo) => (
        <li
          key={logo.alt}
          className="flex flex-col items-center h-stretch justify-between gap-3"
        >
          <DarkModeImage item={logo} />
          {logo.label && (
            <p className="font-lexend font-light text-black-Mirage text-center justify-self-end dark:text-white">
              {logo.label}
            </p>
          )}
        </li>
      ))}
    </ul>
    <ul className="flex flex-row flex-wrap gap-16 lg:gap-20 items-end justify-center mt-5">
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
