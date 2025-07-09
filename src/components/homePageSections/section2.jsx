import React, { useState, useEffect } from "react";
import Img from "../../assets/7.png";
import Img1 from "../../assets/8.png";
import Img2 from "../../assets/30.png";
import Img3 from "../../assets/10.png";
import Img4 from "../../assets/32.png";
import Img5 from "../../assets/33.png";
import Img6 from "../../assets/34.png";
import Img7 from "../../assets/35.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  RiArrowRightUpLine,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import CurtainImage from "../animations/curtainImage";

const Section2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slider, setSlider] = useState(null);

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-black transition-all duration-300 hidden md:block"
      onClick={onClick}
    >
      <RiArrowRightLine size={24} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-black transition-all duration-300 hidden md:block"
      onClick={onClick}
    >
      <RiArrowLeftLine size={24} />
    </button>
  );

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipe: true,
    draggable: true,
    arrows: false,
    className: "center",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
          dots: true,
        },
      },
    ],
    beforeChange: (current, next) => setActiveIndex(next),
    afterChange: (current) => setActiveIndex(current),
  };

  const images = [Img2, Img3, Img4, Img5, Img6, Img7, Img4];

  // Optional: Item titles to add more context
  const itemTitles = [
    "Brand Identity",
    "Mobile App UI",
    "Web Design",
    "Product Design",
    "Motion Graphics",
    "Print Design",
    "Visual Identity",
  ];

  // Update handle image click to also slide to that index
  const handleImageClick = (index) => {
    if (slider) {
      // Pause autoplay temporarily to avoid conflicts
      slider.slickPause();

      // Go to the clicked slide
      slider.slickGoTo(index);

      // Update active index
      setActiveIndex(index);

      // Resume autoplay after a short delay
      setTimeout(() => {
        slider.slickPlay();
      }, 1000);
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center md:my-32 my-6  ">
        <div className="container max-w-[1200px] flex justify-center">
          <div className="main md:leading-[118px] leading-[80px] ml-24">
            <div className="flex items-center md:gap-16 gap-4 md:justify-start justify-center">
              <h1
                data-aos="fade-in"
                className="md:text-[110px] text-[70px] font-bold font-nexa"
              >
                Unleashing
              </h1>
              <CurtainImage Img={Img} />
            </div>

            <div className="flex justify-center font-bold">
              <h1
                data-aos="fade-in"
                className="md:text-[110px] text-[70px] md:text-start text-start font-nexa  w-[474px] md:w-full"
              >
                Creativity: <span className="">A</span>
                <span className="font-playfair md:text-[120px] text-[80px] text-primary font-normal tracking-tighter">
                  Visual Symphony{" "}
                </span>
                <br className="md:hidden block"></br>In Our Portfolio Showcase
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Carousel Section */}
      <div className="w-full mb-0 mt-16 py-8 ">
        <div
          className="mx-auto relative"
          style={{ maxWidth: "100%", overflow: "hidden" }}
        >
          {/* Custom CSS for enhanced visual appeal */}
          <style jsx>{`
            .slick-slide {
              display: flex !important;
              justify-content: center !important;
              padding: 20px 10px;
            }

            .slick-track {
              display: flex !important;
              padding: 30px 0;
            }

            /* Center slide gets visual distinction without changing size/spacing */
            .slick-center .slide-content {
              transform: scale(1.05);
              z-index: 20;
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

              margin: 0 20px; /* Maintain the same margin */
            }

            .slide-content {
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              margin: 0 20px;
            }

            .custom-dots {
              bottom: -40px;
            }

            .custom-dots li button:before {
              font-size: 12px;
              color: #285fca;
              opacity: 0.5;
            }

            .custom-dots li.slick-active button:before {
              opacity: 1;
              color: #285fca;
            }

            .slide-info {
              transform: translateY(100%);
              transition: all 0.3s ease;
            }

            .slide-content:hover .slide-info {
              transform: translateY(0);
            }
          `}</style>

          <Slider ref={(slider) => setSlider(slider)} {...settings}>
            {images.map((img, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-2"
                style={{ margin: "0 20px" }}
              >
                <div
                  className="slide-content rounded-2xl overflow-hidden relative cursor-pointer group"
                  style={{
                    width: "280px",
                    height: "280px",
                    position: "relative",
                  }}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={img}
                    alt={`project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Project info overlay */}
                  <div className="slide-info absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 font-nexa">
                      {itemTitles[index]}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm opacity-90 font-nexaLight">
                        Creative Project
                      </p>
                      <button className="bg-primary rounded-full p-2 hover:bg-white hover:text-primary transition-all">
                        <RiArrowRightUpLine size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Hover state accent */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary transition-all duration-300 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex justify-center mt-16 md:mt-0">
        <button
          data-aos="fade-up"
          className="group flex gap-2 items-center bg-primary  hover:bg-black leading-normal text-white py-2 pl-6 pr-1 rounded-full font-nexa"
        >
          Start Here
          <HiMiniArrowUpRight className="md:h-10 md:w-10 p-[8px] h-8 w-8 text-white bg-black rounded-full transition-all duration-300 group-hover:bg-primary" />
        </button>
      </div>

      <div className="flex justify-center mt-12 px-4 md:px-0">
        <div className="container max-w-[1100px] flex justify-center">
          <div className="paragraph px-3 md:px-0">
            <h1
              data-aos="slide-up"
              className="md:text-[24px] text-[20px] text-center md:text-start text-[#050505] font-NexaBook"
            >
              Formally Introducing Ourselves
            </h1>
            <p
              data-aos="slide-up"
              className="md:text-[30px] md:leading-[55px] leading-[40px]  text-[20px] mt-4 md:mt-4 md:text-start text-start font-NexaBook font-[600]"
            >
              We go beyond the conventional design agency.
              <br className="md:block hidden" /> Our{" "}
              <span className="border-[#285FCA] hover:text-white hover:bg-[#285FCA] text-[#285FCA] rounded-full px-4 py-1 border-2 transition-all duration-300">
                missions
              </span>{" "}
              to guide brands away from <br className="md:block hidden" />{" "}
              mundane identities towards{" "}
              <span className="italic font-playfair text-primary">
                innovative ideas
              </span>{" "}
              and <br className="md:block hidden" /> daring solutions,
              distinguishing our clients from <br className="md:block hidden" />{" "}
              the{" "}
              <span className="inline-block w-auto">
                <CurtainImage height={"40px"} Img={Img3} />
              </span>{" "}
              crowd. Simply put, we deliver vibrant{" "}
              <br className="md:block hidden" /> and imaginative concepts that
              ignite brands,
              <br className="md:block hidden" /> setting them ablaze with
              impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
