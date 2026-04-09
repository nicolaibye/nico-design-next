import NeiroBriefContent from "@/app/projects/neiro/NeiroBriefContent.tsx";
import NeiroChallengeContent from "@/app/projects/neiro/NeiroChallengeContent.tsx";
import NeiroOutcomeContent from "@/app/projects/neiro/NeiroOutcomeContent.tsx";

export type ProjectStat = {
  label: string;
  value: string;
};

export type ProjectCard = {
  title: string;
  body: string;
  content: React.ReactNode;
};

export type ProjectInfo = {
  stats: ProjectStat[];
  cards: ProjectCard[];
};

export const neiroInfo: ProjectInfo = {
  stats: [
    { label: "Brand", value: "Neiro" },
    { label: "Role", value: "Designer" },
    { label: "Tools", value: "After Effects, Illustrator, Photoshop, InDesign" },
    { label: "Services", value: "Identity design" },
  ],
  cards: [
    {
      title: "Brief",
      body: "NEIRO is a Japanese-inspired EDM festival for young adults in the West and East. The task was to build a dynamic, culturally respectful brand—from logo and typography to merch, Instagram content, and a guiding one-pager—that captures energy, curiosity, and global resonance.",
      content: <NeiroBriefContent />,
    },
    {
      title: "Challenge",
      body: "The goal was to suggest Eastern inspiration without relying on clichés. By grounding the visuals in Techno-Orientalism—an aesthetic that presents Asia through futuristic, tech-driven tropes—we avoided stereotypes while embracing a forward-looking vibe.",
      content: <NeiroChallengeContent />,
    },
    {
      title: "Outcome",
      body: "The final brand features glitchy textures, futuristic typography, and Japanese tech-inspired motifs. Core merchandise is available year-round, plus limited-edition prints sold on-site to drive engagement.",
      content: <NeiroOutcomeContent />,
    },
  ],
};