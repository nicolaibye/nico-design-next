import SectionDivider from "@/app/comp/reuse/SectionDivider";

type Swatch = {
  hex: string;
  darkOutline?: boolean;
  lightOutline?: boolean;
};

type ColorSwatchesProps = {
  primary: Swatch[];
  secondary?: Swatch[];
};

function copyHex(hex: string) {
  return () => {
    navigator.clipboard.writeText(hex);
  };
}

const ColorSwatches = ({ primary, secondary }: ColorSwatchesProps) => {
  if (primary.length === 0) return null;
  
  return (
    <div className="flex flex-col gap-20">
      <SectionDivider lineClass="outline-black-Mirage dark:outline-white-LinkWater">
        <h2 className="font-lexend uppercase text-xs min-w-fit tracking-widest">
          Primary colours
        </h2>
      </SectionDivider>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
        {primary.map((swatch) => (
          <li key={swatch.hex} className="flex flex-col items-center gap-3">
            <div
              className={`w-20 h-20 rounded-full ${swatch.darkOutline ? "dark:outline-1 dark:outline-white-LinkWater" : ""} ${swatch.lightOutline ? "outline-1 outline-black-Mirage dark:outline-none" : ""} cursor-copy`}
              onClick={copyHex(swatch.hex)}
              style={{ backgroundColor: swatch.hex }}
            />
            <p className="font-lexend font-light text-black-Mirage uppercase dark:text-white">
              {swatch.hex.replace("#", "")}
            </p>
          </li>
        ))}
      </ul>
      {secondary && (
        <>
          <h2 className="max-w-230 mx-auto w-full font-lexend uppercase text-xs min-w-fit tracking-widest">
            Secondary colours
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
            {secondary.map((swatch) => (
              <li key={swatch.hex} className="flex flex-col items-center gap-3">
                <div
                  className={`w-20 h-20 rounded-full ${swatch.darkOutline ? "dark:outline-1 dark:outline-white-LinkWater" : ""} ${swatch.lightOutline ? "outline-1 outline-black-Mirage dark:outline-none" : ""} cursor-copy`}
                  onClick={copyHex(swatch.hex)}
                  style={{ backgroundColor: swatch.hex }}
                />
                <p className="font-lexend font-light text-black-Mirage uppercase dark:text-white">
                  {swatch.hex.replace("#", "")}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ColorSwatches;
