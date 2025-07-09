import React from "react";
import Img from "../../assets/2.png";
import Img1 from "../../assets/3.png";
import Img2 from "../../assets/40.gif";
import Img3 from "../../assets/5.png";
import Img4 from "../../assets/39.png";

import { BsArrowUpRightCircle, BsArrowUpRightCircleFill } from "react-icons/bs";
import { RiArrowRightUpLine } from "react-icons/ri";
import AnimatedBanner from "../animation";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import CurtainImage from "../animations/curtainImage";

const Section1 = () => {
  
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center md:mt-16 mt-16 ">
        <div className="container max-w-[1400px] flex justify-center">
          <div className="main md:leading-[168px] leading-[80px]">
            <div className="flex items-center md:gap-12 gap-4 justify-center md:justify-start">
              <h1 data-aos="fade-in" className="md:text-[140px] text-[70px] font-bold font-nexa">
                Crafting
              </h1>
              <div className=" md:block hidden">
              <CurtainImage height={"auto"} Img={Img} />

              </div>
            </div>
            <div className="flex items-center md:justify-center justify-end gap-4">
              <div className="relative ">
                <img className="md:w-full w-[100px]" src={Img1} alt="image" />
                <img
                  className="absolute z-[444] md:top-[15px] top-[10px] left-0 md:left-[0px] md:w-full w-[200px]"
                  src={Img2}
                  alt="image"
                />
              </div>
              <h1
              data-aos="fade-in"
                className="font-playfair  md:text-[150px] text-[70px] text-primary w-[290px] tracking-tighter md:w-[79%]"
                // style={{ fontFamily: "plafair Display" }}
              >
                Magic Through
              </h1>
            </div>
            <div className="flex items-center gap-6 justify-center mt-4">
              <h1 data-aos="fade-in" className="md:text-[140px] text-[70px] font-bold font-nexa">
                Branding
              </h1>
              <div className="md:block hidden">
              <CurtainImage height={"auto"} Img={Img3} />
              </div>
            </div>

            <div className="flex items-center gap-12 mt-12 md:flex-row flex-col ">
              <hr className="w-[200px] md:block hidden"></hr>
              <div data-aos="fade-up" className="flex gap-2 items-center px-6">
                <h1 className="text-[16px] md:text-[25px] font-NexaBook font-normal text-[#1E254D] leading-normal text-start md:text-start">
                  Empower your furniture through{" "}
                  <br className="md:block hidden"></br> innovative partnership
                </h1>
                <img
                  className="md:w-full w-[100px] block md:hidden"
                  src={Img3}
                  alt="image"
                />
              </div>
              <div data-aos="fade-up">
                <button className="group flex gap-2 items-center bg-primary  hover:bg-black leading-normal text-white py-2 pl-6 pr-1 rounded-full font-nexa">
                  Start Here
                  <HiMiniArrowUpRight className="md:h-10 md:w-10 p-[8px] h-8 w-8 text-white bg-black rounded-full transition-all duration-300 group-hover:bg-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-8 mt-6 flex justify-center ">
        <AnimatedBanner />
        {/* <img className="w-full h-[150px]" src={Img4} alt="lower" /> */}
      </div>
    </div>
  );
};

export default Section1;
