"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const HeroSec = () => {
  return (
    <>
      <div className="flex h-[100svh] w-full flex-col px-6 md:px-12 lg:px-28">
        <div className="flex flex-col-reverse lg:flex-row h-full w-full justify-center items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start justify-center space-y-4 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start space-x-1 text-[28px] md:text-[36px] lg:text-[48px] font-extrabold">
              <h1 className="text-btncolor">Maanc</h1>
              <h1>Technology</h1>
            </div>

            <div className="text-[20px] md:text-[24px] lg:text-[30px] font-bold">
              <h2>IT Consulting &</h2>
              <h2>Software Solutions</h2>
            </div>

            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
              Maanc Technologies is dedicated to helping businesses unlock their
              full potential with expert IT consulting and innovative software
              solutions. We partner with clients to streamline processes, boost
              efficiency, and accelerate growth.
            </p>

            <div className="">
              <Button
                className="bg-btncolor rounded-md text-white py-2 px-4 text-[14px] md:text-[16px] lg:text-[18px] "
                as={Link}
                href="/contactUs"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex lg:items-center justify-center mb-11 lg:mt-0 lg:mb-0">
            <Image
              className="object-contain"
              src="/Maancnewlogo.png"
              alt="maanc logo"
              width={200} // Adjusted for mobile
              height={200} // Adjusted for mobile
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
