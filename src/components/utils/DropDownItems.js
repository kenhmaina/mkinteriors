import React, { useState } from "react";
import { FaSketch } from "react-icons/fa";

function DropDownItems({ heading, text }) {
  const [isDisplay, setIsDisplay] = useState(false);

  const displayDescription = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div className=" px-4 py-1 text-[10px]   shadow-lg drop-shadow   flex gap-2 flex-col">
      <nav className=" flex justify-between">
        <p className=" font-semibold">{heading}</p>
        <p
          onClick={displayDescription}
          className=" text-[10px] sm:text-[10px] md:text-lg cursor-pointer"
        >
          {isDisplay ? "-" : "+"}
        </p>
      </nav>

      <nav className="text-[10px] sm:text-[10px] md:text-[10px] flex items-center ">
        {isDisplay && <p className=" font-light">{text}</p>}
      </nav>
    </div>
  );
}

export default DropDownItems;
