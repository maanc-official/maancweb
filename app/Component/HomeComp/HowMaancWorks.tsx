"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing arrow icon from react-icons

type Step = {
  title: string;
  description: string;
};

const HowMaancWorks: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Define",
      description:
        "We begin by understanding your unique needs, business goals, and challenges. This phase involves gathering requirements, conducting thorough research, and defining a clear strategy. Our aim is to create a roadmap that aligns your vision with actionable steps to ensure success.",
    },
    {
      title: "Design",
      description:
        "In this phase, we turn your ideas into visually appealing, user-friendly designs that reflect your brand identity. We focus on intuitive interfaces and prototypes, ensuring both functionality and aesthetics are prioritized.",
    },
    {
      title: "Develop",
      description:
        "Here, we turn designs into reality. Our team of experts develops the solution using clean and scalable code, implementing advanced features, and performing rigorous testing. We ensure the product is not only functional but also robust and optimized for performance.",
    },
    {
      title: "Deploy",
      description:
        "The final phase involves the seamless launch of your solution. We conduct final testing, ensure all systems are set up properly, and provide ongoing support to guarantee everything runs smoothly. With your solution deployed, we empower you to achieve your business objectives effectively.",
    },
  ];

  return (
    <section className="h-auto md:h-[100vh] flex flex-col justify-center items-center p-4 md:px-20 lg:px-32 gap-24 mb-16 md:mb-0">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-left w-full">
        How <span className="text-btncolor">Maanc</span> Works?
      </h1>

      {/* Steps */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-1">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Card */}
            <div className="group relative w-[280px] h-[400px] md:w-[300px] md:h-[400px] perspective">
              <div className="relative w-full h-full transform-gpu group-hover:rotate-y-180 transition-transform duration-1000 preserve-3d">
                {/* Front (Title + Background Color Red) */}
                <div className="absolute inset-0 flex justify-center items-center bg-btncolor rounded-lg shadow-lg backface-hidden">
                  <h2 className="text-2xl font-semibold text-white text-center">{step.title}</h2>
                </div>

                {/* Back (Description) */}
                <div className="absolute inset-0 bg-white border-1 border-btncolor rounded-lg shadow-lg transform rotate-y-180 backface-hidden flex flex-col justify-center items-center p-4">
                  <p className="text-sm text-center">{step.description}</p>
                </div>
              </div>
            </div>

            {/* Arrow Icon - Show after every card except the last */}
            {index < steps.length - 1 && (
              <div className="flex justify-center items-center mx-4 md:mx-6">
                <FiArrowRight
                  className="text-btncolor text-3xl md:text-3xl transform md:rotate-0 rotate-90"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowMaancWorks;
