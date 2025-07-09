import React, { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import Img from "../../assets/11.png";
import Img1 from "../../assets/37.png";
import Img2 from "../../assets/36.png";
import Img3 from "../../assets/design.png";
import Img4 from "../../assets/marketing.png";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section3 = () => {
  const [activeService, setActiveService] = useState("design");

  const getServiceImage = (service) => {
    switch (service) {
      case "design":
        return Img3;
      case "development":
        return Img1;
      case "marketing":
        return Img4;
      default:
        return null;
    }
  };

  // Animation paths for the image to follow the circle border
  const getImagePath = (from, to) => {
    // Define the circular path coordinates for each transition
    const paths = {
      "design-development": {
        exit: { x: 660, y: 480, rotate: 0, opacity: 0 },
        enter: { x: 660, y: -480, rotate: 0, opacity: 0 },
      },
      "design-marketing": {
        exit: { x: 660, y: 480, rotate: 0, opacity: 0 },
        enter: { x: 660, y: -480, rotate: 0, opacity: 0 },
      },
      "development-design": {
        exit: { x: 660, y: 480, rotate: 0, opacity: 0 },
        enter: { x: 660, y: -480, rotate: 0, opacity: 0 },
      },
      "development-marketing": {
        exit: { x: 660, y: 480, rotate: 0, opacity: 0 },
        enter: { x: 660, y: -480, rotate: 0, opacity: 0 },
      },
      "marketing-design": {
        exit: { x: 660, y: 480, rotate: 0, opacity: 0 },
        enter: { x: 660, y: -480, rotate: 0, opacity: 0 },
      },
      "marketing-development": {
        exit: { x: 660, y: 480, rotate: 0, opacity: 0 },
        enter: { x: 660, y: -480, rotate: 0, opacity: 0 },
      },
    };

    return (
      paths[`${from}-${to}`] || {
        exit: { x: 150, y: -150, rotate: 30, opacity: 0 },
        enter: { x: -150, y: 150, rotate: -30, opacity: 0 },
      }
    );
  };

  // Main animation variants for the image
  const imageAnimations = {
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth arc motion
      },
    },
    exit: (custom) => ({
      ...custom.exit,
      scale: 0.8,
      transition: {
        duration: 0.7,
        ease: [0.32, 0, 0.67, 0], // Easing out for exit
      },
    }),
    enter: (custom) => ({
      ...custom.enter,
      scale: 0.8,
      transition: {
        duration: 0.8, // Quick initial positioning
      },
    }),
  };

  // Service data for easy mapping
  const services = [
    {
      id: "design",
      number: "01",
      title: "Design",
      description:
        "Our design service turns your vision into standout visuals, fusing creativity and precision for unique brand experiences.",
    },
    {
      id: "development",
      number: "02",
      title: "Development",
      description:
        "Development that empowers your digital ambitions, merging innovation and functionality for seamless user experiences.",
    },
    {
      id: "marketing",
      number: "03",
      title: "Marketing",
      description:
        "Marketing strategies that elevate your brand, blending innovation with targeted outreach for impactful results.",
    },
  ];

  // Track the previous service to determine animation path
  const [prevService, setPrevService] = useState("design");

  const handleServiceChange = (newService) => {
    setPrevService(activeService);
    setActiveService(newService);
  };

  // Handle carousel change
  const handleCarouselChange = (index) => {
    setActiveService(services[index].id);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center md:my-32 my-8">
        <div className="container max-w-[1100px] flex justify-center">
          <div>
            <div className=" font-bold md:leading-[125px] leading-[70px] ">
              <h1
                className="md:text-[120px] text-[60px] md:ml-12 text-start md:text-start w-[400px] md:w-full"
                style={{ fontFamily: "Nexa" }}
                data-aos="fade-in"
              >
                Introducing Our Professional
                <span
                  data-aos="fade-in"
                  className="font-playfair md:text-[130px] text-[70px] text-primary font-normal tracking-tighter"
                >
                  {" "}
                  Services
                </span>{" "}
                Offerings
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Desktop View From Usman */}
        <div className="cards hidden md:flex justify-between overflow-hidden md:items-center  lg:items-center   xl:items-start   2xl:items-start">
          <div className="flex  md:pl-[200px]  lg:pl-[200px]   xl:right-[250px]   2xl:right-[250px]   pl-0 md:flex-row flex-col justify-center md:justify-between md:items-center  lg:items-center   xl:items-start   2xl:items-start">
            <div data-aos="slide-right" className="leftside">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`card leading-[50px] ${
                    service.id !== "design"
                      ? "md:mt-3  lg:mt-3   xl:mt-12   2xl:mt-12"
                      : ""
                  } md:px-0 px-4 cursor-pointer transition-all duration-300 ${
                    activeService === service.id
                      ? "opacity-100 transform translate-x-6"
                      : "opacity-50 transform translate-x-0"
                  }`}
                  style={{ fontFamily: "Nexa" }}
                  onClick={() => handleServiceChange(service.id)}
                >
                  <h1 className="text-primary  md:text-[25px] lg:text-[25px] xl:text-[35px]  2xl:text-[45px]  font-bold">
                    {service.number}
                  </h1>
                  <div className="w-[300px] flex justify-between items-center">
                    <h1 className="text-black font-bold md:text-[25px] lg:text-[25px] xl:text-[35px]  2xl:text-[45px] ">
                      {service.title}
                    </h1>
                    <RiArrowRightUpLine className="text-primary w-10 h-10" />
                  </div>
                  <p className="mt-2 md:text-[15px] lg:text-[15px] xl:text-[18px]  2xl:text-[22px]  leading-[29px] font-NexaBook font-[500] text-[#050505]">
                    {service.description.split(", ").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < service.description.split(", ").length - 1 && (
                          <>
                            , <br />
                          </>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos="slide-left"
            className="img hidden md:block relative w-1/2"
          >
            {/* Static orange circle in the background */}
            <div className="flex justify-end">
              <img
                className="absolute md:h-[400px] lg:h-[400px] xl:h-[700px] 2xl:h-[800px]"
                src={Img2}
                alt="orange circle"
              />
            </div>

            {/* This div provides structure even without the phone frame */}
            <div className="relative z-10 h-full md:min-h-[700px] lg:min-h-[700px] xl:min-h-[900px] 2xl:min-h-[900px] flex justify-end">
              {/* Animated image content that follows circle path */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={imageAnimations}
                  custom={getImagePath(prevService, activeService)}
                  className={`absolute ${
                    activeService === "marketing" ? "top-28" : "top-12"
                  } md:right-[144px] lg:right-[144px] xl:right-[244px] 2xl:right-[244px]`}
                >
                  <img
                    className={`relative z-20 ${
                      activeService === "development"
                        ? "mt-12 md:h-[600px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px]"
                        : ""
                    }`}
                    src={getServiceImage(activeService)}
                    alt={`${activeService} service`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden px-4 py-8">
          <Carousel
            selectedItem={services.findIndex((s) => s.id === activeService)}
            onChange={handleCarouselChange}
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
            emulateTouch={true}
            showThumbs={false}
            className="service-carousel"
          >
            {services.map((service) => (
              <div key={service.id} className="carousel-card px-4 py-6">
                <div className="relative mb-6">
                  {/* Orange circle in background */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary opacity-50"></div>

                  <img
                    className="w-full h-auto relative z-10"
                    src={getServiceImage(service.id)}
                    alt={`${service.title} service`}
                  />
                </div>
                <h1 className="text-primary text-[35px] font-bold text-start">
                  {service.number}
                </h1>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-black font-bold text-[36px]">
                    {service.title}
                  </h1>
                  <RiArrowRightUpLine className="text-primary w-8 h-8" />
                </div>
                <p className="text-[16px] leading-[24px] font-nexaLight text-left">
                  {service.description}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Section3;
