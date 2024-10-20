import React from "react";
import Section from "../_components/Section";

function CoffeeMenuSection() {
  return (
    <Section
      imageSrc="/coffee-menu.jpg"
      title="Quality Kava Beans"
      subtitle="Coffee Menu"
      description="Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat."
      linkText="view menu"
      linkHref="/menu"
      imageLeft={true} // Image on the right
    />
  );
}

export default CoffeeMenuSection;
