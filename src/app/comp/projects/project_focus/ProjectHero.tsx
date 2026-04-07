
import { Lexend } from "@next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const ProjectHero = ({ children }: { children: React.ReactNode }) => (
  <section
    className={`w-full h-full flex flex-col justify-center items-center overflow-hidden relative pb-5 ${lexend.variable}`}
  >
    {children}
  </section>
);

export default ProjectHero;
