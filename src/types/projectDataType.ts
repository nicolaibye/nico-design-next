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