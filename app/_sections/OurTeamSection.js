import React from "react";
import Section from "../_components/Section";

function OurTeamSection() {
  return (
    <Section
      imageSrc="/coffee-menu.jpg"
      title="Our Philosophy"
      subtitle="Our values"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesentium itaque et quam quaerat."
      linkText="Learn More"
      linkHref="/philosophy"
      imageLeft={false}
    />
  );
}

export default OurTeamSection;
