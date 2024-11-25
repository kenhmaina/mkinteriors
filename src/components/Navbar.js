import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="px-smallScreen relative items-center sm:px-smallScreen md:px-mediumScreen lg:px-largeScreen flex justify-between py-[4px]">
      <Link to={"/"}>
        <h1 className=" font-bold  ">
          MK <span className=" font-light uppercase"> Interiors</span>
        </h1>
      </Link>
      <nav className=" gap-4 text-[10px] md:flex hidden sm:hidden ">
        <Link to={"/"}>HOME</Link>
        <Link to={"/"}>SERVICES</Link>
        <Link to={"/"}>ABOUT</Link>
        <Link to={"/"}>CONTACT US</Link>
      </nav>
      <FaPhone className=" hidden sm:hidden md:block" />
      {/**/}
      {!isVisible ? (
        <CiMenuBurger
          className=" cursor-pointer md:hidden"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
      ) : (
        ""
      )}
      {isVisible ? (
        <nav className=" w-full absolute bg-white  top-0 left-0 h-[100vh] transition duration-100 flex-col   ease-linear  z-40 flex  ">
          <MdOutlineCancel
            className=" cursor-pointer mt-4 ml-4"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          />
          <div className="gap-4 font-bold text-lg flex flex-col ml-4  z-50 text-black justify-between    ">
            <Link
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              to={"/"}
            >
              HOME
            </Link>
            <Link
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              to={"/services"}
            >
              SERVICES
            </Link>
            <Link
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              to={"/about"}
            >
              ABOUT
            </Link>
            <Link
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              to={"/contact"}
            >
              CONTACT US
            </Link>
          </div>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
