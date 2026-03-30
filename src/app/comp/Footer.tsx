import { Lexend } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { footerCards, footerLinks } from "../data/footerData";
import SectionDivider from "./reuse/SectionDivider";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

const Footer = () => {
  return (
    <footer
      className={`absolute lg:static z-1000 lg:z-auto bg-linear-to-t from-black-Mirage via-blue-NileBlue to-green-RiverBed text-white-LinkWater p-10 ${lexend.variable}`}
    >
      <div className="flex flex-col gap-8 justify-center max-w-280 mx-auto">
        <SectionDivider>
          <div className="flex flex-row items-center gap-1">
            <p className="font-lexend uppercase text-xs min-w-fit tracking-widest text-white-LinkWater">
              Available f
            </p>
            <div className="w-20 rounded-full h-[0.32rem] outline-[0.13rem] outline-white-LinkWater"></div>
            <p className="font-lexend uppercase text-xs min-w-fit tracking-widest text-white-LinkWater">
              r
            </p>
          </div>
        </SectionDivider>

        {/* Services */}
        <ul className="flex flex-row flex-wrap gap-10 justify-center mx-auto">
          {footerCards.map((info) => (
            <li key={info.title} className="max-w-50">
              <div>
                <div className="flex flex-row items-center gap-6 sm:h-10">
                  <Image
                    src={info.icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <p className="section-label">{info.title}</p>
                </div>
                <p className="text-white-LinkWater font-lexend text-xs mt-6">
                  {info.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="bg-dotted-line h-px mt-4" />

        {/* Contact / Location / Socials */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 text-white-LinkWater font-lexend uppercase text-xs tracking-[0.22em]">
            <p className="text-center col-span-3 md:col-start-2 md:col-span-1 max-w-80 mx-auto">
              <a
                href="mailto:nicolai@nicodesign.no"
                className="underline hover:text-red-CoralRed"
              >
                Get in touch
              </a>{" "}
              and let&apos;s make{" "}
              <Link
                href="/projects"
                className="underline hover:text-red-CoralRed"
              >
                something great!
              </Link>
            </p>
            <p className="w-28 col-start-1 md:row-start-1 md:col-start-1">
              Based in
              <br />
              Kristiansand,
              <br />
              Norway
            </p>
            <nav aria-label="Social links">
              <ul className="text-right col-start-2 md:row-start-1 md:col-start-3 w-full">
                {footerLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-CoralRed"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <p className="text-white-LinkWater font-lexend text-xs mx-auto sm:mx-0 uppercase tracking-widest">
          &copy; 2026 NICO Design
        </p>
      </div>
    </footer>
  );
};

export default Footer;
