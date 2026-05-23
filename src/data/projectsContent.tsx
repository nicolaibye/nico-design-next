"use client";
import LogofolioGrid from "@/app/comp/projects/LogofolioGrid";
import MasonryArchiveGrid from "@/app/comp/projects/MasonryArchiveGrid";
import ProjectsGrid from "@/app/comp/projects/ProjectsGrid";

export type ProjectNavProps = {
    navigation: {
      title: string;
      content: React.ReactNode;
    }[];
};

export const projectsContent: ProjectNavProps = {
  navigation: [
    {
      title: "Identity",
      content: <ProjectsGrid />,
    },
    {
      title: "Logofolio",
      content: <LogofolioGrid />,
    },
    {
      title: "Archive",
      content: <MasonryArchiveGrid />,
    },
  ],
};