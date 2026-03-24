import FeaturedProjects from "./comp/home/content/FeaturedProjects";
import HomeQuote from "./comp/home/content/HomeQuote";
import LandingPageHero from "./comp/home/heroSection/LandingPageHero";

export default function Home() {
  return (
    <>
      <LandingPageHero />
      <HomeQuote />
      <FeaturedProjects />
    </>
  );
}
