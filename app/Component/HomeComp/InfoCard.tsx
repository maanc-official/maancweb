"use client";
import React from "react";
import { motion } from "motion/react"
const InfoCards = () => {
  return (
    <>
    <div className="h-[100svh] w-full bg-black">
    <motion.div
            style={{ height: "500px", width: "500px", backgroundColor: "white" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        />
    </div>
    </>
  );
};

export default InfoCards;
