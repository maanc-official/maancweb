"use client";

import { useState } from "react";

type CardKey = "beliefs" | "work";

const CardSwitcher = () => {
  const [activeCard, setActiveCard] = useState<CardKey>("beliefs");
  const [hoverCard, setHoverCard] = useState<CardKey | null>(null);

  const content: Record<
    CardKey,
    {
      heading: string;
      icon: string;
      summary: string;
      fullText: string;
    }
  > = {
    beliefs: {
      heading: "What we believe",
      icon: "🍁",
      summary: "Empowering people through smart, scalable solutions.",
      fullText:
        "At MAANC Technology, we believe in the power of innovation, collaboration, and purpose-driven digital transformation. In a rapidly evolving technological landscape, our core belief is simple: technology should empower people, solve real-world challenges, and create lasting impact. We are not just builders of software; we are partners in progress—dedicated to delivering solutions that are smart, scalable, and deeply aligned with our clients' goals.",
    },
    work: {
      heading: "How we work",
      icon: "⚙️",
      summary: "Creative collaboration with efficient execution.",
      fullText:
        "We believe in collaboration and innovation. Our processes are designed to foster creativity while ensuring efficiency. Each project is approached with a unique perspective, making our work stand out.",
    },
  };

  const displayedCard = hoverCard || activeCard;

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-5xl font-bold mb-16 text-center">
        What we <span className="text-btncolor">believe</span>
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5 sm:gap-8 w-full max-w-5xl">
        {Object.entries(content).map(([key, value]) => (
          <div
            key={key}
            className={`w-full sm:w-72 md:w-80 h-48 md:h-56 border-2 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer group transition duration-300 transform hover:scale-105
              ${
                displayedCard === key
                  ? "bg-btncolor text-white border-btncolor"
                  : "bg-white border-btncolor hover:bg-btncolor hover:text-white"
              }`}
            onClick={() => setActiveCard(key as CardKey)}
            onMouseEnter={() => setHoverCard(key as CardKey)}
            onMouseLeave={() => setHoverCard(null)}
          >
            <h3
              className={`text-base sm:text-lg font-semibold ${
                displayedCard === key
                  ? "text-white"
                  : "text-black group-hover:text-white"
              }`}
            >
              {key === "beliefs" ? "About" : "Values"}
            </h3>
            <p
              className={`font-medium text-xl sm:text-2xl md:text-3xl ${
                displayedCard === key
                  ? "text-white"
                  : "text-btncolor group-hover:text-white"
              }`}
            >
              {value.heading}
            </p>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-8 p-16 px-36 bg-transparent rounded-lg w-full max-w-5xl text-lg flex justify-center">
        {content[displayedCard].fullText}
      </div>
    </div>
  );
};

export default CardSwitcher;
