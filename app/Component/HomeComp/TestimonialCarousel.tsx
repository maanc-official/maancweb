"use client";

import React, { useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "Working with Maanc Technologies has been transformative for our business. Their team quickly understood our unique challenges and provided innovative, customized solutions that exceeded our expectations. From seamless integration to ongoing support, they made the entire process smooth and stress-free. Our productivity has increased, and we’re seeing real results. Highly recommend them for any business looking to take their technology to the next level!",
      name: "Alex P.",
      position: "COO",
      company: "TechNova Solutions",
    },
    {
      text: "Maanc Technologies delivered exceptional results for our project. Their expertise in web development and commitment to meeting our deadlines ensured that we launched on time and on budget. Their team is professional, responsive, and a pleasure to work with.",
      name: "Samantha L.",
      position: "Project Manager",
      company: "NextGen Tech",
    },
    {
      text: "The AI and machine learning solutions provided by Maanc Technologies have completely transformed our operations. Their insights and tools have helped us automate processes, saving us both time and money. Truly a game changer!",
      name: "John D.",
      position: "CEO",
      company: "Innovate AI",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 500); // Adjust duration to match the CSS transition
  };

  const handleDotClick = (index: React.SetStateAction<number>) => {
    if (index !== currentIndex) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsSliding(false);
      }, 500);
    }
  };

  return (
    <div className="w-full h-auto lg:h-[100svh] px-6 md:px-20 lg:px-32 py-12 text-center justify-center items-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-start pb-11">
        What our <span className="text-btncolor">clients</span> think
      </h2>

      {/* Testimonial Card */}
      <div
        className="relative bg-white shadow-md rounded-lg p-8 mx-auto w-full h-[300px] overflow-hidden"
        style={{ transition: "transform 0.5s ease-in-out" }}
      >
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center transition-transform duration-500 px-8 ${
            isSliding ? "translate-x-[-100%]" : "translate-x-0"
          }`}
        >
          <p className="text-lg italic text-gray-600 mb-6">
            <span className="text-btncolor">“</span>{testimonials[currentIndex].text}<span className="text-btncolor">”</span>
          </p>
          <h4 className="text-lg font-bold text-btncolor">
            – {testimonials[currentIndex].name}, {testimonials[currentIndex].position},{" "}
            {testimonials[currentIndex].company}
          </h4>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-btncolor"
                : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
