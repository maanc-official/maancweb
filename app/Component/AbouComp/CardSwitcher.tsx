"use client";

import { useState } from 'react';

const CardSwitcher = () => {
  const [activeCard, setActiveCard] = useState('beliefs');
  const [hoverCard, setHoverCard] = useState(null);

  const content = {
    beliefs: "At MAANC Technology, we believe in the power of innovation, collaboration, and purpose-driven digital transformation. In a rapidly evolving technological landscape, our core belief is simple: technology should empower people, solve real-world challenges, and create lasting impact. We are not just builders of software; we are partners in progress—dedicated to delivering solutions that are smart, scalable, and deeply aligned with our clients goals. We believe that every idea has the potential to shape a better future. Whether it's a start-up aiming to disrupt the market or an established enterprise looking to modernize, we treat each project as a unique opportunity to push boundaries and think beyond the ordinary. Our team thrives on curiosity and challenges, constantly learning, adapting, and staying ahead of industry trends to deliver cutting-edge results.Trust is the foundation of every relationship we build—be it with our clients, employees, or community. We believe in transparency, open communication, and integrity at every step of the journey. We listen deeply, collaborate closely, and execute with excellence, because your vision deserves more than a transactional approach—it deserves a trusted technology partner who is as invested in your success as you are.We also believe that technology should be inclusive and sustainable. That's why we advocate for ethical development practices, inclusive design, and long-term thinking. Our commitment extends beyond delivering code; we strive to deliver experiences that are meaningful, responsible, and human-centered. At our core, we believe in building technology that matters. That means putting people first, dreaming big, and always delivering with purpose.",
    work: 'We believe in collaboration and innovation. Our processes are designed to foster creativity while ensuring efficiency. Each project is approached with a unique perspective, making our work stand out.',
    culture: 'Our culture is built on respect and inclusivity. We strive to create an environment where everyone feels valued and empowered to contribute their best work. It’s about building relationships and growing together.'
  };

  const displayedCard = hoverCard || activeCard;

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        What we <span className="text-red-500">believe</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {['beliefs', 'work', 'culture'].map((card) => (
          <div
            key={card}
            className={`p-4 border-2 rounded-lg cursor-pointer flex flex-col items-center transition ${displayedCard === card ? 'bg-red-500 text-white' : 'hover:bg-red-500 hover:text-white'}`}
            onClick={() => setActiveCard(card)}
            onMouseEnter={() => setHoverCard(card)}
            onMouseLeave={() => setHoverCard(null)}
          >
            <span className="text-inherit">{card === 'beliefs' ? 'About' : card === 'work' ? 'Values' : 'Culture'}</span>
            <span className="text-lg font-semibold text-inherit">{card === 'beliefs' ? 'What we believe' : card === 'work' ? 'How we work' : 'Our Culture'}</span>
            <div className="text-3xl mt-2 text-inherit">{card === 'culture' ? '🌿' : '🍁'}</div>
          </div>
        ))}
      </div>
      {/* Content Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg w-full max-w-5xl shadow-md ">
        {content[displayedCard]}
      </div>
    </div>
  );
};

export default CardSwitcher;
