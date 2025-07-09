import React from 'react';
import Img from '../assets/38.png';
import { PiStarFour, PiStarFourFill } from 'react-icons/pi';

const AnimatedBanner = () => {
  return (
    <div className="md:mt-20 mt-6 relative h-[150px] w-full overflow-hidden">
      {/* Container for both banners */}
      <div className="relative w-full h-full">
        {/* Black banner - tilted downward and positioned behind */}
        <div className="absolute w-[120%] md:h-[60px] h-[40px] bg-black flex items-center transform rotate-3 md:rotate-2 -translate-x-5 top-[40%]">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* First set of texts */}
            <div className="flex items-center">
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
            </div>
            {/* Duplicate to create seamless loop */}
            <div className="flex items-center">
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        {/* Orange banner - tilted upward and positioned in front */}
        <div className="absolute w-[120%] md:h-[60px] h-[40px] bg-primary flex items-center transform -rotate-2 md:-rotate-2 -translate-x-5 top-[35%] z-10">
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {/* First set of texts */}
            <div className="flex items-center">
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
            </div>
            {/* Duplicate to create seamless loop */}
            <div className="flex items-center">
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
              <span className="text-white text-lg md:text-2xl mx-4 font-semibold font-nexaLight">YOUR JOURNEY STARTS HERE</span>
              <PiStarFourFill  className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
