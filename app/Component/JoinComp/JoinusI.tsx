"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinusI = ({ scrollToForm }) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
      <section className="flex flex-col justify-center items-center text-center space-y-8 h-auto lg:h-[100svh] m-auto lg:m-0 gap-5 py-20">
        <div className="space-y-5 sm:space-y-7">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
          >
            <span className="text-black">Join our</span>{" "}
            <span className="text-btncolor">team</span>
          </motion.h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md mx-auto">
            Be a part of our innovative journey and make an impact with us as we strive for excellence.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-btncolor text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-btncolor transition"
            onClick={scrollToForm}
          >
            See open positions
          </motion.button>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5 sm:gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-72 md:w-80 h-48 md:h-56 border-2 border-btncolor rounded-2xl flex flex-col items-center justify-center text-center shadow-md bg-white transition duration-300 hover:bg-btncolor group px-4 cursor-pointer"
          >
            <h3 className="text-base sm:text-lg font-semibold text-black group-hover:text-white">
              About
            </h3>
            <p className="font-medium text-xl sm:text-2xl md:text-3xl text-btncolor group-hover:text-white">
              What we believe
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-72 md:w-80 h-48 md:h-56 border-2 border-btncolor rounded-2xl flex flex-col items-center justify-center text-center shadow-md bg-white transition duration-300 hover:bg-btncolor group cursor-pointer"
          >
            <h3 className="text-base sm:text-lg font-semibold text-black group-hover:text-white">
              Values
            </h3>
            <p className="font-medium text-xl sm:text-2xl md:text-3xl text-btncolor group-hover:text-white">
              How we work
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinusI;
