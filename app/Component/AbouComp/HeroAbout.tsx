"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroAbout = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-between overflow-hidden px-6 bg-black text-white">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Get it done in
          <br />
          <span className="bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent">
            One Unified
          </span>{" "}
          Workspace.
        </h1>
        <p className="mt-6 text-gray-300 text-lg">
          We craft powerful websites, mobile apps, and digital strategies to transform your business into a tech-driven success.
        </p>
        <div className="mt-8 flex gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </motion.div>

      {/* Right Floating Device Preview */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 hidden md:block"
      >
        <Image
          src="/heroabout.png"
          alt="Maanc Technology Preview"
          width={600}
          height={400}
          className="drop-shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          priority
        />
      </motion.div>

      {/* Abstract Background Ellipses */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-red-500 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[200px] opacity-10 animate-pulse" />
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-red-500 rounded-full blur-[150px] opacity-20 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroAbout;
