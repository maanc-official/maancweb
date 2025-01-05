"use client";
import React from "react";
import { motion } from "motion/react"
import { Button } from "@nextui-org/react";
import Link from "next/link";

const InfoCards = () => {
  
  
  return (
    <>
    <div className="lg:h-[80svh] w-full  lg:px-28 ">
   <div className="grid grid-cols-6">
    <div className=" w-full h-[40svh] col-span-4 py-7 pr-7">
      <div className="w-full h-full border-1 rounded-2xl flex justify-center items-center">
      {/* <h2 className="text">
        Bring your vision to life with cutting edge Technology and expert solutions.
      </h2> */}
     
      </div>
    </div>
    <div className="w-full h-[40svh] col-span-2  py-7">
    <div className="w-full h-full border-1.5 rounded-2xl border-btncolor ">
 
 </div>
    </div>
   </div>
   <div className="grid grid-cols-8 ">
    <div className="w-full h-[40svh] col-span-3 pb-7 flex flex-col space-y-7">
    <div className="w-full h-1/2 border-1 rounded-2xl bg-btncolor text-white text-4xl flex justify-center items-center font-medium">
 Deliverability Over Promises
 </div>
 <div className="w-full h-1/2 border-1 rounded-2xl text-xl flex justify-center items-center font-medium">
 Partenring with businesses accross the globe
 </div>
    </div>
    <div className=" w-full h-[40svh] col-span-5 pl-7 pb-7">
    <div className="w-full h-full border-1 rounded-2xl text-5xl flex justify-evenly space-x-10 items-start font-medium flex-col pl-10 ">
 Get a quotation within 48 hours
 <Button
                className="bg-btncolor rounded-lg text-white lg:py-6 lg:px-6 md:py-5 md:px-5 py-4 px-4  text-[14px] md:text-[16px] lg:text-[18px] "
                as={Link}
                href="/contactUs"
              >
                Let&apos;s Talk
              </Button>
 </div>
    </div>
   </div>
    </div>
    </>
  );
};

export default InfoCards;
