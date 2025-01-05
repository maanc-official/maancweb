"use client";
import React from "react";
import { motion } from "motion/react"
import {HoverEffect} from "@/app/Component/Boxes";
import {TypewriterEffectSmooth} from "@/app/Component/TypeWriter"
const InfoCards = () => {
  
  
  return (
    <>
    <div className="lg:h-[100svh] w-full  lg:px-28">
   <div className="grid grid-cols-6">
    <div className=" w-full h-[50svh] col-span-4 py-7 pr-7">
      <div className="w-full h-full border-1 rounded-2xl flex justify-center items-center">
      <h2 className="text">
        Bring your vision to life with cutting edge Technology and expert solutions.
      </h2>
      </div>
    </div>
    <div className="w-full h-[50svh] col-span-2  py-7">
    <div className="w-full h-full border-1 rounded-2xl">
 
 </div>
    </div>
   </div>
   <div className="grid grid-cols-8">
    <div className="w-full h-[50svh] col-span-3 pb-7 flex flex-col space-y-7">
    <div className="w-full h-1/2 border-1 rounded-2xl">
 
 </div>
 <div className="w-full h-1/2 border-1 rounded-2xl">
 
 </div>
    </div>
    <div className=" w-full h-[50svh] col-span-5 pl-7 pb-7">
    <div className="w-full h-full border-1 rounded-2xl">
 
 </div>
    </div>
   </div>
    </div>
    </>
  );
};

export default InfoCards;
