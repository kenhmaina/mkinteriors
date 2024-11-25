import React from "react";
import { FaPhone } from "react-icons/fa";

const AdBoard = () => {
  return (
    <div className="hidden md:flex items-center  w-full outline-[1px] outline mt-2 justify-center gap-4 text-center">
      <p>Call Us Now</p>
      {""}
      <nav className="gap-2 flex items-center">
        <FaPhone />
        07 59 283 420
      </nav>
    </div>
  );
};

export default AdBoard;
