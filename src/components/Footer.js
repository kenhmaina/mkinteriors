import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" mb-4 mt-4 outline outline-[1px] col sm:flex-col md:flex md:flex-row items-center">
      <div className=" basis-1/2">
        <h1 className=" px-2 text-center sm:text-center md:text-left text-2xl sm:text-4xl md:text-4xl py-2  font-bold">
          MK INTERIORS
        </h1>
      </div>

      <div className="border py-4 border-t-0   text-[12px]  border-black   font-semibold gap-4 flex flex-col px-2 sm:text-[12px] md:text-[8px] basis-1/2">
        <Link to={"/"}>HOME</Link>
        <Link to={"/services"}>SERVICES</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT US</Link>
      </div>
      <div className=" py-4 border-t-0   text-[12px]  border-black   font-semibold gap-4 flex flex-col px-2 sm:text-[12px] md:text-[8px] basis-1/2">
        <Link to={"/"}>FAQ</Link>
        <Link to={"/services"}>OUR POLICY</Link>
        <Link to={"/about"}>LOCATION</Link>
      </div>
    </div>
  );
};

export default Footer;
