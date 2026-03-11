import React from "react";
import NavMobileButton from "./NavMobileButton";
import NavTabletBar from "./NavTabletBar";
import NavDesktopBar from "./NavDesktopBar";

const Nav = () => {
  return (
    <>
      <NavDesktopBar />
      <NavTabletBar />
      <NavMobileButton />
    </>
  );
};

export default Nav;
