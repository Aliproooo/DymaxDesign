import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import Img from "../../assets/19.png";
import Img1 from "../../assets/Logo1.png";
import { RiArrowRightUpLine } from "react-icons/ri";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="relative bg-white">
      {/* Orange Background Section */}
      <div
        className="bg-cover bg-center font-poppins text-white py-[144px] px-4 "
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2  grid-cols-1 gap-8 items-center">
            {/* Left Side - Inspiring Text */}
            <div className="flex justify-center font-bold leading-[70px]">
              <div>
                <h1
                  className="md:text-[80px] text-[60px] md:text-start text-center"
                  style={{ fontFamily: "Nexa" }}
                >
                  Take the leap.
                  <span
                    className="font-playfair italic md:text-[70px] text-[60px] text-white font-normal"
             
                  >
                    {" "}
                    Transform.
                  </span>{" "}
                </h1>
                <div className="mt-14 flex justify-center md:justify-start">
                  <button className="group flex gap-2 items-center bg-white hover:bg-black leading-normal text-black hover:text-white py-2 pl-6 pr-1  rounded-full">
                    Contact Us
                    <HiMiniArrowUpRight className="md:h-10 md:w-10 p-[8px] h-8 w-8 text-white bg-black rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="md:text-right text-center space-y-2 font-nexaLight">
              <div className="flex md:justify-end justify-center font-semibold">
                <img src={Img1} alt="logo" />
              </div>
              <p className="text-lg font-semibold">(092) 337 1448</p>
              <p className="text-lg font-semibold">info@dymaxdesigns.com</p>
              <p className="text-lg font-semibold">
                Suite 306, 3rd Floor, Pineview
              </p>
              <p className="text-lg font-semibold">Claremont, Cape Town</p>
            </div>
          </div>
        </div>
      </div>

      {/* White Footer Section */}
      <div className="bg-white py-6 px-4 border-t">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 text-sm mb-4 md:mb-0 font-NexaBook">
            © DYMAX DESIGNS 2024. ALL RIGHTS RESERVED.
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 font-NexaBook font-semibold">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF6B3D] transition-colors"
            >
              Linkedin
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF6B3D] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF6B3D] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF6B3D] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
