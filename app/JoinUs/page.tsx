"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const JoinUs = () => {
  const controls = useAnimation();
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    sectionRefs.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start(`visible-${index}`);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, [controls]);

  return (
    <div className="flex flex-col px-4 md:px-16 lg:px-32 py-10 space-y-16 bg-gray-50">
      {/* Join Our Team Section */}
      <section className="text-center space-y-4">
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
      </section>

       {/* What We Believe & How We Work Section */}
       <section className="flex flex-col md:flex-row justify-center items-center gap-8">
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
      </section>

      {/* Benefits & Perks Section */}
      <section ref={sectionRefs[0]} className="text-center space-y-8">
        <h2 className="text-2xl font-bold text-red-500">Benefits & Perks</h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            ["visible-0"]: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Benefits Cards */}
          <div className="bg-white p-6 rounded-md shadow-md text-center border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300">
            <h4 className="font-semibold mb-2">Flexible Work Hours</h4>
            <p>
              Enjoy a balanced lifestyle with schedules tailored to ensure your
              productivity and well-being.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md text-center border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300">
            <h4 className="font-semibold mb-2">Health Insurance</h4>
            <p>
              Comprehensive health coverage plans for employees and their
              families.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md text-center border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300">
            <h4 className="font-semibold mb-2">Career Growth</h4>
            <p>
              Opportunities to enhance skills and progress professionally
              through training and mentorship.
            </p>
          </div>
        </motion.div>
      </section>


      {/* Why Join Us Section */}
      <section ref={sectionRefs[1]} className="space-y-8">
        <h2 className="text-2xl font-bold text-red-500 text-center">
          Why Join Us?
        </h2>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            ["visible-1"]: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-100 p-6 rounded-md shadow-md text-center hover:bg-red-500 hover:text-white transition duration-300">
            <h4 className="font-semibold mb-2">Innovative Culture</h4>
            <p>Be part of a team that values creativity and forward-thinking.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-md shadow-md text-center hover:bg-red-500 hover:text-white transition duration-300">
            <h4 className="font-semibold mb-2">Global Impact</h4>
            <p>Work on projects that make a difference globally.</p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full md:w-2/3 lg:w-1/2 mx-auto space-y-6 shadow-lg p-6 rounded-md bg-white border-t-4 border-red-500">
        <h2 className="text-xl font-bold text-red-500 text-center">
          Let’s work together
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border p-2 rounded-md w-full shadow-sm" />
            <input type="email" placeholder="Email" className="border p-2 rounded-md w-full shadow-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Phone" className="border p-2 rounded-md w-full shadow-sm" />
            <input type="text" placeholder="Job" className="border p-2 rounded-md w-full shadow-sm" />
          </div>
          <textarea placeholder="Tell us about yourself" className="border p-2 rounded-md w-full shadow-sm" rows={4}></textarea>
          <div className="flex justify-between">
            <button type="reset" className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300">
              Clear
            </button>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Apply
            </button>
          </div>
        </form>
      </section>

      {/* Post-Form Section */}
      <section className="flex flex-col md:flex-row justify-between items-center mt-8 bg-gray-100 p-6 rounded-md shadow-md">
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="text-lg font-bold text-black">
            Connect with us to explore innovative solutions tailored for your business.
          </h3>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
            Let’s Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;