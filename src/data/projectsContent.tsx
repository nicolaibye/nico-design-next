"use client";
import LogofolioGrid from "@/app/(website)/comp/projects/LogofolioGrid";
import MasonryArchiveGrid from "@/app/(website)/comp/projects/MasonryArchiveGrid";
import ProjectsGrid from "@/app/(website)/comp/projects/ProjectsGrid";

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
