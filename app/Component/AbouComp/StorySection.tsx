'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="w-full min-h-[100svh] flex items-center justify-center px-4 md:px-12 py-24 bg-white text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
        className="max-w-4xl"
      >
        {/* Red Line with Shadow */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6 }}
          className="w-96 h-[3px] bg-btncolor mx-auto mb-12 rounded-full shadow-lg shadow-orange-400"
        />

        {/* Heading */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
          Who we Are
        </motion.h2>

        {/* Paragraph */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed space-y-8"
        >
          <p>
            <span className="text-red-500 font-semibold">Maanc Technologies</span> is dedicated to helping businesses unlock their full potential with expert IT consulting and innovative software solutions. We partner with clients to streamline processes, boost efficiency, and accelerate growth.
          </p>
          <p>
            <span className="text-red-500 font-semibold">Maanc Technologies</span> is committed to delivering tailored software and infrastructure solutions. Our goal is to empower businesses to evolve with confidence and clarity in today’s tech-driven world.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StorySection;
