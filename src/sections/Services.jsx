import React, { useEffect } from "react";
import serviceimg1 from "../assets/service1.webp";
import serviceimg2 from "../assets/service2.webp";
import serviceimg3 from "../assets/service3.webp";
import serviceimg4 from "../assets/service4.webp";
import serviceimg5 from "../assets/service5.webp";
import serviceimg6 from "../assets/service6.webp";
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="services"
      className="w-full bg-gray-200 lg:px-22 px-5 lg:py-22 p-20 flex flex-col justify-between lg:items-center items-start gap-5"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="lg:text-5xl text-3xl font-fakhwang font-semibold"
      >
        Discover your next dream destination
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-gray-500 lg:w-[60%] w-full lg:text-center text-left"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        cum.
      </p>
      <hr
        data-aos="zoom-in"
        data-aos-delay="300"
        className="lg:w-[70%] w-[20%] border-2 border-orange-600"
      />

      {/* service grid starts here */}
      {/* first row starts here */}
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-5"
      >
        {/* left one starts here */}
        <div
          id="left"
          className="lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5"
        >
          <div
            style={{ backgroundImage: `url(${serviceimg1})` }}
            className="relative bg-cover bg-center w-full h-88 rounded-md p-8 flex justify-center items-end"
          >
            {/* gradirnt overlay */}
            <div className="absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10"></div>
            {/* gradirnt end */}
            <div className="relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3">
              <div className="lg:w-[80%] w-full">
                <h1 className="text-white text-2xl font-semibold">
                  Padar Island
                </h1>
                <p className="text-white text-lg">Indonesia</p>
              </div>
              <div className="w-[20%] bg-white rounded-full flex justify-center items-center p-3">
                <FaPlay className="lg:text-2xl text-xl" />
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${serviceimg2})` }}
            className="relative bg-cover bg-center w-full h-88 rounded-md p-8 flex justify-center items-end"
          >
            {/* gradirnt overlay */}
            <div className="absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10"></div>
            {/* gradirnt end */}
            <div className="relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3">
              <div className="lg:w-[80%] w-full">
                <h1 className="text-white text-2xl font-semibold">
                  Padar Island
                </h1>
                <p className="text-white text-lg">Indonesia</p>
              </div>
              <div className="w-[20%] bg-white rounded-full flex justify-center items-center p-3">
                <FaPlay className="lg:text-2xl text-xl" />
              </div>
            </div>
          </div>
          {/* left one ends here */}
        </div>

        {/* right one starts here */}
        <div id="right" className="lg:w-[50%] w-full">
          <div
            style={{ backgroundImage: `url(${serviceimg3})` }}
            className="relative bg-cover bg-center w-full h-88 rounded-md p-8 flex justify-center items-end"
          >
            {/* gradirnt overlay */}
            <div className="absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10"></div>
            {/* gradirnt end */}
            <div className="relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3">
              <div className="lg:w-[80%] w-full">
                <h1 className="text-white text-2xl font-semibold">
                  Padar Island
                </h1>
                <p className="text-white text-lg">Indonesia</p>
              </div>
              <div className="lg:w-[10%] lg-w-[20%] bg-white rounded-full flex justify-center items-center p-3">
                <FaPlay className="lg:text-2xl text-xl" />
              </div>
            </div>
          </div>
        </div>
        {/* right one ends here */}
      </div>
      {/* first row ends here */}

      {/* second row starts here */}
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full flex lg:flex-row flex-col justify-between items-center gap-5 mt-5"
      >
        {/* left one starts here */}
        <div
          id="left"
          className="lg:w-[50%] w-full flex lg:flex-row flex-col justify-between items-center gap-5"
        >
          <div
            style={{ backgroundImage: `url(${serviceimg4})` }}
            className="relative bg-cover bg-center w-full h-88 rounded-md p-8 flex justify-center items-end"
          >
            {/* gradirnt overlay */}
            <div className="absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10"></div>
            {/* gradirnt end */}
            <div className="relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3">
              <div className="lg:w-[80%] w-full">
                <h1 className="text-white text-2xl font-semibold">
                  Padar Island
                </h1>
                <p className="text-white text-lg">Indonesia</p>
              </div>
              <div className="w-[20%] bg-white rounded-full flex justify-center items-center p-3">
                <FaPlay className="lg:text-2xl text-xl" />
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${serviceimg5})` }}
            className="relative bg-cover bg-center w-full h-88 rounded-md p-8 flex justify-center items-end"
          >
            {/* gradirnt overlay */}
            <div className="absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10"></div>
            {/* gradirnt end */}
            <div className="relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3">
              <div className="lg:w-[80%] w-full">
                <h1 className="text-white text-2xl font-semibold">
                  Padar Island
                </h1>
                <p className="text-white text-lg">Indonesia</p>
              </div>
              <div className="w-[20%] bg-white rounded-full flex justify-center items-center p-3">
                <FaPlay className="lg:text-2xl text-xl" />
              </div>
            </div>
          </div>
          {/* left one ends here */}
        </div>

        {/* right one starts here */}
        <div id="right" className="lg:w-[50%] w-full">
          <div
            style={{ backgroundImage: `url(${serviceimg6})` }}
            className="relative bg-cover bg-center w-full h-88 rounded-md p-8 flex justify-center items-end"
          >
            {/* gradirnt overlay */}
            <div className="absolute rounded-md inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10"></div>
            {/* gradirnt end */}
            <div className="relative z-10 w-full flex lg:flex-row flex-col justify-between items-start lg:gap-1 gap-3">
              <div className="lg:w-[80%] w-full">
                <h1 className="text-white text-2xl font-semibold">
                  Padar Island
                </h1>
                <p className="text-white text-lg">Indonesia</p>
              </div>
              <div className="lg:w-[10%] lg-w-[20%] bg-white rounded-full flex justify-center items-center p-3">
                <FaPlay className="lg:text-2xl text-xl" />
              </div>
            </div>
          </div>
        </div>
        {/* right one ends here */}
      </div>
      {/* second row ends here */}
      {/* service grid ends here */}
    </div>
  );
}

export default Services;
