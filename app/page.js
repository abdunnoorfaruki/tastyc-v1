import AboutSection from "./_sections/AboutSection";
import CoffeeMenuSection from "./_sections/CoffeeMenuSection";
import FeatureSection from "./_sections/FeatureSection";
import Hero from "./_sections/hero";
import OurTeamSection from "./_sections/OurTeamSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CoffeeMenuSection />
      <OurTeamSection />
      <FeatureSection />
    </>
  );
}
