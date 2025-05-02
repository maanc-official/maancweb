"use client";

import { useState } from 'react';

const CardSwitcher = () => {
  const [activeCard, setActiveCard] = useState('beliefs');
  const [hoverCard, setHoverCard] = useState(null);

  const content = {
    beliefs: {
      heading: 'What we believe',
      icon: '🍁',
      summary: 'Empowering people through smart, scalable solutions.',
      fullText:
        "At MAANC Technology, we believe in the power of innovation, collaboration, and purpose-driven digital transformation. In a rapidly evolving technological landscape, our core belief is simple: technology should empower people, solve real-world challenges, and create lasting impact. We are not just builders of software; we are partners in progress—dedicated to delivering solutions that are smart, scalable, and deeply aligned with our clients' goals.",
    },
    work: {
      heading: 'How we work',
      icon: '⚙️',
      summary: 'Creative collaboration with efficient execution.',
      fullText:
        'We believe in collaboration and innovation. Our processes are designed to foster creativity while ensuring efficiency. Each project is approached with a unique perspective, making our work stand out.',
    },
  };

  const displayedCard = hoverCard || activeCard;

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-5xl font-bold mb-16 text-center">
        What we <span className="text-btncolor">believe</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {Object.entries(content).map(([key, value]) => (
          <div
            key={key}
            className={`h-52 p-6 border-2 rounded-lg cursor-pointer flex flex-col items-center justify-center text-center transition-all transform hover:scale-105 ${displayedCard === key ? 'bg-btncolor text-white' : 'hover:bg-btncolor hover:text-white'}`}
            onClick={() => setActiveCard(key)}
            onMouseEnter={() => setHoverCard(key)}
            onMouseLeave={() => setHoverCard(null)}
          >
            <div className="text-5xl mb-4">{value.icon}</div>
            <span className="text-xl font-semibold">{value.heading}</span>
            <p className="text-sm mt-2 px-2">{value.summary}</p>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-8 p-6 bg-transparent rounded-lg w-full max-w-5xl shadow-lg text-lg">
        {content[displayedCard].fullText}
      </div>
    </div>
  );
};

export default CardSwitcher;
