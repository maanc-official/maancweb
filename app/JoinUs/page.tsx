"use client";
import React from "react";

const JoinUs: React.FC = () => {
  return (
    <div className="bg-white text-black">
      {/* Join the Team Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold text-red-500 mb-4">team</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Join our innovative and passionate team to create exceptional solutions together.
        </p>
        <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
          See open positions
        </button>
      </section>

      {/* Cards Section */}
      <section className="flex flex-col md:flex-row justify-center gap-6 my-10 px-4">
        {/* Left Card */}
        <div className="flex-1 border-2 border-red-500 p-8 text-center rounded-lg hover:shadow-md">
          <h3 className="text-xl font-semibold text-red-500 mb-4">What we believe</h3>
          <p className="text-gray-600">
            We believe in creating value through collaboration, innovation, and integrity.
          </p>
          <div className="flex justify-center mt-4">
            <img src="/icon-leaf.png" alt="Leaf Icon" className="w-12 h-12" />
          </div>
        </div>

        {/* Mid Card (Highlighted) */}
        <div className="flex-1 bg-red-500 p-8 text-center rounded-lg hover:shadow-md">
          <h3 className="text-xl font-semibold text-white mb-2">Values</h3>
          <p className="text-white">How we work</p>
          <p className="text-white mt-2">
            Our core values drive every decision we make and every project we deliver.
          </p>
          <div className="flex justify-center mt-4">
            <img src="/icon-leaf.png" alt="Leaf Icon" className="w-12 h-12" />
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 border-2 border-red-500 p-8 text-center rounded-lg hover:shadow-md">
          <h3 className="text-xl font-semibold text-red-500 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            Empowering businesses with scalable and efficient technology solutions.
          </p>
          <div className="flex justify-center mt-4">
            <img src="/icon-leaf.png" alt="Leaf Icon" className="w-12 h-12" />
          </div>
        </div>
      </section>

      {/* Benefits & Perks Section */}
      <section className="text-center my-10 px-4">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Benefits & Perks</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enjoy a workplace that values your well-being, growth, and work-life balance. From flexible hours to professional development, we invest in our team.
        </p>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 py-10 px-4 md:px-10 rounded-md shadow-md mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-red-500 mb-6">Let’s work together</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="Job"
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <textarea
            placeholder="Tell us about yourself"
            className="border rounded-lg p-2 w-full h-32"
          ></textarea>
          <div className="flex justify-between">
            <button
              type="reset"
              className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-100"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Apply
            </button>
          </div>
        </form>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-10">
        <p className="mb-4 text-gray-600">
          Connect with us to explore innovative solutions tailored for your business.
        </p>
        <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
          Let's Get In Touch
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-t mt-4">
        <h3 className="font-bold text-lg">Maanс Technology</h3>
        <div className="flex justify-center gap-4 mt-2">
          <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
          <img src="/email-icon.png" alt="Email" className="w-6 h-6" />
          <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
        </div>
      </footer>
    </div>
  );
};

export default JoinUs;
