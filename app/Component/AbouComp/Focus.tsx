"use client"

import React from 'react'

const Focus = () => {
  return (
    <div className="lg:min-h-screen md:min-h-[80vh] min-h-fit flex flex-col justify-center px-4 md:px-8 lg:px-20 py-10">
      {/* Title Section */}
      <div className="w-full flex mt-6 items-center justify-between">
        <div className="hidden md:block w-1/4">
          <div className="w-full bg-btncolor h-[2px]"></div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-[25px] md:text-[35px] font-bold">
            Our Focus
          </h2>
        </div>
        <div className="hidden md:block w-1/4">
          <div className="w-full bg-btncolor h-[2px]"></div>
        </div>
      </div>

      {/* Focus Cards */}
      <div className="space-y-10 mt-10">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Card 1 */}
          <div className="w-full md:w-1/2">
            <div className="flex items-start">
              <img src="https://via.placeholder.com/50" alt="Startup Icon" className="w-10 h-10" />
              <h3 className="md:text-[25px] font-bold md:ml-6 text-[18px] ml-4 mt-2">
                App Development for Startups
              </h3>
            </div>
            <div className="ml-[60px] mt-4">
              <p className="text-[15px] font-semibold">
                Our team understands the challenges faced by early-stage companies. We’ve built top-ranking apps for startups using a unique approach that blends traditional and modern techniques.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2">
            <div className="flex items-start">
              <img src="https://via.placeholder.com/50" alt="Rescue Icon" className="w-10 h-10" />
              <h3 className="md:text-[25px] font-bold md:ml-6 text-[18px] ml-4 mt-2">
                Rescue Projects
              </h3>
            </div>
            <div className="ml-[60px] mt-4">
              <p className="text-[15px] font-semibold">
                We specialize in rescuing troubled projects. Our team diagnoses and solves bottlenecks, usability issues, and performance bugs to get you back on track quickly.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Card 3 */}
          <div className="w-full md:w-1/2">
            <div className="flex items-start">
              <img src="https://via.placeholder.com/50" alt="Enterprise Icon" className="w-10 h-10" />
              <h3 className="md:text-[25px] font-bold md:ml-6 text-[18px] ml-4 mt-2">
                Enterprise App Development
              </h3>
            </div>
            <div className="ml-[60px] mt-4">
              <p className="text-[15px] font-semibold">
                We craft scalable and secure apps tailored for enterprise environments, ensuring efficiency and performance across platforms.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-1/2">
            <div className="flex items-start">
              <img src="https://via.placeholder.com/50" alt="Strategy Icon" className="w-10 h-10" />
              <h3 className="md:text-[25px] font-bold md:ml-6 text-[18px] ml-4 mt-2">
                Product Planning & Strategy
              </h3>
            </div>
            <div className="ml-[60px] mt-4">
              <p className="text-[15px] font-semibold">
                Our strategy team creates roadmaps that align business goals with user needs. We help you plan for scale, differentiation, and long-term ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Focus
