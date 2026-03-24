import {
  HouseIcon,
  KanbanIcon,
  SmileyMeltingIcon,
  QuotesIcon,
} from "@phosphor-icons/react";
import goldGif from "@/public/goldenBlob/goldenBlob_108.gif";

export const navlinks = [
  {
    name: "Home",
    href: "/",
    icon: HouseIcon,
    color: "bg-red-CoralRed",
    hoverDistance: "hover:-translate-x-14.5",
  },
  {
    name: "Project",
    href: "/projects",
    icon: KanbanIcon,
    color: "bg-green-RiverBed",
    hoverDistance: "hover:-translate-x-20",
  },
  {
    name: "Gold",
    href: "/gold",
    icon: null,
    color: "bg-white",
    image: goldGif,
  },
  {
    name: "About",
    href: "/about",
    icon: SmileyMeltingIcon,
    color: "bg-blue-NileBlue",
    hoverDistance: "hover:-translate-x-16",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: QuotesIcon,
    color: "bg-black-Mirage",
    hoverDistance: "hover:-translate-x-13.5",
  },
];

export default navlinks;
