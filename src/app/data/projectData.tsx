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
      body: "A Japanese-inspired EDM festival.",
      content: <NeiroBriefContent />,
    },
    {
      title: "Challenge",
      body: "Orientalism and cultural appropriation.",
      content: <NeiroChallengeContent />,
    },
    {
      title: "Outcome",
      body: "Logo suite, social, merchandise and more.",
      content: <NeiroOutcomeContent />,
    },
  ],
};