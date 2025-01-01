// "use client";
// import React from "react";
// import Image from "next/image";

// const ServicesSec = () => {
//   const services = [
//     {
//       title: "Web Development",
//       description:
//         "Build robust and scalable websites tailored to your business needs using cutting-edge technologies.",
//       icon: "/web.svg", // Replace with the actual path to the icon
//     },
//     {
//       title: "Mobile Application",
//       description:
//         "Create user-friendly mobile apps for Android and iOS platforms that provide seamless experiences.",
//       icon: "/mobileapp.svg", // Replace with the actual path to the icon
//     },
//     {
//       title: "Digital Marketing",
//       description:
//         "Enhance your online presence and drive traffic with our strategic digital marketing solutions.",
//       icon: "/dm.svg", // Replace with the actual path to the icon
//     },
//     {
//       title: "CRM",
//       description:
//         "Streamline your customer relationships with powerful and intuitive CRM solutions.",
//       icon: "/crm.svg", // Replace with the actual path to the icon
//     },
//     {
//       title: "Graphics Designing",
//       description:
//         "Bring your ideas to life with stunning and innovative graphic designs that captivate your audience.",
//       icon: "/gd.svg", // Replace with the actual path to the icon
//     },
//     {
//       title: "AI & ML",
//       description:
//         "Leverage the power of Artificial Intelligence and Machine Learning to automate and innovate.",
//       icon: "/ai.svg", // Replace with the actual path to the icon
//     },
//   ];

//   return (
//     <div className="w-full h-auto lg:h-[100svh] px-6 py-10 md:px-20 lg:px-32 items-center justify-center  ">
//       {/* Section Title */}
//       <div className="text-start mb-9 items-center justify-center ">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Our <span className="text-btncolor">Services</span>
//         </h2>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="p-6  rounded-lg  text-start space-y-4"
//           >
//             {/* Service Icon */}
//             <div className="flex justify-start">
//               <Image
//                 src={service.icon}
//                 alt={`${service.title} Icon`}
//                 width={40}
//                 height={40}
//                 className="object-contain"
//               />
//             </div>

//             {/* Service Title */}
//             <h3 className="text-xl font-bold text-start">{service.title}</h3>

//             {/* Service Description */}
//             <p className="text-sm md:text-base text-gray-600 text-start">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesSec;
"use client";
import React from "react";
import { motion } from "motion/react"
import {HoverEffect} from "@/app/Component/Boxes";
const InfoCards = () => {
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
    <div className="flex mb-9 lg:justify-start w-full items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold lg:ml-5 lg:text-5xl">
          Our <span className="text-btncolor">Services</span>
        </h2>
      </div>
        <HoverEffect items={items}/>
    </div>
    </>
  );
};

export default InfoCards;
