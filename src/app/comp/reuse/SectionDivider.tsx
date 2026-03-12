const SectionDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex items-center gap-4 w-full">
      <div className="flex items-center min-w-fit">{children}</div>

      <div className="w-full outline-[0.5px] outline-white-LinkWater"></div>
    </div>
  );
};

export default SectionDivider;
