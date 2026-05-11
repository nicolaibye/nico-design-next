import AboutMeHome from "./comp/home/content/AboutMeHome";
import FeaturedProjects from "./comp/home/content/FeaturedProjects";
import LifeAchievements from "./comp/home/content/LifeAchievements";
import LandingPageHero from "./comp/home/heroSection/LandingPageHero";

export default function Home() {
  return (
    <>
      <h1 className="visually-hidden">Nico Design Home Page</h1>
      <LandingPageHero />
      <FeaturedProjects />
      <AboutMeHome />
      <LifeAchievements />
    </>
  );
}
