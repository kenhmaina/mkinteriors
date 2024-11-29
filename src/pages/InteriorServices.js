import React from "react";
import HowItWorks from "../components/HowItWorks";
import OurPromises from "../components/OurPromises";

const InteriorServices = () => {
  return (
    <div>
      <h1 className=" text-3xl text-center sm:text-xl md:text-left   md:mb-2 md:text-5xl sm:mt-2 mt-2 mb-2 sm:mb-4  font-bold md:mt-6">
        FULL SERVICE INTERIOR DESIGN
      </h1>
      <img
        className=" max-h-[80vh] mt-6 object-fit w-full"
        src="https://images.pexels.com/photos/11038196/pexels-photo-11038196.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="#"
      />
      <div className=" py-12">
        <HowItWorks />
      </div>
      <div>
        <OurPromises />
      </div>
    </div>
  );
};

export default InteriorServices;
