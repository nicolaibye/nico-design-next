"use client";
import NavMobileButton from "./NavMobileButton";
import NavTabletBar from "./NavTabletBar";
import NavDesktopBar from "./NavDesktopBar";
import Link from "next/link";
import Image from "next/image";
import { useNavVisibility } from "@/app/hook/useNavVisibility";

const Nav = () => {
  useNavVisibility();

  return (
    <>
      <Link
        href="/"
        className="z-999 fixed top-5 left-5 w-10 h-10 mix-blend-difference"
      >
        <Image
          src="https://res.cloudinary.com/dg0c4lry9/image/upload/v1774619709/nico_new_logo_linkwater_scgw9s.svg"
          alt={`NICO Design icon`}
          fill
        />
      </Link>
      <NavDesktopBar />
      <NavTabletBar />
      <NavMobileButton />
    </>
  );
};

export default Nav;
