import React from "react";
import Img from "../../assets/2.png";
import Img1 from "../../assets/3.png";
import Img2 from "../../assets/40.gif";
import Img3 from "../../assets/5.png";
import Img4 from "../../assets/39.png";
import './firstsection.css'
import line from '../../assets/Text.svg'

import { BsArrowUpRightCircle, BsArrowUpRightCircleFill } from "react-icons/bs";
import { RiArrowRightUpLine } from "react-icons/ri";
import AnimatedBanner from "../animation";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import CurtainImage from "../animations/curtainImage";

const Section1 = () => {
  
  return (
    <div className="overflow-hidden">
  <div id="craft" className="craft-wrapper">
    <div className="container max-w-[1400px] w-full flex justify-center">
      <div className="main leading-[80px] md:leading-[168px]">
        <div className="flex items-center md:gap-12 justify-center md:justify-start">
          <h1 data-aos="fade-in" className="text-[70px] md:text-[140px] font-bold font-nexa">
            Crafting
          </h1>
          <div className="hidden md:block ">
            <CurtainImage height={"auto"} Img={Img} />
          </div>
        </div>

        <div className="flex items-center justify-end md:justify-center">
          <div className="relative">
            <img className="w-[100px] md:w-full" src={Img1} alt="image" />
            <img
              className="absolute z-[444] top-[10px] md:top-[15px] left-0 w-[200px] md:w-full"
              src={Img2}
              alt="image"
            />
          </div>
          <h1
          id="magic"
            data-aos="fade-in"
            className="font-playfair text-[70px] md:text-[150px] text-primary w-[290px] md:w-[79%] tracking-tighter"
          >
            Magic Through
          </h1>
        </div>

        <div className="flex items-center justify-center mt-4" >
          <h1 data-aos="fade-in" className="text-[70px] md:text-[140px] font-bold font-nexa" id="branding">
            Branding
          </h1>
          <div className="hidden md:block">
            <CurtainImage height={"auto"} Img={Img3} />
          </div>
        </div>

        <div className="flex items-center gap-12 mt-12 flex-col md:flex-row">
          <img src={line} alt="" />
          <div data-aos="fade-up" className="flex gap-2 items-center px-6">
            <h1 className="text-[16px] md:text-[25px] font-NexaBook font-normal text-[#1E254D] leading-normal text-start">
              Empower your furniture through
              <br className="hidden md:block" />
              innovative partnership
            </h1>
            <img
              className="w-[100px] block md:hidden"
              src={Img3}
              alt="image"
            />
          </div>
          <div data-aos="fade-up">
            <button className="group flex gap-2 items-center bg-primary hover:bg-black leading-normal text-white py-2 pl-6 pr-1 rounded-full font-nexa">
              Start Here
              <HiMiniArrowUpRight className="h-8 w-8 md:h-10 md:w-10 p-[8px] text-white bg-black rounded-full transition-all duration-300 group-hover:bg-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-6 md:mt-8 flex justify-center">
    <AnimatedBanner />
  </div>
</div>

  );
};

export default Section1;
