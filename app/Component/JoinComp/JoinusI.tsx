"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinusI = () => {
  return (
    <>
      <div>
        {/* Combined Section */}
        <section
          className="flex flex-col justify-center items-center text-center space-y-8 h-auto lg:h-[100svh] m-auto lg:m-0"
        >
          {/* Title and Button */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              <span className="text-black">Join our</span>{" "}
              <span className="text-red-500">team</span>
            </motion.h1>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Be a part of our innovative journey and make an impact with us as we
              strive for excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
            >
              See open positions
            </motion.button>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 border-2 border-red-500 rounded-md flex flex-col items-center justify-center text-center shadow-md bg-white hover:bg-red-500 hover:text-white transition duration-300"
            >
              <h3 className="text-lg font-semibold">About</h3>
              <p className="font-medium">What we believe</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 border-2 border-red-500 rounded-md flex flex-col items-center justify-center text-center shadow-md bg-white hover:bg-red-500 hover:text-white transition duration-300"
            >
              <h3 className="text-lg font-semibold">Values</h3>
              <p>How we work</p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JoinusI;
