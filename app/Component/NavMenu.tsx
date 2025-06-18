"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { AiOutlineMenu } from "react-icons/ai"; // Icon for Hamburger menu
import { IoClose } from "react-icons/io5";   // Icon for closing menu

export default function App() {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu state

  // Function to check if a link is active
  const isActive = (path: string) => pathname === path;

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const fadeInUp = {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // const linkHover = {
  //   scale: 1.1,
  //   transition: { duration: 0.2 }
  // };
  return (
    <Navbar className="w-full px-0 sm:px-8 bg-white">
      {/* Navbar for Mobile */}
      <div className="flex items-center justify-between sm:hidden w-full mt-9  ">
        {/* Hamburger Icon */}
        <div onClick={toggleMenu} className="cursor-pointer text-2xl">
          {isMenuOpen ? <IoClose /> : <AiOutlineMenu />}
        </div>

        {/* Logo (Hidden on Mobile) */}
        <NavbarBrand className="hidden sm:block">
          <p className="font-bold text-inherit">Sanad Technologies</p>
        </NavbarBrand>
      </div>

      {/* Hamburger Menu Items (Mobile) */}
      {isMenuOpen && (
        <motion.div 
        initial={{
          x:-100,
        }}
        animate={{
          x:0
        }}
        className="absolute top-0 left-0 w-3/4 h-screen bg-white shadow-lg p-4 sm:hidden">
          <div className="flex justify-end mb-4">
            <IoClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="flex flex-col gap-4">
            {[
              { path: "/", label: "Home" },
              { path: "/Offerings", label: "Offerings" },
              { path: "/About", label: "About" },
              { path: "/JoinUs", label: "Join Us" },
              { path: "/ContactUs", label: "Contact Us" },
            ].map((item, index) => (
              <NavbarItem
                key={index}
                className={`w-full ${
                  isActive(item.path) ? "font-bold underline underline-offset-8 decoration-btncolor" : ""
                }`}
              >
                <Link href={item.path} onClick={() => setIsMenuOpen(false)}>
                  <span className="text-gray-900 ">{item.label}</span>
                </Link>
              </NavbarItem>
            ))}
          </div>
        </motion.div>
      )}

      {/* Navbar for Desktop */}
      <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="hidden sm:flex justify-between items-center w-full">
        <NavbarBrand>
          <p className="font-bold text-inherit">Sanad Technologies</p>
        </NavbarBrand>

        {/* <NavbarContent className="flex gap-4">
          {[
            { path: "/", label: "Home" },
            { path: "/Offerings", label: "Offerings" },
            { path: "/About", label: "About" },
            { path: "/JoinUs", label: "Join Us" },
            { path: "/ContactUs", label: "Contact Us" },
          ].map((item, index) => (
            <NavbarItem
              key={index}
              className={`w-auto h-auto ${
                isActive(item.path) ? "font-bold underline underline-offset-8 decoration-btncolor" : ""
              }`}
            >
              <Link href={item.path}>
                <span className="text-gray-900 ">{item.label}</span>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent> */}
        <NavbarContent className="flex gap-4">
  {[
    { path: "/", label: "Home" },
    { path: "/Offerings", label: "Offerings" },
    { path: "/About", label: "About" },
    { path: "/JoinUs", label: "Join Us" },
    { path: "/ContactUs", label: "Contact Us" },
  ].map((item, index) => (
    <NavbarItem
      key={index}
      className={`relative w-auto h-auto ${
        isActive(item.path) ? "font-bold text-btncolor" : ""
      }`}
    >
      <Link href={item.path}>
        <span className="relative group">
          {item.label}
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-btncolor transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>
        </span>
      </Link>
    </NavbarItem>
  ))}
</NavbarContent>


        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              className="bg-btncolor rounded-md text-white py-2 text-[20px]"
              as={Link}
              href="/ContactUs"
            >
              Let&apos;s Talk
            </Button>
          </NavbarItem>
        </NavbarContent>
      </motion.div>
    </Navbar>
    
  );
}
