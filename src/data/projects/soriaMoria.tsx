"use client";
import { ProjectInfo } from "@/types/projectDataType";
import SoriaMoriaBriefContent from "@/app/projects/soria_moria/SoriaMoriaBriefContent";
import SoriaMoriaChallengeContent from "@/app/projects/soria_moria/SoriaMoriaChallengeContent";
import SoriaMoriaOutcomeContent from "@/app/projects/soria_moria/SoriaMoriaOutcomeContent";

export const soriaMoriaInfo: ProjectInfo = {
  stats: [
    { label: "Brand", value: "Blå Kors: Soria Moria" },
    { label: "Role", value: "Creative" },
    {
      label: "Tools",
      value: "After Effects, Illustrator, Photoshop, InDesign",
    },
    {
      label: "Services",
      value: "Campaign Identity & Collateral",
    },
  ],
  cards: [
    {
      title: "Brief",
      body: "A childrens art festival.",
      content: <SoriaMoriaBriefContent />,
    },
    {
      title: "Challenge",
      body: "Appealing to a diverse young audience.",
      content: <SoriaMoriaChallengeContent />,
    },
    {
      title: "Outcome",
      body: "Visual identity & collateral.",
      content: <SoriaMoriaOutcomeContent />,
    },
  ],
};

export const SoriaMoriaOutcome = {
  banner: {
    mainImage: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1754574263/bk_Hanging-Poster-Mockup_d1foxb.jpg",
      alt: "Soria Moria hanging poster mockup",
    },
  },
  logos: {
    primary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778438894/SoMo_logoSuite_vector-02_zyyrzv.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778438895/SoMo_logoSuite_vector-01_syneha.svg",
        alt: "Soria Moria Lockup logo",
        label: "Lockup logo",
        displayClass: "w-auto md:h-54",
      },
    ],
    secondary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778438895/SoMo_logoSuite_vector-03_eofryv.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778438895/SoMo_logoSuite_vector-04_dpplnl.svg",
        alt: "Soria Moria main logo",
        label: "Logotype",
        displayClass: "w-auto md:h-24",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778438895/SoMo_logoSuite_vector-06_jiiss3.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778438895/SoMo_logoSuite_vector-05_tkax5q.svg",
        alt: "Soria Moria Icon",
        label: "Brand Mark",
        displayClass: "w-auto h-24",
      },
    ],
  },
  colors: {
    primary: [],
  },
  iconGroups: [
    {
      label: "Abstract asset",
      align: "bottom",
      sizeOverride: "w-auto md:h-100",
      featured: true,
      icons: [
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778441882/Farget_bakgrunn_hel_vpivri.jpg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778441882/Farget_bakgrunn_hel_vpivri.jpg",
          alt: "Soria Moria abstract background",
        },
      ],
    },
  ],
  mockup: [
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1754831765/bk_paper_for_parents_m053v9.jpg",
        alt: "Soria Moria paper for parents mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778444520/SoMo_Wall_banner_kv2ida.jpg",
        alt: "Soria Moria wall banner mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778446380/SoMo_Sign_izcjhf.jpg",
        alt: "Soria Moria sign mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1754574262/bk_some_T-Shirt-Mockup_xwfwah.jpg",
        alt: "Soria Moria T-Shirt mockup",
      },
    },
  ],
};
