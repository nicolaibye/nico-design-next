import SectionDivider from "@/app/comp/reuse/SectionDivider";
import Image from "next/image";

type IconItem = {
  alt: string;
  src?: string;       // single image
  light?: string;     // dark mode variant
  dark?: string;
};

type IconGroupItem = {
  label: string;
  icons: IconItem[];
};

const IconGroup = ({ groups }: { groups: IconGroupItem[] }) => (
  <div className="flex flex-col gap-20">
    <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
      <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
        Supporting Graphics
      </h2>
    </SectionDivider>
    <ul className="flex flex-row flex-wrap gap-8 lg:gap-20 items-start justify-center">
      {groups.map((group) => (
        <li key={group.label} className="flex flex-col items-center gap-3">
          <div className="flex flex-row gap-5">
            {group.icons.map((icon) =>
              icon.light && icon.dark ? (
                <span key={icon.alt}>
                  <Image src={icon.light} alt={icon.alt} width={68} height={68} className="block dark:hidden" />
                  <Image src={icon.dark} alt={icon.alt} width={68} height={68} className="hidden dark:block" />
                </span>
              ) : (
                <Image key={icon.alt} src={icon.src!} alt={icon.alt} width={68} height={68} />
              )
            )}
          </div>
          <p className="font-lexend font-light text-black-Mirage text-center dark:text-white">
            {group.label}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default IconGroup;