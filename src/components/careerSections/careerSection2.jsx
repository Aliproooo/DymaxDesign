import React from "react";
import Img from "../../assets/27.png";
import Img1 from "../../assets/28.png";
import Img2 from "../../assets/29.png";
import Img3 from "../../assets/19.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { RiArrowRightUpLine } from "react-icons/ri";

const CareerSection2 = () => {
  return (
    <div>
      <div className="flex justify-center mt-12">
        <div className="container max-w-[1100px] flex justify-center ">
          <div className="paragraph px-3 md:px-0">
            <h1 className="md:text-[24px] text-[20px] text-center md:text-start text-[#050505] font-NexaBook">
              Join Our Team at Dymax Designs
            </h1>
            <p className="md:text-[30px] md:leading-[55px] leading-[40px]  text-[20px] mt-4 md:mt-4 md:text-start text-start font-NexaBook font-[600]">
              Are you ready to unleash your{" "}
              <span className="border-[#285FCA] hover:text-white hover:bg-[#285FCA] text-[#285FCA] rounded-full px-4 py-1 border-2 transition-all duration-300">
                creativity,
              </span>{" "}
              drive <br className="md:block hidden" /> innovation, and make a
              meaningful impact in the <br className="md:block hidden" />
              world of digital marketing? At Dymax Designs,{" "}
              <br className="md:block hidden" />
              we're always on the lookout for passionate{" "}
              <br className="md:block hidden" />
              individuals who are eager to grow, learn, and{" "}
              <br className="md:block hidden" />
              thrive in a dynamic environment.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="container max-w-[1100px] ">
          <div className="flex items-center justify-center md:flex-row flex-col md:gap-32 gap-4">
            <div>
              <h1 className="text-[35px] font-bold text-center md:text-start font-nexa">
                Why Work{" "}
                <span
                  className="font-playfair italic text-[35px] text-primary"
           
                >
                  With Us?
                </span>
              </h1>
              <p
                className="mt-2 text-[18px] leading-[29px] text-center md:text-start  font-NexaBook"
                
              >
                At Dymax Designs, we believe in fostering a culture <br /> of
                collaboration, creativity, and continuous learning.
                <br /> When you join our team, you'll have the opportunity{" "}
                <br /> to work on exciting projects, collaborate with <br />{" "}
                talented individuals, and make a real difference for <br /> our
                clients.
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
              <h1 className="text-[35px] font-bold text-center md:text-start font-nexa">
                What Sets Us{" "}
                <span
                  className="italic font-playfair text-[35px] text-primary"
                
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

          {/* Third ONE */}

          <div className="flex items-center justify-center md:flex-row flex-col md:gap-22 gap-4">
            <div>
              <h1 className="text-[35px] font-bold text-center md:text-start font-nexa">
                Perks &{" "}
                <span
                  className="italic font-playfair text-[35px] text-primary"
                 
                >
                  Benefits
                </span>
              </h1>
              <ul
                className="list-disc mt-2 text-[18px] leading-[29px] ml-8 md:ml-0 font-NexaBook"
               
              >
                <li>Competitive salary</li>
                <li>Flexible work hours</li>
                <li>Opportunities for professional growth & development</li>
                <li>Collaborative & supportive work environment</li>
                <li>Health & wellness benefits</li>
                <li>Fun team events & activities</li>
              </ul>
            </div>
            <div className="img">
              <img src={Img2} alt="abx" />
            </div>
          </div>
        </div>
      </div>

      {/* CURRENT OPENING */}
      <div
        className="bg-cover bg-center font-poppins text-white py-[104px] px-4 "
        style={{ backgroundImage: `url(${Img3})` }}
      >
        <div className="container mx-auto max-w-6xl">
          <h1
            className="text-[34px] my-4 text-center font-nexa"
           
          >
            Current <span className="italic font-playfair">Openings</span>
          </h1>
          <div
            className="grid md:grid-cols-3 gap-8 items-start"
            
          >
            {/* Left Side - Inspiring Text */}
            <div className="text-center">
              <h1 className="underline text-lg font-nexa"> Web Developer:</h1>
              <p className="mt-2 text-sm font-NexaBook">
                Do you have a knack for <br /> coding and a love for all things{" "}
                <br /> web development? Join us as <br /> a web developer and
                help us <br /> build cutting-edge websites <br /> and
                applications that push the <br /> boundaries of innovation.
              </p>
            </div>

            <div className="text-center">
              <h1 className="underline text-lg font-nexa"> Graphic Designer:</h1>
              <p className="mt-2 text-sm font-NexaBook">
                Are you a creative thinker with <br /> a passion for design?
                Join our <br /> team as a graphic designer <br /> and help bring
                our clients' <br /> visions to life with stunning <br /> visual
                assets.
              </p>
            </div>

            <div className="text-center">
              <h1 className="underline text-lg font-nexa">Digital Marketer:</h1>
              <p className="mt-2 text-sm font-NexaBook">
                Are you a strategic thinker with <br /> a deep understanding of{" "}
                <br /> digital marketing trends and <br /> tactics? Join our
                team as a <br /> digital marketer and help drive <br /> results
                for our clients through <br /> data-driven strategies and <br />{" "}
                campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="text-center py-32">
        <h1 className="text-[35px] font-bold font-nexa">
          How To{" "}
          <span
            className="font-playfair italic text-[35px] text-primary"
            style={{ fontFamily: "plafair Display" }}
          >
            Apply
          </span>
        </h1>
        <p
          className="mt-2 text-[16px] md:leading-[25px] md:px-0 px-5 font-NexaBook"
        
        >
          If you're ready to take the next step in your career and join our team
          at Dymax Designs, we'd love to <br className="hidden md:block" /> hear
          from you! Please send your resume and portfolio (if applicable) to
          hr@dymaxdesigns.com with the <br className="hidden md:block" />{" "}
          subject line "Career Opportunity: [Position Name]". Be sure to tell us
          why you'd be a great fit for our <br className="hidden md:block" />{" "}
          team and how you can contribute to our mission of crafting magic
          through branding.
        </p>
      </div>
    </div>
  );
};

export default CareerSection2;
