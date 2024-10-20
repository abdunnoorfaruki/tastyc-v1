import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section = ({
  imageSrc,
  title,
  subtitle,
  description,
  linkText,
  linkHref,
  imageLeft = true,
}) => {
  return (
    <section className="section text-white">
      <div
        className={`column px-8 py-16 flex flex-col md:flex-row gap-8 md:gap-16 items-center `}
      >
        {/* Image Column */}
        <div
          className={`col-1 w-full ${imageLeft ? "order-1" : "order-2"} p-4`}
        >
          <div className="img-box relative aspect-square">
            <Image
              fill
              src={imageSrc}
              className="object-cover"
              alt="section image"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className={`col-2 ${imageLeft ? "order-2" : "order-1"} p-4`}>
          <div className="text-content py-16">
            <h2 className="section_subtitle uppercase text-dark-400 font-bold text-sm tracking-wider flex items-start gap-4">
              <div className="bg-secondary h-1 w-12"></div>
              {subtitle}
            </h2>
            <h3 className="section__title text-4xl md:text-5xl lg:text-6xl mt-4">
              {title}
            </h3>
            <p className="section__description leading-loose mt-8">
              {description}
            </p>
            <Link
              href={linkHref}
              className="bg-secondary px-6 block mt-8 w-fit py-4 uppercase"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
