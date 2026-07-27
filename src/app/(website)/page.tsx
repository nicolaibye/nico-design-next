import AboutMeHome from "./comp/home/content/AboutMeHome";
import ContactSectionHome from "./comp/home/content/ContactSectionHome";
import FeaturedProjects from "./comp/home/content/FeaturedProjects";
import LifeAchievements from "./comp/home/content/LifeAchievements";
import LandingPageHero from "./comp/home/heroSection/LandingPageHero";

export const metadata = {
  title: "NICO Design",
  description:
    "Welcome to NICO Design, here you can explore my latest works and learn about my career and life. Ultimately I want to connect with all the awesome people out there who, much like myself, wish to not be like everyone else.",
  openGraph: {
    title: "NICO Design",
    description:
      "Welcome to NICO Design, here you can explore my latest works and learn about my career and life. Ultimately I want to connect with all the awesome people out there who, much like myself, wish to not be like everyone else.",
    images: [
      "https://res.cloudinary.com/dg0c4lry9/image/upload/v1756059541/preview_image_sxcv3p.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <h1 className="visually-hidden">Nico Design Home Page</h1>
      <LandingPageHero />
      <FeaturedProjects />
      <AboutMeHome />
      <div className="flex flex-col min-h-screen justify-start">
        <ContactSectionHome />
        <LifeAchievements />
      </div>
    </>
  );
}
