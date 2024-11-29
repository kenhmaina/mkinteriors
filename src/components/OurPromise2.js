import React from "react";
import {
  FaTableCellsColumnLock,
  FaHouseChimneyWindow,
  FaCalendarDay,
} from "react-icons/fa6";
import Button from "./Button";

const OurPromises2 = () => {
  return (
    <div className=" bg-black text-white  outline-[1px] p-2  ">
      <h1 className="  opacity-70 py-2 text-3xl mb-4 text-left sm:text-5xl md:text-left   md:mb-2 md:text-3xl sm:mt-2   sm:mb-4  font-bold md:mt-6">
        Benefits of Full Service Interior Design
      </h1>
      {/** */}
      <div className="  outline-1  flex flex-col sm:flex-col md:flex-row gap-4 py-3">
        <div className=" basis-1/3">
          <FaTableCellsColumnLock className=" font-light " />
          <nav className=" mt-4 ">
            <p className="text-[14px] mt-2   sm:text-[14px] md:text-[14px]   items-center  tracking-wide   font-light">
              Personalized Approach Custom design plans tailored to your unique
              style and preferences.
            </p>
          </nav>
        </div>
        <div className=" basis-1/3">
          <FaCalendarDay className=" font-light text-" />
          <nav className=" mt-4 ">
            <p className="text-[14px] mt-2   sm:text-[14px] md:text-[14px]   items-center  tracking-wide   font-light">
              Expert Guidance Benefit from our extensive industry knowledge and
              expertise.
            </p>
          </nav>
        </div>
        <div className=" basis-1/3">
          <FaHouseChimneyWindow className=" font-light " />
          <nav className=" mt-4 ">
            <p className="text-[14px] mt-2   sm:text-[14px] md:text-[14px]   items-center  tracking-wide   font-light">
              Seamless Experience End-to-end project management for a
              stress-free design journey.
            </p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default OurPromises2;
