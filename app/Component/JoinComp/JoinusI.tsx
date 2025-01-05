"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinusI = () => {
  return (
    <>
      <div>
        {/* Combined Section */}
        <section
          className="flex flex-col justify-center items-center text-center space-y-8 h-auto lg:h-[100svh] m-auto lg:m-0 gap-5"
        >
          {/* Title and Button */}
          <div className="space-y-7">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              <span className="text-black">Join our</span>{" "}
              <span className="text-btncolor">team</span>
            </motion.h1>
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
              Be a part of our innovative journey and make an impact with us as we
              strive for excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-btncolor text-white px-6 py-2 rounded-full hover:bg-btncolor transition"
            >
              See open positions
            </motion.button>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-96 h-64 border-2 border-btncolor rounded-2xl flex flex-col items-center justify-center text-center shadow-md bg-white transition duration-300 hover:bg-btncolor group"
            >
              <h3 className="text-lg font-semibold text-black group-hover:text-white">
                About
              </h3>
              <p className="font-medium text-3xl text-btncolor group-hover:text-white">
                What we believe
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-96 h-64 border-2 border-btncolor rounded-2xl flex flex-col items-center justify-center text-center shadow-md bg-white transition duration-300 hover:bg-btncolor group"
            >
              <h3 className="text-lg font-semibold text-black group-hover:text-white">
                Values
              </h3>
              <p className="font-medium text-3xl text-btncolor group-hover:text-white">
                How we work
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JoinusI;
