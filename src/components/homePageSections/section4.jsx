import React, { useState } from "react";
import Img from "../../assets/12.png";
import Img1 from "../../assets/13.png";
import Img2 from "../../assets/14.png";
import Img3 from "../../assets/15.png";
import Img4 from "../../assets/16.png";
import Img5 from "../../assets/17.png";
import Img6 from "../../assets/18.png";
import Img7 from "../../assets/38.png";
import { motion } from "framer-motion";
import '../homePageSections/carousel.css'
import { BiDownArrowCircle } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Section4 = () => {
  const images = [Img, Img1, Img2, Img3, Img4, Img5];

  // Optional pause functionality
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the images to ensure seamless looping
  const duplicatedImages = [...images, ...images, ...images, ...images];
  return (
    <div className="flex justify-center md:my-32 my-8 overflow-hidden">
      <div className="container max-w-[1200px] flex justify-center w-full">
        <div className="main w-full">
          <div className="flex justify-between md:flex-row flex-col relative w-full">
            {/* Left Rotating Image */}
            <motion.img
              className="absolute bottom-0 hidden md:block"
              src={Img7}
              alt="circle"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Text Content */}
            <div className="text-center font-bold md:leading-[125px] leading-[70px] w-full md:px-0 px-4">
              <h1
                data-aos="fade-in"
                className="md:text-[110px] sm:text-[60px] text-[60px] text-start md:text-center font-nexa w-[270px] md:w-full"
              >
                Trusted By Great <br className="block md:hidden" />
                <span className="font-playfair md:text-[110px] sm:text-[70px] text-[70px] tracking-tighter text-primary font-normal">
                  Companies
                </span>
              </h1>
            </div>

            {/* Right Rotating Image */}
            <div className="hidden md:block">
              <motion.img
                src={Img7}
                alt="circle"
                className=""
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <div className="w-full my-10 md:my-16">
            <div
              className="overflow-hidden w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex gap-4 md:gap-16 px-2 md:px-8 w-max"
                animate={{
                  x: isPaused ? "0%" : "-50%",
                }}
                transition={{
                  x: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                  },
                }}
              >
                {duplicatedImages.map((img, index) => (
                  <div
                    key={index}
                    className="w-auto flex justify-center p-2 items-center"
                  >
                    <img
                      src={img}
                      alt={`brand-${index % images.length}`}
                      className="max-h-8 sm:max-h-10 md:max-h-16 lg:max-h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div
            data-aos="slide-up"
            className="flex justify-center px-2 sm:px-4 md:px-0 w-full"
          >
            <div className="bg-primary px-3 sm:px-6 md:px-8 lg:px-12 py-2 md:py-4 rounded-full text-white w-full">
              <div className="flex justify-between items-center gap-2 sm:gap-4 font-nexaLight">
                <p className="leading-[40px] text-xs lg:text-[28px] xl:text-[28px] text-center sm:text-left mb-0">
                  Voices of Satisfaction: An Anthology of Client Testimonials{" "}
                  <br />
                  Reflecting Positive Experiences
                </p>
                <BiDownArrowCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-16 lg:mt-28 w-full">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              className="w-full max-w-6xl"
            >
              {/* First Slide */}
              <div className="w-full px-2 sm:px-4 md:px-2 lg:px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 w-full">
                  {/* First Testimonial */}
                  <div className="bg-white p-4 sm:p-6 rounded-lg w-full">
                    <div className="flex justify-center md:justify-start">
                      <div>
                        <img
                          className="h-4 w-4 sm:h-5 sm:w-5 md:h-12 md:w-12"
                          src={Img6}
                          alt="comma"
                        />
                      </div>
                      <div>
                        <img
                          className="h-4 w-4 sm:h-5 sm:w-5 md:h-12 md:w-12 ml-1"
                          src={Img6}
                          alt="comma"
                        />
                      </div>
                    </div>
                    <p className="font-NexaBook md:leading-[38px] leading-[22px] text-xs md:text-[20px] mt-6 md:mt-12 text-center md:text-left w-full">
                      The logo designed by Dymax Designs{" "}
                      <br className="hidden sm:block" /> is simply outstanding.
                      It perfectly <br className="hidden sm:block" /> captures
                      the essence of our brand.
                      <br className="hidden sm:block" /> Thank you for your
                      creativity and <br className="hidden sm:block" />
                      professionalism!
                    </p>
                    <h1
                      className="text-primary mt-3 sm:mt-4 md:mt-12 font-semibold text-base sm:text-lg md:text-2xl text-center md:text-left"
                      style={{ fontFamily: "Nexa" }}
                    >
                      Samantha Miller
                    </h1>
                  </div>

                  {/* Second Testimonial */}
                  <div className="bg-white p-4 sm:p-6 rounded-lg w-full">
                    <div className="flex justify-center md:justify-start ml-16">
                      <div>
                        <img
                          className="h-4 w-4 sm:h-4 sm:w-4 md:h-12 md:w-12"
                          src={Img6}
                          alt="comma"
                        />
                      </div>
                      <div>
                        <img
                          className="h-4 w-4 sm:h-4 sm:w-4 md:h-12 md:w-12 ml-1"
                          src={Img6}
                          alt="comma"
                        />
                      </div>
                    </div>
                    <p className="flex justify-center font-NexaBook md:leading-[38px] leading-[22px] text-xs md:text-[20px] mt-6 md:mt-12 text-center md:text-left w-full">
                      Thanks to Dymax, we now have a{" "}
                      <br className="hidden sm:block" /> logo that speaks
                      volumes about our <br className="hidden sm:block" /> tech
                      startup's vision. Their expertise{" "}
                      <br className="hidden sm:block" /> and attention to detail
                      are <br className="hidden sm:block" />
                      unmatched. Highly satisfied!
                    </p>
                    <h1
                      className="ml-16 text-primary mt-3 sm:mt-4 md:mt-12 font-semibold text-base sm:text-lg md:text-2xl text-center md:text-left"
                      style={{ fontFamily: "Nexa" }}
                    >
                      Alexander Brooks
                    </h1>
                  </div>
                </div>
              </div>

              {/* Second Slide */}
              <div className="w-full px-2 sm:px-4 md:px-2 lg:px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 w-full">
                  {/* First Testimonial */}
                  <div className="bg-white p-4 sm:p-6 rounded-lg w-full">
                    <div className="flex justify-center md:justify-start">
                      <div>
                        <img
                          className="h-4 w-4 sm:h-4 sm:w-4 md:h-12 md:w-12"
                          src={Img6}
                          alt="comma"
                        />
                      </div>
                      <div>
                        <img
                          className="h-4 w-4 sm:h-4 sm:w-4 md:h-12 md:w-12 ml-1"
                          src={Img6}
                          alt="comma"
                        />
                      </div>
                    </div>
                    <p className="font-NexaBook md:leading-[38px] leading-[22px] text-xs md:text-[20px] mt-6 md:mt-12 text-center md:text-left w-full">
                      The logo designed by Dymax Designs{" "}
                      <br className="hidden sm:block" /> is simply outstanding.
                      It perfectly <br className="hidden sm:block" /> captures
                      the essence of our brand.
                      <br className="hidden sm:block" /> Thank you for your
                      creativity and <br className="hidden sm:block" />
                      professionalism!
                    </p>
                    <h1
                      className="text-primary mt-3 sm:mt-4 md:mt-12 font-semibold text-base sm:text-lg md:text-2xl text-center md:text-left"
                      style={{ fontFamily: "Nexa" }}
                    >
                      Samantha Miller
                    </h1>
                  </div>

                  {/* Second Testimonial */}
                  <div className="bg-white p-4 sm:p-6 rounded-lg w-full">
                    <div className="flex justify-center md:justify-start ml-16">
                      <div>
                        <img
                          className="h-4 w-4 sm:h-4 sm:w-4 md:h-12 md:w-12"
                          src={Img6}
                          alt="comma"
                        />
                      </div>
                      <div>
                        <img
                          className="h-4 w-4 sm:h-4 sm:w-4 md:h-12 md:w-12 ml-1"
                          src={Img6}
                          alt="comma"
                        />
                      </div>
                    </div>
                    <p className="flex justify-center font-NexaBook md:leading-[38px] leading-[22px] text-xs md:text-[20px] mt-6 md:mt-12 text-center md:text-left w-full">
                      Thanks to Dymax, we now have a{" "}
                      <br className="hidden sm:block" /> logo that speaks
                      volumes about our <br className="hidden sm:block" /> tech
                      startup's vision. Their expertise{" "}
                      <br className="hidden sm:block" /> and attention to detail
                      are <br className="hidden sm:block" />
                      unmatched. Highly satisfied!
                    </p>
                    <h1
                      className="ml-16 text-primary mt-3 sm:mt-4 md:mt-12 font-semibold text-base sm:text-lg md:text-2xl text-center md:text-left"
                      style={{ fontFamily: "Nexa" }}
                    >
                      Alexander Brooks
                    </h1>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;