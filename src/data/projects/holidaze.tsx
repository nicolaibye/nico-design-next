"use client";
import { ProjectInfo } from "@/types/projectDataType";
import HolidazeBriefContent from "@/app/projects/holidaze/HolidazeBriefContent";
import HolidazeChallengeContent from "@/app/projects/holidaze/HolidazeChallengeContent";
import HolidazeOutcomeContent from "@/app/projects/holidaze/HolidazeOutcomeContent";

export const holidazeInfo: ProjectInfo = {
  stats: [
    { label: "Brand", value: "Holidaze Accommodation" },
    { label: "Role", value: "Designer / Dev" },
    {
      label: "Tools",
      value: "Illustrator, Figma, Tailwind CSS, JS, Vite + React",
    },
    {
      label: "Services",
      value: "Identity design, UI / UX design, Front-End Dev",
    },
  ],
  cards: [
    {
      title: "Brief",
      body: "A SaaS host & booking platform.",
      content: <HolidazeBriefContent />,
    },
    {
      title: "Challenge",
      body: "Transformative branding for our audience.",
      content: <HolidazeChallengeContent />,
    },
    {
      title: "Outcome",
      body: "Identity, logo suite and website.",
      content: <HolidazeOutcomeContent />,
    },
  ],
};

export const HolidazeOutcome = {
  banner: {
    mainImage: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091819/ios-app-icon-iphone-17-pro-mockup-on-gradient-background-v6-front-view_pnvyzj.jpg",
      alt: "Holidaze app mockup",
    },
  },
  logos: {
    primary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/Holidaze_full_dark_czd0cn.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/Holidaze_full_light_w1ejsm.svg",
        alt: "Holidaze Lockup logo",
        label: "Lockup logo",
        displayClass: "w-auto md:h-64",
      },
    ],
    secondary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/Holidaze_main_dark_zw9adr.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/Holidaze_main_light_v7qihp.svg",
        alt: "Holidaze main logo",
        label: "Primary Horizontal",
        displayClass: "w-auto md:h-24",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_dawnFrame_dark_uzwvxg.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_dawnFrame_light_bmysu4.svg",
        alt: "Holidaze Brand Mark",
        label: "Brand Mark",
        displayClass: "w-auto h-24",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/HD_wordmark_dark_zwblps.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/HD_wordmark_light_dyvwez.svg",
        alt: "Holidaze Wordmark",
        label: "Wordmark",
        displayClass: "w-auto h-18",
      },
    ],
  },
  colors: {
    primary: [
      { hex: "#23191d", darkOutline: true, name: "Licorice" },
      { hex: "#f4ede9", name: "Isabelline" },
      { hex: "#760933", name: "Claret" },
      { hex: "#ec4e20", name: "Flame" },
      { hex: "#ff9505", name: "Princeton Orange" },
    ],
  },
  iconGroups: [
    {
      label: "Icon set",
      align: "bottom",
      icons: [
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_eve_dark_aemuoq.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_eve_light_lz3r3j.svg",
          alt: "Holidaze eve icon",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_dawn_dark_zkwodt.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_dawn_light_ptkkgl.svg",
          alt: "Holidaze dawn icon",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_day_dark_x0husr.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_day_light_wfn8g6.svg",
          alt: "Holidaze day icon",
        },
      ],
    },
    {
      label: "Icon set (frame)",
      align: "bottom",
      icons: [
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1768393633/icon_eveFrame_dark_hjcels.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1768393634/icon_eveFrame_light_ns7bdg.svg",
          alt: "Holidaze eve frame icon",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1768393631/icon_dawnFrame_dark_uzwvxg.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1768393634/icon_dawnFrame_light_bmysu4.svg",
          alt: "Holidaze dawn frame icon",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1768393636/icon_dayFrame_dark_jmvlox.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1768393634/icon_dayFrame_light_cbzpri.svg",
          alt: "Holidaze day frame icon",
        },
      ],
    },
    {
      label: "Patterns",
      align: "center",
      icons: [
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776090553/Spiral_pattern_drk_nqk0qu.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776090553/Spiral_pattern_light_ypwmfv.svg",
          alt: "Holidaze swirl pattern",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776090553/Wave_pattern_dark_rhugcz.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776090554/Wave_pattern_light_pb8mgq.svg",
          alt: "Holidaze wave pattern",
        },
      ],
    },
  ],
  mockup: [
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091815/business_cards_16x9_yhohsz.jpg",
        alt: "Holidaze business cards mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091815/iMac_holidaze_yso91g.jpg",
        alt: "Holidaze iMac mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091817/Floating-Classic-Notebooks-Cover-Design-psd-Mockup_eaeglf.jpg",
        alt: "Holidaze notebook mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776091816/Studio_Desk_iPhone_Mockup_ysmdxf.jpg",
        alt: "Holidaze iPhone mockup",
      },
    },
  ],
};
