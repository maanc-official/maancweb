"use client";

import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing arrow icon from react-icons
import { TypewriterEffectSmooth } from "@/app/Component/TypeWriter";
import { motion, useInView } from "framer-motion";

type Step = {
  title: string;
  description: string;
};

const HowMaancWorks: React.FC = () => {
  const words = [
    {
      text: "How",
      className: "text-3xl md:text-4xl font-bold lg:text-5xl",
    },
    {
      text: "Sanad",
      className: "text-btncolor text-3xl md:text-4xl font-bold lg:text-5xl",
    },
    {
      text: "Works?",
      className: "text-3xl md:text-4xl font-bold lg:text-5xl",
    },
  ];

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

  const ref = useRef(null); // Reference for the section
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger animations when 10% of the section is visible

  return (
    <section
      ref={ref}
      className="h-auto lg:h-[100vh] flex flex-col justify-center items-center p-4 md:px-20 lg:px-32 gap-24 mb-16 md:mb-0"
    >
      {/* Title */}
      <TypewriterEffectSmooth
        words={words}
        cursorClassName="block rounded-sm w-[4px] h-8 sm:h-8 xl:h-12 bg-btncolor"
      />

      {/* Steps */}
      <div className="w-full flex flex-col  lg:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-1">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                type: "spring",
                duration: 1,
                delay: index * 0.3,
              }}
              className="group relative h-[300px] w-[200px] lg:w-[280px] lg:h-[400px] md:w-[300px] md:h-[400px]  perspective"
            >
              <div className="relative w-full h-full transform-gpu group-hover:rotate-y-180 transition-transform duration-1000 preserve-3d">
                {/* Front (Title + Background Color Red) */}
                <div className="absolute inset-0 flex justify-center items-center bg-btncolor rounded-lg shadow-lg backface-hidden">
                  <h2 className="text-2xl font-semibold text-white text-center">
                    {step.title}
                  </h2>
                </div>

                {/* Back (Description) */}
                <div className="absolute inset-0 bg-white border-1 border-btncolor rounded-lg shadow-lg transform rotate-y-180 backface-hidden flex flex-col justify-center items-center p-4">
                  <p className="text-sm text-center">{step.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Arrow Icon - Show after every card except the last */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  type: "spring",
                  duration: 2,
                  delay: index * 0.3 + 0.1,
                }}
                className="flex justify-center items-center mx-4 md:mx-6"
              >
                <FiArrowRight className="text-btncolor text-3xl md:text-3xl transform lg:rotate-0 rotate-90" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowMaancWorks;
