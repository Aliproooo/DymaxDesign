import React from "react";
import Img from "../../assets/23.png";
import Img1 from "../../assets/24.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const AboutSection2 = () => {
  return (
    <div>
      <div className="flex justify-center mt-12">
        <div className="container max-w-[1100px] flex justify-center ">
          <div className="paragraph px-3 md:px-0">
            <h1 className="md:text-[24px] text-[20px] text-center md:text-start text-[#050505] font-NexaBook">
              About Dymax Designs
            </h1>
            <p className="md:text-[30px] md:leading-[55px] leading-[40px]  text-[20px] mt-4 md:mt-4 md:text-start text-start font-NexaBook font-[600]">
              Welcome to Dymax Designs, where creativity
              <br className="md:block hidden" />
              meets strategy in the{" "}
              <span className="border-[#285FCA] hover:text-white hover:bg-[#285FCA] text-[#285FCA] rounded-full px-4 py-1 border-2 transition-all duration-300">
                digital
              </span>{" "}
              realm. With over <br /> 6+ years of honing our craft in the
              dynamic world
              <br className="md:block hidden" />
              of digital marketing. we pride ourselves on being <br /> more than
              just an agency—we're your partners in <br /> success.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="container max-w-[1100px] ">
          <div className="flex items-center justify-center md:flex-row flex-col md:gap-32 gap-4">
            <div>
              <h1 className="text-[35px] font-bold text-center md:text-start">
                Our{" "}
                <span
                  className="font-playfair italic text-[35px] text-primary"
                 
                >
                  Mission
                </span>
              </h1>
              <p
                className="mt-2 text-[18px] leading-[29px] text-center md:text-start font-NexaBook"
               
              >
                Our mission at Dymax Designs is simple: to <br /> empower
                businesses with the tools and strategies <br /> they need to
                thrive in the digital landscape. We <br /> believe in the power
                of creativity, data-driven <br />
                insights, and strategic thinking to unlock the full <br />{" "}
                potential of your brand.
              </p>
            </div>
            <div className="img">
              <img src={Img} alt="abx" />
            </div>
          </div>

          {/* SECOND ONE */}

          <div className="flex items-center justify-center md:flex-row flex-col-reverse md:gap-32 gap-4">
            <div className="img">
              <img src={Img1} alt="abx" />
            </div>
            <div>
              <h1 className="text-[35px] font-bold text-center md:text-start font-Nexa">
                What Sets Us{" "}
                <span
                  className="font-playfair italic text-[35px] text-primary"
                  style={{ fontFamily: "plafair Display" }}
                >
                  APart
                </span>
              </h1>
              <p
                className="mt-2 text-[18px] leading-[29px] text-center md:text-start font-NexaBook"
               
              >
                What sets Dymax Designs apart is our unwavering <br />{" "}
                commitment to excellence. From our cutting-edge <br /> design
                solutions to our ROI-focused marketing <br /> strategies, we go
                above and beyond to ensure your <br /> success. With a keen
                understanding of the latest trends <br /> and technologies, we
                stay ahead of the curve to keep <br /> your brand ahead of the
                competition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="text-center my-6">
        <h1 className="text-[35px] font-bold md:leading-normal leading-9 font-Nexa">
          Why Choose{" "}
          <span
            className="font-playfair italic text-[35px] text-primary"
         
          >
            Dymax Designs
          </span>
        </h1>
        <p
          className="mt-2 text-[16px] leading-[25px] text-center md:text-center px-4 md:px-0 font-NexaBook"
         
        >
          Choosing Dymax Designs means choosing innovation, creativity, and
          excellence. With a proven track <br className="hidden md:block" />{" "}
          record of success and a passion for pushing boundaries, we're here to
          help you unlock your brand's full <br className="hidden md:block" />
          potential. Let's embark on this journey together and take your brand
          to new heights.
        </p>
      </div>
    </div>
  );
};

export default AboutSection2;
