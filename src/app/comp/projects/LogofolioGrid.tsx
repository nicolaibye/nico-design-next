import React from "react";
import { items as logos } from "@/data/logofolioData";
import Image from "next/image";

const LogofolioGrid = () => {
  return (
    <div className="h-full px-20">
      <h1 className="visually-hidden">Logofolio Grid</h1>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-30">
        {logos.map((logo) => (
          <li
            key={logo.id}
            className="w-40 h-auto aspect-square flex flex-col items-center justify-center grayscale"
          >
            <Image
              src={logo.light}
              alt={logo.alt}
              className={`w-auto h-full object-contain block dark:hidden ${logo.customSize}`}
              width={1000}
              height={1000}
            />
            <Image
              src={logo.dark}
              alt={logo.alt}
              className={`w-auto h-full object-contain hidden dark:block ${logo.customSize}`}
              width={1000}
              height={1000}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogofolioGrid;
