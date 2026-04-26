// data/portfolioProjectsData.ts

export type Project = {
  name: string;
  subtitle: string;
  role: string;
  href: string;
  color: string;
  outlineColor: string;
  gradientColor: string;
  categories: string;
  gridClass: string;
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
    name: "Neiro",
    subtitle: "Identity design",
    role: "Designer",
    href: "/projects/neiro",
    color: "neiro",
    outlineColor: "#ff0068",
    gradientColor: "from-neiro via-neiro/25 to-transparent",
    categories: "branding design motion",
    gridClass: "sm:col-span-2 sm:row-span-2",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/Neiro_festival_snapback_hxgubv.jpg",
      alt: "Neiro Festival Snapback",
    },
    nav: {
      label: "Neiro",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/neiro_icon_ch8u0a.svg",
    },
  },
  {
    name: "Blå Kors: Soria Moria",
    subtitle: "Campaign visuals",
    role: "Creative",
    href: "/projects/blaKors",
    color: "soria",
    outlineColor: "#0077ff",
    gradientColor: "from-soria via-soria/25 to-transparent",
    categories: "branding design motion",
    gridClass:
      "sm:col-start-1 lg:col-start-auto sm:row-start-3 lg:row-start-auto sm:col-span-2 row-span-1 lg:col-span-1 lg:row-span-2",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_paper_for_parents_m053v9.jpg",
      alt: "Blå Kors flyer mockup",
    },
    nav: {
      label: "Blå Kors",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/bk_logo_icon_bw_ij4r0k.svg",
    },
  },
  {
    name: "Boen",
    subtitle: "UI / UX design",
    role: "Designer",
    href: "/projects/boen",
    color: "boen",
    outlineColor: "#ff8103",
    gradientColor: "from-boen via-boen/25 to-transparent",
    categories: "design",
    gridClass: "sm:col-start-1 lg:col-start-auto sm:col-span-1 sm:row-span-1",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/boen_icon_qobjyg.jpg",
      alt: "Boen Website",
    },
    nav: {
      label: "Boen",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/imgi_1_boen_logo_white_horizontal_transparent_xuix1y.svg",
    },
  },
  {
    name: "Sea Otter Games",
    subtitle: "Logo design",
    role: "Designer",
    href: "/projects/seaOtterGames",
    color: "sog",
    outlineColor: "#03ddff",
    gradientColor: "from-sog via-sog/25 to-transparent",
    categories: "branding",
    gridClass: "col-start-1 sm:col-start-auto sm:col-span-1 sm:row-span-1",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/sog_zoomed_chair_bfgnbm.jpg",
      alt: "Sea Otter Games gaming chair",
    },
    nav: {
      label: "Sea Otter Games",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/sog_icon_black_lndgn7.svg",
    },
  },
  {
    name: "NICO Design",
    subtitle: "Brand update",
    role: "Designer / Dev",
    href: "/projects/nicoDesign",
    color: "nico",
    outlineColor: "#6b95b0",
    gradientColor: "from-nico via-nico/25 to-transparent",
    categories: "branding design dev",
    gridClass:
      "col-start-1 sm:col-start-auto sm:row-start-6 lg:row-start-auto sm:col-span-1 sm:row-span-1",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/nico_Business-Card-Mockup_10mn_b30kha.jpg",
      alt: "NICO Design business card mockup",
    },
    nav: {
      label: "NICO Design",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/nico_new_logo_y08ady.svg",
    },
  },
  {
    name: "Grimstad",
    subtitle: "Coat of Arms",
    role: "Designer",
    href: "/projects/grimstad",
    color: "grim",
    outlineColor: "#0071ff",
    gradientColor: "from-grim via-grim/25 to-transparent",
    categories: "design",
    gridClass:
      "col-start-1 sm:col-start-auto sm:row-start-6 lg:row-start-auto sm:col-span-1 sm:row-span-1",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/grim_Stationery-Mockup_tc7uzd.jpg",
      alt: "Grimstad stationary mockup",
    },
    nav: {
      label: "Grimstad",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/Ikon_Med_Fyll_Sort_Uten_Klaring_kawrrn.svg",
    },
  },
  {
    name: "Sabla Bra",
    subtitle: "Brand update",
    role: "Designer",
    href: "/projects/sabla_bra",
    color: "sabla",
    outlineColor: "#e0ff00",
    gradientColor: "from-sabla via-sabla/25 to-transparent",
    categories: "branding design motion",
    gridClass:
      "col-start-1 sm:row-start-5 lg:row-start-auto sm:col-start-1 sm:col-span-2 sm:row-span-1",
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
    name: "Holidaze",
    subtitle: "Website",
    role: "Designer / Dev",
    href: "/projects/holidaze",
    color: "holi",
    outlineColor: "#ffbc05",
    gradientColor: "from-holi via-holi/25 to-transparent",
    categories: "branding design dev",
    gridClass:
      "col-start-1 sm:col-start-auto sm:row-start-7 lg:row-start-3 lg:col-start-3 sm:col-span-2 sm:row-span-2",
    image: {
      src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/holidaze_imac_mockup_fqgd7l.jpg",
      alt: "Holidaze iMac mockup",
    },
    nav: {
      label: "Holidaze",
      icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_dawnFrame_dark_uzwvxg.svg",
    },
  },
  // {
  //   name: "MTG Norgesmesterskap",
  //   subtitle: "Website",
  //   role: "Designer / Dev",
  //   href: "/projects/mtg_nm",
  //   color: "mtg",
  //   outlineColor: "#ffbc05",
  //   gradientColor: "from-mtg via-mtg/25 to-transparent",
  //   categories: "branding design dev",
  //   gridClass:
  //     "col-start-1 sm:col-start-auto sm:row-start-7 lg:row-start-3 lg:col-start-3 sm:col-span-2 sm:row-span-2",
  //   image: {
  //     src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/holidaze_imac_mockup_fqgd7l.jpg",
  //     alt: "Holidaze iMac mockup",
  //   },
  //   nav: {
  //     label: "MTG Norgesmesterskap",
  //     icon: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/icon_dawnFrame_dark_uzwvxg.svg",
  //   },
  // },
];

export default portfolioProjectsData;
