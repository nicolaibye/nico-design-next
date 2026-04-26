"use client";
import { ProjectInfo } from "@/types/projectDataType";
import MTGBriefContent from "@/app/projects/mtg_nm/MTGBriefContent";
import MTGChallengeContent from "@/app/projects/mtg_nm/MTGChallengeContent";
import MTGOutcomeContent from "@/app/projects/mtg_nm/MTGOutcomeContent";

export const mtgInfo: ProjectInfo = {
  stats: [
    { label: "Brand", value: "MTG Norgesmesterskap" },
    { label: "Role", value: "Designer" },
    {
      label: "Tools",
      value: "Affinity Vector",
    },
    {
      label: "Services",
      value: "Logo design",
    },
  ],
  cards: [
    {
      title: "Brief",
      body: "Logo for a TCG tournament.",
      content: <MTGBriefContent />,
    },
    {
      title: "Challenge",
      body: "Represent the tournament and Norway.",
      content: <MTGChallengeContent />,
    },
    {
      title: "Outcome",
      body: "Logo design and brand styleguide.",
      content: <MTGOutcomeContent />,
    },
  ],
};

export const MTGOutcome = {
  banner: {
    mainImage: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777200194/mtg_construction_mockup_zdj2hj.jpg",
      alt: "MTG:NM construction mockup",
    },
  },
  logos: {
    primary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776176762/NMMTG_Tekst_sort_26_mnu0wh.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776176757/NMMTG_Tekst_hvit_26_qiuqrk.svg",
        alt: "MTG:NM Primary Logo",
        label: "Brand Lockup",
        displayClass: "w-full md:w-auto md:h-45",
      },
    ],
    secondary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776176728/NMMTG_Ikon_sort_26_mwwvrk.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776176720/NMMTG_Ikon_hvit_26_y7kprv.svg",
        alt: "MTG:NM Brand Mark",
        label: "Brand Mark",
        displayClass: "w-30 md:h-auto",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776177226/alt_mark_black_xsdraj.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776177226/alt_mark_k8t6ac.svg",
        alt: "MTG:NM Alt Brand Mark",
        label: "Alt. Brand Mark",
        displayClass: "w-30 h-auto",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776177225/secondary_horizontal_black_mg0k9i.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776177226/secondary_horizontal_zgrevz.svg",
        alt: "MTG:NM Alt Horizontal Logo",
        label: "Alt. Horizontal Logo",
        displayClass: "w-auto h-30",
      },
    ],
  },
  colouredLogos: {
    colour: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776176751/NMMTG_Tekst_farge_26_enm5sm.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776176751/NMMTG_Tekst_farge_26_enm5sm.svg",
        alt: "MTG:NM Primary Logo Coloured",
        label: "Brand Lockup Coloured",
        displayClass: "w-full md:w-auto md:h-45",
      },
    ],
  },
  mockup: [
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777200194/mtg_landingpage_mockup_h4ss1d.jpg",
        alt: "MTG:NM landing page mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777200196/mtg_playmat_mockup_gyfv5j.jpg",
        alt: "MTG:NM playmat mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777200469/mtg_tote_mockup_ymsylk.jpg",
        alt: "MTG:NM tote bag mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777200195/mtg_business_mockup_jhpwz5.jpg",
        alt: "MTG:NM business card mockup",
      },
    },
  ],
};
