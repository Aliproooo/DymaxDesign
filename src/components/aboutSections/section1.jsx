import React from "react";
import Img from "../../assets/20.png";
import Img1 from "../../assets/21.png";
import Img2 from "../../assets/22.png";
import Img3 from "../../assets/5.png";
import Img4 from "../../assets/6.png";

import { RiArrowRightUpLine } from "react-icons/ri";
import AnimatedBanner from "../animation";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import CurtainImage from "../animations/curtainImage";

const Section1 = () => {
  return (
    <div>
      <div className="flex justify-center mt-16">
        <div className="container max-w-[1100px] flex justify-center">
          <div className="main md:leading-[168px] leading-[80px]">
            <div className="flex items-center md:gap-12 gap-4 justify-center md:justify-start">
              <h1 className="md:text-[140px] text-[70px] font-bold font-nexa">
                Forging
              </h1>
              <div className=" md:block hidden">
              <CurtainImage height={"auto"} Img={Img} />

              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="relative">
                <img className="md:w-full w-[80px]" src={Img1} alt="image" />
              </div>
              <h1
                className="font-playfair italic md:text-[150px] text-[70px] text-primary w-[290px] md:w-full tracking-tighter"
                
              >
                Our Creative
              </h1>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <h1 className="md:text-[140px] text-[70px] font-bold font-nexa">
                Journey
              </h1>
              <div>
              <div className="md:block hidden">
              <CurtainImage height={"auto"} Img={Img3} />
              </div>
              </div>
            </div>

            <div className="flex items-center gap-12 mt-12 md:flex-row flex-col ">
              <hr className="w-[200px] md:block hidden"></hr>
              <div className="flex gap-2 items-center px-6">
                <h1 className="text-[16px] md:text-[25px] font-NexaBook font-normal text-[#1E254D] leading-normal text-start md:text-start">
                  Breaking boundries with our{" "}
                  <br className="hidden md:block"></br> innovation since 2017
                </h1>
                <img
                  className="md:w-full w-[100px] block md:hidden"
                  src={Img3}
                  alt="image"
                />
              </div>
              <div>
                <button className="group flex gap-2 items-center bg-primary  hover:bg-black leading-normal text-white py-2 pl-6 pr-1 rounded-full font-nexa">
                  Start Here
                  <HiMiniArrowUpRight className="md:h-10 md:w-10 p-[8px] h-8 w-8 text-white bg-black rounded-full transition-all duration-300 group-hover:bg-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-20 mt-6 flex justify-center ">
        <AnimatedBanner />
        {/* <img className="w-full h-[150px]" src={Img4} alt="lower" /> */}
      </div>
    </div>
  );
};

export default Section1;
