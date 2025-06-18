'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroAbout = () => {
  return (
    <section className="w-full min-h-[100svh] flex items-center justify-center px-4 md:px-12 py-24 bg-white text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="max-w-5xl"
      >
        {/* Heading */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-snug mb-8"
        >
          Transforming ideas into reality with <br />
          <span className="text-btncolor">Sanad Technologies</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          <span className="text-btncolor font-semibold">Sanad Technologies</span> is dedicated to helping businesses unlock their full potential with expert IT consulting.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <button className="bg-btncolor hover:bg-btncolor text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
            Let’s Talk
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroAbout;
