import Image from "next/image";
import React from "react";

const FeatureItem = ({ title, imgSrc, description }) => {
  return (
    <div className="max-w-xs" >
      <div className=" flex justify-center mb-8">
        <Image src={imgSrc} alt="menu icon" width={70} height={70} />
      </div>
      <h1 className="text-xl lg:text-3xl text-light-500 text-center mb-8">{title}</h1>

      <p className="text-light-600 text-base font-normal text-center mb-10">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
