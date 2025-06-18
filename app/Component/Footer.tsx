"use client";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook , FaWhatsapp} from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null); // Reference for the footer
  const isInView = useInView(ref, {  amount: 0.5 }); // Observe visibility

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const linkHover = {
    scale: 1.1,
    transition: { duration: 0.2 },
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialLinks = [
    { Icon: FaLinkedin, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaFacebook, href: "#" },
    { Icon: FaWhatsapp, href: "https://wa.link/hm3e3n"}
  ];

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white py-8 px-4 md:px-8 lg:px-16 w-full"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div variants={fadeInUp} className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Image
                className="object-contain"
                src="/Maancnewlogo.png"
                alt="sanad logo"
                width={200}
                height={200}
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 250px"
              />
            </div>
            <span className="text-xl font-bold">Sanad Technologies</span>
          </div>
          <p className="mt-4 text-sm">
            Delivering innovative IT solutions for your business needs.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={linkHover}
                className="text-btncolor hover:text-btncolor transition-colors duration-200 w-fit"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={linkHover}
                target="_blank"
                className="text-btncolor hover:text-btncolor transition-colors duration-200  "
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-btncolor text-sm">
            Email: info.sanad@gmail.com
            <br />
            Phone: +91 9608923255
            <br />
            Address: Chennai
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="border-t border-gray-700 mt-8 pt-8 text-center text-sm"
      >
        <span className="text-btncolor">©</span> {new Date().getFullYear()} Sanad. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
