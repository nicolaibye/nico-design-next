"use client";
import { ProjectInfo } from "@/types/projectDataType";
import SablaBraBriefContent from "@/app/projects/sabla_bra/SablaBraBriefContent";
import SablaBraChallengeContent from "@/app/projects/sabla_bra/SablaBraChallengeContent";
import SablaBraOutcomeContent from "@/app/projects/sabla_bra/SablaBraOutcomeContent";

export const sablaBraInfo: ProjectInfo = {
  stats: [
    { label: "Brand", value: "Sabla Bra" },
    { label: "Role", value: "Designer" },
    {
      label: "Tools",
      value: "After Effects, Cavalry, Illustrator, Photoshop, Blender",
    },
    { label: "Services", value: "Identity update" },
  ],
  cards: [
    {
      title: "Brief",
      body: "Capturing the essence of Sabla Bra.",
      content: <SablaBraBriefContent />,
    },
    {
      title: "Challenge",
      body: "Freshen up.",
      content: <SablaBraChallengeContent />,
    },
    {
      title: "Outcome",
      body: "Logo suite & digital presence.",
      content: <SablaBraOutcomeContent />,
    },
  ],
};

export const sablaBraOutcome = {
  banner: {
    mainImage: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1754577639/sb_some_mockup_ew0isa.jpg",
      alt: "Sabla Bra social media mockup",
    },
    floatingImages: [
      {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755160022/3d_triangle_float_coloured_shudvp.png",
        alt: "3D triangle mockup",
        className:
          "absolute -top-10 sm:-top-1 right-8 w-[25%] sm:w-[10%] -rotate-12",
      },
      {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755160022/3d_square_float_coloured_xqzrqb.png",
        alt: "3D square mockup",
        className:
          "absolute -bottom-10 sm:bottom-1 left-8 w-[25%] sm:w-[10%] rotate-12",
      },
    ],
  },
  logos: {
    primary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777207611/sb_flat_circle_black_qcbttu.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777207611/sb_flat_circle_white_b0zmpo.svg",
        alt: "Sabla Bra circle main logo",
        label: "Primary circle",
        displayClass: "h-45 w-auto p-2",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777207612/sb_flat_square_black_kcsdrb.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777207612/sb_flat_square_white_lriwq1.svg",
        alt: "Sabla Bra square main logo",
        label: "Primary square",
        displayClass: "h-45 w-auto p-2",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777207613/sb_flat_triangle_black_ymar1y.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777207616/sb_flat_triangle_white_mv26mc.svg",
        alt: "Sabla Bra triangle main logo",
        label: "Primary triangle",
        displayClass: "h-45 w-auto p-2",
      },
    ],
    secondary: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777208437/sb_blur_circle_black_kr6ldg.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777208433/sb_blur_circle_white_xl7l4r.svg",
        alt: " Sabla Bra secondary circle logo",
        label: "Secondary circle",
        displayClass: "h-25 w-auto",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777208433/sb_blur_square_black_xzb57i.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777208434/sb_blur_square_white_dromkc.svg",
        alt: " Sabla Bra secondary square logo",
        label: "Secondary square",
        displayClass: "h-25 w-auto",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777208435/sb_blur_triangle_black_waxuxv.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777208435/sb_blur_triangle_white_sufeqj.svg",
        alt: "Sabla Bra secondary triangle logo",
        label: "Secondary triangle",
        displayClass: "h-25 w-auto",
      },
    ],
    altLogo: [
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755076507/sb_logo_combine_black_g1vzmt.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755507125/sb_logo_combine_white_eliijl.svg",
        alt: "Sabla Bra alt. logo",
        label: "Alt. logo",
        displayClass: "h-20 w-auto",
      },
      {
        light:
          "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755076507/sb_logo_combine_colour_xlimmd.svg",
        dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755507123/sb_logo_combine_colour_white_hcecmm.svg",
        alt: "Sabla Bra alt. coloured logo",
        label: "Alt. coloured logo",
        displayClass: "h-20 w-auto",
      },
    ],
  },
  colors: {
    primary: [{ hex: "#E0FF00" }, { hex: "#5E00B0" }, { hex: "#F4006F" }],
    secondary: [{ hex: "#FF2E09" }, { hex: "#1A174E", darkOutline: true }],
  },
  iconGroups: [
    {
      label: "Gradients",
      sizeOverride: "md:w-30 md:h-30",
      icons: [
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755076516/sb_bg_purple-yellow_pfslwp.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755076516/sb_bg_purple-yellow_pfslwp.svg",
          alt: "Gradient 1",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755076510/sb_bg_pink-purple_dempni.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755076510/sb_bg_pink-purple_dempni.svg",
          alt: "Gradient 2",
        },
        {
          light:
            "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755076512/sb_bg_pink-yellow_fcmjyo.svg",
          dark: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1755076512/sb_bg_pink-yellow_fcmjyo.svg",
          alt: "Gradient 3",
        },
      ],
    },
  ],
  mockup: [
    {
      video: {
        src: "https://res.cloudinary.com/dg0c4lry9/video/upload/v1754577443/sb_Kategorier_post_dyhbdh.mp4",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1754577420/sb_poster_mockup_bmsnza.jpg",
        alt: "Sabla Bra poster mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777229575/sb_flag_mockup_ffhjtc.jpg",
        alt: "Sabla Bra flag mockup",
      },
    },
    {
      image: {
        src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777229577/sb_mac_mockup_i76gcw.jpg",
        alt: "Sabla Bra Macbook mockup",
      },
    },
  ],
};
