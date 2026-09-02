import React, { useEffect } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="contact"
      className="w-full bg-black lg:px-22 px-5 py-10 flex flex-col justify-center items-center gap-12"
    >
      {/* top footer starts here */}
      <div
        id="top"
        className="bg-[#046e8f] w-full lg:px-10 p-6 rounded-md flex lg:flex-row flex-col justify-between items-start -mt-30 gap-6"
      >
        <div className="lg:w-[70%] w-full flex flex-col justify-between items-start gap-5">
          <h1 className="text-3xl font-fakhwang font-semibold text-white text-left lg:w-[60%] w-full">
            Crafting unforgettable journeys, one adventure at a time
          </h1>
          <hr className="lg:w-[10%] w-[20%] border-2 border-orange-600" />
        </div>
        <div className="lg:w-[30%] w-full flex flex-col justify-between items-start gap-5">
          <h1 className="text-xl text-white">Subscribe our Newsletter</h1>
          <div className="flex lg:flex-row flex-col gap-3 w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white p-3 rounded-md text-black"
            />
            <button className="bg-orange-600 text-white p-3 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* middle footer starts here */}
      <div
        id="mid"
        className="w-full text-white flex lg:flex-row flex-col justify-between items-start gap-10"
      >
        {/* first column starts here */}
        <div className="lg:w-[40%] w-full">
          <h1 className="text-3xl text-white font-fakhwang font-semibold">
            NIRVORA
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            debitis. Alias earum nemo consectetur! Quasi temporibus veritatis
            numquam tempora ad!
          </p>
          <div className="flex flex-col justify-between items-start gap-2 mt-5">
            <div className="flex justify-start items-center gap-2">
              <IoMail className="text-orange-600 text-lg" />
              <p>hello@nirvora.com</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaPhoneAlt className="text-orange-600 text-lg" />
              <p>+94 715 434 621</p>
            </div>
          </div>
        </div>
        {/* first column ends here */}
        {/* second column starts here */}
        <div className="lg:w-[20%] w-full">
          <h1 className="text-white font-fakhwang font-medium text-xl">
            Quick Links
          </h1>
          <ul className="flex flex-col justify-between items-start gap-3 mt-5">
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Home
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Services
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Features
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        {/* second column ends here */}
        {/* third column starts here */}
        <div className="lg:w-[20%] w-full">
          <h1 className="text-white font-fakhwang font-medium text-xl">
            Travel Service
          </h1>
          <ul className="flex flex-col justify-between items-start gap-3 mt-5">
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Tour Packages
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Flight & Hotel Deals
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Travel Insurance
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Visa Assistance
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer">
              Online Booking
            </li>
          </ul>
        </div>
        {/* third column ends here */}
        {/* fourth column starts here */}
        <div className="lg:w-[20%] w-full">
          <h1 className="text-white font-fakhwang font-medium text-xl">
            Follow Us
          </h1>
          <ul className="flex flex-col justify-between items-start gap-3 mt-5">
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer flex justify-between items-center gap-2">
              <FaFacebook className="text-orange-600" />
              Facebook
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer flex justify-between items-center gap-2">
              <AiFillInstagram className="text-orange-600" />
              Instagram
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer flex justify-between items-center gap-2">
              <FaLinkedin className="text-orange-600" />
              Linkedin
            </li>
            <li className="text-gray-300 hover:text-orange-600 cursor-pointer flex justify-between items-center gap-2">
              <FaTwitter className="text-orange-600" />
              Twitter
            </li>
          </ul>
        </div>
        {/* fourth column ends here */}
      </div>
      <hr className="w-full border border-gray-800" />
      {/* bottom footer starts here */}
      <div id="last" className="flex justify-between items-center gap-2">
        <p className="text-gray-300 text-center">
          Copyright 2026, NIRVORA, All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
