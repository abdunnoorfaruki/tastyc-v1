import SectionHeading from "@/components/global/section-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className=" absolute top-0 right-0 bg-hero-overlay -z-10 h-screen w-screen "></div>
      <div>
        <Image className="-z-20 object-cover  " src={"/hero-bg.jpg"} alt="hero bg" fill />
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
         <SectionHeading title={"  Welcome to tastyc"} />
          <h1 className=" text-center text-5xl md:text-6xl lg:text-[112px] tracking-wide text-light-500 uppercase mb-7  ">
            Coffee & Chocolate
          </h1>
          <div className="flex items-center justify-center gap-x-2">
            <Button
              variant={"default"}
              className={
                "bg-transparent px-5 lg:px-10 py-7 hover:bg-transparent border-2 border-white rounded-none"
              }
            >
              <h1 className="uppercase font-normal tracking-wide text-light-500">
                Book a Table
              </h1>
            </Button>
            <Link
              className={
                "px-5 lg:px-10 py-7 text-base text-light-500 uppercase font-normal tracking-wide whitespace-nowrap "
              }
              href={"/menu"}
            >
              Open menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
