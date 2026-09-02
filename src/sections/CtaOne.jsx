import React, { useEffect } from "react";
import ctaimg1 from "../assets/cta1.webp";
import ctaimg2 from "../assets/cta2.webp";
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function CtaOne() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="cta1"
      style={{ backgroundImage: `url(${ctaimg1})` }}
      className="relative w-full lg:h-125 h-auto lg:p-22 p-10 flex flex-col justify-center items-center gap-5 bg-cover bg-center"
    >
      {/* black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* content part */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-5">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="lg:text-5xl text-3xl font-fakhwang font-semibold text-white lg:w-[60%] w-full text-center capitalize"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sunt?
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white lg:w-[50%] w-full text-lg text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ratione illo exercitationem quam explicabo magni natus aliquam, iure
          possimus nihil.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className=" bg-white rounded-full p-4"
        >
          <FaPlay className="text-orange-600 text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default CtaOne;
