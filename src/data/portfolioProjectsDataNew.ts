// data/portfolioProjectsData.ts

export type Project = {
  name: string;
  subtitle: string;
  role: string;
  href: string;
  color: string;
  image: {
    src: string;
    alt: string;
  };
  nav: {
    label: string;
    icon: string;
  };
};

export const portfolioProjectsData = [
  {
    name: "MTG Norgesmesterskap",
    subtitle: "Logo design",
    role: "Designer",
    href: "/projects/mtg_nm",
    color: "bg-mtg",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1777200194/mtg_construction_mockup_zdj2hj.jpg",
      alt: "MTG Norgesmesterskap construction mockup",
    },
    nav: {
      label: "MTG: NM",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1776176728/NMMTG_Ikon_sort_26_mwwvrk.svg",
    },
  },
  {
    name: "Holidaze",
    subtitle: "Website",
    role: "Designer / Dev",
    href: "/projects/holidaze",
    color: "bg-holi",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/holidaze_imac_mockup_fqgd7l.jpg",
      alt: "Holidaze iMac mockup",
    },
    nav: {
      label: "Holidaze",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778785144/icon_dawnFrame_black_taiemd.svg",
    },
  },
  {
    name: "Sabla Bra",
    subtitle: "Brand update",
    role: "Designer",
    href: "/projects/sabla_bra",
    color: "bg-sabla",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/sb_some_mockup_ew0isa.jpg",
      alt: "Sabla Bra SOME mockup",
    },
    nav: {
      label: "Sabla Bra",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/sb_logo_combine_black_g1vzmt.svg",
    },
  },
  {
    name: "Blå Kors: Soria Moria",
    subtitle: "Campaign visuals",
    role: "Creative",
    href: "/projects/soria_moria",
    color: "bg-soria",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_paper_for_parents_m053v9.jpg",
      alt: "Blå Kors flyer mockup",
    },
    nav: {
      label: "Soria Moria",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/v1778438895/SoMo_logoSuite_vector-06_jiiss3.svg",
    },
  },
  {
    name: "Neiro",
    subtitle: "Identity design",
    role: "Designer",
    href: "/projects/neiro",
    color: "bg-neiro",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/Neiro_festival_snapback_hxgubv.jpg",
      alt: "Neiro Festival Snapback",
    },
    nav: {
      label: "Neiro",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_icon_ch8u0a.svg",
    },
  },
];

export default portfolioProjectsData;
