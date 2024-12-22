"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const HeroSec = () => {
  return (
    <>
      {/* <div className="w-full h-[100svh] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between bg-red-400">
        
       
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-5 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start space-x-1 text-[36px] md:text-[48px] lg:text-[58px] font-extrabold">
            <h1 className="text-btncolor">Maanc</h1>
            <h1>Technology</h1>
          </div>

          <div className="text-[24px] md:text-[30px] lg:text-[34px] font-bold">
            <h2>IT Consulting &</h2>
            <h2>Software Solutions</h2>
          </div>

          <p className="text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed">
            Maanc Technologies is dedicated to helping businesses unlock their
            full potential with expert IT consulting and innovative software
            solutions. We partner with clients to streamline processes, boost
            efficiency, and accelerate growth.
          </p>

          <div>
            <Button
              className="bg-btncolor rounded-md text-white py-2 text-[16px] md:text-[18px] lg:text-[20px]"
              as={Link}
              href="/contactUs"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>

      
        <div className="lg:w-1/2 flex items-center justify-center">
          <Image
            className="object-contain"
            src="/Maancnewlogo.png"
            alt="maanc logo"
            width={250} // Adjusted for mobile
            height={224} // Adjusted for mobile
            sizes="(max-width: 768px) 150px, 
                   (max-width: 1024px) 200px, 
                   250px" // Automatically adjust size
          />
        </div>
      </div> */}

<div className="flex h-[100svh] w-full flex-col justify-center px-28">
  <div className="flex h-auto w-full flex-row justify-center items-center">
    <div className="w-1/2 flex flex-col  items-start justify-center space-y-2">
    <div className="flex justify-center lg:justify-start space-x-1 text-[36px] md:text-[48px] lg:text-[58px] font-extrabold">
            <h1 className="text-btncolor">Maanc</h1>
            <h1>Technology</h1>
          </div>

          <div className="text-[24px] md:text-[30px] lg:text-[34px] font-bold">
            <h2>IT Consulting &</h2>
            <h2>Software Solutions</h2>
          </div>

          <p className="text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed">
            Maanc Technologies is dedicated to helping businesses unlock their
            full potential with expert IT consulting and innovative software
            solutions. We partner with clients to streamline processes, boost
            efficiency, and accelerate growth.
          </p>

          <div>
            <Button
              className="bg-btncolor rounded-md text-white py-2 text-[16px] md:text-[18px] lg:text-[20px]"
              as={Link}
              href="/contactUs"
            >
              Let&apos;s Talk
            </Button>
          </div>
    </div>
    <div className="w-1/2 flex items-center justify-center">
    <Image
            className="object-contain"
            src="/Maancnewlogo.png"
            alt="maanc logo"
            width={250} // Adjusted for mobile
            height={224} // Adjusted for mobile
            sizes="(max-width: 768px) 150px, 
                   (max-width: 1024px) 200px, 
                   250px" // Automatically adjust size
          />
    </div>
  </div>
</div>
    </>
  );
};

export default HeroSec;
