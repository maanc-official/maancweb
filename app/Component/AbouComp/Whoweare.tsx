'use client'

import React from 'react'
import Image from 'next/image'

const Whoweare: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center px-4 lg:px-20 py-6">
      {/* Title Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-6">
        <div className="w-full md:w-1/3">
          <div className="w-full bg-btncolor h-[2px] mt-[25px] md:mt-[40px]"></div>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-[20px] md:text-[35px] font-bold mt-[15px] md:mt-3">
            Who We are?
          </h2>
        </div>
        <div className="w-full md:w-1/3">
          <div className="w-full bg-btncolor h-[2px] mt-[25px] md:mt-[40px]"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-8 py-9 flex-grow">
        <div className="lg:w-1/2 w-full text-start mx-auto text-[15px] py-6 space-y-3 font-sans font-bold">
          <p>
            Although we are a software development company that provides
            businesses worldwide with custom technology solutions, we see
            ourselves as strategic business partners. That is why we help
            clients through all of the Software Development Lifecycle
            (SDLC).
          </p>
          <p>
            For us, culture is very important, and that is why we make sure
            you enjoy every step of the process of bringing an app to life.
            We believe that a satisfied client has the power to create a
            positive impact on the lives of people across the world through
            technology.
          </p>

          <Image
            className="rounded-md w-full h-auto object-cover"
            src="https://theforage.wpengine.com/wp-content/uploads/2022/09/tech-companies.jpg"
            alt="SANAD Technology team"
            width={1104}
            height={640}
            layout="responsive"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            className="rounded-md w-full h-auto object-cover"
            src="https://www.coworker.com/mag/wp-content/uploads/2018/04/1104x777-1104x640.png"
            alt="SANAD Technology team"
            width={1104}
            height={640}
            layout="responsive"
          />

<div className=" w-full text-start mx-auto text-[15px] py-6 space-y-3 font-sans font-bold">
          <p>
            Although we are a software development company that provides
            businesses worldwide with custom technology solutions, we see
            ourselves as strategic business partners. That is why we help
            clients through all of the Software Development Lifecycle
            (SDLC).
          </p>
          <p>
            For us, culture is very important, and that is why we make sure
            you enjoy every step of the process of bringing an app to life.
            We believe that a satisfied client has the power to create a
            positive impact on the lives of people across the world through
            technology.
          </p>
        </div>

          

        
        </div>
      </div>
    </div>
  )
}

export default Whoweare
