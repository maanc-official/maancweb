"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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

  return (
    <Navbar className="w-full px-4 sm:px-8 bg-white">
      {/* Navbar for Mobile */}
      <div className="flex items-center justify-between sm:hidden w-full mt-9  ">
        {/* Hamburger Icon */}
        <div onClick={toggleMenu} className="cursor-pointer text-2xl">
          {isMenuOpen ? <IoClose /> : <AiOutlineMenu />}
        </div>

        {/* Logo (Hidden on Mobile) */}
        <NavbarBrand className="hidden sm:block">
          <p className="font-bold text-inherit">Maanc Technology</p>
        </NavbarBrand>
      </div>

      {/* Hamburger Menu Items (Mobile) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-3/4 h-screen bg-white shadow-lg p-4 sm:hidden">
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
        </div>
      )}

      {/* Navbar for Desktop */}
      <div className="hidden sm:flex justify-between items-center w-full">
        <NavbarBrand>
          <p className="font-bold text-inherit">Maanc Technology</p>
        </NavbarBrand>

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
              className={`w-auto h-auto ${
                isActive(item.path) ? "font-bold underline underline-offset-8 decoration-btncolor" : ""
              }`}
            >
              <Link href={item.path}>
                <span className="text-gray-900 ">{item.label}</span>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              className="bg-btncolor rounded-md text-white py-2 text-[20px]"
              as={Link}
              href="/contactUs"
            >
              Let&apos;s Talk
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
