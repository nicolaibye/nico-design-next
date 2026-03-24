// data/heroCards.ts
export interface HeroCard {
  id: string;
  title: string;
  year?: string;
  date?: string;
  personality?: string;
  subtitle: string;
  color: string;
  outlineColor: string;
  href?: string;
  timeId?: string;
  textColor?: string;
  isExternal?: boolean;
}

export const heroCards: HeroCard[] = [
  {
    id: "welcome-scroll",
    title: "Welcome",
    timeId: "welcome-time",
    subtitle: "Have a look",
    color: "bg-red-CoralRed",
    outlineColor: "outline-red-CoralRed",
    href: "#welcome", // or remove if it's an anchor scroll
  },
  {
    id: "project-card",
    title: "Projects",
    year: "2015-2026",
    subtitle: "Creative thinker",
    color: "bg-green-RiverBed",
    outlineColor: "outline-green-RiverBed",
    href: "/projects",
  },
  {
    id: "about-card",
    title: "About",
    date: "21-06-1998",
    subtitle: "Chicken expert",
    color: "bg-blue-NileBlue",
    outlineColor: "outline-blue-NileBlue",
    href: "/about",
  },
  {
    id: "blog-card",
    title: "Blog",
    personality: "ENFP",
    subtitle: "Social Optimist",
    color: "bg-black-Mirage",
    outlineColor: "outline-black-Mirage",
    textColor: "text-white",
    href: "/blog",
  },
];
