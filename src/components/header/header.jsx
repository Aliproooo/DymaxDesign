import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Img from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Design", link: "#design", icon: <FaCaretDown /> },
    { label: "Development", link: "#development", icon: <FaCaretDown /> },
    { label: "Marketing", link: "#marketing", icon: <FaCaretDown /> },
    { label: "About", link: "/about", icon: "" },
    { label: "Portfolio", link: "#portfolio", icon: "" },
    { label: "Career", link: "/career", icon: "" },
  ];

  return (
    <header className="bg-white flex justify-center">
      <div className="container flex max-w-[1400px] items-end justify-between md:h-24 h-16 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="cursor-pointer hidden md:block md:w-[200px] flex-shrink-0">
          <img
            className="w-full"
            onClick={() => navigate("/")}
            src={Img}
            alt="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-nexaLight font-[700]">
          {menuItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1">
              <a
                onClick={() => navigate(item.link)}
                className={`cursor-pointer transition-colors flex items-end text-[18px]
                  ${location.pathname === item.link ? "text-orange-500" : "text-gray-600"} 
                  hover:text-primary`}
              >
                {item.label}
              </a>
              {item.icon && <p>{item.icon}</p>}
            </div>
          ))}
          <a
            href="#contact"
            className="bg-white hover:bg-primary hover:text-white text-primary border rounded-full border-primary py-2 px-6 transition-colors ml-2"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex bg-white fixed top-0 w-full z-[99999] justify-between items-center md:hidden">
          <div className="cursor-pointer ml-2">
            <img
              className="h-12 w-auto"
              onClick={() => navigate("/")}
              src={Img}
              alt="logo"
            />
          </div>
          <div className="p-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-500"
            >
              {isMenuOpen ? (
                <IoClose className="h-6 w-6 text-primary" />
              ) : (
                <CiMenuFries className="h-8 w-8 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg h-screen z-[9999] overflow-hidden">
          <div className="flex flex-col items-start px-4 pb-4 pt-[104px] space-y-4 h-full">
            {menuItems.map((item) => (
              <a
                key={item.label}
                onClick={() => {
                  navigate(item.link);
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-orange-500 w-full"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-white text-primary border rounded-full border-primary px-4 py-2 w-full text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;