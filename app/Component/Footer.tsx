"use client";

import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 flex flex-col items-center">
      {/* Message */}
      <div className=" w-full text-start mb-6 flex flex-row justify-between px-24">
        <p className="text-lg md:text-xl font-medium mb-4">
          Connect with us to explore innovative <br/> solutions tailored for your
          business.
        </p>
        <button className="bg-red-500 text-white  px-6 rounded-2xl hover:bg-red-600 transition">
          Let&apos;s Get In Touch
        </button>
      </div>

      {/* Divider */}
      <hr className="w-full border-gray-300 my-6 " />

      {/* Logo and Social Icons */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="">
            
          </div>
          <p className="text-lg font-bold">Maanc Technology</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-red-500 hover:text-red-600 text-xl transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-red-500 hover:text-red-600 text-xl transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="text-red-500 hover:text-red-600 text-xl transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="#"
            className="text-red-500 hover:text-red-600 text-xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
