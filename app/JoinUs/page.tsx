"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import JoinusI from "../Component/JoinComp/JoinusI";

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
        { threshold: 1 }
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
    <>
      <JoinusI />

      <div className="flex flex-col px-4 md:px-16 lg:px-32 py-20 space-y-16 bg-gray-50 ">
        {/* Join Our Team Section */}
        <section ref={sectionRefs[0]} className="text-center space-y-8">
          <h2 className="text-2xl font-bold text-btncolor">Benefits & Perks</h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              ["visible-0"]: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Benefits Cards */}
            <div className="bg-white p-6 rounded-md shadow-md text-center border-2 border-btncolor hover:bg-btncolor hover:text-white transition duration-300">
              <h4 className="font-semibold mb-2">Flexible Work Hours</h4>
              <p>
                Enjoy a balanced lifestyle with schedules tailored to ensure
                your productivity and well-being.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md text-center border-2 border-btncolor hover:bg-btncolor hover:text-white transition duration-300">
              <h4 className="font-semibold mb-2">Health Insurance</h4>
              <p>
                Comprehensive health coverage plans for employees and their
                families.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md text-center border-2 border-btncolor hover:bg-btncolor hover:text-white transition duration-300">
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
          <h2 className="text-2xl font-bold text-btncolor text-center">
            Why Join Us?
          </h2>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              ["visible-1"]: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gray-100 p-6 rounded-md shadow-md text-center hover:bg-btncolor hover:text-white transition duration-300">
              <h4 className="font-semibold mb-2">Innovative Culture</h4>
              <p>
                Be part of a team that values creativity and forward-thinking.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-md text-center hover:bg-btncolor hover:text-white transition duration-300">
              <h4 className="font-semibold mb-2">Global Impact</h4>
              <p>Work on projects that make a difference globally.</p>
            </div>
          </motion.div>
        </section>
        {/* Contact Form Section */}
        <section className="w-full md:w-2/3 lg:w-[65%] mx-auto space-y-6 shadow-lg p-6 rounded-md bg-white ">
          <h2 className="text-xl font-bold text-btncolor text-center">
            Let’s work together
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-medium">
                  Name <span className="text-btncolor">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="border p-2 rounded-md w-full shadow-sm focus:outline-none focus:ring-1 focus:ring-btncolor focus:border-btncolor"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email <span className="text-btncolor">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="info.maanc@gmail.com"
                  className="border p-2 rounded-md w-full shadow-sm focus:outline-none focus:ring-1 focus:ring-btncolor focus:border-btncolor"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block font-medium">
                  Phone <span className="text-btncolor">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  required
                  placeholder="9608923255"
                  className="border p-2 rounded-md w-full shadow-sm focus:outline-none focus:ring-1 focus:ring-btncolor focus:border-btncolor"
                />
              </div>
              <div>
                <label htmlFor="job" className="block font-medium">
                  Job Title <span className="text-btncolor">*</span>
                </label>
                <input
                  type="text"
                  id="job"
                  required
                  placeholder="Java Developer"
                  className="border p-2 rounded-md w-full shadow-sm focus:outline-none focus:ring-1 focus:ring-btncolor focus:border-btncolor"
                />
              </div>
            </div>
            <div>
              <label htmlFor="about" className="block font-medium">
                Tell us about yourself <span className="text-btncolor">*</span>
              </label>
              <textarea
                id="about"
                required
                placeholder="Tell us about yourself"
                className="border p-2 rounded-md w-full shadow-sm focus:outline-none focus:ring-1 focus:ring-btncolor focus:border-btncolor"
                rows={4}
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="reset"
                className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Clear
              </button>
              <button
                type="submit"
                className="bg-btncolor text-white px-4 py-2 rounded-md hover:bg-btncolor"
              >
                Apply
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default JoinUs;
