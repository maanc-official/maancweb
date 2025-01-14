"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {TypewriterEffectSmooth} from "@/app/Component/TypeWriter"


const HeroSec = () => {
  const words = [
    {
      text: "Maanc",
      className:"text-btncolor text-3xl md:text-[36px] lg:text-[60px] font-extrabold ",
      
    },
    {
      text: "Technology",
      className:"text-3xl md:text-[36px] lg:text-[60px] font-extrabold", 
     
      
    },
    
  ];
  return (
    <>
      <div className="flex h-[100svh] w-full flex-col px-6 md:px-12 lg:px-28">
        <div className="flex flex-col-reverse lg:flex-row h-full w-full justify-center items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start justify-center space-y-10 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start space-x-4 text-[28px] md:text-[36px] lg:text-[60px] font-extrabold">
            <TypewriterEffectSmooth words={words} cursorClassName="block rounded-sm w-[4px] h-8 sm:h-8 xl:h-16 bg-btncolor"/>
            </div>
    <div className="space-y-2">

    
            <motion.div 
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            transition={{
              duration:1,
              delay:1,
              ease:"easeInOut"
            }}
            className="text-[20px] md:text-[24px] lg:text-[30px] font-bold">
              <h2>IT Consulting &</h2>
              <h2>Software Solutions</h2>
            </motion.div>

            <motion.p 
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            transition={{
              duration:1,
              delay:1,
              ease:"easeInOut"
            }}
            className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
              Maanc Technologies is dedicated to helping businesses unlock their
              full potential with expert IT consulting and innovative software
              solutions. We partner with clients to streamline processes, boost
              efficiency, and accelerate growth.
            </motion.p>
            </div>
            <motion.div 
            initial={{
              opacity:0,
              y:20
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:1,
              delay:0.5,
              ease:"easeInOut"
            }}
            className="">
              <Button
                className="bg-btncolor rounded-lg text-white lg:py-6 lg:px-6 md:py-5 md:px-5 py-4 px-4  text-[14px] md:text-[16px] lg:text-[18px] "
                as={Link}
                href="/contactUs"
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex lg:items-center justify-center mb-11 lg:mt-0 lg:mb-0">
            {/* <Image
              className="object-contain"
              src="/Maancnewlogo.png"
              alt="maanc logo"
              width={200} // Adjusted for mobile
              height={200} // Adjusted for mobile
              sizes="(max-width: 768px) 150px, 
                     (max-width: 1024px) 200px, 
                     250px" // Automatically adjust size
            /> */}
            <motion.div 
            initial={{
              scale: 0, // Start with 0% size
            }}
            animate={{
              scale: 1, // Scale to full size
            }}
            transition={{
              type:"spring",
              bounce:0.25,
              duration: 0.5, // Animation duration in seconds
              delay:0.5
              // ease: "backInOut", // Smooth easing
            }}
            style={{
              originX: 0.5, // Scale from the center horizontally
              originY: 0.5, // Scale from the center vertically
            }}
            className="bg-btncolor lg:w-52 lg:h-52 md:w-32 md:h-32 w-24 h-24  lg:rounded-3xl md:rounded-2xl rounded-xl relative shadow-custom-inner ml-10">
              <motion.div
               initial={{
                x: 0,
                y:0 // Start at its initial position
              }}
              animate={{
                x: -30,
                y:-30 // Move 100px to the right
              }}
              transition={{
                duration: 0.7, // Duration of the animation in seconds
                ease: "backOut", // Smooth easing
                delay:1.2,
                bounce:1,
              }}
              className="bg-white lg:w-52 lg:h-52 md:w-32 md:h-32 w-24 h-24  lg:rounded-3xl md:rounded-2xl rounded-xl shadow-custom-large absolute ">

              </motion.div>

            </motion.div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSec;
