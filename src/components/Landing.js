import React from "react";
import LandingImg from "../assets/images/landing-page.jpg";
import Button from "./Button";

const Landing = () => {
  return (
    <div className=" sm:flex-col  flex-col-reverse  flex md:flex-row">
      {/* left div */}
      <div className="md:mt-64 mt-4   basis-1/2">
        <div className=" flex flex-col">
          <h1 className="text-5xl  md:text-left  sm:text-left text-left sm:text-5xl md:text-5xl font-bold ">
            <span className="  sm:text-5xl text-5xl   font-bold italic">I</span>
            NTERIOR DESIGN{" "}
          </h1>
          <h1 className=" text-4xl text-left sm:text-5xl md:text-left   md:mb-2 md:text-5xl sm:mt-2 mt-2 mb-2 sm:mb-4  font-bold md:mt-6">
            REIMAGINED
          </h1>
          <Button
            className={`  hover:text-black ml-[67vw] w-fit sm:ml-[60vw] md:ml-0 hover:bg-white outline gap-4 px-8 outline-[1px]   bg-black   text-white cursor-pointer transition-all ease-in-out font-light `}
            text={"EPLORE"}
          />
        </div>
      </div>
      <img
        className=" sm:h-[60vh] h-[60vh] outline-[2px] outline md:h-[85vh]  object-cover md:max-w-[50%] md:basis-1/2"
        src={LandingImg}
        alt="#"
      />
    </div>
  );
};

export default Landing;
