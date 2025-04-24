
"use client";
import React from "react";
// import { motion } from "motion/react"
import {HoverEffect} from "@/app/Component/Boxes";
import {TypewriterEffectSmooth} from "@/app/Component/TypeWriter"
const InfoCards = () => {
  const words = [
    {
      text: "Our",
      className:"text-3xl md:text-4xl font-bold  lg:text-5xl", 
      
    },
    {
      text: "Services",
      
      className:"text-btncolor text-3xl md:text-4xl font-bold lg:text-5xl",
     
      
    },
    
  ];
  const items = [
    {
      title: "Web Development",
      description:
        "Build robust and scalable websites tailored to your business needs using cutting-edge technologies.",
      icon: "/web.svg", // Replace with the actual path to the icon
      link: "https://stripe.com",
    },
    {
      title: "Mobile Application",
      description:
        "Create user-friendly mobile apps for Android and iOS platforms that provide seamless experiences.",
      icon: "/mobileapp.svg", // Replace with the actual path to the icon
      link: "https://netflix.com",
    },
    {
      title: "Digital Marketing",
      description:
        "Enhance your online presence and drive traffic with our strategic digital marketing solutions.",
      icon: "/dm.svg", // Replace with the actual path to the icon
      link: "https://google.com",
    },
    {
      title: "CRM",
      description:
        "Streamline your customer relationships with powerful and intuitive CRM solutions.",
      icon: "/crm.svg", // Replace with the actual path to the icon
      link: "https://meta.com",
    },
    {
      title: "Graphics Designing",
      description:
        "Bring your ideas to life with stunning and innovative graphic designs that captivate your audience.",
      icon: "/gd.svg", // Replace with the actual path to the icon
      link: "https://amazon.com",
    },
    {
      title: "AI & ML",
      description:
        "Leverage the power of Artificial Intelligence and Machine Learning to automate and innovate.",
      icon: "/ai.svg", // Replace with the actual path to the icon
      link: "https://microsoft.com",
    },
  ];
  
  return (
    <>
    <div className="lg:h-[100svh] w-full  lg:px-28 flex justify-center items-center flex-col">
    <div className="flex mb-9 lg:justify-start w-full items-center justify-center lg:ml-5">
    <TypewriterEffectSmooth words={words} cursorClassName="block rounded-sm w-[4px] h-8 sm:h-8 xl:h-12 bg-btncolor"/>
      </div>
      
        <HoverEffect items={items}/>
    </div>
    </>
  );
};

export default InfoCards;
