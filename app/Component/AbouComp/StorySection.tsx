'use client';


import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section className="h-[100svh] flex flex-col items-center justify-center px-6 md:px-12 text-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <div className="relative w-full flex flex-col items-center">
          <hr className="w-[90%] border-t-2 border-btncolor mb-2" />
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Our <span className="text-btncolor">Story</span>
          </h2>
        </div>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          <span className="text-btncolor font-medium">Maanс Technologies</span> is dedicated to helping businesses
          unlock their full potential with expert IT consulting and innovative software solutions. We partner with
          clients to streamline processes, boost efficiency, and accelerate growth.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          <span className="text-btncolor font-medium">Maanс Technologies</span> is dedicated to helping businesses unlock
          their full potential with expert IT consulting and innovative software solutions. We partner with clients to
          streamline processes, boost efficiency, and accelerate growth.
        </p>
      </motion.div>
    </section>
  );
}