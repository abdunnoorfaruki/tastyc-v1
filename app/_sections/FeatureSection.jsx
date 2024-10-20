import SectionHeading from "@/components/global/section-heading";
import React from "react";
import FeatureItem from "../_components/FeatureItem";

const FeatureSection = () => {
  return (
    <div className="w-full mb-10">
      <SectionHeading title={"Features"} />
      <h1 className="text-3xl lg:text-5xl text-light-500 text-center font-normal">
        Why people choose us?
      </h1>
      <p className="text-light-600 text-base font-normal text-center my-10">
        Porro eveniet, autem ipsam vitae consequatur!
      </p>
      <div
        className="w-10/12 
         mx-auto flex flex-wrap justify-center md:justify-between mt-7 gap-x-5"
      >
        <FeatureItem
          title={"Menu for every taste"}
          description={
            "Dolor sit amet, consectetur adipisicing elit et molestias possimus"
          }
          imgSrc={"/s6-menu.png"}
        />
        <FeatureItem
          title={"Menu for every taste"}
          description={
            "Dolor sit amet, consectetur adipisicing elit et molestias possimus"
          }
          imgSrc={"/s6-coffee.png"}
        />
        <FeatureItem
          title={"Menu for every taste"}
          description={
            "Dolor sit amet, consectetur adipisicing elit et molestias possimus"
          }
          imgSrc={"/s6-user.png"}
        />
      </div>
    </div>
  );
};

export default FeatureSection;
