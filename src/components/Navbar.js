import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="px-smallScreen items-center sm:px-smallScreen md:px-mediumScreen lg:px-largeScreen flex justify-between py-[4px]">
      <h1 className=" font-bold  ">
        MK <span className=" font-light uppercase"> Interiors</span>
      </h1>
      <nav className=" gap-4 text-[10px] md:flex hidden sm:hidden ">
        <Link to={"/"}>HOME</Link>
        <Link to={"/"}>SERVICES</Link>
        <Link to={"/"}>ABOUT</Link>
        <Link to={"/"}>CONTACT US</Link>
      </nav>
      <FaPhone className=" hidden sm:hidden md:block" />
      <CiMenuBurger
        className=" cursor-pointer md:hidden"
        onClick={() => {
          setIsVisible(true);
        }}
      />
    </div>
  );
};

export default Navbar;
