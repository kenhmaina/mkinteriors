import React from "react";
import { FaPhone } from "react-icons/fa";
import Button from "./Button";

const Email = () => {
  return (
    <div className=" mt-4 relative bg-blueAccent  md:flex items-center py-2 w-full text-white text-[10px]  ">
      <div className=" px-2 flex flex-col">
        <p className=" text-lg font-normal sm:text-lg md:text-3xl">
          Call Us Now
        </p>
        {""}
        <p className="font-light  text-[10px md:text-xs">
          Subscribe to our newsletter to receive special offers and first look
          at new products.
        </p>
      </div>
      <div className="px-2  md:right-0 mt-2 md:mt-0 md:ml-[10vw]  flex flex-col md:flex-row md:items-center  text-center">
        <input
          className=" border-none mb-1 md:outline md:outline-[1px] outline-none w-full sm:w-full md:w-full placeholder:text-white placeholder:font-extralight bg-blueAccent md:outline-[1-px]  "
          type="text"
          placeholder="Email Address"
        />
        <hr className=" " />

        <Button
          className={"mt-2 text-xl font-bold outline outline-[1px] px-2"}
          text={"SUBSRIBE"}
        />
      </div>
    </div>
  );
};

export default Email;
