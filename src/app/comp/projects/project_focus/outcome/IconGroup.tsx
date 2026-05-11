import SectionDivider from "@/app/comp/reuse/SectionDivider";
import Image from "next/image";

type IconItem = {
  alt: string;
  src?: string; // single image
  light?: string; // dark mode variant
  dark?: string;
};

type IconGroupItem = {
  label: string;
  align?: "center" | "bottom";
  featured?: boolean;
  icons: IconItem[];
  sizeOverride?: string;
};

const IconGroup = ({ groups }: { groups: IconGroupItem[] }) => (
  <div className="flex flex-col gap-20">
    <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
      <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
        Supporting Graphics
      </h2>
    </SectionDivider>
    <ul className="flex flex-row flex-wrap gap-8 lg:gap-20 items-start justify-center">
      {groups.map((group) => {
        const isSingle = group.featured || group.icons.length === 1;

        return (
          <li
            key={group.label}
            className={`flex flex-col items-center gap-3 ${isSingle ? "w-full" : ""}`}
          >
            <div
              className={`flex flex-row gap-5 ${isSingle ? "justify-center w-full" : ""} ${group.align === "center" ? "items-center" : "items-end"}`}
            >
              {group.icons.map((icon) =>
                icon.light && icon.dark ? (
                  <span key={icon.alt}>
                    <Image
                      src={icon.light}
                      alt={icon.alt}
                      width={isSingle ? 1000 : 68}
                      height={isSingle ? 1000 : 68}
                      className={`block dark:hidden ${group.sizeOverride ?? ""}`}
                    />
                    <Image
                      src={icon.dark}
                      alt={icon.alt}
                      width={isSingle ? 1000 : 68}
                      height={isSingle ? 1000 : 68}
                      className={`hidden dark:block ${group.sizeOverride ?? ""}`}
                    />
                  </span>
                ) : (
                  <Image
                    key={icon.alt}
                    src={icon.src!}
                    alt={icon.alt}
                    width={isSingle ? 1000 : 68}
                    height={isSingle ? 1000 : 68}
                    className={group.sizeOverride ?? ""}
                  />
                ),
              )}
            </div>
            <p className="font-lexend font-light text-black-Mirage text-center dark:text-white">
              {group.label}
            </p>
          </li>
        );
      })}
    </ul>
  </div>
);

export default IconGroup;
