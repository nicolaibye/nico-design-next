export type MasonryItem = {
  id: string;
  image: string;
  video?: string;
  alt: string;
  title: string;
  description?: string;
  type?: string;
};

export const items: MasonryItem[] = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779743949/Boen_homepage_opazng.jpg",
    alt: "...",
    title: "Boen",
    description: "Website design",
    type: "image",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779743666/Hettegenser_strekmotiv_m_kopi_npxau5.jpg",
    alt: "...",
    title: "Hennig-Olsen",
    description: "Merch",
    type: "image",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779743665/Vipers-br%C3%B8d_2023_mockup_avvwfh.jpg",
    alt: "...",
    title: "Vipers",
    description: "Bread packaging",
    type: "image",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779743662/VisitSorlandet_stickers_socials_aqre7m.jpg",
    alt: "...",
    title: "Visit Sørlandet",
    description: "Stickers for socials",
    type: "image",
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779743662/Phonero_simcard_package_cxlvgu.jpg",
    alt: "...",
    title: "Phonero",
    description: "Sim card package",
    type: "image",
  },
  {
    id: "6",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779743662/Mer_salepitch_brochure_iigneu.jpg",
    alt: "...",
    title: "Mer",
    description: "Sales pitch brochure",
    type: "image",
  },
  {
    id: "7",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779743662/Hoi_packaging_fkr2cw.jpg",
    alt: "...",
    title: "Hennig-Olsen",
    description: "Packaging",
    type: "image",
  },
  {
    id: "8",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779743662/FC_Bannerannonse_580x400_cquxok.jpg",
    alt: "...",
    title: "Fjord Classics",
    description: "Banner ad set",
    type: "image",
  },
  {
    id: "9",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779744758/vlcsnap-2026-05-25-23h32m13s781_sr2kfi.png",
    video:
      "https://res.cloudinary.com/dg0c4lry9/video/upload/v1779744254/4-5_FB_IG_TrygtHjem_Kvadraturen_edmadh.mp4",
    alt: "...",
    title: "Trygt Hjem",
    description: "Video ad set",
    type: "video",
  },
  {
    id: "10",
    image:
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1779744769/vlcsnap-2026-05-25-23h32m44s069_mkaygx.png",
    video:
      "https://res.cloudinary.com/dg0c4lry9/video/upload/v1779744239/SBS_infographic_pu5bna.mp4",
    alt: "...",
    title: "SBS",
    description: "Video infographic",
    type: "video",
  },
];
