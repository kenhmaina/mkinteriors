import React from "react";
import Button from "../components/Button";

const About = () => {
  return (
    <div>
      <div className=" items-  md:gap-20 justify-between flex sm:flex-col md:flex-row flex-col">
        <h1 className=" opacity-70 mt-6 text-4xl text-left sm:text-5xl md:text-left   md:mb-2 md:text-5xl sm:mt-2  mb-2 sm:mb-4  font-bold md:mt-6">
          About
        </h1>
        <nav className="text-[10px] mt-2 md:mt-20 sm:text-[10px] md:text-[20px] flex font-semibold items-center ">
          <p className=" md:px-8  font-light">
            At MK Interiors we create state of the art home and office decors
            translatinf our clients ideas into stunning pieces of decor.
            <br />
            <br />
            We are a passionate team of designers dedicated to crafting
            personalized interiors that reflect your unique style and vision.
            Whether it's a cozy home, a chic office, or a luxurious commercial
            space, we believe every environment has the potential to inspire.
          </p>
        </nav>
      </div>
      <h1 className=" opacity-70 mt-6 text-4xl text-left sm:text-5xl md:text-left   md:mb-2 md:text-5xl sm:mt-2  mb-2 sm:mb-4  font-bold md:mt-6">
        Why Choose MK Interiors?
      </h1>
      <nav className="text-[10px] mt-2 md:mt-20 sm:text-[10px] md:text-[20px] flex font-semibold items-center ">
        <p className=" md:px-8  font-light">
          We work collaboratively with our clients and partners to find the
          right solution for your customers.
          <br />
          <br />
          We are a passionate team of designers dedicated to crafting
          personalized interiors that reflect your unique style and vision.
          Whether it's a cozy home, a chic office, or a luxurious commercial
          space, we believe every environment has the potential to inspire.
        </p>
      </nav>
    </div>
  );
};

export default About;
