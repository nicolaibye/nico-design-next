"use client";
import { ProjectInfo } from "@/types/projectDataType";
import NeiroBriefContent from "@/app/projects/neiro/NeiroBriefContent";
import NeiroChallengeContent from "@/app/projects/neiro/NeiroChallengeContent";
import NeiroOutcomeContent from "@/app/projects/neiro/NeiroOutcomeContent";

export const neiroInfo: ProjectInfo = {
  stats: [
    { label: "Brand", value: "Neiro" },
    { label: "Role", value: "Designer" },
    {
      label: "Tools",
      value: "After Effects, Illustrator, Photoshop, InDesign",
    },
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

export const neiroOutcome = {
  banner: {
    mainImage: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/3_hoodies_ayf7vf.jpg",
      alt: "Neiro hoodies mockup",
    },
    floatingImages: [
      {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/sakura_pin_ho3uxr.png",
        alt: "Sakura pin mockup",
        className:
          "absolute -top-10 sm:-top-1 right-8 w-[25%] sm:w-[10%] -rotate-12",
      },
      {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/moon_pin_f5orqh.png",
        alt: "Moon pin mockup",
        className:
          "absolute -bottom-10 sm:bottom-1 left-8 w-[25%] sm:w-[10%] rotate-12",
      },
    ],
  },
  logos: {
    primary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_hor_nameSigns_k2frau.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_hor_nameSigns_drk_m2ldu0.svg",
        alt: "Neiro logo with text underneath",
        label: "Primary vertical",
        displayClass: "h-[260px] w-auto",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_hor_signs_temfze.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_hor_signs_drk_gjzpys.svg",
        alt: "Neiro logo",
        label: "Brand mark",
        displayClass: "h-[224px] w-auto",
      },
    ],
    secondary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_icon_ch8u0a.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_icon_drk_wffulb.svg",
        alt: "Neiro icon",
        label: "Icon",
        displayClass: "h-[60px] w-[60px]",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_vert_signs_qiexjm.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_vert_signs_netbhn.svg",
        alt: "Neiro horizontal name signs",
        label: "Alt. horisontal signs",
        displayClass: "h-auto w-[148px]",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_vert_nameSigns_cgmx7p.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_vert_nameSigns_l9efx4.svg",
        alt: "Neiro horizontal name with signs",
        label: "Alt. full logo",
        displayClass: "h-auto w-[284px]",
      },
    ],
  },
  colors: {
    primary: [
      { hex: "#ff0068", darkOutline: true },
      { hex: "#ff9700" },
      { hex: "#00ffbc" },
      { hex: "#130f16", darkOutline: true },
      { hex: "#f7f5f2", lightOutline: true },
    ],
    secondary: [{ hex: "#1557d2" }, { hex: "#c000ff" }],
  },
  iconGroups: [
    {
      label: "Icons",
      icons: [
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_sakura_ppuuz7.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_sakura_drk_fonc3c.svg",
          alt: "Sakura icon",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_sun_qmwn4e.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_sun_drk_elbjpj.svg",
          alt: "Sun icon",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_moon_g7jxzw.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_moon_drk_nak6pt.svg",
          alt: "Moon icon",
        },
      ],
    },
    {
      label: "Mainstage",
      icons: [
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_main_1_uuz0i3.svg",
          alt: "Mainstage icon 1",
        },
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_main_2_usbjeo.svg",
          alt: "Mainstage icon 2",
        },
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_main_3_blwb9s.svg",
          alt: "Mainstage icon 3",
        },
      ],
    },
    {
      label: "Ethosstage",
      icons: [
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_ethos_1_q9e8zu.svg",
          alt: "Ethosstage icon 1",
        },
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_ethos_2_fcf4io.svg",
          alt: "Ethosstage icon 2",
        },
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_ethos_3_lucm5m.svg",
          alt: "Ethosstage icon 3",
        },
      ],
    },
    {
      label: "Powerstage",
      icons: [
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_power_1_udrub8.svg",
          alt: "Powerstage icon 1",
        },
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_power_3_vvczob.svg",
          alt: "Powerstage icon 2",
        },
        {
          src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_stage_power_3_2_skysqt.svg",
          alt: "Powerstage icon 3",
        },
      ],
    },
  ],
  mockup: [
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/Neiro_festival_snapback_hxgubv.jpg",
        alt: "Neiro Snapback mockup",
      },
      label: "Yearly exclusives",
      description:
        "Limited yearly drops to keep the shop fresh, fans excited, and collections always evolving.",
      labelPosition: "above" as const,
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1751400915/vinyl_2_azqgjb.png",
        alt: "Neiro vinyl mockup",
        bg: "bg-[#00ffbc]",
      },
      label: "Recurring Merch",
      description:
        "Festival-themed staples for the true die-hard fans — consistent, iconic, and made with intention.",
      labelPosition: "below" as const,
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/t_shirt_neiro_yearly_fxtrig.png",
        alt: "Neiro t-shirt mockup",
        bg: "bg-[#ff9700]",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/2_wymjdv.jpg",
        alt: "Neiro sweatshirt mockup",
      },
    },
  ],
};
