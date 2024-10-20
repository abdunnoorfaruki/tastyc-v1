import Section from "../_components/Section";

const AboutSection = () => {
  return (
    <div>
      {/* Section with Image on the Left */}
      <Section
        imageSrc="/about-bg.jpg"
        title="We Invite You to Visit Our Coffee House"
        subtitle="About us"
        description="Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum."
        linkText="Read More"
        linkHref="/about"
        imageLeft={false} // Image on the left
      />
    </div>
  );
};

export default AboutSection;
