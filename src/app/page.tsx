import FeaturedProjects from "./comp/home/content/FeaturedProjects";
import HomeQuote from "./comp/home/content/HomeQuote";
import LifeAchievements from "./comp/home/content/LifeAchievements";
import LandingPageHero from "./comp/home/heroSection/LandingPageHero";

export default function Home() {
  return (
    <>
      <LandingPageHero />
      <HomeQuote />
      <FeaturedProjects />
      <LifeAchievements />
    </>
  );
}
