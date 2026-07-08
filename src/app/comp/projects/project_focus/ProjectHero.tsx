const ProjectHero = ({ children }: { children: React.ReactNode }) => (
  <section
    className={`w-full h-full flex flex-col justify-center items-center overflow-hidden relative pb-5`}
  >
    {children}
  </section>
);

export default ProjectHero;
