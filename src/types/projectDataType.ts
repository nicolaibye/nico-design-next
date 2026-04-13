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