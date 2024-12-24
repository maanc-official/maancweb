"use client";
import React from "react";

const InfoCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 h-[100svh]">
      {/* Card 1 */}
      <div className="flex flex-col justify-center items-start p-6 bg-white rounded-lg shadow-md border border-gray-200 w-[300px] md:w-[350px]">
        <p className="text-lg md:text-xl font-semibold">
          Bringing Your Vision to Life with{" "}
          <span className="text-red-500">Cutting-Edge Technology</span> and
          Expert Solutions.
        </p>
        <div className="absolute -top-4 -right-4">
          <span className="text-red-200 text-7xl select-none"></span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-md border border-red-500 w-[300px] md:w-[350px]">
        <p className="text-lg md:text-xl font-semibold">
          We <span className="text-red-500">build products</span> tailored
          specifically to your needs!
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col justify-center items-center p-6 bg-red-500 text-white rounded-lg shadow-md w-[300px] md:w-[350px]">
        <p className="text-lg md:text-xl font-semibold">Deliverability over promises</p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col justify-between items-start p-6 bg-white rounded-lg shadow-md border border-gray-200 w-[300px] md:w-[350px]">
        <p className="text-lg md:text-xl font-semibold">
          Get a quotation within{" "}
          <span className="text-red-500 font-bold">48 hours</span>
        </p>
        <button className="mt-4 px-4 py-2 text-white bg-red-500 rounded-lg">
          Get Quote
        </button>
      </div>

      {/* Card 5 */}
      <div className="flex flex-col justify-center items-start p-6 bg-white rounded-lg shadow-md border border-gray-200 w-[300px] md:w-[350px]">
        <p className="text-lg md:text-xl font-semibold">
          Partnering with Businesses Across the{" "}
          <span className="text-red-500">Globe</span>
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
