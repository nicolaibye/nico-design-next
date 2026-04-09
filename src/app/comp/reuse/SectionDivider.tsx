const SectionDivider = ({
  children,
  lineClass = "outline-white-LinkWater",
}: {
  children: React.ReactNode;
  lineClass?: string;
}) => {
  return (
    <div className="max-w-230 mx-auto flex items-center gap-4 w-full">
      <div className="flex items-center min-w-fit">{children}</div>

      <div className={`w-full outline-[0.5px] ${lineClass}`}></div>
    </div>
  );
};

export default SectionDivider;
